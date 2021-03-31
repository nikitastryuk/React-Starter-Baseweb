import { Button } from 'baseui/button';
import { styled } from 'baseui';

export const StyledMainLayoutSidebar = styled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: `calc(100vh - ${$theme.sizing.scale800} * 2)`,
  background: $theme.colors.backgroundPrimary,
  padding: `${$theme.sizing.scale800} 0`,
}));

export const StyledMainLayoutSidebarLogo = styled('div', ({ $theme }) => ({
  padding: `0 ${$theme.sizing.scale1000}`,
  marginBottom: $theme.sizing.scale1200,
}));

export const StyledLogoutButton = styled(Button, () => ({
  marginTop: 'auto',
}));
