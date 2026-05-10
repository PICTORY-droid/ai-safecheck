import type { RiskExplainInput, RiskExplainOutput } from "../../types/llm.types";
import { callOptionalLlm } from "./llm-client";
import { RISK_EXPLAIN_SYSTEM_PROMPT } from "./prompts/risk-explain.system";
import { riskExplainOutputSchema } from "./schemas/risk-explain-output.schema";

export async function explainRiskWithLlm(
  input: RiskExplainInput
): Promise<RiskExplainOutput | null> {
  const response = await callOptionalLlm<RiskExplainOutput>({
    systemPrompt: RISK_EXPLAIN_SYSTEM_PROMPT,
    schemaName: "risk_explain_output",
    input,
  });

  if (!response.ok || !response.data) {
    return null;
  }

  const parsedOutput = riskExplainOutputSchema.safeParse(response.data);

  if (!parsedOutput.success) {
    return null;
  }

  return parsedOutput.data;
}
