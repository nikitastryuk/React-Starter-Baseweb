import { useTranslation } from 'react-i18next';
import React from 'react';

import { DisplayMedium } from 'baseui/typography';

import { MainLayoutSidebarNavigation } from 'components/MainLayout/MainLayoutSidebar/MainLayoutSidebarNavigation';
import { useAuthActions } from 'hooks/useAuthActions';

import { StyledLogoutButton, StyledMainLayoutSidebar, StyledMainLayoutSidebarLogo } from './StyledMainLayoutSidebar';

export function MainLayoutSidebar() {
  const { t } = useTranslation();
  const { logoutUser } = useAuthActions();

  return (
    <StyledMainLayoutSidebar>
      <StyledMainLayoutSidebarLogo>
        <DisplayMedium>LOGO</DisplayMedium>
      </StyledMainLayoutSidebarLogo>
      <MainLayoutSidebarNavigation />
      <StyledLogoutButton onClick={handleLogout}>{t('sidebar.logout')}</StyledLogoutButton>
    </StyledMainLayoutSidebar>
  );

  function handleLogout() {
    logoutUser();
  }
}
