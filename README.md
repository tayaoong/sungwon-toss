# 성원창호 홈페이지 (데모)

## 열어보기
사진·글꼴을 제대로 불러오려면 파일을 더블클릭하지 말고 간단한 서버로 열어야 해요.
1. 이 폴더(`sungwon_window`)에서 빈 곳을 Shift + 오른쪽 클릭 → **터미널에서 열기**
2. `python -m http.server 5520` 입력 후 Enter
3. 인터넷 창 주소에 `http://localhost:5520` 입력

## 페이지
| 파일 | 내용 |
|---|---|
| index.html | 메인 |
| about.html | 회사소개 |
| replace.html | 샷시 교체 (전체 · 부분) |
| products.html | 제품 안내 (창 종류 · 유리 · 색상) |
| process.html | 시공 과정 |
| screen.html | 방충망 |
| price.html | 견적 계산기 |
| cases.html | 시공 사례 |
| faq.html | 자주 묻는 질문 |
| contact.html | 무료 실측 신청 (실제 저장됨) |
| admin/index.html | 관리자 페이지 |

## 실제 업체 정보로 바꾸기
- **상호 · 전화 · 주소 · 사업자번호**: `assets/js/site-config.js` 한 파일만 고치면 모든 페이지에 반영돼요.
- **사진**: `assets/img` 안의 사진을 **같은 파일 이름**으로 덮어쓰면 바로 바뀌어요. (지금 사진은 Unsplash 무료 사진)
- **시공 사례**: `cases.html` 아래쪽 `CASES` 목록
- **후기**: `assets/js/reviews.js`
- **가격**: 각 페이지 가격표 + `price.html`의 계산식
- 후기, 시공 사례, 숫자(2,180세대 · 4.9점 등), 가격은 **데모용 예시**예요. 실제 내용으로 꼭 바꿔주세요.

## ⚠ 상호의 "KCC"
KCC 공식 대리점이 아니라면 상호에 KCC를 쓰는 건 상표권 문제가 될 수 있어요.
`site-config.js`에서 `brand: ''`, `nameFull: '성원창호'`로 바꾸고, 각 페이지 맨 위 `<title>`의 `KCC성원창호`도 바꿔주세요.

## 신청 받기 · 관리자
- 지금은 **데모 모드**: 신청이 그 브라우저에만 저장돼요. 관리자 비밀번호는 `site-config.js`의 `demoAdminPassword` (`sungwon1234`).
- 실제 운영: `supabase/README.md` 순서대로 무료 데이터베이스를 연결하면 손님이 어디서 신청하든 관리자 페이지에 모여요.
- 관리자 페이지 기능: 신청 목록, 상태 바꾸기(신규 → 상담 중 → 실측 예약 → 계약 → 시공 완료), 실측 일정 · 견적 금액 · 메모, 고객 사진 보기, 전화/문자 바로 걸기, 엑셀(CSV) 내려받기.
