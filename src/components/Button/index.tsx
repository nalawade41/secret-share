import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import theme from '../../theme';
import { IconButton } from '@mui/material';

const StyledButton = styled(Button)({
    padding: '10px 20px',
    backgroundColor: "#637a8a",
    color: "#ffffff",
    fontWeight: "800",
    fontSize: theme.typography.pxToRem(16),
    maxWidth: "300px",
    ":hover": {
      backgroundColor: "#4b5f6d",
    },
});

export const CloseButton = styled(IconButton)({
  padding: 10,
  position: "absolute",
  top: 0,
  right: 0,
  backgroundColor: "#637a8a",
  color: "#ffffff",
  borderRadius: 0,
  "&:hover": {
      backgroundColor: "#4b5f6d",
  },
});

export default StyledButton;