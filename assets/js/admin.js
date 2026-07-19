// ===========================
// CONFIG
// ===========================
const SUPABASE_URL  = 'https://ftoaghmbibpkgkyonzbb.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0b2FnaG1iaWJwa2dreW9uemJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQwMTc4MzgsImV4cCI6MjA5OTU5MzgzOH0.KQowMR2Vt4MsbFnIJyneS7df0_zHzSrngyqcR5xpqB4';

// ⚠️ CHANGE THESE CREDENTIALS (username + password)
const ADMIN_USER = 'mudassar';
const ADMIN_PASS = 'Mudassar@2026';

const PER_PAGE = 15;

let sb, allRows = [], filtered = [], currentPage = 1, selected = new Set();

// ===========================
// SUPABASE INIT
// ===========================
function initSB() {
  sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
}

// ===========================
// LOGIN & SESSION MANAGEMENT
// ===========================
const loginScreen = document.getElementById('loginScreen');

function checkSession() {
  return sessionStorage.getItem('admin_auth') === 'ok';
}
function setSession() {
  sessionStorage.setItem('admin_auth','ok');
}
function clearSession() {
  sessionStorage.removeItem('admin_auth');
}

// Secure Template Guard instantiation
function instantiateDashboard() {
  const container = document.getElementById('dashboardContainer');
  if (container && !container.children.length) {
    const template = document.getElementById('adminDashboardTemplate');
    container.appendChild(template.content.cloneNode(true));
    initDashboardDOM();
  }
}

// Bind all dashboard event listeners post-instantiation
function initDashboardDOM() {
  document.getElementById('logoutBtn').onclick = () => {
    clearSession();
    location.reload();
  };

  document.getElementById('searchInput').addEventListener('input', e => {
    searchTerm = e.target.value.toLowerCase();
    currentPage = 1;
    applyFilters();
  });

  document.getElementById('serviceFilter').addEventListener('change', e => {
    serviceFilter = e.target.value;
    currentPage = 1;
    applyFilters();
  });

  document.getElementById('selectAll').addEventListener('change', e => {
    const start = (currentPage - 1) * PER_PAGE;
    const rows  = filtered.slice(start, start + PER_PAGE);
    rows.forEach(r => {
      if (e.target.checked) selected.add(r.id); else selected.delete(r.id);
    });
    renderTable();
    updateDeleteBtn();
  });

  document.getElementById('deleteSelectedBtn').onclick = async () => {
    if (!selected.size) return;
    if (!confirm(`Delete ${selected.size} selected message(s)?`)) return;
    const ids = [...selected];
    try {
      const { error } = await sb.from('contact_messages').delete().in('id', ids);
      if (error) throw error;
      allRows = allRows.filter(r => !selected.has(r.id));
      selected.clear();
      applyFilters();
      updateStats();
      showToast(`${ids.length} message(s) deleted.`, 'ok');
    } catch (err) {
      showToast('Bulk delete failed: ' + err.message, 'err');
    }
  };

  document.getElementById('exportBtn').onclick = () => {
    const cols = ['id','name','brand','email','service','budget','timeline','brief','created_at'];
    const escVal = v => `"${String(v||'').replace(/"/g,'""')}"`;
    const rows = [cols.join(','), ...filtered.map(r => cols.map(c=>escVal(r[c])).join(','))];
    const blob = new Blob([rows.join('\n')], {type:'text/csv'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `inquiries_${new Date().toISOString().slice(0,10)}.csv`;
    a.click();
    showToast('CSV exported!', 'ok');
  };

  document.getElementById('refreshBtn').onclick = () => loadData();
  document.getElementById('detailClose').onclick = closeDetail;

  const detailOverlay = document.getElementById('detailOverlay');
  detailOverlay.addEventListener('click', e => {
    if (e.target === detailOverlay) closeDetail();
  });
}

// Initial Boot Guard check
if (checkSession()) {
  if (loginScreen) loginScreen.classList.add('hidden');
  instantiateDashboard();
  initSB();
  loadData();
}

// Login Box bindings
if (document.getElementById('loginBtn')) {
  document.getElementById('loginBtn').onclick = () => {
    const u = document.getElementById('loginUser').value.trim();
    const p = document.getElementById('loginPass').value;
    const errEl = document.getElementById('loginErr');
    if (u === ADMIN_USER && p === ADMIN_PASS) {
      if (errEl) errEl.textContent = '';
      setSession();
      if (loginScreen) loginScreen.classList.add('hidden');
      instantiateDashboard();
      initSB();
      loadData();
    } else {
      if (errEl) errEl.textContent = '⚠ Incorrect username or password.';
    }
  };

  document.getElementById('loginPass').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('loginBtn').click();
  });
  document.getElementById('loginUser').addEventListener('keydown', e => {
    if (e.key === 'Enter') document.getElementById('loginPass').focus();
  });
}

