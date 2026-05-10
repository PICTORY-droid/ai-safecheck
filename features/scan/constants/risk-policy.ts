import type { RiskAction, RiskCategory, RiskSeverity, RiskSource } from "../types/risk.types";

export type RiskPolicyKey =
  | "customerName"
  | "personalPhone"
  | "personalEmail"
  | "residentNumber"
  | "cardNumber"
  | "bankAccount"
  | "address"
  | "healthRecord"
  | "consultingRecord"
  | "companyRevenue"
  | "internalStrategy"
  | "contractDocument"
  | "copyrightFullText"
  | "guaranteeExpression"
  | "absoluteExpression"
  | "medicalCureExpression"
  | "profitGuaranteeExpression"
  | "customPolicyKeyword";

export interface RiskPolicyItem {
  category: RiskCategory;
  label: string;
  description: string;
  weight: number;
  severity: RiskSeverity;
  source: RiskSource;
  action: RiskAction;
}

export const RISK_POLICY: Record<RiskPolicyKey, RiskPolicyItem> = {
  customerName: {
    category: "personalInfo",
    label: "고객명",
    description: "개인을 식별할 수 있는 고객명이 포함되어 있을 수 있습니다.",
    weight: 20,
    severity: "medium",
    source: "regex",
    action: "mask",
  },
  personalPhone: {
    category: "personalInfo",
    label: "전화번호",
    description: "개인을 식별할 수 있는 전화번호가 포함되어 있습니다.",
    weight: 25,
    severity: "high",
    source: "regex",
    action: "mask",
  },
  personalEmail: {
    category: "personalInfo",
    label: "이메일",
    description: "개인을 식별할 수 있는 이메일 주소가 포함되어 있습니다.",
    weight: 20,
    severity: "medium",
    source: "regex",
    action: "mask",
  },
  residentNumber: {
    category: "personalInfo",
    label: "주민등록번호 의심 패턴",
    description: "고유식별정보로 볼 수 있는 값이 포함되어 있습니다.",
    weight: 45,
    severity: "critical",
    source: "regex",
    action: "block",
  },
  cardNumber: {
    category: "personalInfo",
    label: "카드번호 의심 패턴",
    description: "결제정보로 볼 수 있는 값이 포함되어 있습니다.",
    weight: 40,
    severity: "critical",
    source: "regex",
    action: "block",
  },
  bankAccount: {
    category: "personalInfo",
    label: "계좌번호 의심 표현",
    description: "금융정보로 볼 수 있는 표현이 포함되어 있습니다.",
    weight: 35,
    severity: "critical",
    source: "keyword",
    action: "block",
  },
  address: {
    category: "personalInfo",
    label: "주소 의심 표현",
    description: "개인을 특정할 수 있는 주소 정보가 포함되어 있을 수 있습니다.",
    weight: 20,
    severity: "medium",
    source: "keyword",
    action: "mask",
  },
  healthRecord: {
    category: "sensitiveInfo",
    label: "건강·병력 정보",
    description: "건강, 병력, 진료, 치료 등 민감정보가 포함되어 있을 수 있습니다.",
    weight: 35,
    severity: "critical",
    source: "keyword",
    action: "block",
  },
  consultingRecord: {
    category: "sensitiveInfo",
    label: "상담기록",
    description: "개인 상담기록이나 민감한 사정이 포함되어 있을 수 있습니다.",
    weight: 30,
    severity: "high",
    source: "keyword",
    action: "mask",
  },
  companyRevenue: {
    category: "companySecret",
    label: "매출 정보",
    description: "외부에 공개되지 않은 매출 정보가 포함되어 있을 수 있습니다.",
    weight: 25,
    severity: "high",
    source: "keyword",
    action: "generalize",
  },
  internalStrategy: {
    category: "companySecret",
    label: "내부전략",
    description: "영업전략, 내부자료, 기밀 등 회사 내부전략 표현이 포함되어 있습니다.",
    weight: 25,
    severity: "high",
    source: "keyword",
    action: "generalize",
  },
  contractDocument: {
    category: "contractRisk",
    label: "계약서",
    description: "계약서 원문 또는 계약 관련 정보가 포함되어 있을 수 있습니다.",
    weight: 25,
    severity: "high",
    source: "keyword",
    action: "generalize",
  },
  copyrightFullText: {
    category: "copyrightRisk",
    label: "저작물 원문 활용",
    description: "저작물 원문 전체를 활용하려는 요청은 저작권 위험이 있을 수 있습니다.",
    weight: 20,
    severity: "medium",
    source: "keyword",
    action: "warn",
  },
  guaranteeExpression: {
    category: "exaggerationRisk",
    label: "보장성 표현",
    description: "100% 보장처럼 결과를 단정하는 표현이 포함되어 있습니다.",
    weight: 15,
    severity: "medium",
    source: "keyword",
    action: "soften",
  },
  absoluteExpression: {
    category: "exaggerationRisk",
    label: "절대 표현",
    description: "무조건, 반드시, 절대처럼 과도하게 단정적인 표현이 포함되어 있습니다.",
    weight: 15,
    severity: "medium",
    source: "keyword",
    action: "soften",
  },
  medicalCureExpression: {
    category: "exaggerationRisk",
    label: "의료 효과 단정 표현",
    description: "완치, 부작용 없음 등 의료 효과를 단정하는 표현이 포함되어 있습니다.",
    weight: 25,
    severity: "high",
    source: "keyword",
    action: "soften",
  },
  profitGuaranteeExpression: {
    category: "exaggerationRisk",
    label: "수익 보장 표현",
    description: "수익 보장, 매출 보장 등 경제적 성과를 단정하는 표현이 포함되어 있습니다.",
    weight: 20,
    severity: "medium",
    source: "keyword",
    action: "soften",
  },
  customPolicyKeyword: {
    category: "customPolicy",
    label: "회사 정책 금지어",
    description: "관리자가 회사 정책상 외부 AI 입력을 제한한 표현입니다.",
    weight: 30,
    severity: "high",
    source: "customPolicy",
    action: "mask",
  },
};