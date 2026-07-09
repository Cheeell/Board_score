# Scorebar

A board game session tracker. Record games, track scores, and view player rankings.

## Features

- Add games with custom icons and colors
- Track sessions with per-player scores and colors
- View rankings with win/loss stats
- Game history timeline

## Self-Hosting

Scorebar uses [Supabase](https://supabase.com) as its backend. Follow these steps to set up your own instance.

### 1. Create a Supabase Project

1. Go to [supabase.com](https://supabase.com) and sign in (or create an account)
2. Click **New Project** and fill in the details:
   - **Name** — anything you like (e.g. `scorebar`)
   - **Database Password** — pick a strong password and save it
   - **Region** — choose the closest region to you
3. Wait for the project to finish provisioning (~2 minutes)

### 2. Create the Database Tables

Go to the **SQL Editor** in your Supabase dashboard and run this:

```sql
-- Games table
create table games (
  id bigint generated always as identity primary key,
  name text not null,
  icon text not null default '🎲',
  color text not null default '#2c3e50',
  min_players int not null default 2,
  max_players int not null default 8,
  cover text not null default ''
);

-- Sessions table
create table sessions (
  id bigint generated always as identity primary key,
  game_id bigint not null references games(id) on delete cascade,
  played_at timestamptz not null default now(),
  players jsonb not null default '[]'
);

-- Index for faster session lookups by game
create index idx_sessions_game_id on sessions(game_id);
```

### 3. Set Up Row Level Security (Optional)

If you want to use Supabase Auth to protect your data:

```sql
-- Enable RLS
alter table games enable row level security;
alter table sessions enable row level security;

-- Allow anonymous access (simplest approach — fine for personal use)
create policy "Allow all on games" on games for all using (true) with check (true);
create policy "Allow all on sessions" on sessions for all using (true) with check (true);
```

> **Note:** Without RLS policies, the anon key will have no access. Either enable RLS with permissive policies (above) or disable RLS entirely for a private project.

### 4. Get Your API Keys

1. In your Supabase dashboard, go to **Settings → API**
2. Copy the **Project URL** (looks like `https://xxxx.supabase.co`)
3. Copy the **anon / public** key (a long JWT string)

### 5. Configure the App

Create a `.env` file in the project root:

```env
VITE_SUPABASE_URL=https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxxx...
```

Replace the values with your project URL and anon key from step 4.

### 6. Install and Run

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

To build for production:

```bash
npm run build
```

The `dist/` folder can be deployed to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.).

## Database Schema

### `games`

| Column       | Type    | Description                     |
|-------------|---------|---------------------------------|
| id          | bigint  | Auto-generated primary key      |
| name        | text    | Game name                       |
| icon        | text    | Emoji icon                      |
| color       | text    | Hex color for the game card     |
| min_players | int     | Minimum number of players       |
| max_players | int     | Maximum number of players       |
| cover       | text    | Cover image URL (optional)      |

### `sessions`

| Column     | Type       | Description                              |
|-----------|------------|------------------------------------------|
| id        | bigint     | Auto-generated primary key               |
| game_id   | bigint     | Foreign key → `games.id` (cascade delete)|
| played_at | timestamptz| When the session was recorded            |
| players   | jsonb      | Array of player results (see below)      |

**`players` JSONB structure:**

```json
[
  { "name": "Alice", "score": 42, "color": "#e74c3c" },
  { "name": "Bob", "score": 38, "color": "#3498db" }
]
```

## Environment Variables

| Variable              | Required | Description                         |
|----------------------|----------|-------------------------------------|
| `VITE_SUPABASE_URL`  | Yes      | Your Supabase project URL           |
| `VITE_SUPABASE_ANON_KEY` | Yes  | Your Supabase anon/public API key   |

## Tech Stack

- **Frontend:** React 19 + Vite
- **Backend:** Supabase (PostgreSQL + API)
- **Animations:** Motion (Framer Motion)
