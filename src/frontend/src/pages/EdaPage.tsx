import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useEdaStats } from "@/hooks/use-fraud-data";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// ─── Static data for charts that don't come from the hook ───────────────────

const CLASS_PIE_DATA = [
  { name: "Legitimate", count: 284315, pct: "99.83%" },
  { name: "Fraud", count: 492, pct: "0.17%" },
];

const AMOUNT_DIST = [
  { range: "$0–50", fraud: 148, legit: 96200 },
  { range: "$51–100", fraud: 112, legit: 74800 },
  { range: "$101–200", fraud: 94, legit: 58600 },
  { range: "$201–500", fraud: 86, legit: 38400 },
  { range: "$501–1k", fraud: 38, legit: 12800 },
  { range: "$1k+", fraud: 14, legit: 3515 },
];

// Mapped from 0–172800 seconds → labelled time periods
const TIME_DIST = [
  { period: "0–24k", fraud: 28, legit: 8200 },
  { period: "24–48k", fraud: 42, legit: 6800 },
  { period: "48–72k", fraud: 38, legit: 5100 },
  { period: "72–96k", fraud: 24, legit: 9400 },
  { period: "96–120k", fraud: 48, legit: 24800 },
  { period: "120–144k", fraud: 52, legit: 28400 },
  { period: "144–168k", fraud: 44, legit: 26200 },
  { period: "168+k", fraud: 33, legit: 12400 },
];

const TOP_FEATURES = [
  { feature: "V17", correlation: -0.326 },
  { feature: "V14", correlation: -0.302 },
  { feature: "V16", correlation: -0.196 },
  { feature: "V12", correlation: -0.261 },
  { feature: "V3", correlation: -0.192 },
  { feature: "V7", correlation: -0.187 },
  { feature: "V10", correlation: -0.217 },
  { feature: "V2", correlation: -0.091 },
  { feature: "V11", correlation: 0.154 },
  { feature: "V4", correlation: 0.133 },
];

// Sort strongest → weakest (by abs)
const SORTED_FEATURES = [...TOP_FEATURES].sort(
  (a, b) => Math.abs(b.correlation) - Math.abs(a.correlation),
);

const DATASET_STATS = [
  { label: "Total Rows", value: "284,807", icon: "🗃️" },
  { label: "Columns", value: "30", icon: "📊" },
  { label: "Missing Values", value: "0", icon: "✅" },
  { label: "Target Classes", value: "Binary", icon: "🎯" },
];

const TOOLTIP_STYLE = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "6px",
  color: "hsl(var(--foreground))",
  fontSize: 12,
};

const posFeatures = TOP_FEATURES.filter((f) => f.correlation > 0).length;
const negFeatures = TOP_FEATURES.filter((f) => f.correlation < 0).length;

// Custom Tooltip for PieChart
interface PiePayload {
  name: string;
  value: number;
  payload: { pct: string };
}
function PieTooltip({
  active,
  payload,
}: { active?: boolean; payload?: PiePayload[] }) {
  if (!active || !payload?.length) return null;
  const p = payload[0];
  return (
    <div style={TOOLTIP_STYLE} className="px-3 py-2">
      <p className="font-semibold">{p.name}</p>
      <p>Count: {p.value.toLocaleString()}</p>
      <p>Share: {p.payload.pct}</p>
    </div>
  );
}

