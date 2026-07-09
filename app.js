// ============================================================
// Board Game Tracker — Steam-Style Library
// ============================================================

// --- Data ---
const DEFAULT_GAMES = [
  { id: 1, name: 'Catan', icon: '🏝️', color: '#c0392b', minPlayers: 3, maxPlayers: 4, cover: '' },
  { id: 2, name: 'Ticket to Ride', icon: '🚂', color: '#2980b9', minPlayers: 2, maxPlayers: 5, cover: '' },
  { id: 3, name: 'Wingspan', icon: '🦅', color: '#27ae60', minPlayers: 1, maxPlayers: 5, cover: '' },
  { id: 4, name: 'Azul', icon: '🎨', color: '#2c3e50', minPlayers: 2, maxPlayers: 4, cover: '' },
  { id: 5, name: 'Codenames', icon: '🕵️', color: '#8e44ad', minPlayers: 4, maxPlayers: 8, cover: '' },
  { id: 6, name: 'Pandemic', icon: '🦠', color: '#d35400', minPlayers: 2, maxPlayers: 4, cover: '' },
  { id: 7, name: '7 Wonders', icon: '🏛️', color: '#c0a039', minPlayers: 2, maxPlayers: 7, cover: '' },
  { id: 8, name: 'Carcassonne', icon: '🏰', color: '#1abc9c', minPlayers: 2, maxPlayers: 5, cover: '' },
  { id: 9, name: 'Splendor', icon: '💎', color: '#34495e', minPlayers: 2, maxPlayers: 4, cover: '' },
];

let state = {
  games: [],
  sessions: [],
  nextGameId: 100,
  nextSessionId: 100,
};

let currentGame = null;
let currentPlayers = [];
let currentScores = [];
let currentSort = 'alpha';
let currentCategory = 'all';

// --- Persistence ---
function save() {
  localStorage.setItem('bgt_state', JSON.stringify(state));
}
function load() {
  const raw = localStorage.getItem('bgt_state');
  if (raw) {
    state = JSON.parse(raw);
  } else {
    state.games = DEFAULT_GAMES.map(g => ({ ...g }));
    save();
  }
}

// --- Dropdowns ---
function toggleDropdown(id) {
  const el = document.getElementById(id);
  const menu = el.querySelector('.dropdown-menu');
  const isOpen = menu.classList.contains('open');
  // Close all
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  if (!isOpen) menu.classList.add('open');
}

document.addEventListener('click', e => {
  if (!e.target.closest('.dropdown')) {
    document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  }
});

// --- Sort ---
function setSort(sort) {
  currentSort = sort;
  document.querySelectorAll('#sort-menu .dropdown-item').forEach(item => {
    item.classList.toggle('active', item.dataset.sort === sort);
  });
  const labels = { alpha: 'Alphabetical', recent: 'Recently Played', sessions: 'Most Sessions' };
  document.getElementById('sort-label').textContent = labels[sort];
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  renderLibrary();
}

// --- Category ---
function renderCategories() {
  const menu = document.getElementById('category-menu');
  const allCount = state.games.length;
  menu.innerHTML = `<button class="dropdown-item ${currentCategory === 'all' ? 'active' : ''}" onclick="setCategory('all')">All Games (${allCount})</button>`;
}

function setCategory(cat) {
  currentCategory = cat;
  renderCategories();
  document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('open'));
  document.getElementById('category-label').innerHTML = `All Games (<span id="game-count">${state.games.length}</span>)`;
  renderLibrary();
}

// --- Navigation ---
function hideAll() {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
}

function showLibrary() {
  hideAll();
  document.getElementById('library-view').classList.add('active');
  document.getElementById('header').style.display = '';
  renderLibrary();
  renderCategories();
}

function showAddGame() {
  hideAll();
  document.getElementById('add-game-view').classList.add('active');
  document.getElementById('header').style.display = 'none';
  document.getElementById('add-game-form').reset();
  document.querySelector('.color-pick.active')?.classList.remove('active');
  document.querySelector('.color-pick').classList.add('active');
}