// ===========================
// LOAD DATA
// ===========================
async function loadData() {
  setTableLoading();
  try {
    const { data, error } = await sb
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    allRows = data || [];
    applyFilters();
    updateStats();
  } catch (err) {
    showToast('Failed to load data: ' + err.message, 'err');
    const tbody = document.getElementById('tableBody');
    if (tbody) {
      tbody.innerHTML = `<tr class="state-row"><td colspan="11">❌ Could not load messages. Check Supabase connection.</td></tr>`;
    }
  }
}

// ===========================
// STATS
// ===========================
function updateStats() {
  const total = allRows.length;
  const now   = new Date();
  const startOfDay  = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const startOfWeek = new Date(startOfDay); startOfWeek.setDate(startOfDay.getDate() - 7);

  const todayRows = allRows.filter(r => new Date(r.created_at) >= startOfDay);
  const weekRows  = allRows.filter(r => new Date(r.created_at) >= startOfWeek);

  // Top service
  const svcCounts = {};
  allRows.forEach(r => { if(r.service) svcCounts[r.service] = (svcCounts[r.service]||0)+1; });
  const topSvc = Object.entries(svcCounts).sort((a,b)=>b[1]-a[1])[0];

  const totalEl = document.getElementById('statTotal');
  if (totalEl) totalEl.textContent = total;
  
  const todayEl = document.getElementById('statToday');
  if (todayEl) todayEl.textContent = todayRows.length;

  const weekEl = document.getElementById('statWeek');
  if (weekEl) weekEl.textContent = weekRows.length;

  const serviceEl = document.getElementById('statService');
  if (serviceEl) serviceEl.textContent = topSvc ? topSvc[0].split(' ')[0] : '—';

  const totalCountEl = document.getElementById('totalCount');
  if (totalCountEl) totalCountEl.textContent = total;

  const todayBadge = document.getElementById('todayBadge');
  const todayCount = document.getElementById('todayCount');
  if (todayRows.length && todayBadge && todayCount) {
    todayBadge.style.display = '';
    todayCount.textContent = todayRows.length;
  } else if (todayBadge) {
    todayBadge.style.display = 'none';
  }
}

// ===========================
// FILTERS & SEARCH
// ===========================
let searchTerm = '', serviceFilter = '';

function applyFilters() {
  filtered = allRows.filter(r => {
    const matchSearch = !searchTerm ||
      (r.name  ||'').toLowerCase().includes(searchTerm) ||
      (r.email ||'').toLowerCase().includes(searchTerm) ||
      (r.brand ||'').toLowerCase().includes(searchTerm) ||
      (r.brief ||'').toLowerCase().includes(searchTerm);
    const matchService = !serviceFilter || r.service === serviceFilter;
    return matchSearch && matchService;
  });
  selected.clear();
  updateDeleteBtn();
  renderTable();
  renderPagination();
}

// ===========================
// TABLE RENDER
// ===========================
function setTableLoading() {
  const tbody = document.getElementById('tableBody');
  if (tbody) {
    tbody.innerHTML = `<tr class="state-row"><td colspan="11"><div class="spinner"></div><br><br>Loading…</td></tr>`;
  }
}

function renderTable() {
  const tbody = document.getElementById('tableBody');
  if (!tbody) return;

  const start = (currentPage - 1) * PER_PAGE;
  const rows  = filtered.slice(start, start + PER_PAGE);

  if (!rows.length) {
    tbody.innerHTML = `<tr class="state-row"><td colspan="11">No messages found.</td></tr>`;
    return;
  }

  tbody.innerHTML = rows.map((r, i) => {
    const num    = start + i + 1;
    const date   = r.created_at ? new Date(r.created_at).toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'}) : '—';
    const time   = r.created_at ? new Date(r.created_at).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}) : '';
    const brief  = (r.brief||'').replace(/</g,'&lt;');
    const isChk  = selected.has(r.id) ? 'checked' : '';
    return `<tr>
      <td><input type="checkbox" class="row-chk" data-id="${r.id}" ${isChk}></td>
      <td style="color:var(--faint)">${num}</td>
      <td><b style="font-weight:600">${esc(r.name||'—')}</b></td>
      <td><a class="email-link" href="mailto:${esc(r.email||'')}">${esc(r.email||'—')}</a></td>
      <td>${esc(r.brand||'—')}</td>
      <td><span class="service-badge">${esc(r.service||'—')}</span></td>
      <td style="color:var(--accent);font-weight:600">${esc(r.budget||'—')}</td>
      <td style="color:var(--soft)">${esc(r.timeline||'—')}</td>
      <td class="brief-cell" onclick="openDetail('${r.id}')" title="${esc(brief)}">${brief.slice(0,60)}${brief.length>60?'…':''}</td>
      <td class="date-cell">${date}<br><span style="color:var(--faint)">${time}</span></td>
      <td>
        <button class="del-btn" onclick="deleteRow('${r.id}')" title="Delete">🗑</button>
        <button class="del-btn" onclick="openDetail('${r.id}')" title="View" style="font-size:.9rem">👁</button>
      </td>
    </tr>`;
  }).join('');

  // Checkbox listeners
  tbody.querySelectorAll('.row-chk').forEach(chk => {
    chk.addEventListener('change', e => {
      const id = e.target.dataset.id;
      if (e.target.checked) selected.add(id); else selected.delete(id);
      updateDeleteBtn();
      const selectAllCheckbox = document.getElementById('selectAll');
      if (selectAllCheckbox) {
        selectAllCheckbox.checked = selected.size === rows.length;
      }
    });
  });
}

