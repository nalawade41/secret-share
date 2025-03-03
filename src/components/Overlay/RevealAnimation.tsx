import { Box, keyframes, styled } from '@mui/material';
import React from 'react';

const revealAnimation = keyframes`
  0% {
    transform: scale(0) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.2) rotate(180deg);
    opacity: 0.8;
  }
  100% {
    transform: scale(1) rotate(360deg);
    opacity: 1;
  }
`;

const particleAnimation = keyframes`
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(var(--tx), var(--ty)) scale(0);
    opacity: 0;
  }
`;

const Container = styled(Box)({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, rgba(0, 127, 255, 0.95) 0%, rgba(255, 183, 0, 0.95) 50%, rgba(0, 230, 118, 0.95) 100%)',
  zIndex: 1200,
});

const Circle = styled(Box)({
  width: '150px',
  height: '150px',
  position: 'relative',
  animation: `${revealAnimation} 1.5s ease-out forwards`,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '4px solid white',
    borderRadius: '50%',
  },
});

const Particle = styled(Box)({
  position: 'absolute',
  width: '10px',
  height: '10px',
  background: 'white',
  borderRadius: '50%',
  animation: `${particleAnimation} 0.8s ease-out forwards`,
});

const createParticles = () => {
  const particles = [];
  for (let i = 0; i < 12; i++) {
    const angle = (i * 30) * Math.PI / 180;
    const tx = Math.cos(angle) * 100;
    const ty = Math.sin(angle) * 100;
    particles.push(
      <Particle
        key={i}
        sx={{
          '--tx': `${tx}px`,
          '--ty': `${ty}px`,
          top: 'calc(50% - 5px)',
          left: 'calc(50% - 5px)',
          animationDelay: `${0.8 + i * 0.05}s`,
        }}
      />
    );
  }
  return particles;
};

interface RevealAnimationProps {
  onComplete: () => void;
}

const RevealAnimation: React.FC<RevealAnimationProps> = ({ onComplete }) => {
  React.useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <Container>
      <Circle>
        {createParticles()}
      </Circle>
    </Container>
  );
};

export default RevealAnimation;
