import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useAutoencoderMetrics } from "@/hooks/use-fraud-data";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ── helpers ──────────────────────────────────────────────────────────────────

const ARCH_LAYERS = [
  { label: "Input", dim: 30, note: "30 PCA + Amount + Time features" },
  { label: "Dense (relu)", dim: 14, note: "Encoder — compress" },
  { label: "Dense (relu)", dim: 7, note: "Bottleneck — latent space" },
  { label: "Dense (relu)", dim: 14, note: "Decoder — expand" },
  { label: "Dense (sigmoid)", dim: 30, note: "Reconstructed output" },
];

const METRICS = [
  {
    label: "ROC-AUC",
    value: "0.9534",
    color: "text-primary",
    bg: "bg-primary/10 border border-primary/30",
  },
  {
    label: "Precision",
    value: "82.1%",
    color: "text-[hsl(var(--chart-2))]",
    bg: "bg-[hsl(var(--chart-2))]/10 border border-[hsl(var(--chart-2))]/30",
  },
  {
    label: "Recall",
    value: "74.5%",
    color: "text-[hsl(var(--chart-4))]",
    bg: "bg-[hsl(var(--chart-4))]/10 border border-[hsl(var(--chart-4))]/30",
  },
  {
    label: "F1-Score",
    value: "78.1%",
    color: "text-[hsl(var(--chart-5))]",
    bg: "bg-[hsl(var(--chart-5))]/10 border border-[hsl(var(--chart-5))]/30",
  },
];

const PROS = [
  "No labeled fraud data required during training",
  "Can detect novel, previously unseen fraud patterns",
  "Adapts naturally to evolving transaction behaviour",
  "Model size is small — fast inference at scale",
];

const CONS = [
  "Lower precision (82.1%) vs XGBoost (86.5%)",
  "Threshold selection is sensitive to distribution shift",
  "More complex to explain to regulators than tree models",
  "Requires retraining when legitimate patterns shift significantly",
];

// ── Reconstruction error distribution data ───────────────────────────────────
// Build 40-bin histogram from bucket values for the AreaChart
const LEGIT_DIST = [
  { bin: "0.000", legit: 320, fraud: 0 },
  { bin: "0.003", legit: 580, fraud: 0 },
  { bin: "0.006", legit: 940, fraud: 0 },
  { bin: "0.009", legit: 1420, fraud: 0 },
  { bin: "0.012", legit: 1780, fraud: 0 },
  { bin: "0.015", legit: 1940, fraud: 0 },
  { bin: "0.018", legit: 1820, fraud: 1 },
  { bin: "0.021", legit: 1560, fraud: 2 },
  { bin: "0.023", legit: 720, fraud: 3 },
  { bin: "0.026", legit: 320, fraud: 5 },
  { bin: "0.030", legit: 140, fraud: 8 },
  { bin: "0.035", legit: 60, fraud: 12 },
  { bin: "0.040", legit: 24, fraud: 18 },
  { bin: "0.050", legit: 10, fraud: 28 },
  { bin: "0.065", legit: 4, fraud: 38 },
  { bin: "0.080", legit: 2, fraud: 48 },
  { bin: "0.100", legit: 1, fraud: 56 },
  { bin: "0.130", legit: 0, fraud: 42 },
  { bin: "0.160", legit: 0, fraud: 28 },
  { bin: "0.200", legit: 0, fraud: 14 },
];

const tooltipStyle = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "6px",
  color: "hsl(var(--foreground))",
  fontSize: 12,
};

// ── component ─────────────────────────────────────────────────────────────────

