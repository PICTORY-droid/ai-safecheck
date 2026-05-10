import Image from "next/image";
import Link from "next/link";

export default function AppLogo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/ai-safecheck-logo.png"
        alt="AI SafeCheck 로고"
        width={36}
        height={36}
        priority
        className="h-9 w-9 rounded-xl"
      />
      <span className="flex flex-col">
        <span className="text-base font-bold tracking-tight text-slate-950">
          AI SafeCheck
        </span>
        <span className="text-xs text-slate-500">AI 입력 전 보안 검사</span>
      </span>
    </Link>
  );
}
