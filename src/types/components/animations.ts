import { Theme } from '@mui/material';

export interface CopyAnimationProps {
    theme?: Theme;
}

export interface CopyPosition {
    x: number;
    y: number;
}

export interface AnimationState {
    showAnimation: boolean;
    position: CopyPosition;
}
