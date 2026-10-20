# Education

## Design Philosophy / 디자인 철학
**EN:** Designed specifically for education, certification exams, academic lectures, and technical training. Built on a clean white and soft slate canvas (`#f8fafc` / `#ffffff`) to minimize eye fatigue during extended study sessions. A structured 50:50 split container pairs concise theoretical notes on the left with interactive simulators, comparison tables, and 3D quiz cards on the right. High-visibility fluorescent green underlines (`#dcfce7` / `#22c55e`), color-coded status badges, and tactile keyboard keycaps turn complex, dense curricula into memorable visual formulas.

**KO:** 교육, 자격증 수험, 대학 강의, 기술 직무 교육을 위해 특화 설계된 테마입니다. 장시간 학습에도 눈이 편안한 소프트 슬레이트 및 화이트 캔버스(`#f8fafc` / `#ffffff`)를 바탕으로, 좌측에는 핵심 이론 요약 카드를, 우측에는 시뮬레이터·비교 표·3D 퀴즈 카드를 배치하는 50:50 분할 구조를 채택했습니다. 초록색 형광펜 밑줄 하이라이트(`.hl-green`), 직관적인 신호등 컬러 뱃지, 실감 나는 입체 키보드 키캡(`.key-badge`)을 통해 방대하고 복잡한 수험 이론을 직관적으로 각인시키고 합격으로 이끌어 줍니다.

---

## Color Palette / 색상 팔레트
| Role | Value | Preview | 설명 |
|------|-------|---------|------|
| Canvas Background | `#ffffff` | ⬜ | 메인 슬라이드 캔버스 및 카드 배경 |
| Stage / Frame Background | `#f1f5f9` | ⬜ | 캔버스 외부 스테이지 및 컨트롤 바 배경 |
| Body Background | `#f8fafc` | ⬜ | 최외곽 본문 베이스 배경 |
| Primary Accent (Blue) | `#0284c7` | 🔵 | 메인 브랜드, 슬라이드 태그, 단원 타이틀 |
| Primary Light | `#e0f2fe` | 🔵 | 태그 배경, 단원 뱃지 배경 |
| Success Accent (Emerald) | `#059669` | 🟢 | 성공 메시지, 정답 체크, 대본창 헤더 |
| Fluorescent Highlight (Green) | `#dcfce7` | 🟩 | 핵심 키워드 형광펜 하이라이트 배경 (하단 `#22c55e` 보더) |
| Highlight Text | `#15803d` | 🟢 | 형광펜 내부 강조 텍스트 색상 |
| Warning / Killer Trap (Rose) | `#e11d48` | 🔴 | 기출 오답 함정, 주의 사항, X 판별 |
| Warning Light | `#fff1f2` | 🔴 | 함정 카드 및 오답 박스 배경 |
| Notice / Warning (Amber) | `#d97706` | 🟡 | 주의 알림, 중간 요약 포인트 |
| Category Accent (Purple) | `#7c3aed` | 🟣 | 고난도 토픽, 부가 분류 체계 |
| Primary Text | `#0f172a` | ⬛ | 헤드라인, 메인 타이틀 (Slate 900) |
| Secondary Text | `#334155` | 🔘 | 카드 본문, 일반 설명 텍스트 (Slate 700) |
| Muted Text | `#64748b` | 🔘 | 부가 설명, 카운터, 비활성 텍스트 (Slate 500) |
| Border / Divider | `#e2e8f0` | ⬜ | 카드 및 테이블 경계선 (Slate 200) |

---

## Typography / 타이포그래피
| Element | Font | Weight | Size | Notes |
|---------|------|--------|------|-------|
| Title H1 | Pretendard | 900 | 48px | Line-height 1.25, Blue-Emerald 그라디언트 텍스트 지원 |
| Title Sub | Pretendard | 600 | 18px ~ 20px | Line-height 1.6, Slate 600 |
| Slide Title (H2) | Pretendard | 800 | 30px ~ 32px | Line-height 1.35, letter-spacing -0.02em |
| Slide Tag / Overline | Pretendard | 800 | 18px ~ 24px | Blue 컬러, 좌측 8px 세로 바 포인트 |
| Card Title | Pretendard | 700 | 18px ~ 20px | 상태별 컬러 연동 (Blue/Rose/Emerald/Purple) |
| Card Body / Desc | Pretendard | 500 ~ 600 | 15px ~ 16px | Line-height 1.6 ~ 1.65 |
| Table / Metric Text | Pretendard | 500 ~ 700 | 13px ~ 14px | 정밀한 그리드 및 표 데이터 표기 |
| Code / Keyboard Keycap | JetBrains Mono | 700 ~ 800 | 13px ~ 14px | 단축키, 명령어(`regedit`, `Ping`), 수치 |
| Slide Counter / Badges | JetBrains Mono / Pretendard | 700 | 14px | 상단바 과목 뱃지 및 `01 / 16` 카운터 |

---

