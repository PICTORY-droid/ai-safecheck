import type { RiskCategorySummary, RiskFinding } from "@/features/scan/types/risk.types";
import type { RiskLevel, ScanMetadata } from "@/features/scan/types/scan.types";

export interface ScanReportPayload {
  reportId: string;
  createdAt: string;
  score: number;
  level: RiskLevel;
  summary: string;
  risks: RiskCategorySummary[];
  matches: RiskFinding[];
  safePrompt: string;
  metadata: ScanMetadata;
}

export interface SavedScanReportSummary {
  reportId: string;
  createdAt: string;
  score: number;
  level: RiskLevel;
  summary: string;
}
