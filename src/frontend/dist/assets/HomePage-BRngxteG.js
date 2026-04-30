import { c as createLucideIcon, j as jsxRuntimeExports, S as ShieldAlert, L as Link, B as Button, a as Brain } from "./index-obkfj5IL.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent, F as FALLBACK_EDA_STATS } from "./data-CVZMXs0E.js";
import { C as ChartNoAxesColumn } from "./chart-no-axes-column-B8ScwOob.js";
import { T as TriangleAlert, C as CircleCheck } from "./triangle-alert-CIvE9Xob.js";
import { R as ResponsiveContainer, C as Cell, T as Tooltip, L as Legend } from "./generateCategoricalChart-BW2Go5AY.js";
import { P as PieChart, a as Pie } from "./PieChart-CKBE5VGY.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }]
];
const Database = createLucideIcon("database", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2",
      key: "18mbvz"
    }
  ],
  ["path", { d: "M6.453 15h11.094", key: "3shlmq" }],
  ["path", { d: "M8.5 2h7", key: "csnxdl" }]
];
const FlaskConical = createLucideIcon("flask-conical", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2",
      key: "wuwx1p"
    }
  ]
];
const Sigma = createLucideIcon("sigma", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M16 17h6v-6", key: "t6n2it" }],
  ["path", { d: "m22 17-8.5-8.5-5 5L2 7", key: "x473p" }]
];
const TrendingDown = createLucideIcon("trending-down", __iconNode);
const ACCENT_BORDER = {
  red: "border-l-4 border-l-[oklch(0.55_0.22_25)]",
  green: "border-l-4 border-l-[oklch(0.65_0.18_145)]",
  blue: "border-l-4 border-l-[oklch(0.72_0.18_250)]",
  neutral: "border-l-4 border-l-border"
};
const ICON_BG = {
  red: "bg-[oklch(0.55_0.22_25/0.15)] text-[oklch(0.7_0.22_25)]",
  green: "bg-[oklch(0.65_0.18_145/0.15)] text-[oklch(0.75_0.18_145)]",
  blue: "bg-[oklch(0.72_0.18_250/0.15)] text-[oklch(0.82_0.18_250)]",
  neutral: "bg-muted text-muted-foreground"
};
const VALUE_COLOR = {
  red: "text-[oklch(0.7_0.22_25)]",
  green: "text-[oklch(0.75_0.18_145)]",
  blue: "text-[oklch(0.82_0.18_250)]",
  neutral: "text-foreground"
};
function KpiCard({
  title,
  value,
  subtitle,
  icon,
  accentColor,
  ocid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: `${ACCENT_BORDER[accentColor]} transition-smooth hover:shadow-elevated`,
      "data-ocid": ocid,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-5 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono uppercase tracking-wide truncate", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: `text-3xl font-display font-bold mt-1.5 ${VALUE_COLOR[accentColor]}`,
              children: value
            }
          ),
          subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-snug", children: subtitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: `p-2.5 rounded-lg flex-shrink-0 ${ICON_BG[accentColor]}`,
            children: icon
          }
        )
      ] }) })
    }
  );
}
const BADGE_STYLES = {
  red: "bg-[oklch(0.55_0.22_25/0.18)] text-[oklch(0.72_0.22_25)] border-[oklch(0.55_0.22_25/0.4)]",
  green: "bg-[oklch(0.55_0.18_145/0.18)] text-[oklch(0.72_0.18_145)] border-[oklch(0.55_0.18_145/0.4)]",
  blue: "bg-[oklch(0.5_0.18_250/0.18)] text-[oklch(0.78_0.18_250)] border-[oklch(0.5_0.18_250/0.4)]",
  purple: "bg-[oklch(0.5_0.18_280/0.18)] text-[oklch(0.78_0.18_280)] border-[oklch(0.5_0.18_280/0.4)]",
  orange: "bg-[oklch(0.6_0.18_55/0.18)] text-[oklch(0.78_0.18_55)] border-[oklch(0.6_0.18_55/0.4)]",
  teal: "bg-[oklch(0.55_0.18_185/0.18)] text-[oklch(0.75_0.18_185)] border-[oklch(0.55_0.18_185/0.4)]"
};
function TechBadge({ label, color }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: `inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono font-medium border ${BADGE_STYLES[color]}`,
      children: label
    }
  );
}
function PieTooltip({
  active,
  payload
}) {
  if (!active || !(payload == null ? void 0 : payload.length)) return null;
  const item = payload[0];
  const total = 284807;
  const pct = (item.value / total * 100).toFixed(2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-lg px-3 py-2 shadow-elevated text-xs", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: item.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground", children: [
      item.value.toLocaleString(),
      " (",
      pct,
      "%)"
    ] })
  ] });
}
function NavCard({
  path,
  icon,
  iconBg,
  title,
  desc,
  ocid,
  btnOcid
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: "border-border transition-smooth hover:shadow-elevated hover:border-primary/30 group",
      "data-ocid": ocid,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `inline-flex p-2.5 rounded-lg mb-3 ${iconBg}`, children: icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-display font-semibold text-foreground mb-1.5 leading-snug", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed mb-4", children: desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: path, "data-ocid": btnOcid, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "ghost",
            size: "sm",
            className: "w-full justify-center text-xs border border-border hover:bg-muted transition-smooth",
            children: "Open →"
          }
        ) })
      ] })
    }
  );
}
function HomePage() {
  const stats = FALLBACK_EDA_STATS;
  const pieData = [
    {
      name: "Legitimate",
      value: stats.legitimateCount,
      color: "oklch(0.65 0.18 145)"
    },
    { name: "Fraud", value: stats.fraudCount, color: "oklch(0.55 0.22 25)" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "rounded-xl bg-card border border-border p-8 relative overflow-hidden",
        "data-ocid": "home.hero.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 pointer-events-none overflow-hidden rounded-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[oklch(0.55_0.22_25/0.07)] blur-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[oklch(0.72_0.18_250/0.07)] blur-3xl" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-3xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-[oklch(0.7_0.22_25)]" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono text-muted-foreground uppercase tracking-widest", children: "Research Dashboard · Kaggle Dataset" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight mb-3", children: [
              "Credit Card Fraud Detection",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[oklch(0.72_0.18_250)] mt-1 text-2xl sm:text-3xl", children: "using Traditional Machine Learning & Generative AI" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed mb-6 max-w-2xl", children: [
              "A comprehensive analysis of",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "284,807 real-world credit card transactions" }),
              " ",
              "from the Kaggle ULB dataset. Combines",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[oklch(0.78_0.18_250)] font-medium", children: "8 classical ML classifiers" }),
              " ",
              "with a deep-learning",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[oklch(0.78_0.18_280)] font-medium", children: "autoencoder" }),
              " ",
              "for unsupervised anomaly detection — addressing severe class imbalance (0.17% fraud rate) using SMOTE resampling."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex flex-wrap gap-3",
                "data-ocid": "home.hero_cta.section",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/eda", "data-ocid": "home.hero_eda.button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      size: "default",
                      className: "font-medium bg-primary text-primary-foreground hover:opacity-90 transition-smooth",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4 mr-2" }),
                        "Explore EDA"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/ml-models", "data-ocid": "home.hero_ml.button", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "default",
                      className: "font-medium border-border hover:bg-muted transition-smooth",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-4 h-4 mr-2" }),
                        "View ML Models"
                      ]
                    }
                  ) })
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "home.kpi.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4", children: "Dataset Overview" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          KpiCard,
          {
            title: "Total Transactions",
            value: "284,807",
            subtitle: "European cardholders, Sep 2013",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "w-5 h-5" }),
            accentColor: "neutral",
            ocid: "home.total_transactions.card"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          KpiCard,
          {
            title: "Fraud Cases",
            value: "492",
            subtitle: "Confirmed fraudulent transactions",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5" }),
            accentColor: "red",
            ocid: "home.fraud_cases.card"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          KpiCard,
          {
            title: "Fraud Rate",
            value: "0.17%",
            subtitle: "Highly imbalanced · requires SMOTE",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingDown, { className: "w-5 h-5" }),
            accentColor: "red",
            ocid: "home.fraud_rate.card"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          KpiCard,
          {
            title: "Legitimate Transactions",
            value: "284,315",
            subtitle: "99.83% of all transactions",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }),
            accentColor: "green",
            ocid: "home.legit_transactions.card"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          KpiCard,
          {
            title: "Dataset Features",
            value: "30",
            subtitle: "Time · Amount · V1–V28 (PCA-transformed)",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sigma, { className: "w-5 h-5" }),
            accentColor: "blue",
            ocid: "home.dataset_features.card"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        className: "grid grid-cols-1 lg:grid-cols-5 gap-6",
        "data-ocid": "home.overview.section",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "lg:col-span-3 border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-display flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-4 h-4 text-[oklch(0.78_0.18_280)]" }),
              "Project Overview"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4 text-sm text-muted-foreground leading-relaxed", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "This project applies both",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "traditional supervised learning" }),
                " ",
                "and",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[oklch(0.78_0.18_280)] font-medium", children: "generative AI" }),
                " ",
                "techniques to detect credit card fraud on the widely-used Kaggle ULB dataset. Eight classical classifiers are trained after SMOTE oversampling to address severe class imbalance, then benchmarked on accuracy, F1-score, ROC-AUC, precision, and recall."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "A deep-learning",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: "autoencoder" }),
                " ",
                "is trained exclusively on legitimate transactions. At inference time, high reconstruction error signals anomalous (potentially fraudulent) behaviour — achieving",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[oklch(0.75_0.18_145)] font-medium", children: "ROC-AUC 0.947" }),
                " ",
                "without any fraud labels during training."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
                "All 30 features (V1–V28 are PCA-transformed to protect cardholder privacy, plus",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-foreground", children: "Amount" }),
                " ",
                "and",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "font-mono text-xs bg-muted px-1.5 py-0.5 rounded text-foreground", children: "Time" }),
                ") are analyzed via feature importance from the best-performing Random Forest model."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-2 border-t border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3", children: "Technology Stack" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-wrap gap-2",
                    "data-ocid": "home.tech_badges.section",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TechBadge, { label: "Python", color: "blue" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TechBadge, { label: "Scikit-learn", color: "orange" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TechBadge, { label: "Keras / TensorFlow", color: "red" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TechBadge, { label: "Recharts", color: "green" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TechBadge, { label: "React", color: "teal" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(TechBadge, { label: "Motoko", color: "purple" })
                    ]
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Card,
            {
              className: "lg:col-span-2 border-border",
              "data-ocid": "home.class_distribution.card",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-display flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-4 h-4 text-[oklch(0.72_0.18_250)]" }),
                    "Class Distribution"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Fraud vs. Legitimate breakdown" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 190, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(PieChart, { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Pie,
                      {
                        data: pieData,
                        cx: "50%",
                        cy: "50%",
                        innerRadius: 52,
                        outerRadius: 80,
                        paddingAngle: 3,
                        dataKey: "value",
                        stroke: "none",
                        children: pieData.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { fill: entry.color }, entry.name))
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { content: /* @__PURE__ */ jsxRuntimeExports.jsx(PieTooltip, {}) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Legend,
                      {
                        iconType: "circle",
                        iconSize: 8,
                        formatter: (value) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: value })
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-2 gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[oklch(0.65_0.18_145/0.1)] border border-[oklch(0.65_0.18_145/0.3)] rounded-lg p-3 text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-[oklch(0.75_0.18_145)]", children: "99.83%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Legitimate" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[oklch(0.55_0.22_25/0.1)] border border-[oklch(0.55_0.22_25/0.3)] rounded-lg p-3 text-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-[oklch(0.7_0.22_25)]", children: "0.17%" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Fraud" })
                    ] })
                  ] })
                ] })
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "home.quicknav.section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4", children: "Explore the Analysis" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          NavCard,
          {
            path: "/eda",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ChartNoAxesColumn, { className: "w-5 h-5" }),
            iconBg: "bg-[oklch(0.5_0.18_250/0.15)] text-[oklch(0.78_0.18_250)]",
            title: "Exploratory Data Analysis",
            desc: "Class distribution, amount histograms, time-of-day patterns, and feature correlation heatmaps.",
            ocid: "home.eda_nav.card",
            btnOcid: "home.eda_nav.button"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          NavCard,
          {
            path: "/ml-models",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "w-5 h-5" }),
            iconBg: "bg-[oklch(0.5_0.18_280/0.15)] text-[oklch(0.78_0.18_280)]",
            title: "ML Model Comparison",
            desc: "8 classifiers benchmarked — accuracy, F1-score, ROC-AUC, confusion matrix, and precision-recall.",
            ocid: "home.ml_nav.card",
            btnOcid: "home.ml_nav.button"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          NavCard,
          {
            path: "/generative-ai",
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(FlaskConical, { className: "w-5 h-5" }),
            iconBg: "bg-[oklch(0.5_0.18_145/0.15)] text-[oklch(0.75_0.18_145)]",
            title: "Generative AI Autoencoder",
            desc: "Unsupervised anomaly detection via reconstruction error thresholding — no fraud labels needed.",
            ocid: "home.genai_nav.card",
            btnOcid: "home.genai_nav.button"
          }
        )
      ] })
    ] })
  ] });
}
export {
  HomePage as default
};
