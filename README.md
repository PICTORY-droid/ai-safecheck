cd "/c/Desktop/vibe/side project/ai-safecheck"

cat > README.md <<'EOF'
# AI SafeCheck

> PromptLab v3에 통합되기 전, 룰 기반 AI 입력 안전 검사를 실험한 초기 독립 프로젝트

AI SafeCheck는 외부 생성형 AI에 입력하기 전, 사용자의 입력문에 개인정보, 회사기밀, 계약정보, 저작권 위험, 허위·과장 표현이 포함되어 있는지 검사하는 웹 앱으로 시작했습니다.

현재 최종 수업 제출 및 운영 프로젝트는 **PromptLab v3**입니다.  
AI SafeCheck의 핵심 방향과 검사 개념은 PromptLab v3 내부의 안전 검사 모듈로 통합되었습니다.

최종 통합본은 아래 저장소와 운영 사이트에서 확인할 수 있습니다.

| 구분 | 주소 |
|---|---|
| PromptLab v3 운영 사이트 | https://promptlab.io.kr |
| PromptLab v3 GitHub | https://github.com/PICTORY-droid/promptlab |
| 초기 AI SafeCheck 배포 | https://ai-safecheck.vercel.app |

---

## 현재 저장소의 역할

이 저장소는 AI SafeCheck를 독립 서비스로 실험하던 초기 프로젝트입니다.

수업 초반에는 외부 AI 도구에 입력하기 전 개인정보나 민감한 내용을 검사하는 별도 웹 앱으로 설계했습니다.  
이후 PromptLab v3를 재구축하면서, SafeCheck 기능은 별도 서비스가 아니라 PromptLab 내부의 저장 전 안전 검사 모듈로 통합되었습니다.

따라서 이 저장소는 현재 다음 목적을 가집니다.

- AI SafeCheck 초기 아이디어와 실험 과정 기록
- 룰 기반 검사 엔진 프로토타입 보관
- 입력 위험 점수, 판정, 안전 문장 안내 구조 실험
- PromptLab v3로 통합되기 전 개발 이력 보존

---

## 왜 만들었나

ChatGPT, Claude, Gemini 같은 생성형 AI 도구를 사용할 때 사용자는 종종 개인정보, 고객명, 전화번호, 상담기록, 회사 내부자료, 계약조건, 과장 표현을 그대로 입력할 수 있습니다.

이런 입력은 보안과 개인정보 보호 측면에서 위험할 수 있습니다.

AI SafeCheck는 외부 AI에 입력하기 전 사용자의 문장을 먼저 점검하고, 위험 요소를 알려주며, 안전한 문장으로 수정할 수 있도록 돕기 위해 만들었습니다.

처음에는 별도 웹 앱으로 만들었지만, 수업을 계속 들으면서 PromptLab v3의 방향이 바뀌었습니다.

기존 PromptLab은 프롬프트를 많이 모아 보여주는 구조였지만, v3에서는 사용자가 직접 프롬프트를 작성하고, 저장하고, 공개하기 전에 안전하게 검사하는 흐름이 더 중요해졌습니다.

그래서 AI SafeCheck는 PromptLab v3 내부 기능으로 통합되었습니다.

---

## PromptLab v3로 통합된 내용

AI SafeCheck에서 실험한 개념 중 PromptLab v3에 반영된 내용은 다음과 같습니다.

| AI SafeCheck 초기 개념 | PromptLab v3 통합 결과 |
|---|---|
| 입력문 위험 검사 | 프롬프트 저장 전 SafeCheck 검사 |
| 개인정보 탐지 | PromptLab 내부 룰 기반 detector로 반영 |
| 회사기밀 탐지 | SafeCheck 검사 카테고리로 반영 |
| 계약정보 탐지 | SafeCheck 검사 카테고리로 반영 |
| 저작권 위험 탐지 | SafeCheck 검사 카테고리로 반영 |
| 허위·과장 표현 탐지 | SafeCheck 검사 카테고리로 반영 |
| 위험 점수 계산 | allow, review, block 판정 기준으로 반영 |
| 안전 문장 안내 | PromptLab 저장 전 수정 안내로 반영 |
| 리포트 안내 | SafeCheck Reports 화면으로 반영 |
| 원문 미저장 원칙 | PromptLab 리포트 보안 정책으로 반영 |
| 컴포넌트 분리 | PromptLab v3의 app, features, shared, server 구조로 확장 |
| MCP/tool 개념 | PromptLab v3의 MCP-style tool adapter로 확장 |

