import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import type { FormButtonProps } from '../../types/components/form';
import { alpha } from '@mui/material/styles';
import type { ExtendedTheme } from '../../types/theme';

const StyledButton = styled(Button)<FormButtonProps>(({ theme }) => ({
    padding: '10px 24px',
    borderRadius: 12,
    fontWeight: 600,
    fontSize: theme.typography.pxToRem(16),
    transition: 'all 0.2s ease-in-out',
    color: '#FFFFFF',
    textShadow: '0 1px 2px rgba(0,0,0,0.2)',
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.2)}`,
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: `0 6px 16px ${alpha(theme.palette.primary.main, 0.3)}`,
      background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    },
    '&:active': {
      transform: 'translateY(0)',
      boxShadow: `0 2px 8px ${alpha(theme.palette.primary.main, 0.2)}`,
    },
    '&.MuiButton-outlined': {
      background: 'linear-gradient(135deg, #FFE5B4 0%, #FFA95C 100%)',
      color: '#4A4A4A',
      border: 'none',
      fontWeight: 700,
      letterSpacing: '0.02em',
      boxShadow: '0 4px 12px rgba(255, 169, 92, 0.15)',
      '&:hover': {
        transform: 'translateY(-2px)',
        background: 'linear-gradient(135deg, #FFA95C 0%, #FFE5B4 100%)',
        boxShadow: '0 6px 16px rgba(255, 169, 92, 0.25)',
      },
      '&:active': {
        transform: 'translateY(0)',
        boxShadow: '0 2px 8px rgba(255, 169, 92, 0.15)',
      },
    },
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  padding: 8,
  position: 'absolute',
  top: 8,
  right: 8,
  borderRadius: 8,
  backgroundColor: alpha(theme.palette.secondary.main, 0.1),
  color: theme.palette.secondary.main,
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    backgroundColor: alpha(theme.palette.secondary.main, 0.2),
    transform: 'rotate(90deg)',
  },
}));

export default StyledButton;