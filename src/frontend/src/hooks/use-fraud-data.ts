import { useMutation, useQuery } from "@tanstack/react-query";
import {
  FALLBACK_AI_INSIGHTS,
  FALLBACK_AUTOENCODER_METRICS,
  FALLBACK_CONFUSION_MATRIX,
  FALLBACK_EDA_STATS,
  FALLBACK_FEATURE_IMPORTANCE,
  FALLBACK_MODEL_SCORES,
  FALLBACK_ROC_CURVES,
} from "../lib/data";
import type {
  AiInsight,
  AutoencoderMetrics,
  ConfusionMatrix,
  EdaStats,
  FeatureImportance,
  ModelScore,
  RocCurve,
} from "../types/fraud";

// Since the backend interface is not yet fully bound, we use fallback data
// When backend methods are available they can be wired via useActor

export function useModelScores() {
  return useQuery<ModelScore[]>({
    queryKey: ["modelScores"],
    queryFn: async () => FALLBACK_MODEL_SCORES,
    staleTime: 5 * 60 * 1000,
  });
}

export function useConfusionMatrix(modelName?: string) {
  return useQuery<ConfusionMatrix>({
    queryKey: ["confusionMatrix", modelName],
    queryFn: async () => FALLBACK_CONFUSION_MATRIX,
    staleTime: 5 * 60 * 1000,
  });
}

export function useRocCurve() {
  return useQuery<RocCurve[]>({
    queryKey: ["rocCurve"],
    queryFn: async () => FALLBACK_ROC_CURVES,
    staleTime: 5 * 60 * 1000,
  });
}

export function useFeatureImportance() {
  return useQuery<FeatureImportance[]>({
    queryKey: ["featureImportance"],
    queryFn: async () => FALLBACK_FEATURE_IMPORTANCE,
    staleTime: 5 * 60 * 1000,
  });
}

export function useAutoencoderMetrics() {
  return useQuery<AutoencoderMetrics>({
    queryKey: ["autoencoderMetrics"],
    queryFn: async () => FALLBACK_AUTOENCODER_METRICS,
    staleTime: 5 * 60 * 1000,
  });
}

export function useEdaStats() {
  return useQuery<EdaStats>({
    queryKey: ["edaStats"],
    queryFn: async () => FALLBACK_EDA_STATS,
    staleTime: 5 * 60 * 1000,
  });
}

export function useAiInsights() {
  return useQuery<AiInsight[]>({
    queryKey: ["aiInsights"],
    queryFn: async () => FALLBACK_AI_INSIGHTS,
    staleTime: 5 * 60 * 1000,
  });
}

export function useAnalyzeTransaction() {
  return useMutation({
    mutationFn: async (_data: Record<string, number>) => {
      // Simulate analysis — replace with actor.analyzeTransaction(_data) when backend is bound
      await new Promise((r) => setTimeout(r, 1200));
      return {
        transactionId: `TXN-${Date.now()}`,
        isFraud: Math.random() > 0.85,
        fraudProbability:
          Math.random() * 0.3 + (Math.random() > 0.85 ? 0.6 : 0),
        modelVotes: [
          { model: "XGBoost", prediction: false, confidence: 0.94 },
          { model: "Random Forest", prediction: false, confidence: 0.91 },
          { model: "LightGBM", prediction: false, confidence: 0.92 },
        ],
        riskFactors: [
          "Amount within normal range",
          "Transaction time is typical",
        ],
      };
    },
  });
}
