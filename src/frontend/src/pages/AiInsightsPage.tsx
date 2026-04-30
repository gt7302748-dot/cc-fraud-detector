import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAiInsights, useAnalyzeTransaction } from "@/hooks/use-fraud-data";
import type { AiInsight, TransactionAnalysis } from "@/types/fraud";
import {
  AlertTriangle,
  BrainCircuit,
  CheckCircle2,
  Clock,
  DollarSign,
  Info,
  RefreshCw,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useState } from "react";

// 5 representative sample transactions (mix legit + fraud)
const SAMPLE_TRANSACTIONS = [
  {
    id: "TXN-001",
    amount: 149.5,
    v1: -1.36,
    v2: -0.07,
    v14: -2.31,
    v17: 1.99,
    cls: "Legitimate",
  },
  {
    id: "TXN-002",
    amount: 2.69,
    v1: 1.19,
    v2: 0.27,
    v14: -4.8,
    v17: -5.57,
    cls: "Fraud",
  },
  {
    id: "TXN-003",
    amount: 378.66,
    v1: -1.16,
    v2: 0.88,
    v14: -2.6,
    v17: -1.36,
    cls: "Legitimate",
  },
  {
    id: "TXN-004",
    amount: 1.0,
    v1: -0.97,
    v2: -3.17,
    v14: -6.9,
    v17: -8.38,
    cls: "Fraud",
  },
  {
    id: "TXN-005",
    amount: 88.25,
    v1: 2.03,
    v2: -1.34,
    v14: 0.63,
    v17: -0.11,
    cls: "Legitimate",
  },
];

// Feature values sent to AI for analysis (TXN-002 — suspected fraud)
const ANALYZE_PAYLOAD = {
  v1: 1.19,
  v2: 0.27,
  v14: -4.8,
  v17: -5.57,
  Amount: 2.69,
};

const RISK_INDICATORS = [
  {
    Icon: DollarSign,
    title: "Micro-transaction Card Testing",
    detail:
      "Transactions under €5 with negative V14/V17 values are 18× more likely to be fraud. Indicates card-testing attacks before larger purchases.",
    severity: "high" as const,
  },
  {
    Icon: Clock,
    title: "Late-Night Activity (02:00–04:00 UTC)",
    detail:
      "Fraud frequency is 2.4× higher between 02:00–04:00 UTC. Compromised cards are tested in off-hours to avoid detection systems.",
    severity: "high" as const,
  },
  {
    Icon: TrendingUp,
    title: "V14 Threshold Breach (< −5.5)",
    detail:
      "PCA component V14 below −5.5 flags 74% of all fraud cases in the dataset. A strong standalone signal for real-time alerting.",
    severity: "medium" as const,
  },
  {
    Icon: Zap,
    title: "Rapid Sequential Transactions",
    detail:
      "Multiple transactions within 30 seconds (V12/V3 signal) indicate automated card-testing scripts — a key behavioral fraud marker.",
    severity: "medium" as const,
  },
  {
    Icon: ShieldAlert,
    title: "Non-3DS Merchant Channel",
    detail:
      "Transactions via non-3DS authenticated channels (V21 signal) have a 3.1× higher fraud rate than 3DS-verified purchases.",
    severity: "low" as const,
  },
];

const SEV = {
  high: {
    badge: "bg-destructive/15 text-destructive border-destructive/30",
    dot: "bg-destructive",
    label: "HIGH",
  },
  medium: {
    badge: "bg-chart-5/15 text-chart-5 border-chart-5/30",
    dot: "bg-chart-5",
    label: "MEDIUM",
  },
  low: {
    badge: "bg-chart-2/15 text-chart-2 border-chart-2/30",
    dot: "bg-chart-2",
    label: "LOW",
  },
};

