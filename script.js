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

  document.querySelector('#family-story-grid').innerHTML = data.familyStory.map((item, i) => `
    <article class="family-story-card reveal" style="--delay:${i * 70}ms">
      <span class="family-story-value">${esc(item.value)}</span>
      ${item.suffix ? `<span class="family-story-suffix">${esc(item.suffix)}</span>` : ''}
      <h3>${esc(item.title)}</h3>
      <p>${esc(item.copy)}</p>
    </article>`).join('');

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

  const explorer = data.ks2Explorer;
  const explorerEl = document.querySelector('#ks2-explorer');
  const groupEntries = Object.entries(explorer.groups);

  const renderExplorerShell = () => {
    explorerEl.innerHTML = `
      <div class="cohort-picker" role="tablist" aria-label="Choose a pupil cohort">
        ${groupEntries.map(([key,g], i) => `<button class="cohort-chip ${i===0?'active':''}" role="tab" aria-selected="${i===0?'true':'false'}" data-group="${esc(key)}">${esc(g.short)}</button>`).join('')}
      </div>
      <div id="cohort-panel" class="cohort-panel" aria-live="polite"></div>
      <p class="mobility-footnote">${esc(explorer.mobilityNote)}</p>
    `;
  };

  const profileRow = (label, value, strongest=false) => `
    <div class="profile-row ${strongest ? 'strongest' : ''}">
      <span>${esc(label)}</span>
      <div class="profile-track"><i style="width:${value}%"></i></div>
      <strong>${value}%</strong>
    </div>`;

  const renderGroup = (key) => {
    const g = explorer.groups[key];
    const p = g.profile;
    const values = Object.values(p);
    const maxVal = Math.max(...values);
    const labels = { reading:'Reading', writing:'Writing', maths:'Mathematics', combined:'R/W/M combined' };
    const panel = document.querySelector('#cohort-panel');
    panel.innerHTML = `
      <div class="cohort-summary-grid">
        <div class="cohort-summary-main">
          <span class="cohort-kicker">2026 cohort</span>
          <h3>${esc(g.label)}</h3>
          <div class="cohort-size"><span aria-hidden="true">●●●</span><strong>${g.cohort}</strong><small>pupils</small></div>
          <p class="cohort-headline">${esc(g.headline)}</p>
          <p>${esc(g.commentary)}</p>
        </div>
        <div class="cohort-profile-card">
          <div class="profile-title"><strong>2026 strength profile</strong><span>expected standard+</span></div>
          ${Object.entries(p).map(([k,v]) => profileRow(labels[k], v, v===maxVal)).join('')}
        </div>
      </div>
      <div class="cohort-trend-card">
        <div class="trend-head">
          <div><span class="story-label">Three-year combined trend</span><h4>Reading, writing & mathematics combined</h4></div>
          <span class="trend-note">Cohort size shown for each year</span>
        </div>
        <div class="cohort-trend-grid">
          ${data.years.map((year,i) => `
            <div class="cohort-year">
              <span>${year}</span>
              <strong>${g.combinedTrend[i]}%</strong>
              <small>${g.cohortTrend[i]} pupils</small>
            </div>`).join('')}
        </div>
      </div>
      <div class="why-matters">
        <span class="script-label">Why does this matter?</span>
        <p>Percentages are easier to interpret when you can see who is included. The cohort size is always shown here so that a group of three pupils is not read in the same way as a cohort of forty.</p>
      </div>
    `;
  };

  renderExplorerShell();
  renderGroup(groupEntries[0][0]);
  explorerEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.cohort-chip');
    if (!btn) return;
    explorerEl.querySelectorAll('.cohort-chip').forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
    });
    renderGroup(btn.dataset.group);
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
