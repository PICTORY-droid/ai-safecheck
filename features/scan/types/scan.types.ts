import type { RiskCategorySummary, RiskFinding } from "./risk.types";

export type RiskLevel = "safe" | "warning" | "blocked";

export interface ScanRequest {
  text: string;
  companyPolicyId?: string;
  useLlmRewrite?: boolean;
}

export interface ScanMetadata {
  policyVersion: string;
  scoreVersion: string;
  detectorVersion: string;
  llmUsed: boolean;
  llmModel: string | null;
  llmPromptVersion: string | null;
  temperature: number | null;
  structuredOutput: boolean;
}

export interface ScanResult {
  score: number;
  level: RiskLevel;
  summary: string;
  risks: RiskCategorySummary[];
  matches: RiskFinding[];
  safePrompt: string;
  metadata: ScanMetadata;
}
