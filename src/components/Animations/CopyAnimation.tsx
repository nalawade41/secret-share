import { styled } from '@mui/material';
import { CopyAnimationProps } from '../../types/components/animations';

export const CopyAnimation = styled('div')<CopyAnimationProps>(({ }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'none',
    zIndex: 10,
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)',
    backdropFilter: 'blur(4px)',

    '& .copy-circle': {
        position: 'absolute',
        width: 50,
        height: 50,
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #007FFF, #00E676)',
        animation: 'copyCircle 0.6s ease-out',
    },
    '@keyframes copyCircle': {
        '0%': {
            opacity: 1,
            transform: 'scale(0)',
        },
        '100%': {
            opacity: 0,
            transform: 'scale(4)',
        }
    },
    '& .copy-check': {
        color: '#fff',
        fontSize: 32,
        position: 'absolute',
        zIndex: 11,
        textShadow: '0 2px 4px rgba(0,0,0,0.2)',
        transform: 'scale(0)',
        animation: 'copyCheck 0.4s ease-in-out 0.2s forwards',
    },
    '@keyframes copyCheck': {
        '0%': {
            transform: 'scale(0) rotate(-10deg)',
        },
        '50%': {
            transform: 'scale(1.2) rotate(10deg)',
        },
        '100%': {
            transform: 'scale(1) rotate(0)',
        }
    }
}));
