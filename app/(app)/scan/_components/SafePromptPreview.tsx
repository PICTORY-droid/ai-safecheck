interface SafePromptPreviewProps {
  safePrompt: string;
  summary: string;
}

export default function SafePromptPreview({ safePrompt, summary }: SafePromptPreviewProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-base font-semibold text-slate-950">안전 문장 제안</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{summary}</p>
      <pre className="mt-4 whitespace-pre-wrap rounded-2xl bg-slate-950 p-4 text-sm leading-6 text-white">
        {safePrompt}
      </pre>
    </div>
  );
}
