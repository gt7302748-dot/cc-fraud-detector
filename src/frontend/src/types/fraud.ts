export interface ModelScore {
  name: string;
  accuracy: number;
  f1Score: number;
  recall: number;
  precision: number;
  rocAuc: number;
  trend: number[];
}

export interface ConfusionMatrix {
  truePositive: number;
  falsePositive: number;
  falseNegative: number;
  trueNegative: number;
}

export interface RocPoint {
  fpr: number;
  tpr: number;
  threshold: number;
}

export interface RocCurve {
  modelName: string;
  points: RocPoint[];
  auc: number;
}

export interface FeatureImportance {
  feature: string;
  importance: number;
  description: string;
}

export interface AutoencoderMetrics {
  trainLoss: number[];
  valLoss: number[];
  threshold: number;
  rocAuc: number;
  precision: number;
  recall: number;
  f1Score: number;
  reconstructionErrors: { value: number; isfraud: boolean }[];
}

export interface EdaStats {
  totalTransactions: number;
  fraudCount: number;
  legitimateCount: number;
  fraudRate: number;
  avgFraudAmount: number;
  avgLegitAmount: number;
  maxFraudAmount: number;
  classDistribution: { name: string; count: number; color: string }[];
  amountDistribution: { range: string; fraud: number; legit: number }[];
  timeDistribution: { hour: number; fraud: number; legit: number }[];
  correlationData: { feature: string; correlation: number }[];
}

export interface TransactionAnalysis {
  transactionId: string;
  isFraud: boolean;
  fraudProbability: number;
  modelVotes: { model: string; prediction: boolean; confidence: number }[];
  riskFactors: string[];
}

export interface AiInsight {
  id: string;
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
  timestamp: string;
  category: string;
}
