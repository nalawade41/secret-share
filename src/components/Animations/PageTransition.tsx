import { styled } from '@mui/material';
import React from 'react';

interface PageTransitionProps {
    onComplete: () => void;
}

const TransitionOverlay = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, rgba(0, 127, 255, 0.99) 0%, rgba(0, 230, 118, 0.99) 100%)',
    zIndex: 9999,
    animation: 'slideIn 0.5s ease-out forwards',
    '@keyframes slideIn': {
        '0%': {
            clipPath: 'circle(0% at 50% 50%)',
        },
        '100%': {
            clipPath: 'circle(100% at 50% 50%)',
        }
    }
});

const AnimatedText = styled('div')({
    color: '#fff',
    fontSize: '2rem',
    fontWeight: 'bold',
    opacity: 0,
    transform: 'scale(0.5)',
    animation: 'textReveal 0.5s ease-out 0.3s forwards',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
    '@keyframes textReveal': {
        '0%': {
            opacity: 0,
            transform: 'scale(0.5)',
        },
        '100%': {
            opacity: 1,
            transform: 'scale(1)',
        }
    }
});

const AnimatedIcon = styled('div')({
    position: 'relative',
    width: '60px',
    height: '60px',
    margin: '0 auto 20px',
    '&:before': {
        content: '""',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        border: '3px solid #fff',
        borderRadius: '50%',
        animation: 'rotate 2s linear infinite',
    },
    '&:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '30px',
        height: '30px',
        transform: 'translate(-50%, -50%)',
        background: '#fff',
        borderRadius: '50%',
        animation: 'pulse 1.5s ease-in-out infinite',
    },
    '@keyframes rotate': {
        '0%': {
            transform: 'rotate(0deg)',
        },
        '100%': {
            transform: 'rotate(360deg)',
        }
    },
    '@keyframes pulse': {
        '0%': {
            transform: 'translate(-50%, -50%) scale(0.8)',
            opacity: 0.5,
        },
        '50%': {
            transform: 'translate(-50%, -50%) scale(1)',
            opacity: 1,
        },
        '100%': {
            transform: 'translate(-50%, -50%) scale(0.8)',
            opacity: 0.5,
        }
    }
});

const PageTransition: React.FC<PageTransitionProps> = ({ onComplete }) => {
    React.useEffect(() => {
        const timer = setTimeout(onComplete, 2000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <TransitionOverlay>
            <div>
                <AnimatedIcon />
                <AnimatedText>Creating New Secret...</AnimatedText>
            </div>
        </TransitionOverlay>
    );
};

export default PageTransition;
