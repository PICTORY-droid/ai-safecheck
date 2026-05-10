export type RiskCategory =
  | "personalInfo"
  | "sensitiveInfo"
  | "companySecret"
  | "contractRisk"
  | "copyrightRisk"
  | "exaggerationRisk"
  | "customPolicy";

export type RiskSeverity = "low" | "medium" | "high" | "critical";

export type RiskAction = "allow" | "warn" | "mask" | "generalize" | "soften" | "block";

export type RiskSource =
  | "regex"
  | "keyword"
  | "customPolicy"
  | "rule"
  | "llm";

export interface RiskFinding {
  id: string;
  category: RiskCategory;
  label: string;
  description: string;
  value: string;
  startIndex: number;
  endIndex: number;
  weight: number;
  severity: RiskSeverity;
  source: RiskSource;
  action: RiskAction;
}

export interface RiskCategorySummary {
  category: RiskCategory;
  label: string;
  count: number;
  maxSeverity: RiskSeverity;
}
