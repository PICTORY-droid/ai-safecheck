import type { RiskCategory } from "../types/risk.types";

export const RISK_CATEGORY_LABELS: Record<RiskCategory, string> = {
  personalInfo: "개인정보",
  sensitiveInfo: "민감정보",
  companySecret: "회사기밀",
  contractRisk: "계약·거래 정보",
  copyrightRisk: "저작권 위험",
  exaggerationRisk: "허위·과장 표현",
  customPolicy: "회사 정책 금지어",
};

export const RISK_CATEGORY_DESCRIPTIONS: Record<RiskCategory, string> = {
  personalInfo: "전화번호, 이메일, 주민등록번호, 계좌번호 등 개인을 식별할 수 있는 정보입니다.",
  sensitiveInfo: "건강, 병력, 상담기록 등 민감하게 다뤄야 하는 정보입니다.",
  companySecret: "매출, 투자, 내부전략, 원가 등 회사 내부정보입니다.",
  contractRisk: "계약서, 견적서, 발주서, 거래처 등 거래 관계 정보입니다.",
  copyrightRisk: "기사, 책, 논문, 강의자료 등 저작권 위험이 있는 원문 활용 요청입니다.",
  exaggerationRisk: "100% 보장, 무조건, 완치, 수익 보장처럼 단정적이거나 과장된 표현입니다.",
  customPolicy: "관리자가 회사별로 등록한 거래처명, 프로젝트명, 내부 코드명, 금지어입니다.",
};
