export default function HighlightedText({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-base font-semibold text-slate-950">위험값 제거 후 문장</h2>
      <pre className="mt-4 whitespace-pre-wrap rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
        {text}
      </pre>
    </div>
  );
}
