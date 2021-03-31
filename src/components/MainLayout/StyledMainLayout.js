import { styled } from 'baseui';

export const StyledMainLayout = styled('div', () => ({
  display: 'flex',
}));

export const StyledMainLayoutContent = styled('div', () => ({
  width: '100%',
}));

export const StyledMainLayoutToolbar = styled('div', ({ $theme }) => ({
  position: 'absolute',
  top: $theme.sizing.scale100,
  right: $theme.sizing.scale100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));
