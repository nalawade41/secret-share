import { Box, keyframes, styled } from '@mui/material';
import React from 'react';

const floatAnimation = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(-5deg); }
  75% { transform: translateY(10px) rotate(5deg); }
`;

const particleAnimation = keyframes`
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(var(--tx), var(--ty)) scale(0); opacity: 0; }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 0.5; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const Container = styled(Box)({
  position: 'relative',
  width: '120px',
  height: '120px',
  margin: '0 auto',
  animation: `${floatAnimation} 3s ease-in-out infinite`,
});

const Envelope = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderLeft: '60px solid transparent',
    borderRight: '60px solid transparent',
    borderTop: '40px solid #FF3D57',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '120px',
    height: '80px',
    background: 'linear-gradient(135deg, #FF3D57, #FF6B81)',
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    animation: `${pulseAnimation} 2s ease-in-out infinite`,
  },
});

const Particle = styled(Box)({
  position: 'absolute',
  width: '8px',
  height: '8px',
  background: '#FF3D57',
  borderRadius: '50%',
  animation: `${particleAnimation} 1s ease-out forwards`,
});

const createParticles = () => {
  const particles = [];
  for (let i = 0; i < 8; i++) {
    const angle = (i * 45) * Math.PI / 180;
    const tx = Math.cos(angle) * 50;
    const ty = Math.sin(angle) * 50;
    particles.push(
      <Particle
        key={i}
        sx={{
          '--tx': `${tx}px`,
          '--ty': `${ty}px`,
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          animationDelay: `${i * 0.1}s`,
        }}
      />
    );
  }
  return particles;
};

const Sparkle = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    background: 'rgba(255, 61, 87, 0.5)',
    animation: `${pulseAnimation} 2s ease-in-out infinite`,
  },
  '&::before': {
    top: '40%',
    transform: 'rotate(45deg)',
  },
  '&::after': {
    top: '40%',
    transform: 'rotate(-45deg)',
  },
});

const ErrorAnimation: React.FC = () => {
  return (
    <Container>
      <Envelope />
      <Sparkle />
      {createParticles()}
    </Container>
  );
};

export default ErrorAnimation;
