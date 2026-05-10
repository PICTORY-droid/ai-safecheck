import AdminShell from "./_components/AdminShell";

export const metadata = {
  title: "관리자 정책 설정 | AI 세이프체크",
  description: "회사별 AI 입력 금지어, 원문 저장 정책, LLM 재작성 사용 여부를 설정합니다.",
};

export default function AdminPage() {
  return <AdminShell />;
}
