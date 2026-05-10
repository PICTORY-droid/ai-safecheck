import { SAFE_REWRITE_PROMPT_VERSION } from "../../constants/policy-version";
import type { SafeRewriteInput, SafeRewriteOutput } from "../../types/llm.types";
import { callOptionalLlm } from "./llm-client";
import { SAFE_REWRITE_SYSTEM_PROMPT } from "./prompts/safe-rewrite.system";
import { safeRewriteOutputSchema } from "./schemas/safe-rewrite-output.schema";

export async function rewriteSafePromptWithLlm(
  input: Omit<SafeRewriteInput, "rewritePolicyVersion">
): Promise<SafeRewriteOutput | null> {
  const response = await callOptionalLlm<SafeRewriteOutput>({
    systemPrompt: SAFE_REWRITE_SYSTEM_PROMPT,
    schemaName: "safe_rewrite_output",
    input: {
      ...input,
      rewritePolicyVersion: SAFE_REWRITE_PROMPT_VERSION,
    },
  });

  if (!response.ok || !response.data) {
    return null;
  }

  const parsedOutput = safeRewriteOutputSchema.safeParse(response.data);

  if (!parsedOutput.success) {
    return null;
  }

  return parsedOutput.data;
}
