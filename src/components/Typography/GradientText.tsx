import { Typography } from '@mui/material';
import { GradientTextProps, GradientConfig, defaultGradientConfig, variantMapping } from '../../types/components/typography';

const createGradientStyle = (config: GradientConfig = defaultGradientConfig) => ({
  background: `linear-gradient(120deg, ${config.colors.join(', ')})`,
  backgroundSize: config.backgroundSize,
  animation: `gradient ${config.duration}s ${config.timingFunction} infinite`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%'
    },
    '50%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  }
});

const GradientText: React.FC<GradientTextProps> = ({
  variant = 'h1',
  component,
  sx = {},
  children,
}) => {
  const mappedVariant = variant in variantMapping ? variantMapping[variant] : variant;
  
  const typographyProps = {
    variant: mappedVariant,
    ...(component && { component }),
    sx: {
      fontSize: mappedVariant === 'h1' ? '2.5rem' : undefined,
      fontWeight: mappedVariant === 'h1' ? 800 : undefined,
      mb: 1,
      ...createGradientStyle(),
      ...sx,
    }
  };
  
  return (
    <Typography {...typographyProps}>
      {children}
    </Typography>
  );
};

export default GradientText;
