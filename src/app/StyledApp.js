import { styled } from 'baseui';

export const StyledApp = styled('div', ({ $theme }) => ({
  width: '100%',
  height: '100vh',
  color: $theme.colors.contentPrimary,
  background: $theme.colors.backgroundPrimary,
}));