function showGame(id) {
  const game = state.games.find(g => g.id === id);
  if (!game) return;
  currentGame = game;
  hideAll();
  document.getElementById('game-view').classList.add('active');
  document.getElementById('header').style.display = 'none';
  renderGameDetail(game);
}

function showPlayers() {
  hideAll();
  document.getElementById('players-view').classList.add('active');
  document.getElementById('header').style.display = 'none';
  renderPlayerSetup();
}

function showScoring() {
  hideAll();
  document.getElementById('scoring-view').classList.add('active');
  document.getElementById('header').style.display = 'none';
  renderScoring();
}

function showRankings(players) {
  hideAll();
  document.getElementById('rankings-view').classList.add('active');
  document.getElementById('header').style.display = 'none';
  renderRankings(players);
}

// --- Render Library ---
function getSortedGames() {
  let games = [...state.games];
  if (currentSort === 'alpha') {
    games.sort((a, b) => a.name.localeCompare(b.name));
  } else if (currentSort === 'sessions') {
    games.sort((a, b) => {
      const sa = state.sessions.filter(s => s.gameId === a.id).length;
      const sb = state.sessions.filter(s => s.gameId === b.id).length;
      return sb - sa;
    });
  } else if (currentSort === 'recent') {
    games.sort((a, b) => {
      const sa = state.sessions.filter(s => s.gameId === a.id);
      const sb = state.sessions.filter(s => s.gameId === b.id);
      const da = sa.length ? new Date(sa[sa.length - 1].date).getTime() : 0;
      const db = sb.length ? new Date(sb[sb.length - 1].date).getTime() : 0;
      return db - da;
    });
  }
  return games;
}

function renderLibrary() {
  const grid = document.getElementById('game-grid');
  grid.innerHTML = '';
  document.getElementById('game-count').textContent = state.games.length;

  getSortedGames().forEach(game => {
    const card = document.createElement('div');
    card.className = 'game-card';

    const hasCover = game.cover && game.cover.trim();
    const coverStyle = hasCover
      ? `background-image:url('${esc(game.cover)}')`
      : '';

    card.innerHTML = `
      <div class="game-card-cover" style="${hasCover ? coverStyle : `background:${game.color}`}">
        ${!hasCover ? `
          <div class="game-card-generated">
            <div class="game-card-generated-icon">${game.icon}</div>
            <div class="game-card-generated-name">${esc(game.name)}</div>
          </div>
        ` : ''}
        <div class="game-card-scrim"></div>
        <div class="game-card-title">${esc(game.name)}</div>
      </div>
      <button class="game-card-delete" onclick="event.stopPropagation();deleteGame(${game.id})" title="Delete">✕</button>
    `;

    card.addEventListener('click', () => showGame(game.id));
    grid.appendChild(card);
  });
}

// --- Add Game ---
function addGame(e) {
  e.preventDefault();
  const name = document.getElementById('new-game-name').value.trim();
  const min = parseInt(document.getElementById('new-game-min').value);
  const max = parseInt(document.getElementById('new-game-max').value);
  const icon = document.getElementById('new-game-icon').value || '🎲';
  const color = document.querySelector('.color-pick.active')?.dataset.color || '#2a2e3d';
  const cover = document.getElementById('new-game-cover').value.trim();

  if (!name) return;
  if (min > max) { alert('Min players cannot exceed max players'); return; }

  state.games.push({
    id: state.nextGameId++,
    name,
    icon,
    color,
    minPlayers: min,
    maxPlayers: max,
    cover,
  });
  save();
  showLibrary();
}

// Color picker
document.addEventListener('click', e => {
  if (e.target.classList.contains('color-pick')) {
    document.querySelector('.color-pick.active')?.classList.remove('active');
    e.target.classList.add('active');
  }
});

// --- Delete Game ---
function deleteGame(id) {
  const game = state.games.find(g => g.id === id);
  if (!game) return;
  if (!confirm(`Delete "${game.name}" and all its sessions?`)) return;
  state.games = state.games.filter(g => g.id !== id);
  state.sessions = state.sessions.filter(s => s.gameId !== id);
  save();
  renderLibrary();
}

