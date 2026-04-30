module {
  // ML model comparison
  public type ModelScore = {
    name : Text;
    auc : Float;
  };

  // Confusion matrix (for Random Forest)
  public type ConfusionMatrix = {
    tn : Nat;
    fp : Nat;
    fn_ : Nat;
    tp : Nat;
  };

  // ROC curve data point
  public type RocPoint = {
    fpr : Float;
    tpr : Float;
  };

  // Feature importance entry
  public type FeatureImportance = {
    feature : Text;
    importance : Float;
  };

  // Autoencoder / generative AI metrics
  public type AutoencoderMetrics = {
    auc : Float;
    precision : Float;
    recall : Float;
    f1 : Float;
    threshold : Float;
  };

  // EDA summary statistics
  public type EdaStats = {
    totalTransactions : Nat;
    fraudCases : Nat;
    legitimateCases : Nat;
    fraudRate : Float;
  };

  // AI insight result (text response from external service)
  public type AiInsight = {
    insight : Text;
    timestamp : Int;
  };
};
