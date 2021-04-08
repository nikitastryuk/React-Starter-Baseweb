import PropTypes from 'prop-types';

import { LanguageSwitcher } from 'components/LanguageSwitcher/LanguageSwitcher';
import { MainLayoutNavigationBar } from 'components/MainLayout/MainLayoutNavigationBar';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

import { StyledMainLayout, StyledMainLayoutContent, StyledMainLayoutToolbar } from './StyledMainLayout';

export function MainLayout({ children }) {
  return (
    <StyledMainLayout>
      <MainLayoutNavigationBar />
      <StyledMainLayoutToolbar>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </StyledMainLayoutToolbar>
      <StyledMainLayoutContent>{children}</StyledMainLayoutContent>
    </StyledMainLayout>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
