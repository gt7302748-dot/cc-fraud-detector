import { r as reactExports, u as useDirection, e as useControllableState, j as jsxRuntimeExports, P as Primitive, f as useId, h as Root, I as Item, i as composeEventHandlers, k as Presence, l as createRovingFocusGroupScope, m as createContextScope, n as cn, b as Skeleton } from "./index-obkfj5IL.js";
import { a as useModelScores, b as useRocCurve, B as Badge } from "./use-fraud-data-uqLV_foy.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./data-CVZMXs0E.js";
import { R as ResponsiveContainer, T as Tooltip, B as Bar, C as Cell, F as ReferenceLine } from "./generateCategoricalChart-BW2Go5AY.js";
import { B as BarChart } from "./BarChart-EaK9PYVo.js";
import { C as CartesianGrid, X as XAxis, Y as YAxis } from "./YAxis-C-6M5L6F.js";
import { L as LineChart, a as Line } from "./LineChart-B5-pSQlI.js";
var TABS_NAME = "Tabs";
var [createTabsContext] = createContextScope(TABS_NAME, [
  createRovingFocusGroupScope
]);
var useRovingFocusGroupScope = createRovingFocusGroupScope();
var [TabsProvider, useTabsContext] = createTabsContext(TABS_NAME);
var Tabs$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeTabs,
      value: valueProp,
      onValueChange,
      defaultValue,
      orientation = "horizontal",
      dir,
      activationMode = "automatic",
      ...tabsProps
    } = props;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? "",
      caller: TABS_NAME
    });
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      TabsProvider,
      {
        scope: __scopeTabs,
        baseId: useId(),
        value,
        onValueChange: setValue,
        orientation,
        dir: direction,
        activationMode,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            dir: direction,
            "data-orientation": orientation,
            ...tabsProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Tabs$1.displayName = TABS_NAME;
var TAB_LIST_NAME = "TabsList";
var TabsList$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, ...listProps } = props;
    const context = useTabsContext(TAB_LIST_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Root,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        orientation: context.orientation,
        dir: context.dir,
        loop,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.div,
          {
            role: "tablist",
            "aria-orientation": context.orientation,
            ...listProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
TabsList$1.displayName = TAB_LIST_NAME;
var TRIGGER_NAME = "TabsTrigger";
var TabsTrigger$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, disabled = false, ...triggerProps } = props;
    const context = useTabsContext(TRIGGER_NAME, __scopeTabs);
    const rovingFocusGroupScope = useRovingFocusGroupScope(__scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Item,
      {
        asChild: true,
        ...rovingFocusGroupScope,
        focusable: !disabled,
        active: isSelected,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Primitive.button,
          {
            type: "button",
            role: "tab",
            "aria-selected": isSelected,
            "aria-controls": contentId,
            "data-state": isSelected ? "active" : "inactive",
            "data-disabled": disabled ? "" : void 0,
            disabled,
            id: triggerId,
            ...triggerProps,
            ref: forwardedRef,
            onMouseDown: composeEventHandlers(props.onMouseDown, (event) => {
              if (!disabled && event.button === 0 && event.ctrlKey === false) {
                context.onValueChange(value);
              } else {
                event.preventDefault();
              }
            }),
            onKeyDown: composeEventHandlers(props.onKeyDown, (event) => {
              if ([" ", "Enter"].includes(event.key)) context.onValueChange(value);
            }),
            onFocus: composeEventHandlers(props.onFocus, () => {
              const isAutomaticActivation = context.activationMode !== "manual";
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onValueChange(value);
              }
            })
          }
        )
      }
    );
  }
);
TabsTrigger$1.displayName = TRIGGER_NAME;
var CONTENT_NAME = "TabsContent";
var TabsContent$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeTabs, value, forceMount, children, ...contentProps } = props;
    const context = useTabsContext(CONTENT_NAME, __scopeTabs);
    const triggerId = makeTriggerId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const isMountAnimationPreventedRef = reactExports.useRef(isSelected);
    reactExports.useEffect(() => {
      const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
      return () => cancelAnimationFrame(rAF);
    }, []);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Presence, { present: forceMount || isSelected, children: ({ present }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": isSelected ? "active" : "inactive",
        "data-orientation": context.orientation,
        role: "tabpanel",
        "aria-labelledby": triggerId,
        hidden: !present,
        id: contentId,
        tabIndex: 0,
        ...contentProps,
        ref: forwardedRef,
        style: {
          ...props.style,
          animationDuration: isMountAnimationPreventedRef.current ? "0s" : void 0
        },
        children: present && children
      }
    ) });
  }
);
TabsContent$1.displayName = CONTENT_NAME;
function makeTriggerId(baseId, value) {
  return `${baseId}-trigger-${value}`;
}
function makeContentId(baseId, value) {
  return `${baseId}-content-${value}`;
}
var Root2 = Tabs$1;
var List = TabsList$1;
var Trigger = TabsTrigger$1;
var Content = TabsContent$1;
function Tabs({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root2,
    {
      "data-slot": "tabs",
      className: cn("flex flex-col gap-2", className),
      ...props
    }
  );
}
function TabsList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function TabsContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 outline-none", className),
      ...props
    }
  );
}
const AUC_DATA = [
  { name: "LR", fullName: "Logistic Regression", auc: 0.9712 },
  { name: "DT", fullName: "Decision Tree", auc: 0.9234 },
  { name: "RF", fullName: "Random Forest", auc: 0.9823 },
  { name: "GB", fullName: "Gradient Boosting", auc: 0.9801 },
  { name: "XGB", fullName: "XGBoost", auc: 0.9845 },
  { name: "LGBM", fullName: "LightGBM", auc: 0.9851 },
  { name: "KNN", fullName: "K-Nearest Neighbors", auc: 0.9456 },
  { name: "SVM", fullName: "Support Vector Machine", auc: 0.9698 }
];
const MODEL_TABLE_DATA = [
  {
    name: "Logistic Regression",
    precision: 0.856,
    recall: 0.923,
    f1: 0.888,
    auc: 0.9712
  },
  {
    name: "Decision Tree",
    precision: 0.655,
    recall: 0.778,
    f1: 0.712,
    auc: 0.9234
  },
  {
    name: "Random Forest",
    precision: 0.956,
    recall: 0.847,
    f1: 0.898,
    auc: 0.9823
  },
  {
    name: "Gradient Boosting",
    precision: 0.921,
    recall: 0.836,
    f1: 0.877,
    auc: 0.9801
  },
  { name: "XGBoost", precision: 0.943, recall: 0.857, f1: 0.898, auc: 0.9845 },
  { name: "LightGBM", precision: 0.951, recall: 0.847, f1: 0.896, auc: 0.9851 },
  {
    name: "K-Nearest Neighbors",
    precision: 0.642,
    recall: 0.762,
    f1: 0.698,
    auc: 0.9456
  },
  {
    name: "Support Vector Machine",
    precision: 0.876,
    recall: 0.831,
    f1: 0.853,
    auc: 0.9698
  }
];
const RF_CONFUSION = { tn: 56841, fp: 23, fn: 15, tp: 83 };
const RF_METRICS = [
  { label: "Accuracy", value: "99.93%", icon: "◎" },
  { label: "Precision", value: "78.3%", icon: "◉" },
  { label: "Recall", value: "84.7%", icon: "◈" },
  { label: "F1-Score", value: "81.4%", icon: "◆" }
];
const ROC_RF_POINTS = [
  { fpr: 0, tpr: 0 },
  { fpr: 1e-3, tpr: 0.38 },
  { fpr: 2e-3, tpr: 0.55 },
  { fpr: 4e-3, tpr: 0.68 },
  { fpr: 8e-3, tpr: 0.76 },
  { fpr: 0.015, tpr: 0.82 },
  { fpr: 0.025, tpr: 0.865 },
  { fpr: 0.04, tpr: 0.9 },
  { fpr: 0.06, tpr: 0.93 },
  { fpr: 0.1, tpr: 0.955 },
  { fpr: 0.18, tpr: 0.97 },
  { fpr: 0.3, tpr: 0.981 },
  { fpr: 0.5, tpr: 0.991 },
  { fpr: 0.75, tpr: 0.997 },
  { fpr: 1, tpr: 1 }
];
const ROC_CHART_DATA = ROC_RF_POINTS.map((p) => ({
  ...p,
  diag: p.fpr
}));
const GOLD = "hsl(43 96% 56%)";
const BLUE = "hsl(var(--chart-3))";
const GREEN = "hsl(var(--chart-2))";
const tooltipStyle = {
  background: "hsl(var(--card))",
  border: "1px solid hsl(var(--border))",
  borderRadius: "6px",
  fontSize: 12,
  color: "hsl(var(--foreground))"
};
function MlModelsPage() {
  const { isLoading } = useModelScores();
  const { data: roc } = useRocCurve();
  if (isLoading) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", "data-ocid": "ml_models.loading_state", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-64" }, i)) });
  }
  const tn = RF_CONFUSION.tn;
  const fp = RF_CONFUSION.fp;
  const fn = RF_CONFUSION.fn;
  const tp = RF_CONFUSION.tp;
  const rfRoc = roc == null ? void 0 : roc.find((r) => r.modelName === "Random Forest");
  const rocPoints = (rfRoc == null ? void 0 : rfRoc.points.map((p) => ({ fpr: p.fpr, tpr: p.tpr, diag: p.fpr }))) ?? ROC_CHART_DATA;
  const cmPrecision = (tp / (tp + fp)).toFixed(3);
  const cmRecall = (tp / (tp + fn)).toFixed(3);
  const cmSpecificity = (tn / (tn + fp)).toFixed(3);
  const cmF1 = (2 * tp / (2 * tp + fp + fn)).toFixed(3);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", "data-ocid": "ml_models.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-ocid": "ml_models.header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-display font-bold text-foreground", children: "Machine Learning Model Comparison" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1 text-sm", children: "Performance evaluation of 8 traditional ML algorithms on the Credit Card Fraud Detection dataset (284,807 transactions)." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Card,
      {
        "data-ocid": "ml_models.best_model_card",
        className: "border-primary/40 bg-primary/5 shadow-card",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-5 pb-5 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "🏆" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-display font-bold text-foreground", children: "Random Forest" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Badge,
                {
                  className: "bg-primary/20 text-primary border-primary/40 text-xs font-semibold",
                  variant: "outline",
                  "data-ocid": "ml_models.best_badge",
                  children: "Best for Production"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-lg", children: "Highest balanced performance across precision and recall for fraud detection use cases. Reliable at minimizing both false negatives (missed fraud) and false positives." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-6 flex-wrap", children: [
            { label: "AUC", value: "0.9823" },
            { label: "Precision", value: "0.956" },
            { label: "Recall", value: "0.847" },
            { label: "F1-Score", value: "0.898" }
          ].map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xl font-display font-bold text-primary", children: stat.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: stat.label })
          ] }, stat.label)) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "grid grid-cols-2 lg:grid-cols-4 gap-4",
        "data-ocid": "ml_models.metrics_grid",
        children: RF_METRICS.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            "data-ocid": `ml_models.metric_card.${i + 1}`,
            className: "shadow-card",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-5 pb-5 px-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-1 uppercase tracking-wide font-medium", children: m.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-display font-bold text-primary", children: m.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Random Forest" })
            ] })
          },
          m.label
        ))
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Tabs, { defaultValue: "overview", "data-ocid": "ml_models.tabs", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(TabsList, { className: "mb-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "overview", "data-ocid": "ml_models.tab.overview", children: "Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "confusion",
            "data-ocid": "ml_models.tab.confusion_matrix",
            children: "Confusion Matrix"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TabsTrigger, { value: "roc", "data-ocid": "ml_models.tab.roc_curve", children: "ROC Curve" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          TabsTrigger,
          {
            value: "detailed",
            "data-ocid": "ml_models.tab.detailed_metrics",
            children: "Detailed Metrics"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "overview", "data-ocid": "ml_models.overview_panel", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold font-display", children: "Model Performance Overview — ROC-AUC Scores" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "All 8 models evaluated. LightGBM achieves the highest AUC. Y-axis range 0.90–1.00." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 320, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            BarChart,
            {
              data: AUC_DATA,
              margin: { top: 16, right: 24, left: 0, bottom: 8 },
              barCategoryGap: "30%",
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
                    dataKey: "name",
                    tick: {
                      fontSize: 12,
                      fill: "hsl(var(--muted-foreground))"
                    },
                    axisLine: false,
                    tickLine: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  YAxis,
                  {
                    domain: [0.9, 1],
                    tickCount: 6,
                    tickFormatter: (v) => v.toFixed(2),
                    tick: {
                      fontSize: 11,
                      fill: "hsl(var(--muted-foreground))"
                    },
                    axisLine: false,
                    tickLine: false,
                    label: {
                      value: "ROC-AUC",
                      angle: -90,
                      position: "insideLeft",
                      fontSize: 11,
                      fill: "hsl(var(--muted-foreground))",
                      dx: -4
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    contentStyle: tooltipStyle,
                    formatter: (v, _name, props) => {
                      var _a;
                      return [v.toFixed(4), ((_a = props.payload) == null ? void 0 : _a.fullName) ?? "AUC"];
                    },
                    cursor: { fill: "hsl(var(--muted))", opacity: 0.3 }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Bar, { dataKey: "auc", radius: [4, 4, 0, 0], children: AUC_DATA.map((entry) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Cell,
                  {
                    fill: entry.name === "LGBM" ? GOLD : BLUE,
                    opacity: entry.name === "LGBM" ? 1 : 0.75
                  },
                  entry.name
                )) })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-3 pl-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-3 h-3 rounded-sm",
                  style: { background: GOLD }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Best model (LightGBM — 0.9851)" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-3 h-3 rounded-sm bg-primary opacity-75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Other models" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "confusion", "data-ocid": "ml_models.confusion_panel", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold font-display", children: "Confusion Matrix — Random Forest" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Evaluated on 56,962 test transactions (20% holdout). TN:",
            " ",
            tn.toLocaleString(),
            " | FP: ",
            fp,
            " | FN: ",
            fn,
            " | TP: ",
            tp
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-8 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex mb-1 ml-24", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36 text-center text-xs font-semibold text-muted-foreground", children: "Predicted: Legit" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-36 text-center text-xs font-semibold text-muted-foreground", children: "Predicted: Fraud" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-24 text-right pr-3 text-xs font-semibold text-muted-foreground leading-tight", children: [
                "Actual",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Legit"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": "ml_models.cm.tn",
                  className: "w-36 h-28 flex flex-col items-center justify-center rounded-tl-lg border border-border",
                  style: { background: "rgba(34,197,94,0.15)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-2xl font-display font-bold",
                        style: { color: GREEN },
                        children: tn.toLocaleString()
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground mt-1", children: "True Negative" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs mt-0.5 font-medium",
                        style: { color: GREEN },
                        children: "✓ Correct"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": "ml_models.cm.fp",
                  className: "w-36 h-28 flex flex-col items-center justify-center rounded-tr-lg border border-border border-l-0",
                  style: { background: "rgba(239,68,68,0.12)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-display font-bold text-destructive", children: fp }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground mt-1", children: "False Positive" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs mt-0.5 font-medium text-destructive", children: "✗ False Alarm" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-24 text-right pr-3 text-xs font-semibold text-muted-foreground leading-tight", children: [
                "Actual",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Fraud"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": "ml_models.cm.fn",
                  className: "w-36 h-28 flex flex-col items-center justify-center rounded-bl-lg border border-border border-t-0",
                  style: { background: "rgba(239,68,68,0.12)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-display font-bold text-destructive", children: fn }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground mt-1", children: "False Negative" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs mt-0.5 font-medium text-destructive", children: "✗ Missed Fraud" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  "data-ocid": "ml_models.cm.tp",
                  className: "w-36 h-28 flex flex-col items-center justify-center rounded-br-lg border border-border border-t-0 border-l-0",
                  style: { background: "rgba(34,197,94,0.15)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-2xl font-display font-bold",
                        style: { color: GREEN },
                        children: tp
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground mt-1", children: "True Positive" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "text-xs mt-0.5 font-medium",
                        style: { color: GREEN },
                        children: "✓ Fraud Caught"
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex ml-24 mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-72 text-center text-xs text-muted-foreground", children: "← Predicted Class →" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-[200px] space-y-3 self-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold font-display mb-4", children: "Derived Metrics" }),
            [
              {
                label: "Precision",
                value: cmPrecision,
                note: "TP / (TP+FP)"
              },
              {
                label: "Recall / Sensitivity",
                value: cmRecall,
                note: "TP / (TP+FN)"
              },
              {
                label: "Specificity",
                value: cmSpecificity,
                note: "TN / (TN+FP)"
              },
              { label: "F1-Score", value: cmF1, note: "Harmonic mean" }
            ].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "flex justify-between items-center text-sm border-b border-border/40 pb-2",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: row.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground ml-2", children: row.note })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono font-semibold text-primary", children: row.value })
                ]
              },
              row.label
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-3 space-y-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-3 h-3 rounded-sm",
                    style: { background: "rgba(34,197,94,0.4)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Correct predictions (TN, TP)" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "w-3 h-3 rounded-sm",
                    style: { background: "rgba(239,68,68,0.3)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Misclassifications (FP, FN)" })
              ] })
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "roc", "data-ocid": "ml_models.roc_panel", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between flex-wrap gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold font-display", children: "ROC Curve — Random Forest" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "True Positive Rate vs False Positive Rate across decision thresholds" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Badge,
            {
              variant: "outline",
              className: "font-mono text-sm border-primary/50 text-primary bg-primary/10",
              "data-ocid": "ml_models.roc_auc_badge",
              children: "AUC = 0.9823"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ResponsiveContainer, { width: "100%", height: 360, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            LineChart,
            {
              data: rocPoints,
              margin: { top: 12, right: 24, left: 0, bottom: 30 },
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
                    dataKey: "fpr",
                    type: "number",
                    domain: [0, 1],
                    tickFormatter: (v) => v.toFixed(1),
                    tick: {
                      fontSize: 11,
                      fill: "hsl(var(--muted-foreground))"
                    },
                    label: {
                      value: "False Positive Rate",
                      position: "insideBottom",
                      offset: -16,
                      fontSize: 12,
                      fill: "hsl(var(--muted-foreground))"
                    },
                    axisLine: false,
                    tickLine: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  YAxis,
                  {
                    type: "number",
                    domain: [0, 1],
                    tickFormatter: (v) => v.toFixed(1),
                    tick: {
                      fontSize: 11,
                      fill: "hsl(var(--muted-foreground))"
                    },
                    label: {
                      value: "True Positive Rate",
                      angle: -90,
                      position: "insideLeft",
                      fontSize: 12,
                      fill: "hsl(var(--muted-foreground))",
                      dx: -4
                    },
                    axisLine: false,
                    tickLine: false
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Tooltip,
                  {
                    contentStyle: tooltipStyle,
                    formatter: (v, name) => [
                      v.toFixed(3),
                      name === "tpr" ? "True Positive Rate" : "Random Classifier"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Line,
                  {
                    type: "linear",
                    dataKey: "diag",
                    stroke: "hsl(var(--muted-foreground))",
                    strokeWidth: 1.5,
                    strokeDasharray: "6 4",
                    dot: false,
                    name: "diag"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Line,
                  {
                    type: "monotone",
                    dataKey: "tpr",
                    stroke: BLUE,
                    strokeWidth: 2.5,
                    dot: false,
                    name: "tpr"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ReferenceLine,
                  {
                    x: 0.02,
                    stroke: "transparent",
                    label: {
                      value: "AUC = 0.9823",
                      position: "insideTopRight",
                      fontSize: 12,
                      fill: GOLD,
                      fontWeight: 600
                    }
                  }
                )
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-6 mt-3 pl-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-0.5 bg-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Random Forest ROC Curve" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-6 h-0.5",
                  style: {
                    background: "hsl(var(--muted-foreground))",
                    backgroundImage: "repeating-linear-gradient(to right, hsl(var(--muted-foreground)) 0, hsl(var(--muted-foreground)) 4px, transparent 4px, transparent 8px)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Random Classifier (baseline)" })
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TabsContent, { value: "detailed", "data-ocid": "ml_models.detailed_panel", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { className: "pb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-sm font-semibold font-display", children: "All Models — Detailed Metrics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Ranked by ROC-AUC. Precision, Recall, F1-Score represent performance on the fraud (minority) class." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "table",
          {
            className: "w-full text-sm",
            "data-ocid": "ml_models.metrics_table",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4 text-xs text-muted-foreground font-semibold uppercase tracking-wide", children: "Rank" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left py-3 px-4 text-xs text-muted-foreground font-semibold uppercase tracking-wide", children: "Model" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 text-xs text-muted-foreground font-semibold uppercase tracking-wide", children: "Precision" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 text-xs text-muted-foreground font-semibold uppercase tracking-wide", children: "Recall" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 text-xs text-muted-foreground font-semibold uppercase tracking-wide", children: "F1-Score" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-right py-3 px-4 text-xs text-muted-foreground font-semibold uppercase tracking-wide", children: "ROC-AUC" })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [...MODEL_TABLE_DATA].sort((a, b) => b.auc - a.auc).map((m, i) => {
                const isRF = m.name === "Random Forest";
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "tr",
                  {
                    "data-ocid": `ml_models.table.item.${i + 1}`,
                    className: `border-b border-border/40 transition-colors duration-150 hover:bg-muted/30 ${isRF ? "bg-primary/5" : ""}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 text-muted-foreground font-mono text-xs", children: [
                        "#",
                        i + 1
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "py-3 px-4 font-medium flex items-center gap-2", children: [
                        isRF && /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            variant: "outline",
                            className: "text-xs border-primary/50 text-primary bg-primary/10",
                            children: "Best for Production"
                          }
                        ),
                        m.name
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-mono text-xs tabular-nums", children: m.precision.toFixed(3) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-mono text-xs tabular-nums", children: m.recall.toFixed(3) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right font-mono text-xs tabular-nums", children: m.f1.toFixed(3) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "py-3 px-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-mono text-xs tabular-nums font-semibold",
                          style: {
                            color: i === 0 ? GOLD : "hsl(var(--primary))"
                          },
                          children: m.auc.toFixed(4)
                        }
                      ) })
                    ]
                  },
                  m.name
                );
              }) })
            ]
          }
        ) }) })
      ] }) })
    ] })
  ] });
}
export {
  MlModelsPage as default
};
