/* 후기 데이터 — 데모용 예시 문구예요. 실제 후기로 바꿔 넣으세요. */
window.REVIEWS = [
  { t: '아침에 시작해서 저녁 다섯 시에 끝났어요. 하루 만에 된다는 게 진짜였네요. 그날 밤부터 외풍이 없어요.', who: '김○희', where: '수원 영통', what: '32평 전체 교체' },
  { t: '견적서를 창마다 나눠서 주셔서 비교하기 편했어요. 계약한 금액 그대로 받으셨고요.', who: '박○준', where: '용인 수지', what: '전체 교체' },
  { t: '매년 겨울마다 창틀 물 닦는 게 일이었는데 올겨울엔 한 번도 안 닦았어요.', who: '이○영', where: '성남 분당', what: '로이유리 이중창' },
  { t: '찻길 옆 동이라 시끄러웠는데 창 닫으면 조용해요. 아이가 잠을 더 잘 자요.', who: '최○수', where: '화성 동탄', what: '거실 · 안방 교체' },
  { t: '살면서 공사했는데 보양을 꼼꼼히 해주셔서 먼지가 거의 없었어요. 청소까지 하고 가셨어요.', who: '정○아', where: '안양 평촌', what: '전체 교체' },
  { t: '관리사무소 신고랑 이웃집 안내문까지 다 챙겨주셔서 신경 쓸 게 없었어요.', who: '한○민', where: '서울 송파', what: '발코니 창 교체' },
  { t: '이사 들어가기 전에 날짜 맞춰서 해주셨어요. 인테리어 팀이랑도 알아서 일정 맞추시더라고요.', who: '윤○진', where: '의왕', what: '입주 전 교체' },
  { t: '작은방 하나만 해도 되냐고 여쭤봤는데 친절하게 해주셨어요. 다른 방도 곧 맡기려고요.', who: '조○현', where: '서울 강남', what: '부분 교체' },
  { t: '샷시 바꾸면서 방충망도 같이 해서 한 번에 끝났어요. 마감이 정말 깔끔해요.', who: '강○서', where: '군포 산본', what: '교체 + 방충망' },
  { t: '실측 오셔서 꼭 안 바꿔도 되는 곳은 그냥 두라고 하셔서 오히려 믿음이 갔어요.', who: '임○우', where: '수원 광교', what: '부분 교체' },
];

(function () {
  const A = document.getElementById('reviewsA');
  const B = document.getElementById('reviewsB');
  if (!A) return;
  const star = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>';
  const card = r => `<figure class="review"><div class="stars">${star.repeat(5)}</div><blockquote>${r.t}</blockquote><figcaption><b>${r.who}</b><span>${r.where} · ${r.what}</span></figcaption></figure>`;
  const half = Math.ceil(REVIEWS.length / 2);
  const a = REVIEWS.slice(0, half).map(card).join('');
  const b = REVIEWS.slice(half).map(card).join('');
  // 끊김 없이 돌도록 두 번 이어 붙여요
  A.innerHTML = a + a;
  if (B) B.innerHTML = b + b;
  A.querySelectorAll('.review').forEach((el, i) => i >= half && el.setAttribute('aria-hidden', 'true'));
  if (B) B.querySelectorAll('.review').forEach((el, i) => i >= REVIEWS.length - half && el.setAttribute('aria-hidden', 'true'));
})();
