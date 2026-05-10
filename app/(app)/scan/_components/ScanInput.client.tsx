"use client";

import { useState } from "react";
import ScanResult from "./ScanResult";
import type { ScanResult as ScanResultType } from "@/features/scan/types/scan.types";

interface ScanApiResponse {
  ok: boolean;
  data?: ScanResultType;
  error?: {
    code: string;
    message: string;
    issues?: {
      path: string;
      message: string;
    }[];
  };
}

export default function ScanInput() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<ScanResultType | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleScan() {
    const trimmedText = text.trim();

    if (!trimmedText) {
      setErrorMessage("검사할 텍스트를 입력해 주세요.");
      setResult(null);
      return;
    }

    setIsLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/scan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: trimmedText,
        }),
      });

      const payload = (await response.json()) as ScanApiResponse;

      if (!response.ok || !payload.ok || !payload.data) {
        setResult(null);
        setErrorMessage(payload.error?.message ?? "검사 요청에 실패했습니다.");
        return;
      }

      setResult(payload.data);
    } catch {
      setResult(null);
      setErrorMessage("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3">
        <label htmlFor="scan-text" className="text-sm font-semibold text-slate-900">
          검사할 AI 입력문
        </label>
        <textarea
          id="scan-text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="외부 AI에 입력하려는 문장을 붙여넣으세요."
          className="min-h-52 w-full resize-y rounded-2xl border border-slate-300 bg-white p-4 text-sm leading-6 text-slate-900 outline-none transition focus:border-slate-900"
        />
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          원문은 저장하지 않고 검사 요청 처리에만 사용합니다.
        </p>
        <button
          type="button"
          onClick={handleScan}
          disabled={isLoading}
          className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isLoading ? "검사 중" : "검사하기"}
        </button>
      </div>

      {errorMessage ? (
        <div className="mt-5 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      ) : null}

      {result ? (
        <div className="mt-6">
          <ScanResult result={result} />
        </div>
      ) : null}
    </section>
  );
}
