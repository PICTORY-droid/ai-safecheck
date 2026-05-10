import { z } from "zod";

export const riskExplainOutputSchema = z.object({
  explanation: z.string().min(1),
  cautions: z.array(z.string().min(1)),
});

export type RiskExplainOutputSchema = z.infer<typeof riskExplainOutputSchema>;