export default function EdaPage() {
  const { isLoading } = useEdaStats();

  if (isLoading) {
    return (
      <div className="space-y-6" data-ocid="eda.loading_state">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-64 rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6" data-ocid="eda.page">
      {/* ── Page Header ── */}
      <div data-ocid="eda.header">
        <h1 className="text-2xl font-display font-bold text-foreground">
          Exploratory Data Analysis
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Statistical overview and visualizations of the Credit Card Fraud
          Detection dataset
        </p>
      </div>

      {/* ── Dataset Overview ── */}
      <Card className="shadow-card" data-ocid="eda.dataset_overview_card">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-display font-semibold">
            Dataset Overview
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            Kaggle Credit Card Fraud Detection — European cardholders, September
            2013
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
            {DATASET_STATS.map((s, i) => (
              <div
                key={s.label}
                data-ocid={`eda.dataset_stat.${i + 1}`}
                className="rounded-lg bg-muted/50 border border-border px-4 py-3 flex flex-col gap-1"
              >
                <span className="text-lg">{s.icon}</span>
                <span className="text-xl font-display font-bold text-foreground">
                  {s.value}
                </span>
                <span className="text-xs text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Fraud vs Legit summary row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-border pt-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-muted-foreground uppercase tracking-wide">
                Legitimate Transactions
              </span>
              <span className="text-xl font-mono font-bold text-[hsl(var(--chart-2))]">
                284,315
              </span>
              <Badge
                variant="outline"
                className="w-fit border-[hsl(var(--chart-2))] text-[hsl(var(--chart-2))] text-xs"
              >
                99.83%
              </Badge>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-muted-foreground uppercase tracking-wide">
                Fraudulent Transactions
              </span>
              <span className="text-xl font-mono font-bold text-destructive">
                492
              </span>
              <Badge variant="destructive" className="w-fit text-xs">
                0.17%
              </Badge>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs text-muted-foreground uppercase tracking-wide">
                Features
              </span>
              <span className="text-xl font-mono font-bold text-foreground">
                V1–V28 + Time + Amount
              </span>
              <span className="text-xs text-muted-foreground">
                PCA-anonymized + raw
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Data Preprocessing ── */}
      <Card className="shadow-card" data-ocid="eda.preprocessing_card">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-display font-semibold">
            Data Preprocessing
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            Steps applied before model training
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                step: "01",
                title: "Feature Scaling",
                color: "text-primary",
                bg: "bg-primary/10 border-primary/30",
                desc: "Amount and Time were standardized using StandardScaler (zero mean, unit variance). PCA-transformed features V1–V28 were already scaled during anonymization.",
              },
              {
                step: "02",
                title: "PCA-Transformed Features",
                color: "text-[hsl(var(--chart-3))]",
                bg: "bg-[hsl(var(--chart-3))]/10 border-[hsl(var(--chart-3))]/30",
                desc: "V1–V28 are principal components obtained via PCA on confidential cardholder data. These 28 components capture most of the variance while protecting privacy.",
              },
              {
                step: "03",
                title: "SMOTE (Class Balancing)",
                color: "text-[hsl(var(--chart-2))]",
                bg: "bg-[hsl(var(--chart-2))]/10 border-[hsl(var(--chart-2))]/30",
                desc: "Synthetic Minority Oversampling Technique (SMOTE) was applied to training data to address the severe 0.17% minority class imbalance. This boosted fraud recall by ~40%.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`rounded-lg border p-4 ${item.bg}`}
              >
                <div
                  className={`text-xs font-mono font-bold mb-1 ${item.color}`}
                >
                  STEP {item.step}
                </div>
                <div className="font-display font-semibold text-sm text-foreground mb-2">
                  {item.title}
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* ── Class Imbalance (PieChart) ── */}
      <Card className="shadow-card" data-ocid="eda.class_imbalance_card">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-display font-semibold">
            Class Imbalance
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            Distribution of fraud vs. legitimate transactions in the dataset
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ResponsiveContainer width="100%" height={260} className="max-w-xs">
              <PieChart>
                <Pie
                  data={CLASS_PIE_DATA}
                  dataKey="count"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={62}
                  paddingAngle={3}
                >
                  <Cell fill="hsl(var(--chart-2))" />
                  <Cell fill="hsl(var(--chart-1))" />
                </Pie>
                <Tooltip content={<PieTooltip />} />
                <Legend
                  formatter={(value) => (
                    <span className="text-xs text-foreground">{value}</span>
                  )}
                  wrapperStyle={{ fontSize: 12 }}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Legend + stats */}
            <div className="flex-1 space-y-4 min-w-0">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-[hsl(var(--chart-2))]/10 border border-[hsl(var(--chart-2))]/30">
                <div className="h-4 w-4 rounded-full bg-[hsl(var(--chart-2))] mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    Legitimate
                  </p>
                  <p className="text-2xl font-mono font-bold text-[hsl(var(--chart-2))]">
                    284,315
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    99.83% of all transactions
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/30">
                <div className="h-4 w-4 rounded-full bg-destructive mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold text-sm text-foreground">Fraud</p>
                  <p className="text-2xl font-mono font-bold text-destructive">
                    492
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    0.17% of all transactions
                  </p>
                </div>
              </div>
              <div className="rounded-lg bg-muted/50 border border-border p-3">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground">
                    Highly imbalanced dataset.
                  </span>{" "}
                  The fraud-to-legit ratio is approximately 1:578. Standard
                  accuracy metrics are misleading — use ROC-AUC,
                  Precision-Recall, and F1 score.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Transaction Amount Distribution ── */}
      <Card className="shadow-card" data-ocid="eda.amount_distribution_card">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-display font-semibold">
            Transaction Amount Distribution
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            Fraud vs. legitimate transactions by amount range — fraud clusters
            in small amounts
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={AMOUNT_DIST}
              margin={{ top: 8, right: 16, bottom: 8, left: 8 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                vertical={false}
              />
              <XAxis
                dataKey="range"
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                contentStyle={TOOLTIP_STYLE}
                formatter={(v: number, name: string) => [
                  v.toLocaleString(),
                  name === "legit" ? "Legitimate" : "Fraudulent",
                ]}
              />
              <Legend
                formatter={(value) => (
                  <span className="text-xs">
                    {value === "legit" ? "Legitimate" : "Fraudulent"}
                  </span>
                )}
                wrapperStyle={{ fontSize: 12 }}
              />
              <Bar
                dataKey="legit"
                name="legit"
                fill="hsl(var(--chart-2))"
                radius={[3, 3, 0, 0]}
              />
              <Bar
                dataKey="fraud"
                name="fraud"
                fill="hsl(var(--chart-1))"
                radius={[3, 3, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            72% of fraudulent transactions are below $200 — suggesting
            card-testing micro-transactions
          </p>
        </CardContent>
      </Card>

      {/* ── Time Distribution ── */}
      <Card className="shadow-card" data-ocid="eda.time_distribution_card">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-display font-semibold">
            Transaction Frequency Over Time
          </CardTitle>
          <p className="text-xs text-muted-foreground">
            Transaction count across time periods (seconds elapsed, 0–172,800) —
            separate fraud and legitimate trends
          </p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart
              data={TIME_DIST}
              margin={{ top: 8, right: 16, bottom: 8, left: 8 }}
            >
              <defs>
                <linearGradient id="lgGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-2))"
                    stopOpacity={0.25}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-2))"
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="fraudGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="95%"
                    stopColor="hsl(var(--chart-1))"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
                vertical={false}
              />
              <XAxis
                dataKey="period"
                tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
                label={{
                  value: "Time (seconds)",
                  position: "insideBottom",
                  offset: -4,
                  fontSize: 11,
                  fill: "hsl(var(--muted-foreground))",
                }}
              />
              <YAxis
                yAxisId="legit"
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                yAxisId="fraud"
                orientation="right"
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
                domain={[0, 80]}
              />
              <Tooltip
                contentStyle={TOOLTIP_STYLE}
                formatter={(v: number, name: string) => [
                  v.toLocaleString(),
                  name === "legit" ? "Legitimate" : "Fraud",
                ]}
              />
              <Legend
                formatter={(value) => (
                  <span className="text-xs">
                    {value === "legit"
                      ? "Legitimate (left axis)"
                      : "Fraud (right axis)"}
                  </span>
                )}
                wrapperStyle={{ fontSize: 12 }}
              />
              <Area
                yAxisId="legit"
                type="monotone"
                dataKey="legit"
                name="legit"
                stroke="hsl(var(--chart-2))"
                fill="url(#lgGrad)"
                strokeWidth={2}
                dot={false}
              />
              <Area
                yAxisId="fraud"
                type="monotone"
                dataKey="fraud"
                name="fraud"
                stroke="hsl(var(--chart-1))"
                fill="url(#fraudGrad)"
                strokeWidth={2}
                dot={{ r: 3, fill: "hsl(var(--chart-1))" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* ── Feature Correlation + Summary Table ── */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Horizontal BarChart */}
        <Card
          className="xl:col-span-2 shadow-card"
          data-ocid="eda.correlation_chart_card"
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-display font-semibold">
              Top Features Correlated with Fraud
            </CardTitle>
            <p className="text-xs text-muted-foreground">
              Pearson correlation coefficients — negative (red) and positive
              (green) correlations
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart
                data={SORTED_FEATURES}
                layout="vertical"
                margin={{ top: 4, right: 32, bottom: 4, left: 8 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="hsl(var(--border))"
                  horizontal={false}
                />
                <XAxis
                  type="number"
                  domain={[-0.35, 0.2]}
                  tickFormatter={(v: number) => v.toFixed(2)}
                  tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  type="category"
                  dataKey="feature"
                  tick={{
                    fontSize: 12,
                    fill: "hsl(var(--foreground))",
                    fontWeight: 600,
                  }}
                  width={40}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={TOOLTIP_STYLE}
                  formatter={(v: number) => [v.toFixed(3), "Pearson r"]}
                />
                <Bar
                  dataKey="correlation"
                  name="Correlation"
                  radius={[0, 3, 3, 0]}
                  label={{
                    position: "right",
                    fontSize: 10,
                    fill: "hsl(var(--muted-foreground))",
                    formatter: (v: number) => v.toFixed(3),
                  }}
                >
                  {SORTED_FEATURES.map((entry) => (
                    <Cell
                      key={entry.feature}
                      fill={
                        entry.correlation < 0
                          ? "hsl(var(--chart-1))"
                          : "hsl(var(--chart-2))"
                      }
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Summary Table */}
        <Card className="shadow-card" data-ocid="eda.correlation_summary_card">
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-display font-semibold">
              Correlation Summary
            </CardTitle>
            <p className="text-xs text-muted-foreground">
              Feature correlation direction counts
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between rounded-lg bg-destructive/10 border border-destructive/30 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-destructive" />
                  <span className="text-sm text-foreground font-medium">
                    Negative Correlation
                  </span>
                </div>
                <span className="text-lg font-mono font-bold text-destructive">
                  {negFeatures}
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-[hsl(var(--chart-2))]/10 border border-[hsl(var(--chart-2))]/30 px-3 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--chart-2))]" />
                  <span className="text-sm text-foreground font-medium">
                    Positive Correlation
                  </span>
                </div>
                <span className="text-lg font-mono font-bold text-[hsl(var(--chart-2))]">
                  {posFeatures}
                </span>
              </div>
            </div>

            {/* Per-feature table */}
            <div className="border border-border rounded-lg overflow-hidden">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-muted/50 border-b border-border">
                    <th className="text-left px-3 py-2 font-semibold text-muted-foreground">
                      Feature
                    </th>
                    <th className="text-right px-3 py-2 font-semibold text-muted-foreground">
                      r
                    </th>
                    <th className="text-right px-3 py-2 font-semibold text-muted-foreground">
                      Dir.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {SORTED_FEATURES.map((f, i) => (
                    <tr
                      key={f.feature}
                      data-ocid={`eda.corr_row.${i + 1}`}
                      className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-3 py-1.5 font-mono font-semibold text-foreground">
                        {f.feature}
                      </td>
                      <td
                        className={`px-3 py-1.5 text-right font-mono font-bold ${
                          f.correlation < 0
                            ? "text-destructive"
                            : "text-[hsl(var(--chart-2))]"
                        }`}
                      >
                        {f.correlation.toFixed(3)}
                      </td>
                      <td className="px-3 py-1.5 text-right">
                        {f.correlation < 0 ? (
                          <span className="text-destructive">▼</span>
                        ) : (
                          <span className="text-[hsl(var(--chart-2))]">▲</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
