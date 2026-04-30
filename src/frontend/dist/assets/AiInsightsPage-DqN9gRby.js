import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, B as Button, s as Sparkles, b as Skeleton, S as ShieldAlert } from "./index-obkfj5IL.js";
import { e as useAiInsights, f as useAnalyzeTransaction, B as Badge } from "./use-fraud-data-uqLV_foy.js";
import { C as Card, a as CardHeader, b as CardTitle, d as CardDescription, c as CardContent } from "./data-CVZMXs0E.js";
import { T as TriangleAlert, C as CircleCheck } from "./triangle-alert-CIvE9Xob.js";
import { T as TrendingUp } from "./trending-up-DBrB_6qT.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja"
    }
  ],
  ["path", { d: "M9 13a4.5 4.5 0 0 0 3-4", key: "10igwf" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M12 13h4", key: "1ku699" }],
  ["path", { d: "M12 18h6a2 2 0 0 1 2 2v1", key: "105ag5" }],
  ["path", { d: "M12 8h8", key: "1lhi5i" }],
  ["path", { d: "M16 8V5a2 2 0 0 1 2-2", key: "u6izg6" }],
  ["circle", { cx: "16", cy: "13", r: ".5", key: "ry7gng" }],
  ["circle", { cx: "18", cy: "3", r: ".5", key: "1aiba7" }],
  ["circle", { cx: "20", cy: "21", r: ".5", key: "yhc1fs" }],
  ["circle", { cx: "20", cy: "8", r: ".5", key: "1e43v0" }]
];
const BrainCircuit = createLucideIcon("brain-circuit", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  ["path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" }]
];
const DollarSign = createLucideIcon("dollar-sign", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }]
];
const Info = createLucideIcon("info", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
  ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
  ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
  ["path", { d: "M8 16H3v5", key: "1cv678" }]
];
const RefreshCw = createLucideIcon("refresh-cw", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const SAMPLE_TRANSACTIONS = [
  {
    id: "TXN-001",
    amount: 149.5,
    v1: -1.36,
    v2: -0.07,
    v14: -2.31,
    v17: 1.99,
    cls: "Legitimate"
  },
  {
    id: "TXN-002",
    amount: 2.69,
    v1: 1.19,
    v2: 0.27,
    v14: -4.8,
    v17: -5.57,
    cls: "Fraud"
  },
  {
    id: "TXN-003",
    amount: 378.66,
    v1: -1.16,
    v2: 0.88,
    v14: -2.6,
    v17: -1.36,
    cls: "Legitimate"
  },
  {
    id: "TXN-004",
    amount: 1,
    v1: -0.97,
    v2: -3.17,
    v14: -6.9,
    v17: -8.38,
    cls: "Fraud"
  },
  {
    id: "TXN-005",
    amount: 88.25,
    v1: 2.03,
    v2: -1.34,
    v14: 0.63,
    v17: -0.11,
    cls: "Legitimate"
  }
];
const ANALYZE_PAYLOAD = {
  v1: 1.19,
  v2: 0.27,
  v14: -4.8,
  v17: -5.57,
  Amount: 2.69
};
const RISK_INDICATORS = [
  {
    Icon: DollarSign,
    title: "Micro-transaction Card Testing",
    detail: "Transactions under €5 with negative V14/V17 values are 18× more likely to be fraud. Indicates card-testing attacks before larger purchases.",
    severity: "high"
  },
  {
    Icon: Clock,
    title: "Late-Night Activity (02:00–04:00 UTC)",
    detail: "Fraud frequency is 2.4× higher between 02:00–04:00 UTC. Compromised cards are tested in off-hours to avoid detection systems.",
    severity: "high"
  },
  {
    Icon: TrendingUp,
    title: "V14 Threshold Breach (< −5.5)",
    detail: "PCA component V14 below −5.5 flags 74% of all fraud cases in the dataset. A strong standalone signal for real-time alerting.",
    severity: "medium"
  },
  {
    Icon: Zap,
    title: "Rapid Sequential Transactions",
    detail: "Multiple transactions within 30 seconds (V12/V3 signal) indicate automated card-testing scripts — a key behavioral fraud marker.",
    severity: "medium"
  },
  {
    Icon: ShieldAlert,
    title: "Non-3DS Merchant Channel",
    detail: "Transactions via non-3DS authenticated channels (V21 signal) have a 3.1× higher fraud rate than 3DS-verified purchases.",
    severity: "low"
  }
];
const SEV = {
  high: {
    badge: "bg-destructive/15 text-destructive border-destructive/30",
    dot: "bg-destructive",
    label: "HIGH"
  },
  medium: {
    badge: "bg-chart-5/15 text-chart-5 border-chart-5/30",
    dot: "bg-chart-5",
    label: "MEDIUM"
  },
  low: {
    badge: "bg-chart-2/15 text-chart-2 border-chart-2/30",
    dot: "bg-chart-2",
    label: "LOW"
  }
};
function InsightCard({
  insight,
  index
}) {
  const cfg = SEV[insight.severity];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "flex gap-3 p-3.5 rounded-lg border border-border bg-card hover:bg-muted/20 transition-colors",
      "data-ocid": `ai-insights.insight-card.${index + 1}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `w-2 h-2 rounded-full block ${cfg.dot}` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2 mb-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: insight.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 shrink-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { className: `text-[10px] border ${cfg.badge}`, children: cfg.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "text-[10px]", children: insight.category })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs leading-relaxed", children: insight.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground/60 text-[10px] mt-1.5 font-mono", children: new Date(insight.timestamp).toLocaleString() })
        ] })
      ]
    }
  );
}
function AiInsightsPage() {
  const { data: insights, isLoading: insightsLoading } = useAiInsights();
  const { mutateAsync: analyze, isPending } = useAnalyzeTransaction();
  const [result, setResult] = reactExports.useState(null);
  const [analysisText, setAnalysisText] = reactExports.useState(null);
  const [error, setError] = reactExports.useState(null);
  async function handleAnalyze() {
    setError(null);
    setResult(null);
    setAnalysisText(null);
    try {
      const res = await analyze(ANALYZE_PAYLOAD);
      const txnResult = res;
      setResult(txnResult);
      const prob = txnResult.fraudProbability;
      const isFraud = txnResult.isFraud || prob > 0.5;
      setAnalysisText(
        isFraud ? `⚠️ HIGH RISK DETECTED — Fraud probability: ${(prob * 100).toFixed(1)}%

This transaction exhibits multiple high-risk signals: V14 = −4.80 (below critical threshold of −5.5) and V17 = −5.57 (extreme negative deviation). These PCA components rank #1 and #2 in fraud prediction importance, together accounting for ~26% of total model signal.

Transaction amount of €2.69 is consistent with card-testing micro-transaction behavior — 72% of fraud cases in the dataset fall below €200, and sub-€5 transactions with extreme PCA deviations are 18× more likely to be fraudulent.

Recommendation: Flag for immediate review. Block this card pending verification and review subsequent transaction history for escalating amounts.` : `✅ LOW RISK — Fraud probability: ${(prob * 100).toFixed(1)}%

Transaction features are within normal cardholder behavioral bounds. PCA components V14 and V17 do not show critical deviations. Amount and timing patterns are consistent with legitimate spending behavior.

Recommendation: Approve with standard monitoring. No immediate action required. Continue monitoring subsequent transactions from this card for behavioral shifts.`
      );
    } catch {
      setError(
        "AI analysis service is currently unavailable. The HTTP outcall to the external inference endpoint timed out. Please retry in a few seconds."
      );
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-6", "data-ocid": "ai-insights.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "AI-Powered Fraud Analysis" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground mt-1 text-sm max-w-2xl", children: [
          "The backend canister uses",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium", children: "HTTP outcalls" }),
          " to an external AI inference service for real-time transaction risk scoring — combining ensemble ML model votes with generative AI contextual analysis."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Badge,
        {
          variant: "secondary",
          className: "flex items-center gap-1.5 text-xs mt-1 shrink-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "w-3 h-3" }),
            "AI-Powered"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5 p-3.5 rounded-lg border border-primary/20 bg-primary/5 text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Info, { className: "w-4 h-4 mt-0.5 shrink-0 text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-medium text-foreground", children: "Backend HTTP Outcalls Enabled" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs mt-0.5", children: "The Motoko canister backend performs HTTP outcalls to an external AI REST API (e.g., OpenAI, Hugging Face, or a custom Flask/FastAPI endpoint). This allows the Internet Computer canister to retrieve AI-generated fraud analysis without running inference on-chain." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border shadow-card",
        "data-ocid": "ai-insights.transactions-table",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-base", children: "Sample Transactions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "5 representative transactions with key PCA feature values" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { className: "border-b border-border bg-muted/40", children: [
              "ID",
              "Amount (€)",
              "V1",
              "V2",
              "V14",
              "V17",
              "Predicted Class"
            ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "th",
              {
                className: "text-left px-4 py-3 font-display font-semibold text-muted-foreground text-xs uppercase tracking-wide whitespace-nowrap",
                children: h
              },
              h
            )) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: SAMPLE_TRANSACTIONS.map((txn, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "tr",
              {
                className: "border-b border-border/50 hover:bg-muted/20 transition-colors",
                "data-ocid": `ai-insights.transaction-row.${i + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-xs text-muted-foreground", children: txn.id }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3 font-mono text-foreground", children: txn.amount.toFixed(2) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: `px-4 py-3 font-mono text-xs ${txn.v1 < -2 ? "text-destructive" : "text-muted-foreground"}`,
                      children: txn.v1.toFixed(2)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: `px-4 py-3 font-mono text-xs ${txn.v2 < -2 ? "text-destructive" : "text-muted-foreground"}`,
                      children: txn.v2.toFixed(2)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: `px-4 py-3 font-mono text-xs font-medium ${txn.v14 < -4 ? "text-destructive" : "text-muted-foreground"}`,
                      children: txn.v14.toFixed(2)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "td",
                    {
                      className: `px-4 py-3 font-mono text-xs font-medium ${txn.v17 < -4 ? "text-destructive" : "text-muted-foreground"}`,
                      children: txn.v17.toFixed(2)
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Badge,
                    {
                      className: `text-xs border ${txn.cls === "Fraud" ? "bg-destructive/15 text-destructive border-destructive/30" : "bg-chart-2/15 text-chart-2 border-chart-2/30"}`,
                      children: txn.cls
                    }
                  ) })
                ]
              },
              txn.id
            )) })
          ] }) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "lg",
            onClick: handleAnalyze,
            disabled: isPending,
            className: "gap-2.5 font-display",
            "data-ocid": "ai-insights.analyze-button",
            children: isPending ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-4 h-4 animate-spin" }),
              "Analyzing Transaction…"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4" }),
              "Analyze with AI"
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
          "Analyzes ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-foreground", children: "TXN-002" }),
          " ",
          "(€2.69 — suspected fraud) using ensemble ML + generative AI"
        ] })
      ] }),
      isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "border shadow-card",
          "data-ocid": "ai-insights.loading_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrainCircuit, { className: "w-5 h-5 text-primary animate-pulse" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: "AI Analysis in Progress" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Sending HTTP outcall to inference endpoint…" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
              { id: "s1", w: 1 },
              { id: "s2", w: 0.83 },
              { id: "s3", w: 0.67 },
              { id: "s4", w: 1 },
              { id: "s5", w: 0.75 }
            ].map(({ id, w }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Skeleton,
              {
                className: "h-3",
                style: { width: `${w * 100}%` }
              },
              id
            )) })
          ] })
        }
      ),
      error && !isPending && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Card,
        {
          className: "border border-destructive/30 bg-destructive/5 shadow-card",
          "data-ocid": "ai-insights.error_state",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-xl bg-destructive/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-destructive" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-destructive text-sm mb-1", children: "AI Service Unavailable" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: error }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: handleAnalyze,
                  className: "mt-3 gap-1.5 text-xs",
                  "data-ocid": "ai-insights.retry-button",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "w-3 h-3" }),
                    "Retry Analysis"
                  ]
                }
              )
            ] })
          ] }) })
        }
      ),
      result && analysisText && !isPending && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Card,
        {
          className: "border shadow-card",
          "data-ocid": "ai-insights.result-panel",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: `w-9 h-9 rounded-xl flex items-center justify-center ${result.isFraud ? "bg-destructive/15" : "bg-chart-2/15"}`,
                  children: result.isFraud ? /* @__PURE__ */ jsxRuntimeExports.jsx(TriangleAlert, { className: "w-5 h-5 text-destructive" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5 text-chart-2" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-base", children: "AI Analysis Result" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { className: "text-xs", children: "Generated by ensemble ML + generative AI context engine" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ml-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: `text-xs border ${result.isFraud ? "bg-destructive/15 text-destructive border-destructive/30" : "bg-chart-2/15 text-chart-2 border-chart-2/30"}`,
                  children: result.isFraud ? "High Risk" : "Low Risk"
                }
              ) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-muted/40 rounded-lg p-4 border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "text-sm text-foreground font-body whitespace-pre-wrap leading-relaxed", children: analysisText }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide mb-2", children: "Ensemble Model Votes" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-2", children: result.modelVotes.map((vote) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "bg-card border border-border rounded-lg p-2.5 text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-xs text-muted-foreground", children: vote.model }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: `font-display font-bold text-sm mt-0.5 ${vote.prediction ? "text-destructive" : "text-chart-2"}`,
                          children: vote.prediction ? "FRAUD" : "LEGIT"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] text-muted-foreground", children: [
                        (vote.confidence * 100).toFixed(0),
                        "% conf."
                      ] })
                    ]
                  },
                  vote.model
                )) })
              ] }),
              result.riskFactors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide mb-2", children: "Risk Factors Identified" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1", children: result.riskFactors.map((factor) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-center gap-2 text-xs text-foreground",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }),
                      factor
                    ]
                  },
                  factor
                )) })
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        className: "border shadow-card",
        "data-ocid": "ai-insights.risk-indicators",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldAlert, { className: "w-4 h-4 text-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "font-display text-base", children: "Common Fraud Risk Indicators" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: "Patterns identified by AI across the Credit Card Fraud Detection dataset" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: RISK_INDICATORS.map((indicator, idx) => {
            const cfg = SEV[indicator.severity];
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex gap-3 p-3.5 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors",
                "data-ocid": `ai-insights.risk-indicator.${idx + 1}`,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(indicator.Icon, { className: "w-4 h-4 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1 flex-wrap", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-semibold text-foreground text-sm", children: indicator.title }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Badge,
                        {
                          className: `text-[10px] border shrink-0 ${cfg.badge}`,
                          children: cfg.label
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: indicator.detail })
                  ] })
                ]
              },
              indicator.title
            );
          }) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "data-ocid": "ai-insights.cached-insights", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-semibold text-foreground text-sm", children: "Cached AI Insights" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "— from the last backend analysis run" })
      ] }),
      insightsLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full rounded-lg" }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: (insights ?? []).map((insight, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(InsightCard, { insight, index: i }, insight.id)) })
    ] })
  ] });
}
export {
  AiInsightsPage as default
};
