import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, b as Skeleton, a as Brain } from "./index-obkfj5IL.js";
import { d as useFeatureImportance, B as Badge } from "./use-fraud-data-uqLV_foy.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, d as CardDescription } from "./data-CVZMXs0E.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-B8ScwOob.js";
import { R as ResponsiveContainer, T as Tooltip, B as Bar, C as Cell, F as ReferenceLine } from "./generateCategoricalChart-BW2Go5AY.js";
import { B as BarChart } from "./BarChart-EaK9PYVo.js";
import { C as CartesianGrid, X as XAxis, Y as YAxis } from "./YAxis-C-6M5L6F.js";
import { T as TrendingUp } from "./trending-up-DBrB_6qT.js";
import { L as LineChart, a as Line } from "./LineChart-B5-pSQlI.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
];
const CircleAlert = createLucideIcon("circle-alert", __iconNode);
const REQUIRED_FEATURES = [
  {
    feature: "V17",
    importance: 0.142,
    description: "Top fraud pattern component — extreme negative values (< −4.0) strongly predict fraud"
  },
  {
    feature: "V14",
    importance: 0.121,
    description: "Best standalone predictor — encodes merchant category & card-present anomalies"
  },
  {
    feature: "V12",
    importance: 0.098,
    description: "Spending velocity component — burst purchases after card compromise"
  },
  {
    feature: "V10",
    importance: 0.087,
    description: "Merchant category signal — fraudsters target specific merchant types"
  },
  {
    feature: "V11",
    importance: 0.076,
    description: "Time-of-day behavioral signal — off-hours transactions score higher"
  },
  {
    feature: "V16",
    importance: 0.071,
    description: "Behavioral fingerprint component — deviations from cardholder baseline"
  },
  {
    feature: "V3",
    importance: 0.065,
    description: "Account age and transaction history signal"
  },
  {
    feature: "V4",
    importance: 0.058,
    description: "Geographic and network signal — location anomalies"
  },
  {
    feature: "V7",
    importance: 0.053,
    description: "Device fingerprint component — card-not-present risk indicator"
  },
  {
    feature: "V9",
    importance: 0.048,
    description: "Authentication strength signal — weak auth correlates with fraud"
  },
  {
    feature: "V2",
    importance: 0.043,
    description: "Network-level signal — IP and BIN block anomalies"
  },
  {
    feature: "V19",
    importance: 0.038,
    description: "Transaction sequence signal — unusual ordering patterns"
  },
  {
    feature: "V21",
    importance: 0.034,
    description: "Authentication channel signal — 3DS vs non-3DS"
  },
  {
    feature: "V5",
    importance: 0.029,
    description: "Card type and issuer signal"
  },
  {
    feature: "Amount",
    importance: 0.025,
    description: "Transaction amount (EUR) — 72% of fraud clusters below €200 (card-testing)"
  }
];
const TOP_INSIGHTS = [
  {
    name: "V17",
    rank: 1,
    pct: "14.2%",
    color: "bg-primary/15 text-primary border-primary/30",
    insight: "Encodes latent transaction-pattern features via PCA. Strong negative V17 values (< −4.0) are a reliable early-warning signal for card fraud."
  },
  {
    name: "V14",
    rank: 2,
    pct: "12.1%",
    color: "bg-chart-4/15 text-chart-4 border-chart-4/30",
    insight: "Highest single-feature fraud discriminator. Threshold V14 < −5.5 identifies 74% of fraud cases alone — ideal for real-time alerting."
  },
  {
    name: "V12",
    rank: 3,
    pct: "9.8%",
    color: "bg-chart-3/15 text-chart-3 border-chart-3/30",
    insight: "Captures spending velocity deviations. Rapid sequential purchases after initial card compromise produce extreme V12 responses."
  }
];
function barColor(importance) {
  if (importance >= 0.13) return "oklch(0.48 0.20 260)";
  if (importance >= 0.1) return "oklch(0.53 0.19 255)";
  if (importance >= 0.07) return "oklch(0.58 0.17 250)";
  if (importance >= 0.05) return "oklch(0.64 0.15 245)";
  if (importance >= 0.03) return "oklch(0.69 0.12 240)";
  return "oklch(0.75 0.08 235)";
}
function CustomTooltip({ active, payload }) {
  if (!active || !(payload == null ? void 0 : payload.length)) return null;
  const d = payload[0].payload;
  if (!d) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg p-3 shadow-elevated max-w-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground", children: d.feature }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-primary font-mono text-sm mt-0.5", children: [
      "Importance: ",
      (d.importance * 100).toFixed(1),
      "%"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-1 leading-relaxed", children: d.description })
  ] });
}
function FeatureImportancePage() {
  const { data: hookData, isLoading } = useFeatureImportance();
  const features = REQUIRED_FEATURES;
  const total = reactExports.useMemo(
    () => features.reduce((s, f) => s + f.importance, 0),
    [features]
  );
  const cumulativeData = reactExports.useMemo(() => {
    let cum = 0;
    return features.map((f, i) => {
      cum += f.importance;
      return {
        n: i + 1,
        cumulative: Number.parseFloat((cum / total * 100).toFixed(1))
      };
    });
  }, [features, total]);
  const tableData = reactExports.useMemo(
    () => features.map((f) => ({
      ...f,
      pct: (f.importance / total * 100).toFixed(1)
    })),
    [features, total]
  );
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "p-6 space-y-6",
        "data-ocid": "feature-importance.loading_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-10 w-80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-32" }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-96" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", "data-ocid": "feature-importance.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Feature Importance Analysis" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm max-w-2xl", children: "Random Forest (n_estimators=100, SMOTE-balanced) importance scores for the top 15 predictors from the Kaggle Credit Card Fraud Detection dataset. V1–V28 are PCA-transformed, anonymized features." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "secondary",
          className: "flex items-center gap-1.5 text-xs mt-1 shrink-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-3 h-3" }),
            features.length,
            " Features"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "feature-importance.insights-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground text-sm", children: "Top Feature Insights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "— PCA components most correlated with fraud" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: TOP_INSIGHTS.map((feat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border shadow-card",
          "data-ocid": `feature-importance.insight-card.${feat.rank}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2 pt-4 px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground font-mono", children: [
                  "#",
                  feat.rank
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-base font-display", children: feat.name })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `text-xs border ${feat.color}`, children: feat.pct })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "px-4 pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: feat.insight }) })
          ]
        },
        feat.name
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border shadow-card",
        "data-ocid": "feature-importance.bar-chart",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-base", children: "Feature Importance Scores" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Top 15 features ranked by mean decrease in impurity (MDI)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 440, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            BarChart,
            {
              data: features,
              layout: "vertical",
              margin: { top: 4, right: 64, left: 16, bottom: 4 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  CartesianGrid,
                  {
                    strokeDasharray: "3 3",
                    horizontal: false,
                    stroke: "hsl(var(--border))"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  XAxis,
                  {
                    type: "number",
                    tickFormatter: (v) => `${(v * 100).toFixed(0)}%`,
                    tick: { fontSize: 11, fill: "hsl(var(--muted-foreground))" },
                    axisLine: false,
                    tickLine: false,
                    domain: [0, 0.17]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  YAxis,
                  {
                    type: "category",
                    dataKey: "feature",
                    width: 58,
                    tick: {
                      fontSize: 12,
                      fill: "hsl(var(--foreground))",
                      fontFamily: "var(--font-mono)"
                    },
                    axisLine: false,
                    tickLine: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    content: /* @__PURE__ */ jsxRuntimeExports.jsx(CustomTooltip, {}),
                    cursor: { fill: "hsl(var(--muted))" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Bar,
                  {
                    dataKey: "importance",
                    radius: [0, 3, 3, 0],
                    label: {
                      position: "right",
                      formatter: (v) => `${(v * 100).toFixed(1)}%`,
                      fontSize: 11,
                      fill: "hsl(var(--muted-foreground))"
                    },
                    children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: barColor(f.importance) }, f.feature))
                  }
                )
              ]
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border shadow-card",
        "data-ocid": "feature-importance.cumulative-chart",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "w-4 h-4 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-base", children: "Cumulative Importance Coverage" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "How many top-ranked features are needed to explain X% of total model importance" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 260, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              LineChart,
              {
                data: cumulativeData,
                margin: { top: 8, right: 32, left: 0, bottom: 16 },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    CartesianGrid,
                    {
                      strokeDasharray: "3 3",
                      stroke: "hsl(var(--border))"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    XAxis,
                    {
                      dataKey: "n",
                      label: {
                        value: "# of Features",
                        position: "insideBottom",
                        offset: -8,
                        fontSize: 11,
                        fill: "hsl(var(--muted-foreground))"
                      },
                      tick: { fontSize: 11, fill: "hsl(var(--muted-foreground))" },
                      axisLine: false,
                      tickLine: false
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    YAxis,
                    {
                      tickFormatter: (v) => `${v}%`,
                      tick: { fontSize: 11, fill: "hsl(var(--muted-foreground))" },
                      axisLine: false,
                      tickLine: false,
                      domain: [0, 105]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Tooltip,
                    {
                      formatter: (v) => [`${v}%`, "Cumulative Importance"],
                      contentStyle: {
                        background: "hsl(var(--card))",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "8px",
                        fontSize: "12px"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ReferenceLine,
                    {
                      y: 80,
                      stroke: "hsl(var(--chart-1) / 0.7)",
                      strokeDasharray: "4 3",
                      label: {
                        value: "80%",
                        fill: "hsl(var(--chart-1))",
                        fontSize: 11,
                        position: "insideTopRight"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    ReferenceLine,
                    {
                      y: 90,
                      stroke: "hsl(var(--chart-2) / 0.7)",
                      strokeDasharray: "4 3",
                      label: {
                        value: "90%",
                        fill: "hsl(var(--chart-2))",
                        fontSize: 11,
                        position: "insideTopRight"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Line,
                    {
                      type: "monotone",
                      dataKey: "cumulative",
                      stroke: "hsl(var(--primary))",
                      strokeWidth: 2.5,
                      dot: { r: 3, fill: "hsl(var(--primary))", strokeWidth: 0 },
                      activeDot: { r: 5 }
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-5 mt-1 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Top 5 → ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "~52% coverage" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Top 8 → ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "~73% coverage" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Top 12 →",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "~89% coverage" })
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border shadow-card", "data-ocid": "feature-importance.table", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-base", children: "Feature Importance Table" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Full ranked list with importance scores, percentages, and descriptions" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-muted/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 font-display font-semibold text-muted-foreground text-xs uppercase tracking-wide", children: "Rank" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 font-display font-semibold text-muted-foreground text-xs uppercase tracking-wide", children: "Feature" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-5 py-3 font-display font-semibold text-muted-foreground text-xs uppercase tracking-wide", children: "Score" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right px-5 py-3 font-display font-semibold text-muted-foreground text-xs uppercase tracking-wide", children: "Percentage" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 font-display font-semibold text-muted-foreground text-xs uppercase tracking-wide hidden md:table-cell", children: "Description" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: tableData.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "tr",
          {
            className: "border-b border-border/50 hover:bg-muted/30 transition-colors",
            "data-ocid": `feature-importance.table-row.${i + 1}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-3 font-mono text-xs text-muted-foreground", children: [
                "#",
                i + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-foreground", children: row.feature }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-right font-mono text-primary", children: row.importance.toFixed(3) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-end gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 bg-muted rounded-full h-1.5 overflow-hidden hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "h-full rounded-full",
                    style: {
                      width: `${row.pct}%`,
                      background: barColor(row.importance)
                    }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-muted-foreground text-xs w-10 text-right", children: [
                  row.pct,
                  "%"
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-3 text-muted-foreground hidden md:table-cell text-xs max-w-sm truncate", children: row.description })
            ]
          },
          row.feature
        )) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2 p-3 rounded-lg bg-muted/40 border border-border text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-3.5 h-3.5 mt-0.5 shrink-0 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Feature names V1–V28 are PCA-transformed and anonymized due to confidentiality constraints. Importance derived from Random Forest trained on SMOTE-balanced Credit Card Fraud Detection data (Kaggle, 284,807 transactions)." })
    ] })
  ] });
}
export {
  FeatureImportancePage as default
};
