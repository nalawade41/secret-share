import { Box, keyframes, styled } from '@mui/material';
import React from 'react';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';

const lockOpenAnimation = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
  20% {
    transform: scale(1.2) rotate(10deg);
    opacity: 1;
  }
  40% {
    transform: scale(1.2) rotate(-10deg);
    opacity: 1;
  }
  60% {
    transform: scale(1.2) rotate(0deg);
    opacity: 1;
  }
  80% {
    transform: scale(1.5) translateY(-20px);
    opacity: 0;
  }
  100% {
    transform: scale(0) translateY(-50px);
    opacity: 0;
  }
`;

const particleAnimation = keyframes`
  0% {
    transform: translate(var(--tx), var(--ty)) scale(0);
    opacity: 0;
  }
  50% {
    transform: translate(var(--tx), var(--ty)) scale(1);
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
  background: 'linear-gradient(135deg, rgba(0, 127, 255, 0.95) 0%, rgba(255, 183, 0, 0.4) 50%, rgba(0, 230, 118, 0.95) 100%)',
  backdropFilter: 'blur(8px)',
  zIndex: 1200,
});

const LockWrapper = styled(Box)({
  position: 'relative',
  width: '120px',
  height: '120px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const AnimatedLock = styled(Box)({
  position: 'absolute',
  animation: `${lockOpenAnimation} 2s ease-in-out forwards`,
  '& svg': {
    fontSize: '80px',
    color: 'white',
    filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.2))',
  },
});

const Particle = styled(Box)({
  position: 'absolute',
  width: '10px',
  height: '10px',
  background: 'white',
  borderRadius: '50%',
  animation: `${particleAnimation} 1s ease-out forwards`,
});

const createParticles = () => {
  const particles = [];
  for (let i = 0; i < 12; i++) {
    const angle = (i * 30) * Math.PI / 180;
    const distance = Math.random() * 100 + 50;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    particles.push(
      <Particle
        key={i}
        sx={{
          '--tx': `${tx}px`,
          '--ty': `${ty}px`,
          animationDelay: `${1 + Math.random() * 0.5}s`,
        }}
      />
    );
  }
  return particles;
};

interface SecretRevealAnimationProps {
  onComplete: () => void;
}

const SecretRevealAnimation: React.FC<SecretRevealAnimationProps> = ({ onComplete }) => {
  const [showOpenLock, setShowOpenLock] = React.useState(false);

  React.useEffect(() => {
    const timer1 = setTimeout(() => setShowOpenLock(true), 1000);
    const timer2 = setTimeout(onComplete, 2500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <Container>
      <LockWrapper>
        <AnimatedLock>
          {showOpenLock ? <LockOpenIcon /> : <LockIcon />}
        </AnimatedLock>
        {showOpenLock && createParticles()}
      </LockWrapper>
    </Container>
  );
};

export default SecretRevealAnimation;
