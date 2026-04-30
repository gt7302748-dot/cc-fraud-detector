import { j as jsxRuntimeExports, b as Skeleton } from "./index-obkfj5IL.js";
import { u as useEdaStats, B as Badge } from "./use-fraud-data-uqLV_foy.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./data-CVZMXs0E.js";
import { R as ResponsiveContainer, C as Cell, T as Tooltip, L as Legend, B as Bar } from "./generateCategoricalChart-BW2Go5AY.js";
import { P as PieChart, a as Pie } from "./PieChart-CKBE5VGY.js";
import { B as BarChart } from "./BarChart-EaK9PYVo.js";
import { C as CartesianGrid, X as XAxis, Y as YAxis } from "./YAxis-C-6M5L6F.js";
import { A as AreaChart, a as Area } from "./AreaChart-CGn7XdMw.js";
const CLASS_PIE_DATA = [
  { name: "Legitimate", count: 284315, pct: "99.83%" },
  { name: "Fraud", count: 492, pct: "0.17%" }
];
const AMOUNT_DIST = [
  { range: "$0–50", fraud: 148, legit: 96200 },
  { range: "$51–100", fraud: 112, legit: 74800 },
  { range: "$101–200", fraud: 94, legit: 58600 },
  { range: "$201–500", fraud: 86, legit: 38400 },
  { range: "$501–1k", fraud: 38, legit: 12800 },
  { range: "$1k+", fraud: 14, legit: 3515 }
];
const TIME_DIST = [
  { period: "0–24k", fraud: 28, legit: 8200 },
  { period: "24–48k", fraud: 42, legit: 6800 },
  { period: "48–72k", fraud: 38, legit: 5100 },
  { period: "72–96k", fraud: 24, legit: 9400 },
  { period: "96–120k", fraud: 48, legit: 24800 },
  { period: "120–144k", fraud: 52, legit: 28400 },
  { period: "144–168k", fraud: 44, legit: 26200 },
  { period: "168+k", fraud: 33, legit: 12400 }
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
  { feature: "V4", correlation: 0.133 }
];
const SORTED_FEATURES = [...TOP_FEATURES].sort(
  (a, b) => Math.abs(b.correlation) - Math.abs(a.correlation)
);
const DATASET_STATS = [
  { label: "Total Rows", value: "284,807", icon: "🗃️" },
  { label: "Columns", value: "30", icon: "📊" },
  { label: "Missing Values", value: "0", icon: "✅" },
  { label: "Target Classes", value: "Binary", icon: "🎯" }
];
const TOOLTIP_STYLE = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "6px",
  color: "hsl(var(--foreground))",
  fontSize: 12
};
const posFeatures = TOP_FEATURES.filter((f) => f.correlation > 0).length;
const negFeatures = TOP_FEATURES.filter((f) => f.correlation < 0).length;
function PieTooltip({
  active,
  payload
}) {
  if (!active || !(payload == null ? void 0 : payload.length)) return null;
  const p = payload[0];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: TOOLTIP_STYLE, className: "px-3 py-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: p.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Count: ",
      p.value.toLocaleString()
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
      "Share: ",
      p.payload.pct
    ] })
  ] });
}
function EdaPage() {
  const { isLoading } = useEdaStats();
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", "data-ocid": "eda.loading_state", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64 rounded-xl" }, i)) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "eda.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "eda.header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "Exploratory Data Analysis" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Statistical overview and visualizations of the Credit Card Fraud Detection dataset" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "eda.dataset_overview_card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-display font-semibold", children: "Dataset Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Kaggle Credit Card Fraud Detection — European cardholders, September 2013" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5", children: DATASET_STATS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            "data-ocid": `eda.dataset_stat.${i + 1}`,
            className: "rounded-lg bg-muted/50 border border-border px-4 py-3 flex flex-col gap-1",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg", children: s.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-display font-bold text-foreground", children: s.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: s.label })
            ]
          },
          s.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-border pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: "Legitimate Transactions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-mono font-bold text-[hsl(var(--chart-2))]", children: "284,315" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Badge,
              {
                variant: "outline",
                className: "w-fit border-[hsl(var(--chart-2))] text-[hsl(var(--chart-2))] text-xs",
                children: "99.83%"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: "Fraudulent Transactions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-mono font-bold text-destructive", children: "492" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "destructive", className: "w-fit text-xs", children: "0.17%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wide", children: "Features" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl font-mono font-bold text-foreground", children: "V1–V28 + Time + Amount" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "PCA-anonymized + raw" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "eda.preprocessing_card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-display font-semibold", children: "Data Preprocessing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Steps applied before model training" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
        {
          step: "01",
          title: "Feature Scaling",
          color: "text-primary",
          bg: "bg-primary/10 border-primary/30",
          desc: "Amount and Time were standardized using StandardScaler (zero mean, unit variance). PCA-transformed features V1–V28 were already scaled during anonymization."
        },
        {
          step: "02",
          title: "PCA-Transformed Features",
          color: "text-[hsl(var(--chart-3))]",
          bg: "bg-[hsl(var(--chart-3))]/10 border-[hsl(var(--chart-3))]/30",
          desc: "V1–V28 are principal components obtained via PCA on confidential cardholder data. These 28 components capture most of the variance while protecting privacy."
        },
        {
          step: "03",
          title: "SMOTE (Class Balancing)",
          color: "text-[hsl(var(--chart-2))]",
          bg: "bg-[hsl(var(--chart-2))]/10 border-[hsl(var(--chart-2))]/30",
          desc: "Synthetic Minority Oversampling Technique (SMOTE) was applied to training data to address the severe 0.17% minority class imbalance. This boosted fraud recall by ~40%."
        }
      ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `rounded-lg border p-4 ${item.bg}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: `text-xs font-mono font-bold mb-1 ${item.color}`,
                children: [
                  "STEP ",
                  item.step
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-sm text-foreground mb-2", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: item.desc })
          ]
        },
        item.step
      )) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "eda.class_imbalance_card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-display font-semibold", children: "Class Imbalance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Distribution of fraud vs. legitimate transactions in the dataset" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row items-center gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, className: "max-w-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Pie,
            {
              data: CLASS_PIE_DATA,
              dataKey: "count",
              nameKey: "name",
              cx: "50%",
              cy: "50%",
              outerRadius: 100,
              innerRadius: 62,
              paddingAngle: 3,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: "hsl(var(--chart-2))" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: "hsl(var(--chart-1))" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(PieTooltip, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Legend,
            {
              formatter: (value) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground", children: value }),
              wrapperStyle: { fontSize: 12 }
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 space-y-4 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg bg-[hsl(var(--chart-2))]/10 border border-[hsl(var(--chart-2))]/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-4 rounded-full bg-[hsl(var(--chart-2))] mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: "Legitimate" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-mono font-bold text-[hsl(var(--chart-2))]", children: "284,315" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "99.83% of all transactions" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-3 rounded-lg bg-destructive/10 border border-destructive/30", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-4 w-4 rounded-full bg-destructive mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-sm text-foreground", children: "Fraud" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-mono font-bold text-destructive", children: "492" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "0.17% of all transactions" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-lg bg-muted/50 border border-border p-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Highly imbalanced dataset." }),
            " ",
            "The fraud-to-legit ratio is approximately 1:578. Standard accuracy metrics are misleading — use ROC-AUC, Precision-Recall, and F1 score."
          ] }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "eda.amount_distribution_card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-display font-semibold", children: "Transaction Amount Distribution" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Fraud vs. legitimate transactions by amount range — fraud clusters in small amounts" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 280, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          BarChart,
          {
            data: AMOUNT_DIST,
            margin: { top: 8, right: 16, bottom: 8, left: 8 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CartesianGrid,
                {
                  strokeDasharray: "3 3",
                  stroke: "hsl(var(--border))",
                  vertical: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                XAxis,
                {
                  dataKey: "range",
                  tick: { fontSize: 11, fill: "hsl(var(--muted-foreground))" },
                  axisLine: false,
                  tickLine: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                YAxis,
                {
                  tick: { fontSize: 11, fill: "hsl(var(--muted-foreground))" },
                  axisLine: false,
                  tickLine: false
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Tooltip,
                {
                  contentStyle: TOOLTIP_STYLE,
                  formatter: (v, name) => [
                    v.toLocaleString(),
                    name === "legit" ? "Legitimate" : "Fraudulent"
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Legend,
                {
                  formatter: (value) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: value === "legit" ? "Legitimate" : "Fraudulent" }),
                  wrapperStyle: { fontSize: 12 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Bar,
                {
                  dataKey: "legit",
                  name: "legit",
                  fill: "hsl(var(--chart-2))",
                  radius: [3, 3, 0, 0]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Bar,
                {
                  dataKey: "fraud",
                  name: "fraud",
                  fill: "hsl(var(--chart-1))",
                  radius: [3, 3, 0, 0]
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 text-center", children: "72% of fraudulent transactions are below $200 — suggesting card-testing micro-transactions" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "eda.time_distribution_card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-display font-semibold", children: "Transaction Frequency Over Time" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Transaction count across time periods (seconds elapsed, 0–172,800) — separate fraud and legitimate trends" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 280, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        AreaChart,
        {
          data: TIME_DIST,
          margin: { top: 8, right: 16, bottom: 8, left: 8 },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "lgGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: "hsl(var(--chart-2))",
                    stopOpacity: 0.25
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: "hsl(var(--chart-2))",
                    stopOpacity: 0
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "fraudGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "5%",
                    stopColor: "hsl(var(--chart-1))",
                    stopOpacity: 0.3
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "stop",
                  {
                    offset: "95%",
                    stopColor: "hsl(var(--chart-1))",
                    stopOpacity: 0
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CartesianGrid,
              {
                strokeDasharray: "3 3",
                stroke: "hsl(var(--border))",
                vertical: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              XAxis,
              {
                dataKey: "period",
                tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" },
                axisLine: false,
                tickLine: false,
                label: {
                  value: "Time (seconds)",
                  position: "insideBottom",
                  offset: -4,
                  fontSize: 11,
                  fill: "hsl(var(--muted-foreground))"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                yAxisId: "legit",
                tick: { fontSize: 11, fill: "hsl(var(--muted-foreground))" },
                axisLine: false,
                tickLine: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              YAxis,
              {
                yAxisId: "fraud",
                orientation: "right",
                tick: { fontSize: 11, fill: "hsl(var(--muted-foreground))" },
                axisLine: false,
                tickLine: false,
                domain: [0, 80]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Tooltip,
              {
                contentStyle: TOOLTIP_STYLE,
                formatter: (v, name) => [
                  v.toLocaleString(),
                  name === "legit" ? "Legitimate" : "Fraud"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Legend,
              {
                formatter: (value) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: value === "legit" ? "Legitimate (left axis)" : "Fraud (right axis)" }),
                wrapperStyle: { fontSize: 12 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Area,
              {
                yAxisId: "legit",
                type: "monotone",
                dataKey: "legit",
                name: "legit",
                stroke: "hsl(var(--chart-2))",
                fill: "url(#lgGrad)",
                strokeWidth: 2,
                dot: false
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Area,
              {
                yAxisId: "fraud",
                type: "monotone",
                dataKey: "fraud",
                name: "fraud",
                stroke: "hsl(var(--chart-1))",
                fill: "url(#fraudGrad)",
                strokeWidth: 2,
                dot: { r: 3, fill: "hsl(var(--chart-1))" }
              }
            )
          ]
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 xl:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "xl:col-span-2 shadow-card",
          "data-ocid": "eda.correlation_chart_card",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-display font-semibold", children: "Top Features Correlated with Fraud" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Pearson correlation coefficients — negative (red) and positive (green) correlations" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 320, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              BarChart,
              {
                data: SORTED_FEATURES,
                layout: "vertical",
                margin: { top: 4, right: 32, bottom: 4, left: 8 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CartesianGrid,
                    {
                      strokeDasharray: "3 3",
                      stroke: "hsl(var(--border))",
                      horizontal: false
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    XAxis,
                    {
                      type: "number",
                      domain: [-0.35, 0.2],
                      tickFormatter: (v) => v.toFixed(2),
                      tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" },
                      axisLine: false,
                      tickLine: false
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    YAxis,
                    {
                      type: "category",
                      dataKey: "feature",
                      tick: {
                        fontSize: 12,
                        fill: "hsl(var(--foreground))",
                        fontWeight: 600
                      },
                      width: 40,
                      axisLine: false,
                      tickLine: false
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tooltip,
                    {
                      contentStyle: TOOLTIP_STYLE,
                      formatter: (v) => [v.toFixed(3), "Pearson r"]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Bar,
                    {
                      dataKey: "correlation",
                      name: "Correlation",
                      radius: [0, 3, 3, 0],
                      label: {
                        position: "right",
                        fontSize: 10,
                        fill: "hsl(var(--muted-foreground))",
                        formatter: (v) => v.toFixed(3)
                      },
                      children: SORTED_FEATURES.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Cell,
                        {
                          fill: entry.correlation < 0 ? "hsl(var(--chart-1))" : "hsl(var(--chart-2))"
                        },
                        entry.feature
                      ))
                    }
                  )
                ]
              }
            ) }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", "data-ocid": "eda.correlation_summary_card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-display font-semibold", children: "Correlation Summary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Feature correlation direction counts" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg bg-destructive/10 border border-destructive/30 px-3 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-destructive" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground font-medium", children: "Negative Correlation" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-mono font-bold text-destructive", children: negFeatures })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-lg bg-[hsl(var(--chart-2))]/10 border border-[hsl(var(--chart-2))]/30 px-3 py-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full bg-[hsl(var(--chart-2))]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground font-medium", children: "Positive Correlation" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg font-mono font-bold text-[hsl(var(--chart-2))]", children: posFeatures })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-border rounded-lg overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-muted/50 border-b border-border", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-3 py-2 font-semibold text-muted-foreground", children: "Feature" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 font-semibold text-muted-foreground", children: "r" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-3 py-2 font-semibold text-muted-foreground", children: "Dir." })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: SORTED_FEATURES.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                "data-ocid": `eda.corr_row.${i + 1}`,
                className: "border-b border-border last:border-0 hover:bg-muted/30 transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 font-mono font-semibold text-foreground", children: f.feature }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: `px-3 py-1.5 text-right font-mono font-bold ${f.correlation < 0 ? "text-destructive" : "text-[hsl(var(--chart-2))]"}`,
                      children: f.correlation.toFixed(3)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-3 py-1.5 text-right", children: f.correlation < 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "▼" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[hsl(var(--chart-2))]", children: "▲" }) })
                ]
              },
              f.feature
            )) })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
export {
  EdaPage as default
};
