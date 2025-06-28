export const theme = {
  colors: {
    primary: 'electric-blue',
    secondary: 'sage-green', 
    accent: 'sunshine-yellow',
    coral: 'coral-red',
    orange: 'warm-orange',
    pink: 'soft-pink',
    slate: 'deep-navy',
    gray: 'grid-gray',
    cream: 'cream-white'
  },
  gradients: {
    primary: 'from-electric-blue to-sunshine-yellow',
    secondary: 'from-electric-blue to-sage-green',
    success: 'from-electric-blue to-soft-pink',
    danger: 'from-coral-red to-warm-orange',
    warm: 'from-sage-green to-sunshine-yellow',
    vibrant: 'from-coral-red to-soft-pink'
  }
} as const;

export type ThemeColors = keyof typeof theme.colors;
export type ThemeGradients = keyof typeof theme.gradients;
