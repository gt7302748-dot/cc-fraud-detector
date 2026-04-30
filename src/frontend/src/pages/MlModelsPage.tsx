import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useModelScores, useRocCurve } from "@/hooks/use-fraud-data";
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

// ── Static data matching requirements ────────────────────────────────────────
const AUC_DATA = [
  { name: "LR", fullName: "Logistic Regression", auc: 0.9712 },
  { name: "DT", fullName: "Decision Tree", auc: 0.9234 },
  { name: "RF", fullName: "Random Forest", auc: 0.9823 },
  { name: "GB", fullName: "Gradient Boosting", auc: 0.9801 },
  { name: "XGB", fullName: "XGBoost", auc: 0.9845 },
  { name: "LGBM", fullName: "LightGBM", auc: 0.9851 },
  { name: "KNN", fullName: "K-Nearest Neighbors", auc: 0.9456 },
  { name: "SVM", fullName: "Support Vector Machine", auc: 0.9698 },
];

const MODEL_TABLE_DATA = [
  {
    name: "Logistic Regression",
    precision: 0.856,
    recall: 0.923,
    f1: 0.888,
    auc: 0.9712,
  },
  {
    name: "Decision Tree",
    precision: 0.655,
    recall: 0.778,
    f1: 0.712,
    auc: 0.9234,
  },
  {
    name: "Random Forest",
    precision: 0.956,
    recall: 0.847,
    f1: 0.898,
    auc: 0.9823,
  },
  {
    name: "Gradient Boosting",
    precision: 0.921,
    recall: 0.836,
    f1: 0.877,
    auc: 0.9801,
  },
  { name: "XGBoost", precision: 0.943, recall: 0.857, f1: 0.898, auc: 0.9845 },
  { name: "LightGBM", precision: 0.951, recall: 0.847, f1: 0.896, auc: 0.9851 },
  {
    name: "K-Nearest Neighbors",
    precision: 0.642,
    recall: 0.762,
    f1: 0.698,
    auc: 0.9456,
  },
  {
    name: "Support Vector Machine",
    precision: 0.876,
    recall: 0.831,
    f1: 0.853,
    auc: 0.9698,
  },
];

const RF_CONFUSION = { tn: 56841, fp: 23, fn: 15, tp: 83 };

const RF_METRICS = [
  { label: "Accuracy", value: "99.93%", icon: "◎" },
  { label: "Precision", value: "78.3%", icon: "◉" },
  { label: "Recall", value: "84.7%", icon: "◈" },
  { label: "F1-Score", value: "81.4%", icon: "◆" },
];

// Realistic ROC curve for Random Forest (AUC=0.9823)
const ROC_RF_POINTS = [
  { fpr: 0.0, tpr: 0.0 },
  { fpr: 0.001, tpr: 0.38 },
  { fpr: 0.002, tpr: 0.55 },
  { fpr: 0.004, tpr: 0.68 },
  { fpr: 0.008, tpr: 0.76 },
  { fpr: 0.015, tpr: 0.82 },
  { fpr: 0.025, tpr: 0.865 },
  { fpr: 0.04, tpr: 0.9 },
  { fpr: 0.06, tpr: 0.93 },
  { fpr: 0.1, tpr: 0.955 },
  { fpr: 0.18, tpr: 0.97 },
  { fpr: 0.3, tpr: 0.981 },
  { fpr: 0.5, tpr: 0.991 },
  { fpr: 0.75, tpr: 0.997 },
  { fpr: 1.0, tpr: 1.0 },
];
// Merge ROC + diagonal for chart
const ROC_CHART_DATA = ROC_RF_POINTS.map((p) => ({
  ...p,
  diag: p.fpr,
}));

const GOLD = "hsl(43 96% 56%)";
const BLUE = "hsl(var(--chart-3))";
const GREEN = "hsl(var(--chart-2))";

// ── Custom tooltip helpers ────────────────────────────────────────────────────
const tooltipStyle = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "6px",
  fontSize: 12,
  color: "hsl(var(--foreground))",
};