// --- Game Detail ---
function renderGameDetail(game) {
  const sessions = state.sessions.filter(s => s.gameId === game.id);
  const hasCover = game.cover && game.cover.trim();

  document.getElementById('game-detail-header').innerHTML = `
    <div class="game-detail-icon" style="background:${game.color}">
      ${hasCover ? `<img src="${esc(game.cover)}" alt="${esc(game.name)}">` : game.icon}
    </div>
    <div class="game-detail-info">
      <h2>${esc(game.name)}</h2>
      <p>${game.minPlayers}–${game.maxPlayers} Players · ${sessions.length} session${sessions.length !== 1 ? 's' : ''}</p>
    </div>
  `;

  const hist = document.getElementById('session-history');
  if (sessions.length === 0) {
    hist.innerHTML = '<h3>Session History</h3><div class="session-empty">No sessions yet. Start playing!</div>';
  } else {
    const sorted = [...sessions].reverse();
    hist.innerHTML = '<h3>Session History</h3>' + sorted.map(s => {
      const winner = [...s.players].sort((a, b) => b.score - a.score)[0];
      const date = new Date(s.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      return `
        <div class="session-item">
          <span class="session-item-winner">🏆 ${esc(winner.name)} — ${winner.score} pts</span>
          <span class="session-item-players">${s.players.length} players</span>
          <span class="session-item-date">${date}</span>
        </div>
      `;
    }).join('');
  }
}

// --- Start Session ---
function startSession() {
  if (!currentGame) return;
  currentPlayers = [];
  currentScores = [];
  showPlayers();
}

// --- Player Setup ---
function renderPlayerSetup() {
  const game = currentGame;
  document.getElementById('players-title').textContent = `${game.name} — Player Setup`;

  const selector = document.getElementById('player-count-selector');
  selector.innerHTML = '';
  for (let i = game.minPlayers; i <= game.maxPlayers; i++) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'count-btn' + (currentPlayers.length === i || (!currentPlayers.length && i === game.minPlayers) ? ' active' : '');
    btn.textContent = i;
    btn.addEventListener('click', () => selectPlayerCount(i));
    selector.appendChild(btn);
  }

  const count = currentPlayers.length || game.minPlayers;
  if (!currentPlayers.length) {
    currentPlayers = Array.from({ length: count }, () => '');
  }
  renderPlayerInputs();
}

function selectPlayerCount(n) {
  document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.count-btn')[n - currentGame.minPlayers]?.classList.add('active');
  while (currentPlayers.length < n) currentPlayers.push('');
  while (currentPlayers.length > n) currentPlayers.pop();
  renderPlayerInputs();
}

function renderPlayerInputs() {
  const container = document.getElementById('player-names');
  container.innerHTML = currentPlayers.map((name, i) => `
    <div class="player-input">
      <div class="player-input-number">${i + 1}</div>
      <input type="text" placeholder="Player ${i + 1} name" value="${esc(name)}" oninput="updatePlayerName(${i}, this.value)">
    </div>
  `).join('');
}

function updatePlayerName(idx, val) {
  currentPlayers[idx] = val;
}

// --- Start Scoring ---
function startScoring() {
  const names = currentPlayers.map(n => n.trim());
  const empty = names.findIndex(n => !n);
  if (empty !== -1) { alert(`Please enter a name for Player ${empty + 1}`); return; }
  const seen = new Set();
  for (const n of names) {
    if (seen.has(n.toLowerCase())) { alert(`Duplicate name: "${n}"`); return; }
    seen.add(n.toLowerCase());
  }
  currentScores = names.map(() => 0);
  showScoring();
}

