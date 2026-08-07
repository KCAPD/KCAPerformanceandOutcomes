(() => {
  const data = window.KCA_DATA;
  const esc = (v) => String(v).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
  const fmt = (v, unit='') => v === null || v === undefined ? 'TBC' : `${Number.isInteger(v) ? v : v}${unit}`;

  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.site-nav');
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));

  document.querySelector('#highlight-grid').innerHTML = data.highlights.map((h, i) => `
    <article class="highlight-card reveal" style="--delay:${i * 70}ms">
      <span class="highlight-meta">${esc(h.meta)}</span>
      <strong>${esc(h.value)}</strong>
      <h3>${esc(h.label)}</h3>
      <p>${esc(h.note)}</p>
    </article>`).join('');

  const comparatorRows = (m) => data.years.map((year, i) => `
    <div class="year-card">
      <div class="year-label">${year}</div>
      <div class="year-value school-value"><span>KCA</span><strong>${fmt(m.school[i], m.unit)}</strong></div>
      <div class="year-value"><span>Camden</span><strong>${fmt(m.camden[i], m.unit)}</strong></div>
      <div class="year-value"><span>National</span><strong>${fmt(m.national[i], m.unit)}</strong></div>
    </div>`).join('');

  const barRows = (m) => {
    const latest = [
      ['KCA', m.school[2], 'school'], ['Camden', m.camden[2], ''], ['National', m.national[2], '']
    ];
    const values = latest.filter(x => x[1] !== null).map(x => x[1]);
    const max = m.unit.includes('/ 25') ? 25 : 100;
    return `<div class="latest-bars" aria-label="2026 comparison">
      ${latest.map(([label,v,cls]) => `
        <div class="bar-row ${cls}">
          <span>${label}</span>
          <div class="bar-track"><i style="width:${v === null ? 0 : Math.min(100,(v/max)*100)}%"></i></div>
          <strong>${fmt(v,m.unit)}</strong>
        </div>`).join('')}
    </div>`;
  };

  const measureCard = (m, index) => `
    <article class="measure-card reveal" style="--delay:${index * 45}ms">
      <div class="measure-head"><h3>${esc(m.name)}</h3><span>Three-year statutory view</span></div>
      ${barRows(m)}
      <div class="three-year-grid">${comparatorRows(m)}</div>
      ${m.note ? `<p class="measure-note">${esc(m.note)}</p>` : ''}
    </article>`;

  const scaledCard = (s, idx) => `
    <article class="measure-card compact reveal" style="--delay:${idx * 45}ms">
      <div class="measure-head"><h3>${esc(s.name)} · average scaled score</h3><span>100 = expected standard</span></div>
      <div class="three-year-grid">${data.years.map((year,i)=>`
        <div class="year-card">
          <div class="year-label">${year}</div>
          <div class="year-value school-value"><span>KCA</span><strong>${fmt(s.school[i])}</strong></div>
          <div class="year-value"><span>Camden</span><strong>${fmt(s.camden[i])}</strong></div>
          <div class="year-value"><span>National</span><strong>${fmt(s.national[i])}</strong></div>
        </div>`).join('')}</div>
    </article>`;

  Object.entries(data.sections).forEach(([id, section]) => {
    const el = document.querySelector(`#${id}`);
    if (!el) return;
    el.innerHTML = `
      <div class="wrap">
        <div class="section-heading split-heading">
          <div><span class="chapter-number">${esc(section.kicker)}</span><h2>${esc(section.title)}</h2></div>
          <p>${esc(section.intro)}</p>
        </div>
        <div class="story-card">
          <span class="story-label">What the current data tells us</span>
          <p>${esc(section.story)}</p>
          ${section.provisionalExtra ? `<div class="mini-warning">${esc(section.provisionalExtra)}</div>` : ''}
        </div>
        <div class="measure-grid">${section.measures.map(measureCard).join('')}</div>
        ${section.scaled ? `<div class="subheading"><span>Average scaled scores</span><h3>Another way to read attainment at KS2</h3></div><div class="measure-grid scaled-grid">${section.scaled.map(scaledCard).join('')}</div>` : ''}
        <details class="commentary reveal">
          <summary><span>Headteacher commentary</span><span aria-hidden="true">+</span></summary>
          <div><p>${esc(section.commentary)}</p></div>
        </details>
      </div>`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
