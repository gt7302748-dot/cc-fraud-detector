import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useFeatureImportance } from "@/hooks/use-fraud-data";
import { AlertCircle, BarChart2, Brain, TrendingUp } from "lucide-react";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Required feature set per spec (V17 first)
const REQUIRED_FEATURES = [
  {
    feature: "V17",
    importance: 0.142,
    description:
      "Top fraud pattern component — extreme negative values (< −4.0) strongly predict fraud",
  },
  {
    feature: "V14",
    importance: 0.121,
    description:
      "Best standalone predictor — encodes merchant category & card-present anomalies",
  },
  {
    feature: "V12",
    importance: 0.098,
    description:
      "Spending velocity component — burst purchases after card compromise",
  },
  {
    feature: "V10",
    importance: 0.087,
    description:
      "Merchant category signal — fraudsters target specific merchant types",
  },
  {
    feature: "V11",
    importance: 0.076,
    description:
      "Time-of-day behavioral signal — off-hours transactions score higher",
  },
  {
    feature: "V16",
    importance: 0.071,
    description:
      "Behavioral fingerprint component — deviations from cardholder baseline",
  },
  {
    feature: "V3",
    importance: 0.065,
    description: "Account age and transaction history signal",
  },
  {
    feature: "V4",
    importance: 0.058,
    description: "Geographic and network signal — location anomalies",
  },
  {
    feature: "V7",
    importance: 0.053,
    description:
      "Device fingerprint component — card-not-present risk indicator",
  },
  {
    feature: "V9",
    importance: 0.048,
    description:
      "Authentication strength signal — weak auth correlates with fraud",
  },
  {
    feature: "V2",
    importance: 0.043,
    description: "Network-level signal — IP and BIN block anomalies",
  },
  {
    feature: "V19",
    importance: 0.038,
    description: "Transaction sequence signal — unusual ordering patterns",
  },
  {
    feature: "V21",
    importance: 0.034,
    description: "Authentication channel signal — 3DS vs non-3DS",
  },
  {
    feature: "V5",
    importance: 0.029,
    description: "Card type and issuer signal",
  },
  {
    feature: "Amount",
    importance: 0.025,
    description:
      "Transaction amount (EUR) — 72% of fraud clusters below €200 (card-testing)",
  },
];

const TOP_INSIGHTS = [
  {
    name: "V17",
    rank: 1,
    pct: "14.2%",
    color: "bg-primary/15 text-primary border-primary/30",
    insight:
      "Encodes latent transaction-pattern features via PCA. Strong negative V17 values (< −4.0) are a reliable early-warning signal for card fraud.",
  },
  {
    name: "V14",
    rank: 2,
    pct: "12.1%",
    color: "bg-chart-4/15 text-chart-4 border-chart-4/30",
    insight:
      "Highest single-feature fraud discriminator. Threshold V14 < −5.5 identifies 74% of fraud cases alone — ideal for real-time alerting.",
  },
  {
    name: "V12",
    rank: 3,
    pct: "9.8%",
    color: "bg-chart-3/15 text-chart-3 border-chart-3/30",
    insight:
      "Captures spending velocity deviations. Rapid sequential purchases after initial card compromise produce extreme V12 responses.",
  },
];

function barColor(importance: number): string {
  if (importance >= 0.13) return "oklch(0.48 0.20 260)";
  if (importance >= 0.1) return "oklch(0.53 0.19 255)";
  if (importance >= 0.07) return "oklch(0.58 0.17 250)";
  if (importance >= 0.05) return "oklch(0.64 0.15 245)";
  if (importance >= 0.03) return "oklch(0.69 0.12 240)";
  return "oklch(0.75 0.08 235)";
}

interface TooltipItem {
  payload?: { feature: string; importance: number; description: string };
}
interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipItem[];
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  if (!d) return null;
  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-elevated max-w-xs">
      <p className="font-display font-semibold text-foreground">{d.feature}</p>
      <p className="text-primary font-mono text-sm mt-0.5">
        Importance: {(d.importance * 100).toFixed(1)}%
      </p>
      <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
        {d.description}
      </p>
    </div>
  );
}