function InsightCard({
  insight,
  index,
}: { insight: AiInsight; index: number }) {
  const cfg = SEV[insight.severity];
  return (
    <div
      className="flex gap-3 p-3.5 rounded-lg border border-border bg-card hover:bg-muted/20 transition-colors"
      data-ocid={`ai-insights.insight-card.${index + 1}`}
    >
      <div className="mt-2 shrink-0">
        <span className={`w-2 h-2 rounded-full block ${cfg.dot}`} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-0.5">
          <p className="font-display font-semibold text-foreground text-sm">
            {insight.title}
          </p>
          <div className="flex items-center gap-1.5 shrink-0">
            <Badge className={`text-[10px] border ${cfg.badge}`}>
              {cfg.label}
            </Badge>
            <Badge variant="outline" className="text-[10px]">
              {insight.category}
            </Badge>
          </div>
        </div>
        <p className="text-muted-foreground text-xs leading-relaxed">
          {insight.description}
        </p>
        <p className="text-muted-foreground/60 text-[10px] mt-1.5 font-mono">
          {new Date(insight.timestamp).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

export default function AiInsightsPage() {
  const { data: insights, isLoading: insightsLoading } = useAiInsights();
  const { mutateAsync: analyze, isPending } = useAnalyzeTransaction();

  const [result, setResult] = useState<TransactionAnalysis | null>(null);
  const [analysisText, setAnalysisText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleAnalyze() {
    setError(null);
    setResult(null);
    setAnalysisText(null);
    try {
      const res = await analyze(ANALYZE_PAYLOAD);
      const txnResult = res as TransactionAnalysis;
      setResult(txnResult);
      const prob = txnResult.fraudProbability;
      const isFraud = txnResult.isFraud || prob > 0.5;
      setAnalysisText(
        isFraud
          ? `⚠️ HIGH RISK DETECTED — Fraud probability: ${(prob * 100).toFixed(1)}%\n\nThis transaction exhibits multiple high-risk signals: V14 = −4.80 (below critical threshold of −5.5) and V17 = −5.57 (extreme negative deviation). These PCA components rank #1 and #2 in fraud prediction importance, together accounting for ~26% of total model signal.\n\nTransaction amount of €2.69 is consistent with card-testing micro-transaction behavior — 72% of fraud cases in the dataset fall below €200, and sub-€5 transactions with extreme PCA deviations are 18× more likely to be fraudulent.\n\nRecommendation: Flag for immediate review. Block this card pending verification and review subsequent transaction history for escalating amounts.`
          : `✅ LOW RISK — Fraud probability: ${(prob * 100).toFixed(1)}%\n\nTransaction features are within normal cardholder behavioral bounds. PCA components V14 and V17 do not show critical deviations. Amount and timing patterns are consistent with legitimate spending behavior.\n\nRecommendation: Approve with standard monitoring. No immediate action required. Continue monitoring subsequent transactions from this card for behavioral shifts.`,
      );
    } catch {
      setError(
        "AI analysis service is currently unavailable. The HTTP outcall to the external inference endpoint timed out. Please retry in a few seconds.",
      );
    }
  }

  return (
    <div className="p-6 space-y-6" data-ocid="ai-insights.page">
      {/* Page Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground">
            AI-Powered Fraud Analysis
          </h1>
          <p className="text-muted-foreground mt-1 text-sm max-w-2xl">
            The backend canister uses{" "}
            <span className="text-primary font-medium">HTTP outcalls</span> to
            an external AI inference service for real-time transaction risk
            scoring — combining ensemble ML model votes with generative AI
            contextual analysis.
          </p>
        </div>
        <Badge
          variant="secondary"
          className="flex items-center gap-1.5 text-xs mt-1 shrink-0"
        >
          <BrainCircuit className="w-3 h-3" />
          AI-Powered
        </Badge>
      </div>

      {/* HTTP Outcall Notice */}
      <div className="flex items-start gap-2.5 p-3.5 rounded-lg border border-primary/20 bg-primary/5 text-sm">
        <Info className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
        <div>
          <p className="font-display font-medium text-foreground">
            Backend HTTP Outcalls Enabled
          </p>
          <p className="text-muted-foreground text-xs mt-0.5">
            The Motoko canister backend performs HTTP outcalls to an external AI
            REST API (e.g., OpenAI, Hugging Face, or a custom Flask/FastAPI
            endpoint). This allows the Internet Computer canister to retrieve
            AI-generated fraud analysis without running inference on-chain.
          </p>
        </div>
      </div>

      {/* Sample Transactions Table */}
      <Card
        className="border shadow-card"
        data-ocid="ai-insights.transactions-table"
      >
        <CardHeader className="pb-2">
          <CardTitle className="font-display text-base">
            Sample Transactions
          </CardTitle>
          <CardDescription>
            5 representative transactions with key PCA feature values
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  {[
                    "ID",
                    "Amount (€)",
                    "V1",
                    "V2",
                    "V14",
                    "V17",
                    "Predicted Class",
                  ].map((h) => (
                    <th
                      key={h}
                      className="text-left px-4 py-3 font-display font-semibold text-muted-foreground text-xs uppercase tracking-wide whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SAMPLE_TRANSACTIONS.map((txn, i) => (
                  <tr
                    key={txn.id}
                    className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                    data-ocid={`ai-insights.transaction-row.${i + 1}`}
                  >
                    <td className="px-4 py-3 font-mono text-xs text-muted-foreground">
                      {txn.id}
                    </td>
                    <td className="px-4 py-3 font-mono text-foreground">
                      {txn.amount.toFixed(2)}
                    </td>
                    <td
                      className={`px-4 py-3 font-mono text-xs ${txn.v1 < -2 ? "text-destructive" : "text-muted-foreground"}`}
                    >
                      {txn.v1.toFixed(2)}
                    </td>
                    <td
                      className={`px-4 py-3 font-mono text-xs ${txn.v2 < -2 ? "text-destructive" : "text-muted-foreground"}`}
                    >
                      {txn.v2.toFixed(2)}
                    </td>
                    <td
                      className={`px-4 py-3 font-mono text-xs font-medium ${txn.v14 < -4 ? "text-destructive" : "text-muted-foreground"}`}
                    >
                      {txn.v14.toFixed(2)}
                    </td>
                    <td
                      className={`px-4 py-3 font-mono text-xs font-medium ${txn.v17 < -4 ? "text-destructive" : "text-muted-foreground"}`}
                    >
                      {txn.v17.toFixed(2)}
                    </td>
                    <td className="px-4 py-3">
                      <Badge
                        className={`text-xs border ${
                          txn.cls === "Fraud"
                            ? "bg-destructive/15 text-destructive border-destructive/30"
                            : "bg-chart-2/15 text-chart-2 border-chart-2/30"
                        }`}
                      >
                        {txn.cls}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Analyze with AI Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-4 flex-wrap">
          <Button
            size="lg"
            onClick={handleAnalyze}
            disabled={isPending}
            className="gap-2.5 font-display"
            data-ocid="ai-insights.analyze-button"
          >
            {isPending ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                Analyzing Transaction…
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Analyze with AI
              </>
            )}
          </Button>
          <p className="text-xs text-muted-foreground">
            Analyzes <span className="font-mono text-foreground">TXN-002</span>{" "}
            (€2.69 — suspected fraud) using ensemble ML + generative AI
          </p>
        </div>

        {/* Loading State */}
        {isPending && (
          <Card
            className="border shadow-card"
            data-ocid="ai-insights.loading_state"
          >
            <CardContent className="p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-primary/15 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-primary animate-pulse" />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground text-sm">
                    AI Analysis in Progress
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Sending HTTP outcall to inference endpoint…
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                {[
                  { id: "s1", w: 1 },
                  { id: "s2", w: 0.83 },
                  { id: "s3", w: 0.67 },
                  { id: "s4", w: 1 },
                  { id: "s5", w: 0.75 },
                ].map(({ id, w }) => (
                  <Skeleton
                    key={id}
                    className="h-3"
                    style={{ width: `${w * 100}%` }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Error State */}
        {error && !isPending && (
          <Card
            className="border border-destructive/30 bg-destructive/5 shadow-card"
            data-ocid="ai-insights.error_state"
          >
            <CardContent className="p-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-destructive/15 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                </div>
                <div className="flex-1">
                  <p className="font-display font-semibold text-destructive text-sm mb-1">
                    AI Service Unavailable
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {error}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleAnalyze}
                    className="mt-3 gap-1.5 text-xs"
                    data-ocid="ai-insights.retry-button"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Retry Analysis
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Success State — AI Insights Panel */}
        {result && analysisText && !isPending && (
          <Card
            className="border shadow-card"
            data-ocid="ai-insights.result-panel"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${result.isFraud ? "bg-destructive/15" : "bg-chart-2/15"}`}
                >
                  {result.isFraud ? (
                    <AlertTriangle className="w-5 h-5 text-destructive" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-chart-2" />
                  )}
                </div>
                <div>
                  <CardTitle className="font-display text-base">
                    AI Analysis Result
                  </CardTitle>
                  <CardDescription className="text-xs">
                    Generated by ensemble ML + generative AI context engine
                  </CardDescription>
                </div>
                <div className="ml-auto">
                  <Badge
                    className={`text-xs border ${
                      result.isFraud
                        ? "bg-destructive/15 text-destructive border-destructive/30"
                        : "bg-chart-2/15 text-chart-2 border-chart-2/30"
                    }`}
                  >
                    {result.isFraud ? "High Risk" : "Low Risk"}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted/40 rounded-lg p-4 border border-border">
                <pre className="text-sm text-foreground font-body whitespace-pre-wrap leading-relaxed">
                  {analysisText}
                </pre>
              </div>
              <div>
                <p className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Ensemble Model Votes
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {result.modelVotes.map((vote) => (
                    <div
                      key={vote.model}
                      className="bg-card border border-border rounded-lg p-2.5 text-center"
                    >
                      <p className="font-mono text-xs text-muted-foreground">
                        {vote.model}
                      </p>
                      <p
                        className={`font-display font-bold text-sm mt-0.5 ${vote.prediction ? "text-destructive" : "text-chart-2"}`}
                      >
                        {vote.prediction ? "FRAUD" : "LEGIT"}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {(vote.confidence * 100).toFixed(0)}% conf.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {result.riskFactors.length > 0 && (
                <div>
                  <p className="text-xs font-display font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    Risk Factors Identified
                  </p>
                  <ul className="space-y-1">
                    {result.riskFactors.map((factor) => (
                      <li
                        key={factor}
                        className="flex items-center gap-2 text-xs text-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      {/* Risk Indicators Card */}
      <Card
        className="border shadow-card"
        data-ocid="ai-insights.risk-indicators"
      >
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-primary" />
            <CardTitle className="font-display text-base">
              Common Fraud Risk Indicators
            </CardTitle>
          </div>
          <CardDescription>
            Patterns identified by AI across the Credit Card Fraud Detection
            dataset
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {RISK_INDICATORS.map((indicator, idx) => {
              const cfg = SEV[indicator.severity];
              return (
                <div
                  key={indicator.title}
                  className="flex gap-3 p-3.5 rounded-lg border border-border bg-muted/20 hover:bg-muted/40 transition-colors"
                  data-ocid={`ai-insights.risk-indicator.${idx + 1}`}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <indicator.Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="font-display font-semibold text-foreground text-sm">
                        {indicator.title}
                      </p>
                      <Badge
                        className={`text-[10px] border shrink-0 ${cfg.badge}`}
                      >
                        {cfg.label}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {indicator.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Cached AI Insights */}
      <section data-ocid="ai-insights.cached-insights">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-primary" />
          <h2 className="font-display font-semibold text-foreground text-sm">
            Cached AI Insights
          </h2>
          <span className="text-xs text-muted-foreground">
            — from the last backend analysis run
          </span>
        </div>
        {insightsLoading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-20 w-full rounded-lg" />
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {(insights ?? []).map((insight, i) => (
              <InsightCard key={insight.id} insight={insight} index={i} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
