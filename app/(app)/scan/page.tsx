import ScanShell from "./_components/ScanShell";

export const metadata = {
  title: "AI 입력 전 보안 검사 | AI 세이프체크",
  description: "생성형 AI에 입력하기 전 개인정보, 회사기밀, 계약정보, 과장표현 위험을 점검합니다.",
};

export default function ScanPage() {
  return <ScanShell />;
}
