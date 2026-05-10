import { z } from "zod";
import { riskCategorySummarySchema, riskFindingSchema } from "./risk-finding.schema";

export const riskLevelSchema = z.enum(["safe", "warning", "blocked"]);

export const scanMetadataSchema = z.object({
  policyVersion: z.string().min(1),
  scoreVersion: z.string().min(1),
  detectorVersion: z.string().min(1),
  llmUsed: z.boolean(),
  llmModel: z.string().min(1).nullable(),
  llmPromptVersion: z.string().min(1).nullable(),
  temperature: z.number().nullable(),
  structuredOutput: z.boolean(),
});

export const scanResultSchema = z.object({
  score: z.number().int().min(0).max(100),
  level: riskLevelSchema,
  summary: z.string().min(1),
  risks: z.array(riskCategorySummarySchema),
  matches: z.array(riskFindingSchema),
  safePrompt: z.string(),
  metadata: scanMetadataSchema,
});

export type ScanResultSchema = z.infer<typeof scanResultSchema>;
export type ScanMetadataSchema = z.infer<typeof scanMetadataSchema>;
