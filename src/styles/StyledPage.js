import { styled } from 'baseui';

export const StyledPage = styled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%',
  justifyContent: 'center',
  textAlign: 'center',
  padding: `0 ${$theme.sizing.scale1000}`,
}));