function esc(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function updateDeleteBtn() {
  const btn = document.getElementById('deleteSelectedBtn');
  if (!btn) return;
  btn.style.display = selected.size > 0 ? '' : 'none';
  btn.textContent = `🗑 Delete Selected (${selected.size})`;
}

// ===========================
// PAGINATION
// ===========================
function renderPagination() {
  const total = filtered.length;
  const pages = Math.ceil(total/PER_PAGE);
  const el = document.getElementById('pagination');
  if (!el) return;
  if (pages <= 1) { el.innerHTML=''; return; }

  let html = `<span class="page-info">${total} results</span>`;
  html += `<button class="page-btn" onclick="goPage(${currentPage-1})" ${currentPage<=1?'disabled':''}>‹</button>`;
  for (let i=1;i<=pages;i++) {
    if (pages>7 && i>2 && i<pages-1 && Math.abs(i-currentPage)>1) {
      if (i===3||i===pages-2) html+='<span style="color:var(--faint);padding:0 4px">…</span>';
      continue;
    }
    html += `<button class="page-btn ${i===currentPage?'active':''}" onclick="goPage(${i})">${i}</button>`;
  }
  html += `<button class="page-btn" onclick="goPage(${currentPage+1})" ${currentPage>=pages?'disabled':''}>›</button>`;
  el.innerHTML = html;
}

function goPage(p) {
  const pages = Math.ceil(filtered.length/PER_PAGE);
  if (p<1||p>pages) return;
  currentPage = p;
  renderTable(); renderPagination();
  window.scrollTo({top:0,behavior:'smooth'});
}

// ===========================
// DELETE
// ===========================
async function deleteRow(id) {
  if (!confirm('Delete this message?')) return;
  try {
    const { error } = await sb.from('contact_messages').delete().eq('id', id);
    if (error) throw error;
    allRows = allRows.filter(r => String(r.id) !== String(id));
    selected.delete(id);
    applyFilters(); updateStats();
    showToast('Message deleted.', 'ok');
  } catch (err) {
    showToast('Delete failed: ' + err.message, 'err');
  }
}

// ===========================
// DETAIL MODAL
// ===========================
function openDetail(r) {
  if (typeof r === 'string') {
    try {
      r = JSON.parse(r);
    } catch (e) {
      r = allRows.find(item => String(item.id) === String(r));
    }
  }
  if (!r) return;

  const detailOverlay = document.getElementById('detailOverlay');
  if (!detailOverlay) return;

  document.getElementById('detailName').textContent    = r.name    || '—';
  document.getElementById('detailEmail').textContent   = r.email   || '—';
  document.getElementById('detailBrand').textContent   = r.brand   || '—';
  document.getElementById('detailService').textContent = r.service || '—';
  document.getElementById('detailBudget').textContent  = r.budget  || '—';
  document.getElementById('detailTimeline').textContent= r.timeline|| '—';
  document.getElementById('detailBrief').textContent   = r.brief   || '—';

  const d = r.created_at ? new Date(r.created_at).toLocaleString() : '';
  document.getElementById('detailDate').textContent = d;

  const subj = encodeURIComponent(`Re: Project inquiry from ${r.brand||r.name||''}`);
  const body = encodeURIComponent(`Hi ${r.name||''},\n\nThank you for reaching out!\n\n`);
  document.getElementById('detailReplyBtn').href = `mailto:${r.email||''}?subject=${subj}&body=${body}`;

  detailOverlay.classList.add('open');
}

function closeDetail() {
  const detailOverlay = document.getElementById('detailOverlay');
  if (detailOverlay) detailOverlay.classList.remove('open');
}

// Escape key for modal closing
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeDetail();
});

// ===========================
// TOAST NOTIFICATION
// ===========================
let toastTimer;
function showToast(msg, type='ok') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = `toast ${type} show`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
}

// Export functions to window so inline onclick handlers can call them
window.deleteRow = deleteRow;
window.openDetail = openDetail;
window.goPage = goPage;