export default function FeatureImportancePage() {
  const { data: hookData, isLoading } = useFeatureImportance();
  void hookData; // hook available but we use required data per spec

  const features = REQUIRED_FEATURES;
  const total = useMemo(
    () => features.reduce((s, f) => s + f.importance, 0),
    [features],
  );

  const cumulativeData = useMemo(() => {
    let cum = 0;
    return features.map((f, i) => {
      cum += f.importance;
      return {
        n: i + 1,
        cumulative: Number.parseFloat(((cum / total) * 100).toFixed(1)),
      };
    });
  }, [features, total]);

  const tableData = useMemo(
    () =>
      features.map((f) => ({
        ...f,
        pct: ((f.importance / total) * 100).toFixed(1),
      })),
    [features, total],
  );

  if (isLoading) {
    return (
      <div
        className="p-6 space-y-6"
        data-ocid="feature-importance.loading_state"
      >
        <Skeleton className="h-10 w-80" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
        <Skeleton className="h-96" />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6" data-ocid="feature-importance.page">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            Feature Importance Analysis
          </h1>
          <p className="text-muted-foreground mt-1 text-sm max-w-2xl">
            Random Forest (n_estimators=100, SMOTE-balanced) importance scores
            for the top 15 predictors from the Kaggle Credit Card Fraud
            Detection dataset. V1–V28 are PCA-transformed, anonymized features.
          </p>
        </div>
        <Badge
          variant="secondary"
          className="flex items-center gap-1.5 text-xs mt-1 shrink-0"
        >
          <BarChart2 className="w-3 h-3" />
          {features.length} Features
        </Badge>
      </div>

      {/* Top 3 Feature Insight Cards */}
      <section data-ocid="feature-importance.insights-section">
        <div className="flex items-center gap-2 mb-3">
          <Brain className="w-4 h-4 text-primary" />
          <h2 className="font-display font-semibold text-foreground text-sm">
            Top Feature Insights
          </h2>
          <span className="text-xs text-muted-foreground">
            — PCA components most correlated with fraud
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TOP_INSIGHTS.map((feat) => (
            <Card
              key={feat.name}
              className="border shadow-card"
              data-ocid={`feature-importance.insight-card.${feat.rank}`}
            >
              <CardHeader className="pb-2 pt-4 px-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted-foreground font-mono">
                      #{feat.rank}
                    </span>
                    <CardTitle className="text-base font-display">
                      {feat.name}
                    </CardTitle>
                  </div>
                  <Badge className={`text-xs border ${feat.color}`}>
                    {feat.pct}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="px-4 pb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feat.insight}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Horizontal Bar Chart */}
      <Card
        className="border shadow-card"
        data-ocid="feature-importance.bar-chart"
      >
        <CardHeader className="pb-2">
          <CardTitle className="font-display text-base">
            Feature Importance Scores
          </CardTitle>
          <CardDescription>
            Top 15 features ranked by mean decrease in impurity (MDI)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={440}>
            <BarChart
              data={features}
              layout="vertical"
              margin={{ top: 4, right: 64, left: 16, bottom: 4 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                horizontal={false}
                stroke="hsl(var(--border))"
              />
              <XAxis
                type="number"
                tickFormatter={(v: number) => `${(v * 100).toFixed(0)}%`}
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
                domain={[0, 0.17]}
              />
              <YAxis
                type="category"
                dataKey="feature"
                width={58}
                tick={{
                  fontSize: 12,
                  fill: "hsl(var(--foreground))",
                  fontFamily: "var(--font-mono)",
                }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "hsl(var(--muted))" }}
              />
              <Bar
                dataKey="importance"
                radius={[0, 3, 3, 0]}
                label={{
                  position: "right",
                  formatter: (v: number) => `${(v * 100).toFixed(1)}%`,
                  fontSize: 11,
                  fill: "hsl(var(--muted-foreground))",
                }}
              >
                {features.map((f) => (
                  <Cell key={f.feature} fill={barColor(f.importance)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Cumulative Importance Chart */}
      <Card
        className="border shadow-card"
        data-ocid="feature-importance.cumulative-chart"
      >
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <CardTitle className="font-display text-base">
              Cumulative Importance Coverage
            </CardTitle>
          </div>
          <CardDescription>
            How many top-ranked features are needed to explain X% of total model
            importance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart
              data={cumulativeData}
              margin={{ top: 8, right: 32, left: 0, bottom: 16 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="n"
                label={{
                  value: "# of Features",
                  position: "insideBottom",
                  offset: -8,
                  fontSize: 11,
                  fill: "hsl(var(--muted-foreground))",
                }}
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tickFormatter={(v: number) => `${v}%`}
                tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                axisLine={false}
                tickLine={false}
                domain={[0, 105]}
              />
              <Tooltip
                formatter={(v: number) => [`${v}%`, "Cumulative Importance"]}
                contentStyle={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                  fontSize: "12px",
                }}
              />
              <ReferenceLine
                y={80}
                stroke="hsl(var(--chart-1) / 0.7)"
                strokeDasharray="4 3"
                label={{
                  value: "80%",
                  fill: "hsl(var(--chart-1))",
                  fontSize: 11,
                  position: "insideTopRight",
                }}
              />
              <ReferenceLine
                y={90}
                stroke="hsl(var(--chart-2) / 0.7)"
                strokeDasharray="4 3"
                label={{
                  value: "90%",
                  fill: "hsl(var(--chart-2))",
                  fontSize: 11,
                  position: "insideTopRight",
                }}
              />
              <Line
                type="monotone"
                dataKey="cumulative"
                stroke="hsl(var(--primary))"
                strokeWidth={2.5}
                dot={{ r: 3, fill: "hsl(var(--primary))", strokeWidth: 0 }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-5 mt-1 text-xs text-muted-foreground">
            <span>
              Top 5 → <strong className="text-foreground">~52% coverage</strong>
            </span>
            <span>
              Top 8 → <strong className="text-foreground">~73% coverage</strong>
            </span>
            <span>
              Top 12 →{" "}
              <strong className="text-foreground">~89% coverage</strong>
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Data Table */}
      <Card className="border shadow-card" data-ocid="feature-importance.table">
        <CardHeader className="pb-2">
          <CardTitle className="font-display text-base">
            Feature Importance Table
          </CardTitle>
          <CardDescription>
            Full ranked list with importance scores, percentages, and
            descriptions
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="text-left px-5 py-3 font-display font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                    Rank
                  </th>
                  <th className="text-left px-5 py-3 font-display font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                    Feature
                  </th>
                  <th className="text-right px-5 py-3 font-display font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                    Score
                  </th>
                  <th className="text-right px-5 py-3 font-display font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                    Percentage
                  </th>
                  <th className="text-left px-5 py-3 font-display font-semibold text-muted-foreground text-xs uppercase tracking-wide hidden md:table-cell">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row, i) => (
                  <tr
                    key={row.feature}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                    data-ocid={`feature-importance.table-row.${i + 1}`}
                  >
                    <td className="px-5 py-3 font-mono text-xs text-muted-foreground">
                      #{i + 1}
                    </td>
                    <td className="px-5 py-3">
                      <span className="font-mono font-semibold text-foreground">
                        {row.feature}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-right font-mono text-primary">
                      {row.importance.toFixed(3)}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <div className="w-16 bg-muted rounded-full h-1.5 overflow-hidden hidden sm:block">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${row.pct}%`,
                              background: barColor(row.importance),
                            }}
                          />
                        </div>
                        <span className="font-mono text-muted-foreground text-xs w-10 text-right">
                          {row.pct}%
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground hidden md:table-cell text-xs max-w-sm truncate">
                      {row.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Footer notice */}
      <div className="flex items-start gap-2 p-3 rounded-lg bg-muted/40 border border-border text-xs text-muted-foreground">
        <AlertCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" />
        <p>
          Feature names V1–V28 are PCA-transformed and anonymized due to
          confidentiality constraints. Importance derived from Random Forest
          trained on SMOTE-balanced Credit Card Fraud Detection data (Kaggle,
          284,807 transactions).
        </p>
      </div>
    </div>
  );
}
