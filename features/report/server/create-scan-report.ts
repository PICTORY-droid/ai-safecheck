import type { ScanResult } from "@/features/scan/types/scan.types";
import { buildReportPayload } from "./build-report-payload";
import type { ScanReportPayload } from "../types/report.types";

export function createScanReport(scanResult: ScanResult): ScanReportPayload {
  return buildReportPayload(scanResult);
}
