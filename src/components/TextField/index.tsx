import { TextField } from '@mui/material';
import styled from '@emotion/styled';
import type { ExtendedTheme } from '../../types/theme';
import type { FormInputProps } from '../../types/components/form';

const StyledTextField = styled(TextField)<FormInputProps>`
  & .MuiOutlinedInput-root {
    transition: all 200ms ease;
    &.Mui-focused {
      transform: translateY(-2px);
    }
  }
  & .MuiInputLabel-root {
    transition: all 200ms ease;
  }
  & .MuiInputLabel-root.Mui-focused {
    transform: translate(14px, -9px) scale(0.75);
    color: ${({ theme }) => theme.palette.primary.main};
  }
`;

export default StyledTextField;