import { Theme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { Variant } from '@mui/material/styles/createTypography';

export type GradientVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2';

export interface GradientTextProps {
  variant?: GradientVariant;
  component?: React.ElementType;
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

export interface GradientConfig {
  colors: string[];
  duration?: number;
  timingFunction?: string;
  backgroundSize?: string;
}

export const defaultGradientConfig: GradientConfig = {
  colors: ['#007FFF', '#FFE5B4', '#FFA95C'],
  duration: 3,
  timingFunction: 'ease',
  backgroundSize: '200% auto',
};

export const variantMapping: Record<string, GradientVariant> = {
  header: 'h1',
  subtitle: 'subtitle1',
  body: 'body1',
};