export default function GenerativeAiPage() {
  const { data: ae, isLoading } = useAutoencoderMetrics();

  if (isLoading) {
    return (
      <div className="space-y-6" data-ocid="generative_ai.loading_state">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-64" />
        ))}
      </div>
    );
  }

  const lossData = ae?.trainLoss.map((v, i) => ({
    epoch: i + 1,
    "Train Loss": +v.toFixed(4),
    "Val Loss": +(ae.valLoss[i] ?? v).toFixed(4),
  }));

  const threshold = ae?.threshold ?? 0.0234;

  return (
    <div className="space-y-6" data-ocid="generative_ai.page">
      {/* ── Page header ── */}
      <div data-ocid="generative_ai.header">
        <h1 className="text-2xl font-display font-bold tracking-tight">
          Generative AI — Autoencoder Anomaly Detection
        </h1>
        <p className="text-muted-foreground mt-1 text-sm leading-relaxed max-w-3xl">
          An unsupervised deep-learning approach that learns the normal
          distribution of legitimate transactions. Any input that deviates
          substantially from this learned distribution is flagged as a potential
          fraud — without ever seeing a single labeled fraud example during
          training.
        </p>
      </div>

      {/* ── Performance metrics row ── */}
      <div
        className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        data-ocid="generative_ai.metrics_section"
      >
        {METRICS.map((m, i) => (
          <Card
            key={m.label}
            data-ocid={`generative_ai.metric.${i + 1}`}
            className={`shadow-card ${m.bg}`}
          >
            <CardContent className="pt-5 pb-4 px-5 text-center">
              <p className={`text-3xl font-display font-bold ${m.color}`}>
                {m.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wide">
                {m.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ── Autoencoder Explanation ── */}
      <Card
        data-ocid="generative_ai.explanation_card"
        className="shadow-card border-l-4 border-l-primary"
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold font-display flex items-center gap-2">
            <span className="h-5 w-5 rounded bg-primary/20 text-primary text-[10px] font-bold flex items-center justify-center">
              AE
            </span>
            How an Autoencoder Detects Fraud
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                step: "1",
                title: "Train on Legitimate Only",
                desc: "The autoencoder is trained exclusively on legitimate transactions using MSE loss. It learns a compressed latent representation of normal spending behaviour.",
              },
              {
                step: "2",
                title: "Measure Reconstruction Error",
                desc: "At inference, every transaction is encoded then decoded. Legitimate transactions reconstruct well (low MSE). Fraud patterns are unfamiliar — the network fails to reconstruct them accurately, producing high MSE.",
              },
              {
                step: "3",
                title: "Threshold & Flag",
                desc: "The 95th-percentile of reconstruction error on a held-out legitimate set becomes the decision boundary. Transactions with MSE above 0.0234 are flagged as likely fraud.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-3">
                <div className="h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {item.step}
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Architecture Overview ── */}
      <Card data-ocid="generative_ai.architecture_card" className="shadow-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold font-display">
            Architecture Overview
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            Symmetric encoder-decoder. Bottleneck forces learning a compact,
            normal-pattern representation.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center gap-0 font-mono text-xs select-none">
            {ARCH_LAYERS.map((layer, idx) => {
              const isBottleneck = idx === 2;
              const isFirst = idx === 0;
              const isLast = idx === ARCH_LAYERS.length - 1;
              const widths = [200, 140, 100, 140, 200];
              const w = widths[idx];
              return (
                <div
                  key={layer.label + String(layer.dim)}
                  className="flex flex-col items-center"
                >
                  <div
                    className={`flex items-center justify-center rounded-md border text-center px-3 py-2 transition-colors ${
                      isFirst || isLast
                        ? "bg-muted/40 border-border text-muted-foreground"
                        : isBottleneck
                          ? "bg-primary/20 border-primary/50 text-primary font-bold"
                          : "bg-card border-border text-foreground"
                    }`}
                    style={{ width: w }}
                  >
                    <div>
                      <span className="block font-semibold">{layer.label}</span>
                      <span className="block text-[10px] opacity-70">
                        dim={layer.dim}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-0.5 text-muted-foreground/50 text-[10px] py-1">
                    {idx < ARCH_LAYERS.length - 1 && (
                      <>
                        <span className="block h-3 w-px bg-border" />
                        <span className="text-[8px] leading-none">▼</span>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-muted-foreground font-mono bg-muted/30 rounded-md px-4 py-2 inline-block">
              Input(30) → Dense(14, relu) → Dense(7, relu) → Dense(14, relu) →
              Output(30, sigmoid)
            </p>
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Optimizer", val: "Adam" },
              { label: "Loss", val: "MSE" },
              { label: "Epochs", val: "30" },
              { label: "Batch Size", val: "256" },
            ].map((kv) => (
              <div
                key={kv.label}
                className="text-center bg-muted/30 rounded-md py-2 px-3"
              >
                <p className="text-xs font-semibold text-foreground">
                  {kv.val}
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  {kv.label}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Training Progress ── */}
      <Card
        data-ocid="generative_ai.training_chart_card"
        className="shadow-card"
      >
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <CardTitle className="text-sm font-semibold font-display">
                Training Progress
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                MSE loss over 30 epochs — both curves converge rapidly
              </p>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="font-mono text-xs">
                Train final: 0.0180
              </Badge>
              <Badge variant="outline" className="font-mono text-xs">
                Val final: 0.0280
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart
              data={lossData}
              margin={{ top: 5, right: 20, left: 0, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="epoch"
                label={{
                  value: "Epoch",
                  position: "insideBottom",
                  offset: -10,
                  fontSize: 11,
                  fill: "hsl(var(--muted-foreground))",
                }}
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                tickFormatter={(v: number) => v.toFixed(3)}
                width={50}
              />
              <Tooltip
                contentStyle={tooltipStyle}
                formatter={(v: number) => [v.toFixed(4)]}
              />
              <Legend wrapperStyle={{ fontSize: 12, paddingTop: 12 }} />
              <Line
                type="monotone"
                dataKey="Train Loss"
                stroke="hsl(var(--chart-3))"
                strokeWidth={2.5}
                dot={false}
                activeDot={{ r: 4 }}
              />
              <Line
                type="monotone"
                dataKey="Val Loss"
                stroke="hsl(var(--chart-4))"
                strokeWidth={2}
                strokeDasharray="5 4"
                dot={false}
                activeDot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* ── Reconstruction Error Distribution ── */}
      <Card data-ocid="generative_ai.error_dist_card" className="shadow-card">
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <CardTitle className="text-sm font-semibold font-display">
                Reconstruction Error Distribution
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                Overlapping MSE distributions — fraud transactions cluster at
                higher error values
              </p>
            </div>
            <Badge variant="destructive" className="font-mono text-xs">
              Threshold: {threshold.toFixed(4)}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart
              data={LEGIT_DIST}
              margin={{ top: 5, right: 20, left: 0, bottom: 20 }}
            >
              <defs>
                <linearGradient id="legitGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-2))"
                    stopOpacity={0.5}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-2))"
                    stopOpacity={0.05}
                  />
                </linearGradient>
                <linearGradient id="fraudGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0.6}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0.05}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="bin"
                label={{
                  value: "Reconstruction Error (MSE)",
                  position: "insideBottom",
                  offset: -10,
                  fontSize: 11,
                  fill: "hsl(var(--muted-foreground))",
                }}
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                interval={3}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                label={{
                  value: "Count",
                  angle: -90,
                  position: "insideLeft",
                  offset: 10,
                  fontSize: 11,
                  fill: "hsl(var(--muted-foreground))",
                }}
                width={52}
              />
              <Tooltip contentStyle={tooltipStyle} />
              <Legend wrapperStyle={{ fontSize: 12, paddingTop: 12 }} />
              <ReferenceLine
                x="0.023"
                stroke="hsl(var(--chart-5))"
                strokeDasharray="6 3"
                strokeWidth={2}
                label={{
                  value: "Threshold 0.0234",
                  fill: "hsl(var(--chart-5))",
                  fontSize: 11,
                  position: "top",
                }}
              />
              <Area
                type="monotone"
                dataKey="legit"
                name="Legitimate"
                stroke="hsl(var(--chart-2))"
                strokeWidth={2}
                fill="url(#legitGrad)"
              />
              <Area
                type="monotone"
                dataKey="fraud"
                name="Fraud"
                stroke="hsl(var(--chart-1))"
                strokeWidth={2}
                fill="url(#fraudGrad)"
              />
            </AreaChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
            Legitimate transactions concentrate near zero MSE (green).
            Fraudulent transactions show a long right tail. The dashed threshold
            at{" "}
            <span className="font-mono font-semibold text-foreground">
              0.0234
            </span>{" "}
            separates the two populations with high confidence.
          </p>
        </CardContent>
      </Card>

      {/* ── Threshold card ── */}
      <Card data-ocid="generative_ai.threshold_card" className="shadow-card">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold font-display">
            Anomaly Detection Threshold
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="flex flex-col items-center justify-center rounded-xl border border-[hsl(var(--chart-5))]/40 bg-[hsl(var(--chart-5))]/10 px-10 py-6 shrink-0">
              <p className="text-4xl font-display font-bold text-[hsl(var(--chart-5))]">
                0.0234
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                MSE Threshold
              </p>
            </div>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                The threshold of{" "}
                <span className="font-mono font-semibold text-foreground">
                  0.0234
                </span>{" "}
                is the{" "}
                <strong className="text-foreground">95th percentile</strong> of
                reconstruction errors computed on the held-out legitimate
                transaction validation set.
              </p>
              <p>
                Any new transaction whose MSE exceeds this value is classified
                as anomalous (potential fraud). Setting the threshold at the
                95th percentile means approximately{" "}
                <strong className="text-foreground">
                  5% of legitimate transactions
                </strong>{" "}
                will produce false positives — an acceptable trade-off given the
                cost asymmetry between missing fraud vs flagging a real
                transaction.
              </p>
              <p>
                The threshold can be tuned: a lower value increases recall
                (catches more fraud) at the cost of precision (more false
                alarms). A higher value reduces false positives but risks
                missing subtle fraudulent patterns.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Comparison vs Traditional ML ── */}
      <Card
        data-ocid="generative_ai.comparison_card"
        className="shadow-card bg-muted/20"
      >
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-semibold font-display">
            Autoencoder vs Traditional Machine Learning
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            When to use generative AI over supervised ML for fraud detection
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pros */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-[hsl(var(--chart-2))]" />
                <p className="text-sm font-semibold text-[hsl(var(--chart-2))]">
                  Advantages
                </p>
              </div>
              <ul className="space-y-2">
                {PROS.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-0.5 text-[hsl(var(--chart-2))] shrink-0">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="h-2 w-2 rounded-full bg-[hsl(var(--chart-1))]" />
                <p className="text-sm font-semibold text-[hsl(var(--chart-1))]">
                  Limitations
                </p>
              </div>
              <ul className="space-y-2">
                {CONS.map((c) => (
                  <li
                    key={c}
                    className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-0.5 text-[hsl(var(--chart-1))] shrink-0">
                      ✗
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Separator className="my-5" />

          {/* Quick metric comparison table */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              Quick Comparison
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left pb-2 text-muted-foreground font-medium pr-4">
                      Approach
                    </th>
                    <th className="text-right pb-2 text-muted-foreground font-medium pr-4">
                      ROC-AUC
                    </th>
                    <th className="text-right pb-2 text-muted-foreground font-medium pr-4">
                      Precision
                    </th>
                    <th className="text-right pb-2 text-muted-foreground font-medium pr-4">
                      Recall
                    </th>
                    <th className="text-right pb-2 text-muted-foreground font-medium">
                      Labeled Data?
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {[
                    {
                      name: "Autoencoder (Generative AI)",
                      auc: "0.9534",
                      prec: "82.1%",
                      recall: "74.5%",
                      labeled: "No",
                      highlight: true,
                    },
                    {
                      name: "XGBoost (Best Supervised)",
                      auc: "0.9910",
                      prec: "86.5%",
                      recall: "85.7%",
                      labeled: "Yes",
                      highlight: false,
                    },
                    {
                      name: "Random Forest",
                      auc: "0.9850",
                      prec: "66.4%",
                      recall: "92.6%",
                      labeled: "Yes",
                      highlight: false,
                    },
                    {
                      name: "Logistic Regression",
                      auc: "0.9740",
                      prec: "85.6%",
                      recall: "92.3%",
                      labeled: "Yes",
                      highlight: false,
                    },
                  ].map((row) => (
                    <tr
                      key={row.name}
                      className={row.highlight ? "bg-primary/5" : ""}
                    >
                      <td className="py-2 pr-4 font-medium text-foreground">
                        {row.name}
                        {row.highlight && (
                          <Badge
                            className="ml-2 text-[9px] py-0"
                            variant="secondary"
                          >
                            This Model
                          </Badge>
                        )}
                      </td>
                      <td className="py-2 pr-4 text-right font-mono text-foreground">
                        {row.auc}
                      </td>
                      <td className="py-2 pr-4 text-right font-mono text-foreground">
                        {row.prec}
                      </td>
                      <td className="py-2 pr-4 text-right font-mono text-foreground">
                        {row.recall}
                      </td>
                      <td
                        className={`py-2 text-right font-semibold ${row.labeled === "No" ? "text-[hsl(var(--chart-2))]" : "text-muted-foreground"}`}
                      >
                        {row.labeled}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
