import React from 'react';
import { Box, keyframes, styled } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const pulseAnimation = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const IconWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: `${floatAnimation} 3s ease-in-out infinite`,
  '& svg': {
    fontSize: 80,
    animation: `${pulseAnimation} 2s ease-in-out infinite`,
    background: 'linear-gradient(45deg, #FF3D57 30%, #FF647C 90%)',
    borderRadius: '50%',
    padding: '8px',
    color: 'white',
    filter: 'drop-shadow(0 4px 20px rgba(255, 61, 87, 0.25))',
  }
});

const ErrorIcon: React.FC = () => {
  return (
    <IconWrapper>
      <ErrorOutlineIcon />
    </IconWrapper>
  );
};

export default ErrorIcon;
