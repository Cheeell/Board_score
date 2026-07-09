import * as React from 'react';

/**
 * GlareHover — from score-bar@1.0.0.
 */
export interface GlareHoverProps {
width?: string; height?: string; background?: string; borderRadius?: string; borderColor?: string; children?: React.ReactNode; glareColor?: string; glareOpacity?: number; glareAngle?: number; glareSize?: number; transitionDuration?: number; playOnce?: boolean; className?: string; style?: React.CSSProperties;
}

export declare const GlareHover: React.ComponentType<GlareHoverProps>;
