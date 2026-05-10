import { z } from "zod";

export const SCAN_TEXT_MAX_LENGTH = 10_000;

export const scanRequestSchema = z.object({
  text: z
    .string({
      error: "검사할 텍스트는 문자열이어야 합니다.",
    })
    .trim()
    .min(1, "검사할 텍스트를 입력해 주세요.")
    .max(SCAN_TEXT_MAX_LENGTH, `검사할 텍스트는 ${SCAN_TEXT_MAX_LENGTH}자 이하로 입력해 주세요.`),
  companyPolicyId: z.string().trim().min(1).optional(),
  useLlmRewrite: z.boolean().optional().default(false),
});

export type ScanRequestSchema = z.infer<typeof scanRequestSchema>;
