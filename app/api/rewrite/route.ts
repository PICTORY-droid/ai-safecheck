import { NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { rewriteSafePromptWithLlm } from "@/features/scan/server/llm/rewrite-safe-prompt.llm";
import { riskCategorySchema } from "@/features/scan/schemas/risk-finding.schema";

const rewriteRequestSchema = z.object({
  maskedText: z.string().trim().min(1).max(10_000),
  detectedCategories: z.array(riskCategorySchema),
  blockedTerms: z.array(z.string().trim().min(1)).default([]),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = rewriteRequestSchema.parse(body);

    const rewriteResult = await rewriteSafePromptWithLlm(payload);

    if (!rewriteResult) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: "LLM_NOT_CONFIGURED",
            message: "선택적 LLM 재작성 기능이 아직 설정되지 않았습니다.",
          },
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        ok: true,
        data: rewriteResult,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          ok: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "재작성 요청값이 올바르지 않습니다.",
            issues: error.issues.map((issue) => ({
              path: issue.path.join("."),
              message: issue.message,
            })),
          },
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        ok: false,
        error: {
          code: "INTERNAL_SERVER_ERROR",
          message: "재작성 처리 중 오류가 발생했습니다.",
        },
      },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    {
      ok: false,
      error: {
        code: "METHOD_NOT_ALLOWED",
        message: "POST 요청만 지원합니다.",
      },
    },
    { status: 405 }
  );
}
