import type { ScanResult } from "@/features/scan/types/scan.types";
import type { ScanReportPayload } from "../types/report.types";

function createReportId(): string {
  return `report_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function buildReportPayload(scanResult: ScanResult): ScanReportPayload {
  return {
    reportId: createReportId(),
    createdAt: new Date().toISOString(),
    score: scanResult.score,
    level: scanResult.level,
    summary: scanResult.summary,
    risks: scanResult.risks,
    matches: scanResult.matches,
    safePrompt: scanResult.safePrompt,
    metadata: scanResult.metadata,
  };
}