---

## 현재 PromptLab v3에서의 SafeCheck 역할

PromptLab v3에서 AI SafeCheck는 다음 역할을 합니다.

- 사용자가 작성한 프롬프트 본문을 검사
- 개인정보, 회사기밀, 계약정보, 저작권 위험, 허위·과장 표현 탐지
- 위험 점수 계산
- allow, review, block 판정
- 저장 가능 여부 결정
- 안전 문장 안내 제공
- SafeCheck 리포트 저장
- 검사 원문 미저장 정책 유지

PromptLab v3에서는 SafeCheck 검사 결과가 실제 저장 정책과 연결됩니다.

| 판정 | 저장 정책 |
|---|---|
| allow | 저장 가능 |
| review | 비공개 + 초안 저장만 허용 |
| block | 저장 차단 |

---

## 원문 미저장 원칙

AI SafeCheck의 핵심 원칙은 검사 원문을 불필요하게 저장하지 않는 것입니다.

초기 독립 프로젝트에서도 원문 저장을 최소화하는 방향으로 설계했고, 이 원칙은 PromptLab v3에 그대로 반영되었습니다.

PromptLab v3 SafeCheck Reports에는 다음 데이터만 저장합니다.

- 위험 점수
- 최종 판정
- 위험 카테고리
- 안전 문장 안내
- 정책 버전
- 탐지기 버전
- 검사 시각

저장하지 않는 데이터는 다음과 같습니다.

- 검사 원문 프롬프트
- 고객명
- 전화번호
- 이메일 원문
- 회사기밀 원문
- 내부자료 원문
- 계약조건 원문
- 상담기록, 진료기록 같은 민감한 원문

---

## LLM을 최종 판정에 사용하지 않은 이유

AI SafeCheck는 룰 기반 검사를 중심으로 설계했습니다.

LLM API를 최종 위험 판정에 사용하지 않은 이유는 다음과 같습니다.

- 같은 입력에 최대한 같은 결과를 제공하기 위해
- 개인정보와 회사기밀 원문을 외부 LLM으로 보내지 않기 위해
- 위험 판정의 근거를 코드와 테스트로 관리하기 위해
- 무료 플랜 중심으로 운영하기 위해
- 수업 제출용 MVP에서 비용 발생을 줄이기 위해

PromptLab v3에서도 핵심 위험 판정은 LLM이 아니라 룰 기반 SafeCheck 엔진이 담당합니다.

향후 LLM을 추가한다면 위험 판정이 아니라, 마스킹된 문장을 더 자연스럽게 고쳐주는 선택 기능으로만 붙이는 방향이 안전합니다.

---

## 기술 스택

초기 AI SafeCheck 프로젝트에서 사용한 기술은 다음과 같습니다.

| 구분 | 기술 |
|---|---|
| Framework | Next.js |
| UI | React |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Validation | Zod |
| Test | Vitest |
| Version Control | Git, GitHub |
| Deploy | Vercel |

최종 통합 프로젝트인 PromptLab v3에서는 여기에 Supabase Auth, Supabase PostgreSQL, Google OAuth, Kakao OAuth, MCP-style tool adapter 구조가 추가되었습니다.

---

## 초기 구현 기능

이 저장소에서 실험한 기능은 다음과 같습니다.

- AI 입력문 위험 검사
- 개인정보 탐지
- 고객명 탐지
- 전화번호 탐지
- 민감정보 탐지
- 회사기밀 탐지
- 계약정보 탐지
- 저작권 위험 표현 탐지
- 허위·과장 표현 탐지
- 위험 점수 계산
- 입력 가능, 수정 필요, 입력 금지 판정
- 탐지 근거 표시
- 안전 문장 제안
- 관리자 정책 설정 화면
- 리포트 안내 및 출력 화면
- 공통 네비게이션
- 페이지별 사용 방법 안내
- 앱 로고 및 favicon 적용

---

## 초기 사용 방법

초기 배포 주소는 다음과 같습니다.

```text
https://ai-safecheck.vercel.app