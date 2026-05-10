import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { scanRequestSchema } from "@/features/scan/schemas/scan-request.schema";
import { scanText } from "@/features/scan/server/scan-text";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = scanRequestSchema.parse(body);

    const result = scanText(payload.text);

    return NextResponse.json(
      {
        ok: true,
        data: result,
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
            message: "검사 요청값이 올바르지 않습니다.",
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
          message: "검사 처리 중 오류가 발생했습니다.",
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
