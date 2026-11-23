/* ==========================================================
   KCC성원창호 — 공통 스크립트
   머리글·바닥글·플로팅 버튼을 그리고, 모션과 인터랙션을 붙입니다.
   ========================================================== */
(function () {
  const S = window.SITE || {};
  const tel = (S.phone || '').replace(/[^0-9]/g, '');
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  /* ---------- 아이콘 (선 아이콘, 직접 그림) ---------- */
  const P = {
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    chevR: '<path d="m9 6 6 6-6 6"/>',
    chevD: '<path d="m6 9 6 6 6-6"/>',
    up: '<path d="m6 15 6-6 6 6"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18M6 6l12 12"/>',
    roller: '<circle cx="8" cy="15" r="3"/><circle cx="16" cy="15" r="3"/><path d="M3 20h18M5 11V5h14v6"/>',
    handle: '<rect x="9" y="3" width="6" height="18" rx="3"/><path d="M12 8v3"/>',
    door: '<rect x="5" y="3" width="14" height="18" rx="1.5"/><path d="M15 12h.01M5 7h14"/>',
    wind: '<path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h7"/>',
    grid: '<rect x="4" y="3" width="16" height="18" rx="1.5"/><path d="M4 9h16M4 15h16M10 3v18M16 3v18"/>',
    camera: '<path d="M14.5 4h-5L7.5 6.5H4a2 2 0 0 0-2 2V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.5a2 2 0 0 0-2-2h-3.5z"/><circle cx="12" cy="13" r="3.5"/>',
    chat: '<path d="M12 3C6.5 3 2 6.6 2 11c0 2.8 1.9 5.3 4.7 6.7L5.8 21l4.1-2.2c.7.1 1.4.2 2.1.2 5.5 0 10-3.6 10-8s-4.5-8-10-8z"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    won: '<path d="M4 6l3 12 5-10 5 10 3-12M3 11h18M3 14h18"/>',
    pin: '<path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    tool: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>',
    star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 16v-4M12 8h.01"/>',
    alert: '<path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><path d="M12 9v4M12 17h.01"/>',
    home: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 21"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    drop: '<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    bug: '<rect x="7" y="7" width="10" height="13" rx="5"/><path d="M12 7V4M9 4l1.5 2M15 4l-1.5 2M3 12h4M17 12h4M4 18l3-2M20 18l-3-2M4 7l3 2M20 7l-3 2"/>',
  };
  const icon = (n, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${P[n] || ''}</svg>`;
  window.icon = icon;
  document.querySelectorAll('[data-icon]').forEach(el => { el.innerHTML = icon(el.dataset.icon); });

  /* ---------- 메뉴 정의 ---------- */
  const services = [
    { href: 'replace.html', ic: 'home', t: '샷시 교체', d: '오래된 샷시 철거부터 마감까지' },
    { href: 'products.html', ic: 'grid', t: 'KCC 창호 제품', d: '발코니 이중창 · 일반 창호' },
    { href: 'process.html', ic: 'calendar', t: '시공 과정', d: '상담부터 A/S까지' },
    { href: 'screen.html', ic: 'bug', t: '방충망', d: '미세 · 롤 방충망' },
  ];
  const isSvc = services.some(s => s.href === here);
  const act = h => (h === here ? ' class="active"' : '');
  const logoSvg = '<svg viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="13" fill="#3182F6"/><rect x="9" y="11" width="18" height="26" rx="1.5" fill="#fff" fill-opacity=".32"/><rect x="21" y="11" width="18" height="26" rx="1.5" fill="#fff"/><rect x="24.6" y="20.5" width="2.8" height="7" rx="1.4" fill="#3182F6"/></svg>';
  window.LOGO_SVG = logoSvg;
  const logoHtml = `<img class="logo-img" src="assets/brand/logo.png" alt="${S.nameFull}" width="571" height="127">`;
  window.LOGO_IMG = logoHtml;
  const hasKakao = !!(S.kakaoUrl && S.kakaoUrl !== '#');
  const msgHref = hasKakao ? S.kakaoUrl : `sms:${tel}`;
  const msgLabel = hasKakao ? '카카오톡 상담' : '문자 문의';
  const mapUrl = 'https://map.naver.com/p/search/' + encodeURIComponent(S.address || '');
  window.MAP_URL = mapUrl;

  /* ---------- 머리글 ---------- */
  const header = document.createElement('header');
  header.className = 'header';
  header.innerHTML = `
    <div class="wrap">
      <a href="index.html" class="logo" aria-label="${S.nameFull} 홈">${logoHtml}</a>
      <span class="dealer-tag">${S.dealer}</span>
      <ul class="gnb">
        <li><a href="about.html"${act('about.html')}>회사소개</a></li>
        <li class="has-dd"><button type="button"${isSvc ? ' class="active"' : ''} aria-expanded="false">샷시 교체${icon('chevD', 'class="caret"')}</button>
          <div class="dropdown">${services.map(s => `<a href="${s.href}"><span class="ico">${icon(s.ic)}</span><span><b>${s.t}</b><span>${s.d}</span></span></a>`).join('')}</div>
        </li>
        <li><a href="cases.html"${act('cases.html')}>시공 사례</a></li>
        <li><a href="faq.html"${act('faq.html')}>자주 묻는 질문</a></li>
      </ul>
      <div class="header-cta">
        <a class="header-tel" href="tel:${tel}"><span>${icon('phone')}</span><b>${S.phone}</b></a>
        <a class="btn btn-accent btn-sm" href="contact.html">무료 실측 신청</a>
      </div>
      <button class="menu-btn" type="button" aria-label="메뉴 열기"><i></i></button>
    </div>`;
  document.body.prepend(header);

  const mMenu = document.createElement('nav');
  mMenu.className = 'm-menu';
  const mLink = (h, t, i) => `<a class="m-link" href="${h}" style="transition-delay:${i * 0.03}s">${t}${icon('chevR')}</a>`;
  let k = 0;
  mMenu.innerHTML = `
    <div class="group">${mLink('index.html', '홈', k++)}${mLink('about.html', '회사소개 · 오시는 길', k++)}</div>
    <div class="group"><div class="group-title">샷시 교체</div>${services.map(s => mLink(s.href, s.t, k++)).join('')}</div>
    <div class="group">${mLink('cases.html', '시공 사례', k++)}${mLink('faq.html', '자주 묻는 질문', k++)}</div>
    <div class="m-cta">
      <a class="btn btn-accent btn-lg" href="contact.html">무료 실측 신청</a>
      <a class="btn btn-line btn-lg" href="tel:${tel}">${icon('phone')}${S.phone}</a>
    </div>`;
  header.after(mMenu);

  header.querySelector('.menu-btn').addEventListener('click', () => document.body.classList.toggle('menu-open'));

  // 드롭다운: 마우스 올리면 열림, 클릭/키보드도 지원
  const dd = header.querySelector('.has-dd');
  let ddTimer;
  const openDD = v => { dd.classList.toggle('open', v); dd.querySelector('button').setAttribute('aria-expanded', v); };
  dd.addEventListener('mouseenter', () => { clearTimeout(ddTimer); openDD(true); });
  dd.addEventListener('mouseleave', () => { ddTimer = setTimeout(() => openDD(false), 120); });
  dd.querySelector('button').addEventListener('click', () => openDD(!dd.classList.contains('open')));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { openDD(false); document.body.classList.remove('menu-open'); closeSheet(); } });
  document.addEventListener('click', e => { if (!dd.contains(e.target)) openDD(false); });

  /* ---------- 바닥글 ---------- */
  const opt = (v, html) => (v ? html : '');
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="wrap">
      <div class="top">
        <div class="brand">
          <a href="index.html" class="logo">${logoHtml}</a>
          <p>${S.dealer}<br>${S.slogan}</p>
        </div>
        <div class="f-call">
          <span>상담 · 실측 문의</span>
          <a href="tel:${tel}">${S.phone}</a>
          <em>${[S.hours, S.area + ' 직접 시공'].filter(Boolean).join(' · ')}</em>
        </div>
        <div class="cols">
          <div><h4>샷시 교체</h4><ul>${services.map(s => `<li><a href="${s.href}">${s.t}</a></li>`).join('')}</ul></div>
          <div><h4>안내</h4><ul>
            <li><a href="about.html">회사소개</a></li><li><a href="cases.html">시공 사례</a></li>
            <li><a href="faq.html">자주 묻는 질문</a></li>
            <li><a href="contact.html">무료 실측 신청</a></li></ul></div>
        </div>
      </div>
      <div class="biz">
        <span>상호 ${S.bizName || S.name}</span><span>대표 ${S.owner}</span><span>사업자등록번호 ${S.bizNo}</span><br>
        <span>공장 · 사무실 ${S.address}${S.addressOld ? ` (${S.addressOld})` : ''}</span>${opt(S.email, `<span>${S.email}</span>`)}
        <a class="biz-map" href="${mapUrl}" target="_blank" rel="noopener">지도 보기${icon('chevR')}</a>
      </div>
      <div class="copy"><span>© ${new Date().getFullYear()} ${S.bizName || S.name}</span><a href="privacy.html">개인정보처리방침</a></div>
    </div>`;
  document.body.append(footer);

  /* ---------- 플로팅 ---------- */
  const kakaoSvg = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3C6.5 3 2 6.5 2 10.8c0 2.8 1.9 5.2 4.7 6.6l-1 3.6c-.1.3.3.6.6.4l4.2-2.8c.5.1 1 .1 1.5.1 5.5 0 10-3.5 10-7.9S17.5 3 12 3z"/></svg>';
  const msgIcon = hasKakao ? `<span class="k">${kakaoSvg}</span>` : `<span class="k sms">${icon('chat')}</span>`;
  const fl = document.createElement('div');
  fl.className = 'floating';
  fl.innerHTML = `
    <button class="to-top" type="button" aria-label="맨 위로">${icon('up')}</button>
    <a class="fab" href="${msgHref}">${msgIcon}${msgLabel}</a>
    <a class="fab call" href="tel:${tel}">${icon('phone')}${S.phone}</a>
    ${here === 'contact.html' ? '' : `<a class="fab main" href="contact.html">${icon('calendar')}무료 실측 신청</a>`}`;
  document.body.append(fl);
  fl.querySelector('.to-top').addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

  const mBar = document.createElement('div');
  mBar.className = 'm-bar';
  if (here !== 'contact.html') {
    mBar.innerHTML = `<div class="row">
      <a class="sq call" href="tel:${tel}">${icon('phone')}<span>전화</span></a>
      <a class="sq" href="${msgHref}">${hasKakao ? kakaoSvg : icon('chat')}<span>${hasKakao ? '카톡' : '문자'}</span></a>
      <a class="btn btn-accent" href="contact.html">무료 실측 신청</a></div>`;
    document.body.append(mBar);
  }

  /* ---------- 시안 안내 ---------- */
  if (S.demoNotice) {
    let closed = false;
    try { closed = sessionStorage.getItem('demo_notice_closed') === '1'; } catch (e) {}
    if (!closed) {
      const n = document.createElement('div');
      n.className = 'demo-notice';
      n.innerHTML = `<span><b>시안</b>오픈 전 미리보기예요</span><button type="button" aria-label="안내 닫기">${icon('x')}</button>`;
      n.querySelector('button').onclick = () => { n.remove(); try { sessionStorage.setItem('demo_notice_closed', '1'); } catch (e) {} };
      document.body.append(n);
    }
  }

  /* ---------- 업체 정보 채우기 ---------- */
  document.querySelectorAll('[data-site]').forEach(el => { const v = S[el.dataset.site]; if (v != null && v !== '') el.textContent = v; });
  document.querySelectorAll('[data-tel]').forEach(el => { el.setAttribute('href', 'tel:' + tel); });
  document.querySelectorAll('[data-msg]').forEach(el => { el.setAttribute('href', msgHref); const l = el.querySelector('.lbl'); if (l) l.textContent = msgLabel; });
  document.querySelectorAll('[data-map]').forEach(el => { el.setAttribute('href', mapUrl); el.target = '_blank'; el.rel = 'noopener'; });

  /* ---------- 스크롤: 머리글 숨김, 플로팅 표시 ---------- */
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    header.classList.toggle('scrolled', y > 8);
    const goingDown = y > lastY + 4, goingUp = y < lastY - 4;
    if (!document.body.classList.contains('menu-open') && !dd.classList.contains('open')) {
      if (goingDown && y > 400) header.classList.add('hide');
      else if (goingUp || y < 200) header.classList.remove('hide');
    }
    const show = y > 480;
    fl.classList.toggle('show', show);
    mBar.classList.toggle('show', show);
    lastY = y;
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- 제목 한 줄씩 ---------- */
  // <h1 class="lines">첫 줄<br>둘째 줄</h1> 처럼 <br>로 나눈 줄마다 감싸 줍니다.
  document.querySelectorAll('.lines').forEach(el => {
    const parts = el.innerHTML.split(/<br\s*\/?>/i);
    el.innerHTML = parts.map((p, i) => `<span class="ln"><span style="--i:${i}">${p.trim()}</span></span>`).join('');
  });

  /* ---------- 등장 모션 ---------- */
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  // data-stagger 를 단 부모 안의 자식들에 차례로 지연을 줍니다.
  document.querySelectorAll('[data-stagger]').forEach(p => {
    const step = parseFloat(p.dataset.stagger) || 0.08;
    [...p.children].forEach((c, i) => {
      if (!c.hasAttribute('data-reveal')) c.setAttribute('data-reveal', '');
      c.style.setProperty('--d', (i * step).toFixed(2) + 's');
    });
  });
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); e.target.dispatchEvent(new CustomEvent('reveal')); }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('[data-reveal], .lines').forEach(el => (reduce ? el.classList.add('in') : io.observe(el)));

  /* ---------- 사진 확대(스크롤 연동) ---------- */
  const zooms = [...document.querySelectorAll('.zoom-in')];
  if (zooms.length && !reduce) {
    const tick = () => {
      const vh = innerHeight;
      zooms.forEach(z => {
        const r = z.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)));
        z.style.setProperty('--zs', (1.14 - p * 0.14).toFixed(4));
      });
    };
    addEventListener('scroll', () => requestAnimationFrame(tick), { passive: true });
    tick();
  }

  /* ---------- 숫자 올라가기 ---------- */
  const fmt = n => n.toLocaleString('ko-KR');
  window.countTo = (el, to, dur = 1400, dec = 0) => {
    const from = parseFloat(el.dataset.from || 0);
    const t0 = performance.now();
    const ease = t => 1 - Math.pow(1 - t, 4);
    const step = now => {
      const t = Math.min(1, (now - t0) / dur);
      const v = from + (to - from) * ease(t);
      el.textContent = dec ? v.toFixed(dec) : fmt(Math.round(v));
      if (t < 1) requestAnimationFrame(step);
    };
    if (reduce) { el.textContent = dec ? to.toFixed(dec) : fmt(to); return; }
    requestAnimationFrame(step);
  };
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target; cio.unobserve(el);
    countTo(el, parseFloat(el.dataset.count), parseInt(el.dataset.dur || 1400), parseInt(el.dataset.dec || 0));
  }), { threshold: 0.6 });
  document.querySelectorAll('[data-count]').forEach(el => cio.observe(el));

  /* ---------- 아코디언 ---------- */
  document.querySelectorAll('.acc-q').forEach(q => {
    q.setAttribute('aria-expanded', 'false');
    if (!q.querySelector('svg')) q.insertAdjacentHTML('beforeend', icon('chevD'));
    q.addEventListener('click', () => {
      const item = q.closest('.acc-item');
      const open = !item.classList.contains('open');
      item.classList.toggle('open', open);
      q.setAttribute('aria-expanded', open);
    });
  });

  /* ---------- 자가진단 체크리스트 ---------- */
  document.querySelectorAll('[data-checklist]').forEach(box => {
    const items = box.querySelectorAll('.check');
    const res = box.querySelector('.check-result');
    const msgs = JSON.parse(box.dataset.checklist || '[]'); // [0개, 1개, 2개 이상] 문구
    const render = () => {
      const n = box.querySelectorAll('.check.on').length;
      if (!res) return;
      const m = msgs[Math.min(n, msgs.length - 1)] || ['', ''];
      res.querySelector('.msg').innerHTML = `<b>${m[0]}</b>${m[1]}`;
      res.querySelector('.count').textContent = `${items.length}개 중 ${n}개 해당`;
    };
    items.forEach(c => {
      c.insertAdjacentHTML('afterbegin', `<span class="box">${icon('check')}</span>`);
      c.setAttribute('aria-pressed', 'false');
      c.addEventListener('click', () => { c.classList.toggle('on'); c.setAttribute('aria-pressed', c.classList.contains('on')); render(); });
    });
    render();
  });

  /* ---------- 비포/애프터 ---------- */
  document.querySelectorAll('.ba').forEach(ba => {
    let dragging = false;
    const set = x => {
      const r = ba.getBoundingClientRect();
      const p = Math.min(97, Math.max(3, ((x - r.left) / r.width) * 100));
      ba.style.setProperty('--pos', p + '%');
    };
    ba.addEventListener('pointerdown', e => { dragging = true; ba.setPointerCapture(e.pointerId); set(e.clientX); });
    ba.addEventListener('pointermove', e => dragging && set(e.clientX));
    ba.addEventListener('pointerup', () => (dragging = false));
    ba.addEventListener('pointercancel', () => (dragging = false));
    // 처음 보일 때 한 번 살짝 움직여서 "끌 수 있다"는 걸 알려줍니다
    const once = new IntersectionObserver(es => {
      if (!es[0].isIntersecting || reduce) return; once.disconnect();
      let t0 = null;
      const anim = now => {
        if (dragging) return;
        t0 = t0 || now; const t = (now - t0) / 1600;
        const v = 50 + Math.sin(t * Math.PI * 2) * 14 * (1 - Math.min(1, t));
        ba.style.setProperty('--pos', v + '%');
        if (t < 1) requestAnimationFrame(anim);
      };
      setTimeout(() => requestAnimationFrame(anim), 400);
    }, { threshold: 0.6 });
    once.observe(ba);
  });

  /* ---------- 토스트 ---------- */
  let toastEl, toastTimer;
  window.toast = msg => {
    if (!toastEl) { toastEl = document.createElement('div'); toastEl.className = 'toast'; document.body.append(toastEl); }
    toastEl.innerHTML = icon('check') + msg;
    requestAnimationFrame(() => toastEl.classList.add('show'));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
  };

  /* ---------- 시트(모달) ---------- */
  function closeSheet() { document.documentElement.classList.remove('sheet-open'); }
  window.openSheet = html => {
    let bd = document.querySelector('.sheet-backdrop'), sh = document.querySelector('.sheet');
    if (!sh) {
      bd = document.createElement('div'); bd.className = 'sheet-backdrop';
      sh = document.createElement('div'); sh.className = 'sheet'; sh.setAttribute('role', 'dialog'); sh.setAttribute('aria-modal', 'true');
      document.body.append(bd, sh);
      bd.addEventListener('click', closeSheet);
    }
    sh.innerHTML = `<button class="close" type="button" aria-label="닫기">${icon('x')}</button>` + html;
    sh.querySelector('.close').addEventListener('click', closeSheet);
    sh.scrollTop = 0;
    requestAnimationFrame(() => document.documentElement.classList.add('sheet-open'));
    return sh;
  };
  window.closeSheet = closeSheet;

  /* ---------- 탭(세그먼트) ---------- */
  document.querySelectorAll('[data-tabs]').forEach(t => {
    const btns = t.querySelectorAll('[data-tab]');
    const ind = t.querySelector('.seg-ind');
    const move = b => { if (ind) { ind.style.width = b.offsetWidth + 'px'; ind.style.transform = `translateX(${b.offsetLeft - 4}px)`; } };
    btns.forEach(b => b.addEventListener('click', () => {
      btns.forEach(x => x.classList.toggle('on', x === b));
      move(b);
      const target = t.dataset.tabs;
      document.querySelectorAll(`[data-panel-of="${target}"]`).forEach(p => {
        const show = p.dataset.panel === b.dataset.tab || b.dataset.tab === 'all';
        p.hidden = !show;
        if (show) { p.classList.remove('in'); requestAnimationFrame(() => requestAnimationFrame(() => p.classList.add('in'))); }
      });
      t.dispatchEvent(new CustomEvent('tabchange', { detail: b.dataset.tab }));
    }));
    const on = t.querySelector('[data-tab].on') || btns[0];
    requestAnimationFrame(() => move(on));
    addEventListener('resize', () => move(t.querySelector('[data-tab].on') || btns[0]));
  });
})();
