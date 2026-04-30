import Types "../types/dashboard";

module {
  /// Returns hardcoded AUC scores for all 8 ML models.
  public func getModelScores() : [Types.ModelScore] {
    [
      { name = "Logistic Regression"; auc = 0.9712 },
      { name = "Decision Tree";       auc = 0.9234 },
      { name = "Random Forest";       auc = 0.9823 },
      { name = "Gradient Boosting";   auc = 0.9801 },
      { name = "XGBoost";             auc = 0.9845 },
      { name = "LightGBM";            auc = 0.9851 },
      { name = "KNN";                 auc = 0.9456 },
      { name = "SVM";                 auc = 0.9698 },
    ];
  };

  /// Returns hardcoded Random Forest confusion matrix values.
  public func getConfusionMatrix() : Types.ConfusionMatrix {
    { tn = 56841; fp = 23; fn_ = 15; tp = 83 };
  };

  /// Returns hardcoded ROC curve data points for plotting.
  public func getRocCurve() : [Types.RocPoint] {
    [
      { fpr = 0.0;    tpr = 0.0    },
      { fpr = 0.001;  tpr = 0.35   },
      { fpr = 0.002;  tpr = 0.52   },
      { fpr = 0.004;  tpr = 0.64   },
      { fpr = 0.006;  tpr = 0.72   },
      { fpr = 0.009;  tpr = 0.785  },
      { fpr = 0.013;  tpr = 0.835  },
      { fpr = 0.018;  tpr = 0.872  },
      { fpr = 0.025;  tpr = 0.901  },
      { fpr = 0.034;  tpr = 0.924  },
      { fpr = 0.047;  tpr = 0.942  },
      { fpr = 0.065;  tpr = 0.957  },
      { fpr = 0.089;  tpr = 0.967  },
      { fpr = 0.12;   tpr = 0.974  },
      { fpr = 0.16;   tpr = 0.980  },
      { fpr = 0.22;   tpr = 0.985  },
      { fpr = 0.32;   tpr = 0.990  },
      { fpr = 0.50;   tpr = 0.995  },
      { fpr = 0.75;   tpr = 0.998  },
      { fpr = 1.0;    tpr = 1.0    },
    ];
  };

  /// Returns top 15 features with importance scores.
  public func getFeatureImportance() : [Types.FeatureImportance] {
    [
      { feature = "V17";    importance = 0.1842 },
      { feature = "V14";    importance = 0.1523 },
      { feature = "V12";    importance = 0.1187 },
      { feature = "V10";    importance = 0.0954 },
      { feature = "V11";    importance = 0.0821 },
      { feature = "V16";    importance = 0.0743 },
      { feature = "V3";     importance = 0.0634 },
      { feature = "V4";     importance = 0.0572 },
      { feature = "V7";     importance = 0.0489 },
      { feature = "V9";     importance = 0.0421 },
      { feature = "V2";     importance = 0.0378 },
      { feature = "V19";    importance = 0.0312 },
      { feature = "V21";    importance = 0.0267 },
      { feature = "V5";     importance = 0.0234 },
      { feature = "Amount"; importance = 0.0623 },
    ];
  };

  /// Returns hardcoded autoencoder evaluation metrics.
  public func getAutoencoderMetrics() : Types.AutoencoderMetrics {
    { auc = 0.9534; precision = 0.821; recall = 0.745; f1 = 0.781; threshold = 0.0234 };
  };

  /// Returns hardcoded EDA dataset statistics.
  public func getEdaStats() : Types.EdaStats {
    { totalTransactions = 284807; fraudCases = 492; legitimateCases = 284315; fraudRate = 0.001727 };
  };
};
