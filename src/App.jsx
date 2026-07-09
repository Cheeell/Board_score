import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { fetchGames, createGame, updateGame as updateGameApi, deleteGame as deleteGameApi, fetchAllSessions, createSession } from './store'
import GameCard from './GameCard'

const SORT_OPTIONS = [
  { key: 'alpha', label: 'Alphabetical' },
  { key: 'recent', label: 'Recently Played' },
  { key: 'sessions', label: 'Most Sessions' },
]

const COLORS = ['#c0392b','#2980b9','#27ae60','#8e44ad','#d35400','#2c3e50','#c0a039','#1abc9c']
const PLAYER_COLORS = ['#e74c3c','#3498db','#2ecc71','#9b59b6','#e67e22','#1abc9c','#f1c40f','#e91e63']

export default function App() {
  const [games, setGames] = useState([])
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)
  const [view, setView] = useState('library')
  const [currentGame, setCurrentGame] = useState(null)
  const [players, setPlayers] = useState([])
  const [playerColors, setPlayerColors] = useState([])
  const [scores, setScores] = useState([])
  const [sortBy, setSortBy] = useState('alpha')
  const [sortOpen, setSortOpen] = useState(false)
  const sortRef = useRef(null)

  // Load data from Supabase on mount
  useEffect(() => {
    async function loadData() {
      const [loadedGames, loadedSessions] = await Promise.all([
        fetchGames(),
        fetchAllSessions(),
      ])
      setGames(loadedGames)
      setSessions(loadedSessions)
      setLoading(false)
    }
    loadData()
  }, [])

  useEffect(() => {
    function handleClick(e) {
      if (sortRef.current && !sortRef.current.contains(e.target)) setSortOpen(false)
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  const navigate = useCallback((v, game) => {
    setView(v)
    if (game !== undefined) setCurrentGame(game)
    setSortOpen(false)
  }, [])

  const sortedGames = [...games].sort((a, b) => {
    if (sortBy === 'alpha') return a.name.localeCompare(b.name)
    if (sortBy === 'sessions') {
      return sessions.filter(s => s.gameId === b.id).length - sessions.filter(s => s.gameId === a.id).length
    }
    if (sortBy === 'recent') {
      const da = sessions.filter(s => s.gameId === a.id)
      const db = sessions.filter(s => s.gameId === b.id)
      return (db.length ? new Date(db[db.length-1].date).getTime() : 0) - (da.length ? new Date(da[da.length-1].date).getTime() : 0)
    }
    return 0
  })

  async function addGame(game) {
    const created = await createGame(game)
    if (created) {
      setGames(prev => [...prev, created])
      navigate('library')
    }
  }

  async function handleDeleteGame(id) {
    await deleteGameApi(id)
    setGames(prev => prev.filter(g => g.id !== id))
    setSessions(prev => prev.filter(s => s.gameId !== id))
  }

  async function handleUpdateGame(id, updates) {
    const updated = await updateGameApi(id, updates)
    if (updated) {
      setGames(prev => prev.map(g => g.id === id ? updated : g))
      setCurrentGame(updated)
      navigate('gameDetail')
    }
  }

  async function finishSession(gameId, names, finalScores, colors) {
    const players = names.map((name, i) => ({ name: name.trim(), score: finalScores[i], color: colors[i] }))
    const session = await createSession(gameId, players)
    if (session) {
      setSessions(prev => [...prev, session])
    }
    return players
  }

  if (loading) {
    return (
      <div className="view" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
        <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Loading…</div>
      </div>
    )
  }

  return (
    <div>
      {view === 'library' && (
        <Header
          gameCount={games.length}
          sortBy={sortBy}
          sortOpen={sortOpen}
          sortRef={sortRef}
          onSortToggle={() => setSortOpen(o => !o)}
          onSortChange={k => { setSortBy(k); setSortOpen(false) }}
          onAdd={() => navigate('addGame')}
        />
      )}

      <AnimatePresence mode="wait">
        {view === 'library' && (
          <motion.div key="library" className="view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <div className="game-grid">
              {sortedGames.map(game => (
                <GameCard key={game.id} game={game} onClick={id => navigate('gameDetail', games.find(g => g.id === id))} onDelete={handleDeleteGame} />
              ))}
            </div>
          </motion.div>
        )}

        {view === 'addGame' && (
          <motion.div key="add" className="view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <AddGameView onAdd={addGame} onCancel={() => navigate('library')} />
          </motion.div>
        )}

        {view === 'gameDetail' && currentGame && (
          <motion.div key="detail" className="view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <GameDetailView
              game={currentGame}
              sessions={sessions.filter(s => s.gameId === currentGame.id)}
              onStartSession={() => { setPlayers([]); setPlayerColors([]); setScores([]); navigate('players') }}
              onBack={() => navigate('library')}
              onEdit={() => navigate('editGame', currentGame)}
            />
          </motion.div>
        )}

        {view === 'editGame' && currentGame && (
          <motion.div key="edit" className="view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <EditGameView
              game={currentGame}
              onSave={(updates) => handleUpdateGame(currentGame.id, updates)}
              onCancel={() => navigate('gameDetail')}
            />
          </motion.div>
        )}

        {view === 'players' && currentGame && (
          <motion.div key="players" className="view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <PlayerSetupView
              game={currentGame}
              players={players}
              playerColors={playerColors}
              setPlayers={setPlayers}
              setPlayerColors={setPlayerColors}
              onBack={() => navigate('gameDetail')}
              onNext={(names, colors) => { setPlayers(names); setPlayerColors(colors); setScores(names.map(() => 0)); navigate('scoring') }}
            />
          </motion.div>
        )}

        {view === 'scoring' && currentGame && (
          <motion.div key="scoring" className="view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <ScoringView
              game={currentGame}
              players={players}
              playerColors={playerColors}
              scores={scores}
              setScores={setScores}
              onBack={() => navigate('players')}
              onFinish={async () => {
                const ranked = await finishSession(currentGame.id, players, scores, playerColors)
                window.__lastRanked = ranked
                navigate('rankings')
              }}
            />
          </motion.div>
        )}

        {view === 'rankings' && currentGame && (
          <motion.div key="rankings" className="view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
            <RankingsView
              game={currentGame}
              players={window.__lastRanked || []}
              allSessions={sessions.filter(s => s.gameId === currentGame.id)}
              onBack={() => navigate('gameDetail')}
              onPlayAgain={() => { setPlayers([]); setPlayerColors([]); setScores([]); navigate('players') }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// === Header ===
function Header({ gameCount, sortBy, sortOpen, sortRef, onSortToggle, onSortChange, onAdd }) {
  return (
    <header>
      <div className="header-left">
        <div className="dropdown-trigger">
          All Games ({gameCount})
          <svg className="chevron" viewBox="0 0 24 24" width="16" height="16"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
        </div>
        <div className="sort-group">
          <span className="sort-label">SORT BY</span>
          <div className="dropdown" ref={sortRef}>
            <button className="dropdown-trigger pill" onClick={onSortToggle}>
              {SORT_OPTIONS.find(o => o.key === sortBy)?.label}
              <svg className="chevron" viewBox="0 0 24 24" width="14" height="14"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            </button>
            {sortOpen && (
              <div className="dropdown-menu open">
                {SORT_OPTIONS.map(opt => (
                  <button key={opt.key} className={`dropdown-item ${sortBy === opt.key ? 'active' : ''}`} onClick={() => onSortChange(opt.key)}>{opt.label}</button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="header-right">
        <button className="icon-btn" onClick={onAdd} title="Add Game">
          <svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
        </button>
      </div>
    </header>
  )
}

// === Add Game ===
function AddGameView({ onAdd, onCancel }) {
  const [name, setName] = useState('')
  const [minP, setMinP] = useState(2)
  const [maxP, setMaxP] = useState(4)
  const [icon, setIcon] = useState('🎲')
  const [color, setColor] = useState(COLORS[0])
  const [cover, setCover] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) return
    if (minP > maxP) { alert('Min cannot exceed max'); return }
    onAdd({ name: name.trim(), minPlayers: minP, maxPlayers: maxP, icon, color, cover: cover.trim() })
  }

  return (
    <div className="panel">
      <h2>Add New Game</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Game Name</label>
          <input value={name} onChange={e => setName(e.target.value)} required placeholder="e.g. Chess" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Min Players</label>
            <input type="number" min={1} max={20} value={minP} onChange={e => setMinP(+e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Max Players</label>
            <input type="number" min={1} max={20} value={maxP} onChange={e => setMaxP(+e.target.value)} required />
          </div>
        </div>
        <div className="form-group">
          <label>Cover Art URL (optional)</label>
          <input value={cover} onChange={e => setCover(e.target.value)} placeholder="https://... or leave blank" />
        </div>
        <div className="form-group">
          <label>Cover Color (used if no image)</label>
          <div className="color-picks">
            {COLORS.map(c => (
              <button key={c} type="button" className={`color-pick ${color === c ? 'active' : ''}`} style={{ background: c }} onClick={() => setColor(c)} />
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Icon (emoji)</label>
          <input value={icon} onChange={e => setIcon(e.target.value)} maxLength={4} />
        </div>
        <div className="form-actions">
          <button type="button" className="btn" onClick={onCancel}>Cancel</button>
          <button type="submit" className="btn btn-primary">Add Game</button>
        </div>
      </form>
    </div>
  )
}

// === Edit Game ===
function EditGameView({ game, onSave, onCancel }) {
  const [name, setName] = useState(game.name)
  const [minP, setMinP] = useState(game.minPlayers)
  const [maxP, setMaxP] = useState(game.maxPlayers)
  const [icon, setIcon] = useState(game.icon)
  const [color, setColor] = useState(game.color)
  const [cover, setCover] = useState(game.cover || '')

  function handleSubmit(e) {
    e.preventDefault()
    if (!name.trim()) return
    if (minP > maxP) { alert('Min cannot exceed max'); return }
    onSave({ name: name.trim(), minPlayers: minP, maxPlayers: maxP, icon, color, cover: cover.trim() })
  }

  return (
    <div className="panel">
      <h2>Edit Game</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Game Name</label>
          <input value={name} onChange={e => setName(e.target.value)} required placeholder="e.g. Chess" />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Min Players</label>
            <input type="number" min={1} max={20} value={minP} onChange={e => setMinP(+e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Max Players</label>
            <input type="number" min={1} max={20} value={maxP} onChange={e => setMaxP(+e.target.value)} required />
          </div>
        </div>
        <div className="form-group">
          <label>Cover Art URL (optional)</label>
          <input value={cover} onChange={e => setCover(e.target.value)} placeholder="https://... or leave blank" />
        </div>
        <div className="form-group">
          <label>Cover Color (used if no image)</label>
          <div className="color-picks">
            {COLORS.map(c => (
              <button key={c} type="button" className={`color-pick ${color === c ? 'active' : ''}`} style={{ background: c }} onClick={() => setColor(c)} />
            ))}
          </div>
        </div>
        <div className="form-group">
          <label>Icon (emoji)</label>
          <input value={icon} onChange={e => setIcon(e.target.value)} maxLength={4} />
        </div>
        <div className="form-actions">
          <button type="button" className="btn" onClick={onCancel}>Cancel</button>
          <button type="submit" className="btn btn-primary">Save Changes</button>
        </div>
      </form>
    </div>
  )
}

// === Stats Helper ===
function computeGameStats(sessions) {
  if (sessions.length === 0) {
    return { totalSessions: 0, totalPlayers: 0, highestScore: 0, avgPlayersPerSession: 0, leaderboard: [] }
  }

  const wins = {}, totalGames = {}, totalScores = {}, names = {}, bestScores = {}
  let highestScore = 0, highestScorePlayer = ''

  sessions.forEach(s => {
    const ranked = [...s.players].sort((a, b) => b.score - a.score)
    s.players.forEach(p => {
      const key = p.name.toLowerCase()
      names[key] = p.name
      totalGames[key] = (totalGames[key] || 0) + 1
      totalScores[key] = (totalScores[key] || 0) + p.score
      if (!wins[key]) wins[key] = 0
      if (!bestScores[key] || p.score > bestScores[key]) bestScores[key] = p.score
      if (p.score > highestScore) { highestScore = p.score; highestScorePlayer = p.name }
    })
    wins[ranked[0].name.toLowerCase()]++
  })

  const uniquePlayers = Object.keys(totalGames).length
  const totalPlayerSlots = sessions.reduce((sum, s) => sum + s.players.length, 0)

  const leaderboard = Object.entries(totalGames).map(([key, games]) => ({
    key,
    name: names[key],
    wins: wins[key] || 0,
    games,
    avgScore: Math.round(totalScores[key] / games),
    bestScore: bestScores[key],
    winRate: ((wins[key] / games) * 100).toFixed(1),
  })).sort((a, b) => {
    if (b.winRate !== a.winRate) return b.winRate - a.winRate
    return b.avgScore - a.avgScore
  })

  return {
    totalSessions: sessions.length,
    totalPlayers: uniquePlayers,
    highestScore,
    highestScorePlayer,
    avgPlayersPerSession: (totalPlayerSlots / sessions.length).toFixed(1),
    leaderboard,
  }
}

// === Game Detail ===
function GameDetailView({ game, sessions, onStartSession, onBack, onEdit }) {
  const hasCover = game.cover && game.cover.trim()

  // Compute stats
  const stats = computeGameStats(sessions)

  return (
    <div className="panel panel-wide">
      <button className="btn btn-back" onClick={onBack}>← Back to Library</button>
      <div className="game-detail-header">
        <div className="game-detail-icon" style={{ background: game.color }}>
          {hasCover ? <img src={game.cover} alt={game.name} /> : game.icon}
        </div>
        <div className="game-detail-info">
          <h2>{game.name}</h2>
          <p>{game.minPlayers}–{game.maxPlayers} Players · {sessions.length} session{sessions.length !== 1 ? 's' : ''}</p>
          <button className="btn btn-edit-details" onClick={() => onEdit && onEdit(game)}>
            <svg viewBox="0 0 24 24" width="14" height="14" style={{ marginRight: 6 }}>
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" fill="currentColor"/>
            </svg>
            Edit Game Details
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      {sessions.length > 0 && (
        <div className="stats-overview">
          <div className="stat-pill">
            <span className="stat-pill-value">{stats.totalSessions}</span>
            <span className="stat-pill-label">Sessions</span>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-value">{stats.totalPlayers}</span>
            <span className="stat-pill-label">Unique Players</span>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-value">{stats.highestScore}</span>
            <span className="stat-pill-label">{stats.highestScorePlayer ? `${stats.highestScorePlayer} — Highest Score` : 'Highest Score'}</span>
          </div>
          <div className="stat-pill">
            <span className="stat-pill-value">{stats.avgPlayersPerSession}</span>
            <span className="stat-pill-label">Avg Players</span>
          </div>
        </div>
      )}

      <div className="detail-actions">
        <motion.button className="btn btn-primary btn-lg" onClick={onStartSession} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          Start New Session
        </motion.button>
      </div>

      {/* Leaderboard */}
      {stats.leaderboard.length > 0 && (
        <div className="game-leaderboard">
          <h3>🏅 Leaderboard</h3>
          <div className="leaderboard-table">
            <div className="leaderboard-header">
              <span className="lb-rank">#</span>
              <span className="lb-name">Player</span>
              <span className="lb-stat">Wins</span>
              <span className="lb-stat">Win %</span>
              <span className="lb-stat">Best</span>
              <span className="lb-stat">Avg Score</span>
              <span className="lb-stat">Games</span>
            </div>
            {stats.leaderboard.map((p, i) => (
              <motion.div
                key={p.key}
                className={`leaderboard-row ${i < 3 ? `lb-top-${i + 1}` : ''}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <span className="lb-rank">{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}</span>
                <span className="lb-name">{p.name}</span>
                <span className="lb-stat">{p.wins}</span>
                <span className="lb-stat">{p.winRate}%</span>
                <span className="lb-stat">{p.bestScore}</span>
                <span className="lb-stat">{p.avgScore}</span>
                <span className="lb-stat">{p.games}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Session History */}
      <div className="session-history">
        <h3>Session History</h3>
        {sessions.length === 0 ? (
          <div className="session-empty">No sessions yet. Start playing!</div>
        ) : (
          [...sessions].reverse().map(s => {
            const winner = [...s.players].sort((a, b) => b.score - a.score)[0]
            const date = new Date(s.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            return (
              <motion.div key={s.id} className="session-item" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }}>
                <span className="session-item-winner">🏆 {winner.name} — {winner.score} pts</span>
                <span className="session-item-players">{s.players.length} players</span>
                <span className="session-item-date">{date}</span>
              </motion.div>
            )
          })
        )}
      </div>
    </div>
  )
}

// === Player Setup ===
function PlayerSetupView({ game, players, playerColors, setPlayers, setPlayerColors, onBack, onNext }) {
  const [count, setCount] = useState(players.length || game.minPlayers)
  const [names, setNames] = useState(players.length ? players : Array(players.length || game.minPlayers).fill(''))
  const [colors, setColors] = useState(playerColors.length ? playerColors : PLAYER_COLORS.slice(0, players.length || game.minPlayers))

  useEffect(() => {
    if (!players.length) {
      const n = game.minPlayers
      setCount(n)
      setNames(Array(n).fill(''))
      setColors(PLAYER_COLORS.slice(0, n))
    }
  }, [game, players])

  function changeCount(n) {
    setCount(n)
    setNames(prev => {
      const next = [...prev]
      while (next.length < n) next.push('')
      while (next.length > n) next.pop()
      return next
    })
    setColors(prev => {
      const next = [...prev]
      while (next.length < n) next.push(PLAYER_COLORS[next.length % PLAYER_COLORS.length])
      while (next.length > n) next.pop()
      return next
    })
  }

  function handleNext() {
    const trimmed = names.map(n => n.trim())
    const empty = trimmed.findIndex(n => !n)
    if (empty !== -1) { alert(`Please enter a name for Player ${empty + 1}`); return }
    const seen = new Set()
    for (const n of trimmed) {
      if (seen.has(n.toLowerCase())) { alert(`Duplicate name: "${n}"`); return }
      seen.add(n.toLowerCase())
    }
    onNext(trimmed, colors)
  }

  return (
    <div className="panel">
      <h2>{game.name} — Player Setup</h2>
      <div className="form-group">
        <label>Number of Players</label>
        <div className="player-count-selector">
          {Array.from({ length: game.maxPlayers - game.minPlayers + 1 }, (_, i) => game.minPlayers + i).map(n => (
            <button key={n} className={`count-btn ${count === n ? 'active' : ''}`} onClick={() => changeCount(n)}>{n}</button>
          ))}
        </div>
      </div>
      <div>
        {names.map((name, i) => (
          <motion.div key={i} className="player-input" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
            <div className="player-input-number" style={{ background: colors[i] }}>{i + 1}</div>
            <input placeholder={`Player ${i + 1} name`} value={name} onChange={e => { const n = [...names]; n[i] = e.target.value; setNames(n) }} />
            <div className="player-color-picks">
              {PLAYER_COLORS.map(c => (
                <div key={c} className={`player-color-pick ${colors[i] === c ? 'active' : ''}`} style={{ background: c }} onClick={() => { const next = [...colors]; next[i] = c; setColors(next) }} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="form-actions">
        <button className="btn" onClick={onBack}>Cancel</button>
        <motion.button className="btn btn-primary btn-lg" onClick={handleNext} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          Start Scoring →
        </motion.button>
      </div>
    </div>
  )
}

// === Scoring ===
function ScoringView({ game, players, playerColors, scores, setScores, onBack, onFinish }) {
  function adjust(i, delta) {
    setScores(s => { const n = [...s]; n[i] = Math.max(0, n[i] + delta); return n })
  }
  function set(i, val) {
    setScores(s => { const n = [...s]; n[i] = Math.max(0, parseInt(val) || 0); return n })
  }

  return (
    <div className="panel">
      <h2>{game.name} — Scoring</h2>
      {players.map((name, i) => (
        <motion.div key={i} className="scoring-player" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
          <div className="scoring-player-num" style={{ background: playerColors[i] || game.color, color: '#fff' }}>{i + 1}</div>
          <div className="scoring-player-info"><div className="scoring-player-name">{name}</div></div>
          <div className="scoring-player-controls">
            <motion.button className="score-btn" onClick={() => adjust(i, -1)} whileTap={{ scale: 0.9 }}>−</motion.button>
            <motion.button className="score-btn" onClick={() => adjust(i, -5)} whileTap={{ scale: 0.9 }}>−5</motion.button>
            <div className="score-value">
              <input type="number" value={scores[i]} onChange={e => set(i, e.target.value)} />
            </div>
            <motion.button className="score-btn" onClick={() => adjust(i, 5)} whileTap={{ scale: 0.9 }}>+5</motion.button>
            <motion.button className="score-btn" onClick={() => adjust(i, 1)} whileTap={{ scale: 0.9 }}>+</motion.button>
          </div>
        </motion.div>
      ))}
      <div className="form-actions">
        <button className="btn" onClick={onBack}>← Back</button>
        <motion.button className="btn btn-primary btn-lg" onClick={onFinish} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          Finish & See Rankings
        </motion.button>
      </div>
    </div>
  )
}

// === Rankings ===
function RankingsView({ game, players, allSessions, onBack, onPlayAgain }) {
  const sorted = [...players].sort((a, b) => b.score - a.score)
  const totalScore = sorted.reduce((sum, p) => sum + p.score, 0)

  // Overall leaderboard
  let leaderboard = null
  if (allSessions.length > 1) {
    const wins = {}, totalGames = {}, totalScores = {}, bestScores = {}
    allSessions.forEach(s => {
      const rank = [...s.players].sort((a, b) => b.score - a.score)
      s.players.forEach(p => {
        const key = p.name.toLowerCase()
        totalGames[key] = (totalGames[key] || 0) + 1
        totalScores[key] = (totalScores[key] || 0) + p.score
        if (!bestScores[key] || p.score > bestScores[key]) bestScores[key] = p.score
        if (!wins[key]) wins[key] = { count: 0, name: p.name }
      })
      wins[rank[0].name.toLowerCase()].count++
    })
    leaderboard = Object.entries(wins).map(([key, w]) => ({
      name: w.name, wins: w.count, games: totalGames[key],
      avgScore: Math.round(totalScores[key] / totalGames[key]),
      bestScore: bestScores[key],
      winRate: ((w.count / totalGames[key]) * 100).toFixed(1),
    })).sort((a, b) => b.winRate - a.winRate)
  }

  return (
    <div className="panel panel-wide">
      <h2>Final Rankings</h2>
      {sorted.map((p, i) => {
        const pct = totalScore > 0 ? ((p.score / totalScore) * 100) : (100 / sorted.length)
        const rankClass = i < 3 ? `ranking-${i + 1}` : 'ranking-other'
        return (
          <motion.div key={p.name} className="ranking-card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}>
            {i === 0 && <div className="ranking-badge">Winner</div>}
            <div className={`ranking-position ${rankClass}`} style={p.color ? { background: p.color, color: '#fff' } : {}}>{i + 1}</div>
            <div className="ranking-info">
              <div className="ranking-name">{p.name}</div>
              <div className="ranking-score">{p.score} points</div>
            </div>
            <div className="ranking-pct">
              <div className="ranking-pct-value">{pct.toFixed(1)}%</div>
              <div className="ranking-pct-label">of total</div>
            </div>
          </motion.div>
        )
      })}

      {leaderboard && (
        <div className="overall-stats">
          <h3>Overall Leaderboard — {game.name}</h3>
          <div className="stats-grid">
            {leaderboard.map(p => (
              <motion.div key={p.name} className="stat-card" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                <div className="stat-value">{p.winRate}%</div>
                <div className="stat-label">{p.name} — {p.wins}W / {p.games}G (best {p.bestScore}, avg {p.avgScore})</div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div className="form-actions">
        <button className="btn" onClick={onBack}>Back to Game</button>
        <motion.button className="btn btn-primary" onClick={onPlayAgain} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>Play Again</motion.button>
      </div>
    </div>
  )
}
