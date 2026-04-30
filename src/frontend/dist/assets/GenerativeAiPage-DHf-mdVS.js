import { r as reactExports, j as jsxRuntimeExports, o as createSlot, n as cn, b as Skeleton } from "./index-obkfj5IL.js";
import { c as useAutoencoderMetrics, B as Badge } from "./use-fraud-data-uqLV_foy.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./data-CVZMXs0E.js";
import { R as ResponsiveContainer, T as Tooltip, L as Legend, F as ReferenceLine } from "./generateCategoricalChart-BW2Go5AY.js";
import { L as LineChart, a as Line } from "./LineChart-B5-pSQlI.js";
import { C as CartesianGrid, X as XAxis, Y as YAxis } from "./YAxis-C-6M5L6F.js";
import { A as AreaChart, a as Area } from "./AreaChart-CGn7XdMw.js";
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot = createSlot(`Primitive.${node}`);
  const Node = reactExports.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});
var NAME = "Separator";
var DEFAULT_ORIENTATION = "horizontal";
var ORIENTATIONS = ["horizontal", "vertical"];
var Separator$1 = reactExports.forwardRef((props, forwardedRef) => {
  const { decorative, orientation: orientationProp = DEFAULT_ORIENTATION, ...domProps } = props;
  const orientation = isValidOrientation(orientationProp) ? orientationProp : DEFAULT_ORIENTATION;
  const ariaOrientation = orientation === "vertical" ? orientation : void 0;
  const semanticProps = decorative ? { role: "none" } : { "aria-orientation": ariaOrientation, role: "separator" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Primitive.div,
    {
      "data-orientation": orientation,
      ...semanticProps,
      ...domProps,
      ref: forwardedRef
    }
  );
});
Separator$1.displayName = NAME;
function isValidOrientation(orientation) {
  return ORIENTATIONS.includes(orientation);
}
var Root = Separator$1;
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}
const ARCH_LAYERS = [
  { label: "Input", dim: 30, note: "30 PCA + Amount + Time features" },
  { label: "Dense (relu)", dim: 14, note: "Encoder — compress" },
  { label: "Dense (relu)", dim: 7, note: "Bottleneck — latent space" },
  { label: "Dense (relu)", dim: 14, note: "Decoder — expand" },
  { label: "Dense (sigmoid)", dim: 30, note: "Reconstructed output" }
];
const METRICS = [
  {
    label: "ROC-AUC",
    value: "0.9534",
    color: "text-primary",
    bg: "bg-primary/10 border border-primary/30"
  },
  {
    label: "Precision",
    value: "82.1%",
    color: "text-[hsl(var(--chart-2))]",
    bg: "bg-[hsl(var(--chart-2))]/10 border border-[hsl(var(--chart-2))]/30"
  },
  {
    label: "Recall",
    value: "74.5%",
    color: "text-[hsl(var(--chart-4))]",
    bg: "bg-[hsl(var(--chart-4))]/10 border border-[hsl(var(--chart-4))]/30"
  },
  {
    label: "F1-Score",
    value: "78.1%",
    color: "text-[hsl(var(--chart-5))]",
    bg: "bg-[hsl(var(--chart-5))]/10 border border-[hsl(var(--chart-5))]/30"
  }
];
const PROS = [
  "No labeled fraud data required during training",
  "Can detect novel, previously unseen fraud patterns",
  "Adapts naturally to evolving transaction behaviour",
  "Model size is small — fast inference at scale"
];
const CONS = [
  "Lower precision (82.1%) vs XGBoost (86.5%)",
  "Threshold selection is sensitive to distribution shift",
  "More complex to explain to regulators than tree models",
  "Requires retraining when legitimate patterns shift significantly"
];
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
  { bin: "0.200", legit: 0, fraud: 14 }
];
const tooltipStyle = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "6px",
  color: "hsl(var(--foreground))",
  fontSize: 12
};
function GenerativeAiPage() {
  const { data: ae, isLoading } = useAutoencoderMetrics();
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", "data-ocid": "generative_ai.loading_state", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64" }, i)) });
  }
  const lossData = ae == null ? void 0 : ae.trainLoss.map((v, i) => ({
    epoch: i + 1,
    "Train Loss": +v.toFixed(4),
    "Val Loss": +(ae.valLoss[i] ?? v).toFixed(4)
  }));
  const threshold = (ae == null ? void 0 : ae.threshold) ?? 0.0234;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "generative_ai.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "generative_ai.header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold tracking-tight", children: "Generative AI — Autoencoder Anomaly Detection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm leading-relaxed max-w-3xl", children: "An unsupervised deep-learning approach that learns the normal distribution of legitimate transactions. Any input that deviates substantially from this learned distribution is flagged as a potential fraud — without ever seeing a single labeled fraud example during training." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-2 sm:grid-cols-4 gap-4",
        "data-ocid": "generative_ai.metrics_section",
        children: METRICS.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            "data-ocid": `generative_ai.metric.${i + 1}`,
            className: `shadow-card ${m.bg}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-4 px-5 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-3xl font-display font-bold ${m.color}`, children: m.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wide", children: m.label })
            ] })
          },
          m.label
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        "data-ocid": "generative_ai.explanation_card",
        className: "shadow-card border-l-4 border-l-primary",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-sm font-semibold font-display flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-5 w-5 rounded bg-primary/20 text-primary text-[10px] font-bold flex items-center justify-center", children: "AE" }),
            "How an Autoencoder Detects Fraud"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-5", children: [
            {
              step: "1",
              title: "Train on Legitimate Only",
              desc: "The autoencoder is trained exclusively on legitimate transactions using MSE loss. It learns a compressed latent representation of normal spending behaviour."
            },
            {
              step: "2",
              title: "Measure Reconstruction Error",
              desc: "At inference, every transaction is encoded then decoded. Legitimate transactions reconstruct well (low MSE). Fraud patterns are unfamiliar — the network fails to reconstruct them accurately, producing high MSE."
            },
            {
              step: "3",
              title: "Threshold & Flag",
              desc: "The 95th-percentile of reconstruction error on a held-out legitimate set becomes the decision boundary. Transactions with MSE above 0.0234 are flagged as likely fraud."
            }
          ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5", children: item.step }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold mb-1", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed", children: item.desc })
            ] })
          ] }, item.step)) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "generative_ai.architecture_card", className: "shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold font-display", children: "Architecture Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Symmetric encoder-decoder. Bottleneck forces learning a compact, normal-pattern representation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-0 font-mono text-xs select-none", children: ARCH_LAYERS.map((layer, idx) => {
          const isBottleneck = idx === 2;
          const isFirst = idx === 0;
          const isLast = idx === ARCH_LAYERS.length - 1;
          const widths = [200, 140, 100, 140, 200];
          const w = widths[idx];
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex flex-col items-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `flex items-center justify-center rounded-md border text-center px-3 py-2 transition-colors ${isFirst || isLast ? "bg-muted/40 border-border text-muted-foreground" : isBottleneck ? "bg-primary/20 border-primary/50 text-primary font-bold" : "bg-card border-border text-foreground"}`,
                    style: { width: w },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block font-semibold", children: layer.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[10px] opacity-70", children: [
                        "dim=",
                        layer.dim
                      ] })
                    ] })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-0.5 text-muted-foreground/50 text-[10px] py-1", children: idx < ARCH_LAYERS.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-3 w-px bg-border" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] leading-none", children: "▼" })
                ] }) })
              ]
            },
            layer.label + String(layer.dim)
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground font-mono bg-muted/30 rounded-md px-4 py-2 inline-block", children: "Input(30) → Dense(14, relu) → Dense(7, relu) → Dense(14, relu) → Output(30, sigmoid)" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3", children: [
          { label: "Optimizer", val: "Adam" },
          { label: "Loss", val: "MSE" },
          { label: "Epochs", val: "30" },
          { label: "Batch Size", val: "256" }
        ].map((kv) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "text-center bg-muted/30 rounded-md py-2 px-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground", children: kv.val }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: kv.label })
            ]
          },
          kv.label
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        "data-ocid": "generative_ai.training_chart_card",
        className: "shadow-card",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold font-display", children: "Training Progress" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "MSE loss over 30 epochs — both curves converge rapidly" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", className: "font-mono text-xs", children: "Train final: 0.0180" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", className: "font-mono text-xs", children: "Val final: 0.0280" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 280, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            LineChart,
            {
              data: lossData,
              margin: { top: 5, right: 20, left: 0, bottom: 20 },
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
                    dataKey: "epoch",
                    label: {
                      value: "Epoch",
                      position: "insideBottom",
                      offset: -10,
                      fontSize: 11,
                      fill: "hsl(var(--muted-foreground))"
                    },
                    tick: { fontSize: 11, fill: "hsl(var(--muted-foreground))" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  YAxis,
                  {
                    tick: { fontSize: 11, fill: "hsl(var(--muted-foreground))" },
                    tickFormatter: (v) => v.toFixed(3),
                    width: 50
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    contentStyle: tooltipStyle,
                    formatter: (v) => [v.toFixed(4)]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 12, paddingTop: 12 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Line,
                  {
                    type: "monotone",
                    dataKey: "Train Loss",
                    stroke: "hsl(var(--chart-3))",
                    strokeWidth: 2.5,
                    dot: false,
                    activeDot: { r: 4 }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Line,
                  {
                    type: "monotone",
                    dataKey: "Val Loss",
                    stroke: "hsl(var(--chart-4))",
                    strokeWidth: 2,
                    strokeDasharray: "5 4",
                    dot: false,
                    activeDot: { r: 4 }
                  }
                )
              ]
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "generative_ai.error_dist_card", className: "shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold font-display", children: "Reconstruction Error Distribution" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Overlapping MSE distributions — fraud transactions cluster at higher error values" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { variant: "destructive", className: "font-mono text-xs", children: [
          "Threshold: ",
          threshold.toFixed(4)
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 300, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          AreaChart,
          {
            data: LEGIT_DIST,
            margin: { top: 5, right: 20, left: 0, bottom: 20 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "legitGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "stop",
                    {
                      offset: "5%",
                      stopColor: "hsl(var(--chart-2))",
                      stopOpacity: 0.5
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "stop",
                    {
                      offset: "95%",
                      stopColor: "hsl(var(--chart-2))",
                      stopOpacity: 0.05
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "fraudGrad", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "stop",
                    {
                      offset: "5%",
                      stopColor: "hsl(var(--chart-1))",
                      stopOpacity: 0.6
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "stop",
                    {
                      offset: "95%",
                      stopColor: "hsl(var(--chart-1))",
                      stopOpacity: 0.05
                    }
                  )
                ] })
              ] }),
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
                  dataKey: "bin",
                  label: {
                    value: "Reconstruction Error (MSE)",
                    position: "insideBottom",
                    offset: -10,
                    fontSize: 11,
                    fill: "hsl(var(--muted-foreground))"
                  },
                  tick: { fontSize: 10, fill: "hsl(var(--muted-foreground))" },
                  interval: 3
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                YAxis,
                {
                  tick: { fontSize: 11, fill: "hsl(var(--muted-foreground))" },
                  label: {
                    value: "Count",
                    angle: -90,
                    position: "insideLeft",
                    offset: 10,
                    fontSize: 11,
                    fill: "hsl(var(--muted-foreground))"
                  },
                  width: 52
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Tooltip, { contentStyle: tooltipStyle }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Legend, { wrapperStyle: { fontSize: 12, paddingTop: 12 } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ReferenceLine,
                {
                  x: "0.023",
                  stroke: "hsl(var(--chart-5))",
                  strokeDasharray: "6 3",
                  strokeWidth: 2,
                  label: {
                    value: "Threshold 0.0234",
                    fill: "hsl(var(--chart-5))",
                    fontSize: 11,
                    position: "top"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Area,
                {
                  type: "monotone",
                  dataKey: "legit",
                  name: "Legitimate",
                  stroke: "hsl(var(--chart-2))",
                  strokeWidth: 2,
                  fill: "url(#legitGrad)"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Area,
                {
                  type: "monotone",
                  dataKey: "fraud",
                  name: "Fraud",
                  stroke: "hsl(var(--chart-1))",
                  strokeWidth: 2,
                  fill: "url(#fraudGrad)"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-3 leading-relaxed", children: [
          "Legitimate transactions concentrate near zero MSE (green). Fraudulent transactions show a long right tail. The dashed threshold at",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-foreground", children: "0.0234" }),
          " ",
          "separates the two populations with high confidence."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { "data-ocid": "generative_ai.threshold_card", className: "shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold font-display", children: "Anomaly Detection Threshold" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row items-start gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center rounded-xl border border-[hsl(var(--chart-5))]/40 bg-[hsl(var(--chart-5))]/10 px-10 py-6 shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-4xl font-display font-bold text-[hsl(var(--chart-5))]", children: "0.0234" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "MSE Threshold" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3 text-sm text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "The threshold of",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-foreground", children: "0.0234" }),
            " ",
            "is the",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "95th percentile" }),
            " of reconstruction errors computed on the held-out legitimate transaction validation set."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Any new transaction whose MSE exceeds this value is classified as anomalous (potential fraud). Setting the threshold at the 95th percentile means approximately",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "text-foreground", children: "5% of legitimate transactions" }),
            " ",
            "will produce false positives — an acceptable trade-off given the cost asymmetry between missing fraud vs flagging a real transaction."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "The threshold can be tuned: a lower value increases recall (catches more fraud) at the cost of precision (more false alarms). A higher value reduces false positives but risks missing subtle fraudulent patterns." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Card,
      {
        "data-ocid": "generative_ai.comparison_card",
        className: "shadow-card bg-muted/20",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold font-display", children: "Autoencoder vs Traditional Machine Learning" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "When to use generative AI over supervised ML for fraud detection" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-[hsl(var(--chart-2))]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[hsl(var(--chart-2))]", children: "Advantages" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: PROS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-start gap-2 text-xs text-muted-foreground leading-relaxed",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 text-[hsl(var(--chart-2))] shrink-0", children: "✓" }),
                      p
                    ]
                  },
                  p
                )) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full bg-[hsl(var(--chart-1))]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-[hsl(var(--chart-1))]", children: "Limitations" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2", children: CONS.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "flex items-start gap-2 text-xs text-muted-foreground leading-relaxed",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 text-[hsl(var(--chart-1))] shrink-0", children: "✗" }),
                      c
                    ]
                  },
                  c
                )) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Separator, { className: "my-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3", children: "Quick Comparison" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left pb-2 text-muted-foreground font-medium pr-4", children: "Approach" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right pb-2 text-muted-foreground font-medium pr-4", children: "ROC-AUC" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right pb-2 text-muted-foreground font-medium pr-4", children: "Precision" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right pb-2 text-muted-foreground font-medium pr-4", children: "Recall" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right pb-2 text-muted-foreground font-medium", children: "Labeled Data?" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border/50", children: [
                  {
                    name: "Autoencoder (Generative AI)",
                    auc: "0.9534",
                    prec: "82.1%",
                    recall: "74.5%",
                    labeled: "No",
                    highlight: true
                  },
                  {
                    name: "XGBoost (Best Supervised)",
                    auc: "0.9910",
                    prec: "86.5%",
                    recall: "85.7%",
                    labeled: "Yes",
                    highlight: false
                  },
                  {
                    name: "Random Forest",
                    auc: "0.9850",
                    prec: "66.4%",
                    recall: "92.6%",
                    labeled: "Yes",
                    highlight: false
                  },
                  {
                    name: "Logistic Regression",
                    auc: "0.9740",
                    prec: "85.6%",
                    recall: "92.3%",
                    labeled: "Yes",
                    highlight: false
                  }
                ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    className: row.highlight ? "bg-primary/5" : "",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-2 pr-4 font-medium text-foreground", children: [
                        row.name,
                        row.highlight && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            className: "ml-2 text-[9px] py-0",
                            variant: "secondary",
                            children: "This Model"
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-right font-mono text-foreground", children: row.auc }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-right font-mono text-foreground", children: row.prec }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-2 pr-4 text-right font-mono text-foreground", children: row.recall }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "td",
                        {
                          className: `py-2 text-right font-semibold ${row.labeled === "No" ? "text-[hsl(var(--chart-2))]" : "text-muted-foreground"}`,
                          children: row.labeled
                        }
                      )
                    ]
                  },
                  row.name
                )) })
              ] }) })
            ] })
          ] })
        ]
      }
    )
  ] });
}
export {
  GenerativeAiPage as default
};
