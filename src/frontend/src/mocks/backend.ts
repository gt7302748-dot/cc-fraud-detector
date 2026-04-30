import type { backendInterface } from "../backend";

export const mockBackend: backendInterface = {
  analyzeTransaction: async (_features: Array<number>) =>
    "LEGITIMATE: Transaction appears normal. Confidence: 94.2%. No anomalies detected in PCA features.",

  getAutoencoderMetrics: async () => ({
    f1: 0.87,
    auc: 0.9762,
    threshold: 0.0312,
    precision: 0.891,
    recall: 0.849,
  }),

  getConfusionMatrix: async () => ({
    tp: BigInt(432),
    tn: BigInt(56820),
    fp: BigInt(147),
    fn: BigInt(60),
  }),

  getEdaStats: async () => ({
    totalTransactions: BigInt(284807),
    fraudCases: BigInt(492),
    legitimateCases: BigInt(284315),
    fraudRate: 0.001727,
  }),

  getFeatureImportance: async () => [
    { feature: "V14", importance: 0.187 },
    { feature: "V17", importance: 0.163 },
    { feature: "V12", importance: 0.145 },
    { feature: "V10", importance: 0.128 },
    { feature: "V3",  importance: 0.112 },
    { feature: "V7",  importance: 0.098 },
    { feature: "V4",  importance: 0.089 },
    { feature: "Amount", importance: 0.074 },
    { feature: "V11", importance: 0.062 },
    { feature: "V16", importance: 0.058 },
    { feature: "V1",  importance: 0.047 },
    { feature: "V2",  importance: 0.042 },
    { feature: "V6",  importance: 0.038 },
    { feature: "Time", importance: 0.031 },
    { feature: "V5",  importance: 0.026 },
  ],

  getModelScores: async () => [
    { name: "Random Forest",      auc: 0.9854 },
    { name: "XGBoost",            auc: 0.9831 },
    { name: "LightGBM",           auc: 0.9812 },
    { name: "Gradient Boosting",  auc: 0.9778 },
    { name: "Logistic Regression", auc: 0.9623 },
    { name: "Decision Tree",      auc: 0.9412 },
    { name: "KNN",                auc: 0.9287 },
    { name: "SVM",                auc: 0.9154 },
  ],

  getRocCurve: async () => [
    { fpr: 0.0,  tpr: 0.0  },
    { fpr: 0.01, tpr: 0.72 },
    { fpr: 0.02, tpr: 0.82 },
    { fpr: 0.04, tpr: 0.89 },
    { fpr: 0.07, tpr: 0.93 },
    { fpr: 0.10, tpr: 0.95 },
    { fpr: 0.15, tpr: 0.965 },
    { fpr: 0.20, tpr: 0.972 },
    { fpr: 0.30, tpr: 0.981 },
    { fpr: 0.40, tpr: 0.987 },
    { fpr: 0.50, tpr: 0.991 },
    { fpr: 0.70, tpr: 0.995 },
    { fpr: 1.0,  tpr: 1.0  },
  ],

  transform: async (_input) => ({
    status: BigInt(200),
    body: new Uint8Array(),
    headers: [],
  }),
};
