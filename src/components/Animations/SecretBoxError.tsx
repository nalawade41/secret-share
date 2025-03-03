import { Box, keyframes, styled } from '@mui/material';
import React from 'react';

const fadeInOut = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  20% { opacity: 1; transform: scale(1); }
  70% { opacity: 1; transform: scale(1); }
  100% { opacity: 0; transform: scale(0.8); }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 10px rgba(0, 127, 255, 0.5); }
  50% { box-shadow: 0 0 30px rgba(0, 127, 255, 0.8); }
  100% { box-shadow: 0 0 10px rgba(0, 127, 255, 0.5); }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-10px) rotate(2deg); }
  75% { transform: translateY(10px) rotate(-2deg); }
  100% { transform: translateY(0) rotate(0deg); }
`;

const dissolveSpark = keyframes`
  0% { transform: scale(0) rotate(0deg); opacity: 0; }
  50% { transform: scale(1) rotate(180deg); opacity: 1; }
  100% { transform: scale(0) rotate(360deg); opacity: 0; }
`;

const Container = styled(Box)({
  position: 'relative',
  width: '160px',
  height: '160px',
  animation: `${floatAnimation} 4s ease-in-out infinite`,
});

const Box3D = styled('div')({
  position: 'absolute',
  width: '100px',
  height: '100px',
  left: '30px',
  top: '30px',
  perspective: '1000px',
  transformStyle: 'preserve-3d',
  animation: `${fadeInOut} 3s ease-in-out infinite`,
});

const Face = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  background: 'linear-gradient(45deg, #007FFF, rgba(255, 183, 0, 0.7))',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  borderRadius: '12px',
  backdropFilter: 'blur(8px)',
  animation: `${glowPulse} 2s ease-in-out infinite`,
});

const Spark = styled('div')({
  position: 'absolute',
  width: '4px',
  height: '4px',
  background: '#fff',
  borderRadius: '50%',
  animation: `${dissolveSpark} 2s ease-out infinite`,
});

const createSparks = () => {
  const sparks = [];
  for (let i = 0; i < 12; i++) {
    const delay = Math.random() * 2;
    const angle = (i * 30) * Math.PI / 180;
    const distance = 60;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    sparks.push(
      <Spark
        key={i}
        sx={{
          left: '50%',
          top: '50%',
          transform: `translate(${x}px, ${y}px)`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  }
  return sparks;
};

const SecretBoxError: React.FC = () => {
  return (
    <Container>
      <Box3D>
        <Face sx={{ transform: 'translateZ(50px)' }} />
        <Face sx={{ transform: 'rotateX(90deg) translateZ(50px)' }} />
        <Face sx={{ transform: 'rotateY(90deg) translateZ(50px)' }} />
        <Face sx={{ transform: 'rotateY(-90deg) translateZ(50px)' }} />
        <Face sx={{ transform: 'rotateX(-90deg) translateZ(50px)' }} />
        <Face sx={{ transform: 'rotateY(180deg) translateZ(50px)' }} />
      </Box3D>
      {createSparks()}
    </Container>
  );
};

export default SecretBoxError;