// --- Scoring ---
function renderScoring() {
  document.getElementById('scoring-title').textContent = `${currentGame.name} — Scoring`;
  const container = document.getElementById('scoring-players');
  container.innerHTML = currentPlayers.map((name, i) => `
    <div class="scoring-player">
      <div class="scoring-player-num" style="background:${currentGame.color};color:#fff">${i + 1}</div>
      <div class="scoring-player-info">
        <div class="scoring-player-name">${esc(name)}</div>
      </div>
      <div class="scoring-player-controls">
        <button class="score-btn" onclick="adjustScore(${i}, -1)">−</button>
        <button class="score-btn" onclick="adjustScore(${i}, -5)">−5</button>
        <div class="score-value">
          <input type="number" value="${currentScores[i]}" onchange="setScore(${i}, this.value)" id="score-input-${i}">
        </div>
        <button class="score-btn" onclick="adjustScore(${i}, 5)">+5</button>
        <button class="score-btn" onclick="adjustScore(${i}, 1)">+</button>
      </div>
    </div>
  `).join('');
}

function adjustScore(idx, delta) {
  currentScores[idx] = Math.max(0, currentScores[idx] + delta);
  const input = document.getElementById(`score-input-${idx}`);
  if (input) input.value = currentScores[idx];
}

function setScore(idx, val) {
  currentScores[idx] = Math.max(0, parseInt(val) || 0);
}

// --- Finish Session & Rankings ---
function finishSession() {
  const players = currentPlayers.map((name, i) => ({
    name: name.trim(),
    score: currentScores[i],
  }));
  state.sessions.push({
    id: state.nextSessionId++,
    gameId: currentGame.id,
    date: new Date().toISOString(),
    players,
  });
  save();
  showRankings(players);
}

function renderRankings(players) {
  const sorted = [...players].sort((a, b) => b.score - a.score);
  const totalScore = sorted.reduce((sum, p) => sum + p.score, 0);
  const topScore = sorted[0].score || 1;

  const container = document.getElementById('rankings-result');
  container.innerHTML = sorted.map((p, i) => {
    const pct = totalScore > 0 ? ((p.score / totalScore) * 100) : (100 / sorted.length);
    const rankClass = i < 3 ? `ranking-${i + 1}` : 'ranking-other';
    return `
      <div class="ranking-card">
        ${i === 0 ? '<div class="ranking-badge">Winner</div>' : ''}
        <div class="ranking-position ${rankClass}">${i + 1}</div>
        <div class="ranking-info">
          <div class="ranking-name">${esc(p.name)}</div>
          <div class="ranking-score">${p.score} points</div>
        </div>
        <div class="ranking-pct">
          <div class="ranking-pct-value">${pct.toFixed(1)}%</div>
          <div class="ranking-pct-label">of total</div>
        </div>
      </div>
    `;
  }).join('');

  const gameSessions = state.sessions.filter(s => s.gameId === currentGame.id);
  renderOverallStats(gameSessions);
}

function renderOverallStats(sessions) {
  const stats = document.getElementById('overall-stats');
  if (sessions.length <= 1) { stats.innerHTML = ''; return; }

  const wins = {};
  const totalGames = {};
  const totalScores = {};
  sessions.forEach(s => {
    const sorted = [...s.players].sort((a, b) => b.score - a.score);
    s.players.forEach(p => {
      const key = p.name.toLowerCase();
      totalGames[key] = (totalGames[key] || 0) + 1;
      totalScores[key] = (totalScores[key] || 0) + p.score;
      if (!wins[key]) wins[key] = { count: 0, name: p.name };
    });
    wins[sorted[0].name.toLowerCase()].count++;
  });

  const leaderboard = Object.entries(wins)
    .map(([key, w]) => ({
      name: w.name,
      wins: w.count,
      games: totalGames[key],
      avgScore: Math.round(totalScores[key] / totalGames[key]),
      winRate: ((w.count / totalGames[key]) * 100).toFixed(1),
    }))
    .sort((a, b) => b.winRate - a.winRate);

  stats.innerHTML = `
    <h3>Overall Leaderboard — ${esc(currentGame.name)}</h3>
    <div class="stats-grid">
      ${leaderboard.map(p => `
        <div class="stat-card">
          <div class="stat-value">${p.winRate}%</div>
          <div class="stat-label">${esc(p.name)} — ${p.wins}W / ${p.games}G (avg ${p.avgScore})</div>
        </div>
      `).join('')}
    </div>
  `;
}

// --- Utility ---
function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

// --- Init ---
load();
showLibrary();
