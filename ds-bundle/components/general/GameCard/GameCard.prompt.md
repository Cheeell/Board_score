GameCard from score-bar. Use via `window.ScoreBar.GameCard` (bundle loaded from the root `_ds_bundle.js`).

## Props

```ts
interface GameCardProps {
game: { id: string; name: string; icon: string; color: string; cover?: string }; onClick: (id: string) => void; onDelete: (id: string) => void;
}
```