## Special Effects & Components / 특수 효과 및 컴포넌트
- **Card-in-Stage Architecture**: 전체 화면 속 1320x720 둥근 모서리의 독립 화이트 캔버스(`box-shadow: 0 20px 40px -15px rgba(15,23,42,0.08)`)로 설계되어 시각적 집중도를 극대화
- **Fluorescent Green Highlight (`.hl-green`)**: 형광펜을 그은 듯한 연두색 배경(`#dcfce7`)과 초록 텍스트(`#15803d`), 하단 2.5px 초록 실선(`border-bottom: 2.5px solid #22c55e`)으로 핵심 암기 포인트 강조
- **Color-Coded Status Cards (`.info-card`)**: Blue(기본 이론), Rose(기출 함정/주의), Emerald(정답/공식), Amber(알림), Purple(고난도)의 5px 좌측 컬러 보더 시스템
- **Tactile Keyboard Keycaps (`.key-badge`)**: 실제 물리 키보드 키캡을 누르는 듯한 입체 음영(`box-shadow: 0 2px 0 #94a3b8`)과 Windows 로고 키 SVG 인라인 지원
- **Interactive 3D Flip Card (`.flip-container`)**: 앞면에는 기출 문제(Q)를 보여주고, 클릭 시 180도 Y축 3D 회전하여 뒷면의 정답(O/X)과 해설을 노출하는 암기 훈련 카드
- **Interactive Morph / Jump Buttons (`.morph-btn`)**: 목차 및 시뮬레이터 카드에서 특정 슬라이드로 즉시 이동하거나 상태를 전환하는 인터랙티브 버튼
- **Structured Comparison Tables (`.styled-table`)**: 디지털 vs 아날로그, 네트워크 3대 명령어 등 출제 빈출 비교를 일목요연하게 정리하는 정밀 표 컴포넌트
- **Integrated Speaker Notes Drawer (`.speaker-notes-drawer`)**: `N` 또는 `S` 키 입력 시 하단에서 부드럽게 슬라이드 업되는 일체형 강의 대본창 (`data-notes` 실시간 연동)
- **Floating Side Nav Arrows (`.side-nav-arrow`)**: 캔버스 좌우에 마우스 호버 시 부드럽게 확대되는 플로팅 내비게이션 버튼

---

## Use Cases / 적합한 용도
**EN:**
- IT & engineering certification exam preparation (CompTIA, AWS, Cisco, Engineer exams)
- University lectures, academic seminars, and curriculum walkthroughs
- Corporate employee training, onboarding, and job qualification courses
- Software operation guides, shortcuts cheatsheets, and troubleshooting manuals
- Video lecture (E-learning/MOOC) presentation decks requiring speaker notes
- Interactive quizzes, OX flashcards, and high-stakes memorization drills

**KO:**
- 국가 기술/전문 자격증 수험 강의 (컴퓨터활용능력, 정보처리기사, 전기기사, 공공조달관리사 등)
- 대학교 전공 강의, 학술 세미나, 공무원/임용고시 수험 프레젠테이션
- 기업 임직원 직무 교육, 신규 입사자 온보딩, 직무 자격 교육 자료
- 소프트웨어 기능 설명, 단축키 치트시트, 시스템 설정 가이드
- 온라인 인강 및 동영상 강의 제작용 슬라이드 (강의 대본 실시간 지원)
- 킬러 기출 함정 파훼, OX 플립 퀴즈, 핵심 공식 총정리 슬라이드

---

## Slide Types / 슬라이드 타입
`reference.html`에 포함된 14가지 수험·교육 특화 슬라이드 타입:

1. **Title** — 개정 연도 뱃지, Blue-Emerald 그라디언트 헤드라인, 서브타이틀, "강의 시작하기" 및 "목차 바로가기" 버튼
2. **Agenda & Roadmap** — 4개 핵심 영역 컬러풀 인포 카드 + 우측 빠른 단원 점프 매트릭스 버튼 그리드
3. **Concept & Split (Basic Theory)** — 좌측 핵심 이론 및 형광 하이라이트 + 우측 파티션/스토리지 작업 시뮬레이터 표
4. **Warning & Trap (Error Prevention)** — 좌측 기출 함정 주의 카드 + 우측 작업 관리자 기능 O/X 판별표
5. **Command & System Tree (Hierarchy)** — 단축키 키캡 뱃지(`Ctrl`, `Win+R`, `regedit`) + 시스템 레지스트리 계층 트리 뷰
6. **Data & Protocol (Mapping Specs)** — TCP/IP 4대 요소 이론 + IPv4 네트워크 어댑터 속성 대화상자 매핑 표
7. **Comparison Matrix (3-Way Compare)** — Ping vs Ipconfig vs Tracert 네트워크 DOS 3대 명령어 삼각 비교 매트릭스
8. **Concept & Principles (EDPS & 5 Functions)** — 자료(Data) ➔ 정보(Information) 변환 개념 및 컴퓨터 5대 장치, 6대 특징 그리드
9. **Evolution & Timeline (5 Generations)** — 초기 4대 전자계산기(ENIAC, EDSAC, EDVAC, UNIVAC) 및 1~5세대 발전 요약 매트릭스
10. **Killer Comparison Table (Digital vs Analog)** — 최다 빈출 디지털 vs 아날로그 6대 비교 항목 정밀 매트릭스
11. **Category & Icon Grid (Scale & Shapes)** — 데스크톱, 노트북, 팜톱, 웨어러블 4분할 아이콘 카드 그리드
12. **Interactive 3D Flip Cards (OX Quiz Part 1)** — 클릭 시 180도 회전하여 정답과 오답 함정을 각인시키는 3단 플립 카드
13. **Final Summary Matrix (10 Big Formulas)** — 21~28단원 핵심 10대 공식 및 기출 정답 1순위 키워드 요약 테이블
14. **Completion & Closing** — 완강 축하 이모지, 핵심 이론 마스터 축하 메시지, 첫 슬라이드 및 목차 재이동 버튼
