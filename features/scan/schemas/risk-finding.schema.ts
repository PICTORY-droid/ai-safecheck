import { z } from "zod";

export const riskCategorySchema = z.enum([
  "personalInfo",
  "sensitiveInfo",
  "companySecret",
  "contractRisk",
  "copyrightRisk",
  "exaggerationRisk",
  "customPolicy",
]);

export const riskSeveritySchema = z.enum(["low", "medium", "high", "critical"]);

export const riskActionSchema = z.enum([
  "allow",
  "warn",
  "mask",
  "generalize",
  "soften",
  "block",
]);

export const riskSourceSchema = z.enum([
  "regex",
  "keyword",
  "customPolicy",
  "rule",
  "llm",
]);

export const riskFindingSchema = z.object({
  id: z.string().min(1),
  category: riskCategorySchema,
  label: z.string().min(1),
  description: z.string().min(1),
  value: z.string().min(1),
  startIndex: z.number().int().min(0),
  endIndex: z.number().int().min(0),
  weight: z.number().int().min(0).max(100),
  severity: riskSeveritySchema,
  source: riskSourceSchema,
  action: riskActionSchema,
});

export const riskCategorySummarySchema = z.object({
  category: riskCategorySchema,
  label: z.string().min(1),
  count: z.number().int().min(0),
  maxSeverity: riskSeveritySchema,
});

export type RiskFindingSchema = z.infer<typeof riskFindingSchema>;
export type RiskCategorySummarySchema = z.infer<typeof riskCategorySummarySchema>;
