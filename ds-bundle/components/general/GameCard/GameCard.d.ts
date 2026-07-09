import * as React from 'react';

/**
 * GameCard — from score-bar@1.0.0.
 */
export interface GameCardProps {
game: { id: string; name: string; icon: string; color: string; cover?: string }; onClick: (id: string) => void; onDelete: (id: string) => void;
}

export declare const GameCard: React.ComponentType<GameCardProps>;
