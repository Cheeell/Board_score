import { supabase } from './supabase'

// ── Games ──────────────────────────────────────────────

export async function fetchGames() {
  const { data, error } = await supabase
    .from('games')
    .select('*')
    .order('id')
  if (error) { console.error('fetchGames:', error); return [] }
  return data.map(g => ({
    id: g.id,
    name: g.name,
    icon: g.icon,
    color: g.color,
    minPlayers: g.min_players,
    maxPlayers: g.max_players,
    cover: g.cover || '',
  }))
}

export async function createGame(game) {
  const { data, error } = await supabase
    .from('games')
    .insert({
      name: game.name,
      icon: game.icon,
      color: game.color,
      min_players: game.minPlayers,
      max_players: game.maxPlayers,
      cover: game.cover || '',
    })
    .select()
    .single()
  if (error) { console.error('createGame:', error); return null }
  return {
    id: data.id,
    name: data.name,
    icon: data.icon,
    color: data.color,
    minPlayers: data.min_players,
    maxPlayers: data.max_players,
    cover: data.cover || '',
  }
}

export async function updateGame(id, updates) {
  const { data, error } = await supabase
    .from('games')
    .update({
      name: updates.name,
      icon: updates.icon,
      color: updates.color,
      min_players: updates.minPlayers,
      max_players: updates.maxPlayers,
      cover: updates.cover || '',
    })
    .eq('id', id)
    .select()
    .single()
  if (error) { console.error('updateGame:', error); return null }
  return {
    id: data.id,
    name: data.name,
    icon: data.icon,
    color: data.color,
    minPlayers: data.min_players,
    maxPlayers: data.max_players,
    cover: data.cover || '',
  }
}

export async function deleteGame(id) {
  const { error } = await supabase.from('games').delete().eq('id', id)
  if (error) console.error('deleteGame:', error)
}

// ── Sessions ───────────────────────────────────────────

export async function fetchSessions(gameId) {
  let query = supabase.from('sessions').select('*').order('played_at')
  if (gameId) query = query.eq('game_id', gameId)
  const { data, error } = await query
  if (error) { console.error('fetchSessions:', error); return [] }
  return data.map(s => ({
    id: s.id,
    gameId: s.game_id,
    date: s.played_at,
    players: s.players,
  }))
}

export async function fetchAllSessions() {
  const { data, error } = await supabase.from('sessions').select('*').order('played_at')
  if (error) { console.error('fetchAllSessions:', error); return [] }
  return data.map(s => ({
    id: s.id,
    gameId: s.game_id,
    date: s.played_at,
    players: s.players,
  }))
}

export async function createSession(gameId, players) {
  const { data, error } = await supabase
    .from('sessions')
    .insert({
      game_id: gameId,
      players,
    })
    .select()
    .single()
  if (error) { console.error('createSession:', error); return null }
  return {
    id: data.id,
    gameId: data.game_id,
    date: data.played_at,
    players: data.players,
  }
}
