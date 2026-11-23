/* 상세 페이지 아래 "같이 보면 좋은 페이지" 카드 — main.js 보다 먼저 불러와요 */
(function () {
  const list = [
    { h: 'replace.html', img: 'real/c10.jpg', t: '샷시 교체', d: '철거부터 마감까지 한 번에', p: '전체 · 부분 교체' },
    { h: 'products.html', img: 'real/c26.jpg', t: 'KCC 창호 제품', d: '발코니 이중창 · 일반 창호', p: '이중창 · 터닝도어' },
    { h: 'process.html', img: 'real/c30.jpg', t: '시공 과정', d: '상담부터 A/S까지', p: '실측 무료' },
    { h: 'screen.html', img: 'screen-black.jpg', t: '방충망', d: '미세 · 롤 · 현관문', p: '망만 새로 교체' },
    { h: 'cases.html', img: 'real/c07.jpg', t: '시공 사례', d: '직접 시공한 실제 현장 사진', p: '28곳 보기' },
  ];
  document.querySelectorAll('[data-related]').forEach(sec => {
    const cur = sec.dataset.related;
    sec.innerHTML = `
      <div class="wrap">
        <div class="sec-head" style="margin-bottom:32px">
          <h2 class="subtitle" data-reveal>함께 보면 좋아요</h2>
        </div>
        <div class="related" data-stagger=".06">
          ${list.filter(x => x.h !== cur).slice(0, 4).map(x => `
            <a class="card svc-card card-link" href="${x.h}">
              <div class="photo"><img src="assets/img/${x.img}" alt="" loading="lazy"></div>
              <div class="body"><h3>${x.t}</h3><p>${x.d}</p>
                <div class="meta"><b>${x.p}</b><span class="go" data-icon="arrow"></span></div></div>
            </a>`).join('')}
        </div>
      </div>`;
  });
})();
