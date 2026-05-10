import type { RiskCategory } from "./risk.types";

export interface SafeRewriteInput {
  maskedText: string;
  detectedCategories: RiskCategory[];
  blockedTerms: string[];
  rewritePolicyVersion: string;
}

export interface SafeRewriteOutput {
  safePrompt: string;
  rewriteNotes: string[];
  preservedIntent: boolean;
  addedNewFacts: false;
}

export interface RiskExplainInput {
  detectedCategories: RiskCategory[];
  safePrompt: string;
  policyVersion: string;
}

export interface RiskExplainOutput {
  explanation: string;
  cautions: string[];
}
