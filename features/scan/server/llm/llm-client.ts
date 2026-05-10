export const LLM_GENERATION_CONFIG = {
  temperature: 0,
  topP: 0.1,
  maxOutputTokens: 800,
  responseFormat: "json_schema",
} as const;

export interface LlmRequest {
  systemPrompt: string;
  input: unknown;
  schemaName: string;
}

export interface LlmResponse<T> {
  ok: boolean;
  data: T | null;
  error: string | null;
  model: string | null;
}

export async function callOptionalLlm<T>(_request: LlmRequest): Promise<LlmResponse<T>> {
  return {
    ok: false,
    data: null,
    error: "LLM provider is not configured in MVP mode.",
    model: null,
  };
}
