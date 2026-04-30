import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ConfusionMatrix {
    fn: bigint;
    fp: bigint;
    tn: bigint;
    tp: bigint;
}
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface EdaStats {
    fraudCases: bigint;
    legitimateCases: bigint;
    fraudRate: number;
    totalTransactions: bigint;
}
export interface RocPoint {
    fpr: number;
    tpr: number;
}
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export interface AutoencoderMetrics {
    f1: number;
    auc: number;
    threshold: number;
    precision: number;
    recall: number;
}
export interface ModelScore {
    auc: number;
    name: string;
}
export interface FeatureImportance {
    feature: string;
    importance: number;
}
export interface http_header {
    value: string;
    name: string;
}
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface backendInterface {
    analyzeTransaction(features: Array<number>): Promise<string>;
    getAutoencoderMetrics(): Promise<AutoencoderMetrics>;
    getConfusionMatrix(): Promise<ConfusionMatrix>;
    getEdaStats(): Promise<EdaStats>;
    getFeatureImportance(): Promise<Array<FeatureImportance>>;
    getModelScores(): Promise<Array<ModelScore>>;
    getRocCurve(): Promise<Array<RocPoint>>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
}