export default function MlModelsPage() {
  const { isLoading } = useModelScores();
  const { data: roc } = useRocCurve();

  if (isLoading) {
    return (
      <div className="space-y-6" data-ocid="ml_models.loading_state">
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="h-64" />
        ))}
      </div>
    );
  }

  // Use static RF confusion matrix values per requirements
  const tn = RF_CONFUSION.tn;
  const fp = RF_CONFUSION.fp;
  const fn = RF_CONFUSION.fn;
  const tp = RF_CONFUSION.tp;

  // ROC from hook (RF) or our static points
  const rfRoc = roc?.find((r) => r.modelName === "Random Forest");
  const rocPoints =
    rfRoc?.points.map((p) => ({ fpr: p.fpr, tpr: p.tpr, diag: p.fpr })) ??
    ROC_CHART_DATA;

  // Derived precision from CM
  const cmPrecision = (tp / (tp + fp)).toFixed(3);
  const cmRecall = (tp / (tp + fn)).toFixed(3);
  const cmSpecificity = (tn / (tn + fp)).toFixed(3);
  const cmF1 = ((2 * tp) / (2 * tp + fp + fn)).toFixed(3);

  return (
    <div className="space-y-6" data-ocid="ml_models.page">
      {/* Page title */}
      <div data-ocid="ml_models.header">
        <h1 className="text-2xl font-display font-bold text-foreground">
          Machine Learning Model Comparison
        </h1>
        <p className="text-muted-foreground mt-1 text-sm">
          Performance evaluation of 8 traditional ML algorithms on the Credit
          Card Fraud Detection dataset (284,807 transactions).
        </p>
      </div>

      {/* ── Best Model Card ───────────────────────────────────────────── */}
      <Card
        data-ocid="ml_models.best_model_card"
        className="border-primary/40 bg-primary/5 shadow-card"
      >
        <CardContent className="pt-5 pb-5 px-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-2xl">🏆</span>
                <h2 className="text-lg font-display font-bold text-foreground">
                  Random Forest
                </h2>
                <Badge
                  className="bg-primary/20 text-primary border-primary/40 text-xs font-semibold"
                  variant="outline"
                  data-ocid="ml_models.best_badge"
                >
                  Best for Production
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground max-w-lg">
                Highest balanced performance across precision and recall for
                fraud detection use cases. Reliable at minimizing both false
                negatives (missed fraud) and false positives.
              </p>
            </div>
            <div className="flex gap-6 flex-wrap">
              {[
                { label: "AUC", value: "0.9823" },
                { label: "Precision", value: "0.956" },
                { label: "Recall", value: "0.847" },
                { label: "F1-Score", value: "0.898" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-xl font-display font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Performance Metric Cards ───────────────────────────────────── */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        data-ocid="ml_models.metrics_grid"
      >
        {RF_METRICS.map((m, i) => (
          <Card
            key={m.label}
            data-ocid={`ml_models.metric_card.${i + 1}`}
            className="shadow-card"
          >
            <CardContent className="pt-5 pb-5 px-5">
              <p className="text-xs text-muted-foreground mb-1 uppercase tracking-wide font-medium">
                {m.label}
              </p>
              <p className="text-2xl font-display font-bold text-primary">
                {m.value}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Random Forest
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* ── Tabs ──────────────────────────────────────────────────────── */}
      <Tabs defaultValue="overview" data-ocid="ml_models.tabs">
        <TabsList className="mb-2">
          <TabsTrigger value="overview" data-ocid="ml_models.tab.overview">
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="confusion"
            data-ocid="ml_models.tab.confusion_matrix"
          >
            Confusion Matrix
          </TabsTrigger>
          <TabsTrigger value="roc" data-ocid="ml_models.tab.roc_curve">
            ROC Curve
          </TabsTrigger>
          <TabsTrigger
            value="detailed"
            data-ocid="ml_models.tab.detailed_metrics"
          >
            Detailed Metrics
          </TabsTrigger>
        </TabsList>

        {/* ── TAB: Overview ─────────────────────────────────────────── */}
        <TabsContent value="overview" data-ocid="ml_models.overview_panel">
          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold font-display">
                Model Performance Overview — ROC-AUC Scores
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                All 8 models evaluated. LightGBM achieves the highest AUC.
                Y-axis range 0.90–1.00.
              </p>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={320}>
                <BarChart
                  data={AUC_DATA}
                  margin={{ top: 16, right: 24, left: 0, bottom: 8 }}
                  barCategoryGap="30%"
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="name"
                    tick={{
                      fontSize: 12,
                      fill: "hsl(var(--muted-foreground))",
                    }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0.9, 1.0]}
                    tickCount={6}
                    tickFormatter={(v: number) => v.toFixed(2)}
                    tick={{
                      fontSize: 11,
                      fill: "hsl(var(--muted-foreground))",
                    }}
                    axisLine={false}
                    tickLine={false}
                    label={{
                      value: "ROC-AUC",
                      angle: -90,
                      position: "insideLeft",
                      fontSize: 11,
                      fill: "hsl(var(--muted-foreground))",
                      dx: -4,
                    }}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(
                      v: number,
                      _name: string,
                      props: { payload?: { fullName?: string } },
                    ) => [v.toFixed(4), props.payload?.fullName ?? "AUC"]}
                    cursor={{ fill: "hsl(var(--muted))", opacity: 0.3 }}
                  />
                  <Bar dataKey="auc" radius={[4, 4, 0, 0]}>
                    {AUC_DATA.map((entry) => (
                      <Cell
                        key={entry.name}
                        fill={entry.name === "LGBM" ? GOLD : BLUE}
                        opacity={entry.name === "LGBM" ? 1 : 0.75}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              {/* Legend note */}
              <div className="flex items-center gap-4 mt-3 pl-2">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-3 h-3 rounded-sm"
                    style={{ background: GOLD }}
                  />
                  <span className="text-xs text-muted-foreground">
                    Best model (LightGBM — 0.9851)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-sm bg-primary opacity-75" />
                  <span className="text-xs text-muted-foreground">
                    Other models
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── TAB: Confusion Matrix ──────────────────────────────────── */}
        <TabsContent value="confusion" data-ocid="ml_models.confusion_panel">
          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold font-display">
                Confusion Matrix — Random Forest
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                Evaluated on 56,962 test transactions (20% holdout). TN:{" "}
                {tn.toLocaleString()} | FP: {fp} | FN: {fn} | TP: {tp}
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-8 items-start">
                {/* Heatmap 2x2 grid */}
                <div>
                  {/* Column headers */}
                  <div className="flex mb-1 ml-24">
                    <div className="w-36 text-center text-xs font-semibold text-muted-foreground">
                      Predicted: Legit
                    </div>
                    <div className="w-36 text-center text-xs font-semibold text-muted-foreground">
                      Predicted: Fraud
                    </div>
                  </div>
                  {/* Row 1: Actual Legit */}
                  <div className="flex items-center gap-0">
                    <div className="w-24 text-right pr-3 text-xs font-semibold text-muted-foreground leading-tight">
                      Actual
                      <br />
                      Legit
                    </div>
                    <div
                      data-ocid="ml_models.cm.tn"
                      className="w-36 h-28 flex flex-col items-center justify-center rounded-tl-lg border border-border"
                      style={{ background: "rgba(34,197,94,0.15)" }}
                    >
                      <span
                        className="text-2xl font-display font-bold"
                        style={{ color: GREEN }}
                      >
                        {tn.toLocaleString()}
                      </span>
                      <span className="text-xs text-muted-foreground mt-1">
                        True Negative
                      </span>
                      <span
                        className="text-xs mt-0.5 font-medium"
                        style={{ color: GREEN }}
                      >
                        ✓ Correct
                      </span>
                    </div>
                    <div
                      data-ocid="ml_models.cm.fp"
                      className="w-36 h-28 flex flex-col items-center justify-center rounded-tr-lg border border-border border-l-0"
                      style={{ background: "rgba(239,68,68,0.12)" }}
                    >
                      <span className="text-2xl font-display font-bold text-destructive">
                        {fp}
                      </span>
                      <span className="text-xs text-muted-foreground mt-1">
                        False Positive
                      </span>
                      <span className="text-xs mt-0.5 font-medium text-destructive">
                        ✗ False Alarm
                      </span>
                    </div>
                  </div>
                  {/* Row 2: Actual Fraud */}
                  <div className="flex items-center gap-0">
                    <div className="w-24 text-right pr-3 text-xs font-semibold text-muted-foreground leading-tight">
                      Actual
                      <br />
                      Fraud
                    </div>
                    <div
                      data-ocid="ml_models.cm.fn"
                      className="w-36 h-28 flex flex-col items-center justify-center rounded-bl-lg border border-border border-t-0"
                      style={{ background: "rgba(239,68,68,0.12)" }}
                    >
                      <span className="text-2xl font-display font-bold text-destructive">
                        {fn}
                      </span>
                      <span className="text-xs text-muted-foreground mt-1">
                        False Negative
                      </span>
                      <span className="text-xs mt-0.5 font-medium text-destructive">
                        ✗ Missed Fraud
                      </span>
                    </div>
                    <div
                      data-ocid="ml_models.cm.tp"
                      className="w-36 h-28 flex flex-col items-center justify-center rounded-br-lg border border-border border-t-0 border-l-0"
                      style={{ background: "rgba(34,197,94,0.15)" }}
                    >
                      <span
                        className="text-2xl font-display font-bold"
                        style={{ color: GREEN }}
                      >
                        {tp}
                      </span>
                      <span className="text-xs text-muted-foreground mt-1">
                        True Positive
                      </span>
                      <span
                        className="text-xs mt-0.5 font-medium"
                        style={{ color: GREEN }}
                      >
                        ✓ Fraud Caught
                      </span>
                    </div>
                  </div>
                  {/* Axis labels */}
                  <div className="flex ml-24 mt-2">
                    <div className="w-72 text-center text-xs text-muted-foreground">
                      ← Predicted Class →
                    </div>
                  </div>
                </div>

                {/* Derived metrics */}
                <div className="flex-1 min-w-[200px] space-y-3 self-center">
                  <p className="text-sm font-semibold font-display mb-4">
                    Derived Metrics
                  </p>
                  {[
                    {
                      label: "Precision",
                      value: cmPrecision,
                      note: "TP / (TP+FP)",
                    },
                    {
                      label: "Recall / Sensitivity",
                      value: cmRecall,
                      note: "TP / (TP+FN)",
                    },
                    {
                      label: "Specificity",
                      value: cmSpecificity,
                      note: "TN / (TN+FP)",
                    },
                    { label: "F1-Score", value: cmF1, note: "Harmonic mean" },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between items-center text-sm border-b border-border/40 pb-2"
                    >
                      <div>
                        <span className="text-foreground">{row.label}</span>
                        <span className="text-xs text-muted-foreground ml-2">
                          {row.note}
                        </span>
                      </div>
                      <span className="font-mono font-semibold text-primary">
                        {row.value}
                      </span>
                    </div>
                  ))}

                  {/* Color legend */}
                  <div className="pt-3 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-sm"
                        style={{ background: "rgba(34,197,94,0.4)" }}
                      />
                      <span className="text-xs text-muted-foreground">
                        Correct predictions (TN, TP)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-sm"
                        style={{ background: "rgba(239,68,68,0.3)" }}
                      />
                      <span className="text-xs text-muted-foreground">
                        Misclassifications (FP, FN)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── TAB: ROC Curve ─────────────────────────────────────────── */}
        <TabsContent value="roc" data-ocid="ml_models.roc_panel">
          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between flex-wrap gap-2">
                <div>
                  <CardTitle className="text-sm font-semibold font-display">
                    ROC Curve — Random Forest
                  </CardTitle>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    True Positive Rate vs False Positive Rate across decision
                    thresholds
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="font-mono text-sm border-primary/50 text-primary bg-primary/10"
                  data-ocid="ml_models.roc_auc_badge"
                >
                  AUC = 0.9823
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={360}>
                <LineChart
                  data={rocPoints}
                  margin={{ top: 12, right: 24, left: 0, bottom: 30 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="hsl(var(--border))"
                  />
                  <XAxis
                    dataKey="fpr"
                    type="number"
                    domain={[0, 1]}
                    tickFormatter={(v: number) => v.toFixed(1)}
                    tick={{
                      fontSize: 11,
                      fill: "hsl(var(--muted-foreground))",
                    }}
                    label={{
                      value: "False Positive Rate",
                      position: "insideBottom",
                      offset: -16,
                      fontSize: 12,
                      fill: "hsl(var(--muted-foreground))",
                    }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    type="number"
                    domain={[0, 1]}
                    tickFormatter={(v: number) => v.toFixed(1)}
                    tick={{
                      fontSize: 11,
                      fill: "hsl(var(--muted-foreground))",
                    }}
                    label={{
                      value: "True Positive Rate",
                      angle: -90,
                      position: "insideLeft",
                      fontSize: 12,
                      fill: "hsl(var(--muted-foreground))",
                      dx: -4,
                    }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip
                    contentStyle={tooltipStyle}
                    formatter={(v: number, name: string) => [
                      v.toFixed(3),
                      name === "tpr"
                        ? "True Positive Rate"
                        : "Random Classifier",
                    ]}
                  />
                  {/* Random classifier diagonal */}
                  <Line
                    type="linear"
                    dataKey="diag"
                    stroke="hsl(var(--muted-foreground))"
                    strokeWidth={1.5}
                    strokeDasharray="6 4"
                    dot={false}
                    name="diag"
                  />
                  {/* ROC curve */}
                  <Line
                    type="monotone"
                    dataKey="tpr"
                    stroke={BLUE}
                    strokeWidth={2.5}
                    dot={false}
                    name="tpr"
                  />
                  {/* AUC annotation line */}
                  <ReferenceLine
                    x={0.02}
                    stroke="transparent"
                    label={{
                      value: "AUC = 0.9823",
                      position: "insideTopRight",
                      fontSize: 12,
                      fill: GOLD,
                      fontWeight: 600,
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>

              <div className="flex items-center gap-6 mt-3 pl-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-0.5 bg-primary" />
                  <span className="text-xs text-muted-foreground">
                    Random Forest ROC Curve
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="w-6 h-0.5"
                    style={{
                      background: "hsl(var(--muted-foreground))",
                      backgroundImage:
                        "repeating-linear-gradient(to right, hsl(var(--muted-foreground)) 0, hsl(var(--muted-foreground)) 4px, transparent 4px, transparent 8px)",
                    }}
                  />
                  <span className="text-xs text-muted-foreground">
                    Random Classifier (baseline)
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* ── TAB: Detailed Metrics ──────────────────────────────────── */}
        <TabsContent value="detailed" data-ocid="ml_models.detailed_panel">
          <Card className="shadow-card">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold font-display">
                All Models — Detailed Metrics
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                Ranked by ROC-AUC. Precision, Recall, F1-Score represent
                performance on the fraud (minority) class.
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table
                  className="w-full text-sm"
                  data-ocid="ml_models.metrics_table"
                >
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                        Rank
                      </th>
                      <th className="text-left py-3 px-4 text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                        Model
                      </th>
                      <th className="text-right py-3 px-4 text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                        Precision
                      </th>
                      <th className="text-right py-3 px-4 text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                        Recall
                      </th>
                      <th className="text-right py-3 px-4 text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                        F1-Score
                      </th>
                      <th className="text-right py-3 px-4 text-xs text-muted-foreground font-semibold uppercase tracking-wide">
                        ROC-AUC
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...MODEL_TABLE_DATA]
                      .sort((a, b) => b.auc - a.auc)
                      .map((m, i) => {
                        const isRF = m.name === "Random Forest";
                        return (
                          <tr
                            key={m.name}
                            data-ocid={`ml_models.table.item.${i + 1}`}
                            className={`border-b border-border/40 transition-colors duration-150 hover:bg-muted/30 ${
                              isRF ? "bg-primary/5" : ""
                            }`}
                          >
                            <td className="py-3 px-4 text-muted-foreground font-mono text-xs">
                              #{i + 1}
                            </td>
                            <td className="py-3 px-4 font-medium flex items-center gap-2">
                              {isRF && (
                                <Badge
                                  variant="outline"
                                  className="text-xs border-primary/50 text-primary bg-primary/10"
                                >
                                  Best for Production
                                </Badge>
                              )}
                              {m.name}
                            </td>
                            <td className="py-3 px-4 text-right font-mono text-xs tabular-nums">
                              {m.precision.toFixed(3)}
                            </td>
                            <td className="py-3 px-4 text-right font-mono text-xs tabular-nums">
                              {m.recall.toFixed(3)}
                            </td>
                            <td className="py-3 px-4 text-right font-mono text-xs tabular-nums">
                              {m.f1.toFixed(3)}
                            </td>
                            <td className="py-3 px-4 text-right">
                              <span
                                className="font-mono text-xs tabular-nums font-semibold"
                                style={{
                                  color: i === 0 ? GOLD : "hsl(var(--primary))",
                                }}
                              >
                                {m.auc.toFixed(4)}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
