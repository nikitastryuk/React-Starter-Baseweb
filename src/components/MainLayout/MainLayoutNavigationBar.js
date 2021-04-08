import { useHistory, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';

import { AppNavBar } from 'baseui/app-nav-bar';

import { ROUTE_PATHS } from 'routes';
import { useAuthActions } from 'hooks/useAuthActions';

const LOGO = 'LOGO';

export function MainLayoutNavigationBar() {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();
  const { logoutUser } = useAuthActions();

  const MAIN_NAVIGATION_ITEMS = [
    { path: ROUTE_PATHS.MAIN, label: t('navigationBar.mainItems.main') },
    { path: '/test1', label: 'Test 1' },
    { path: '/test2', label: 'Test 2' },
    { path: '/test3', label: 'Test 3' },
  ];

  const USER_NAVIGATION_ITEMS = [
    { path: '/test1', label: 'Test 1' },
    { path: '/test2', label: 'Test 2' },
    { action: logoutUser, label: t('navigationBar.userItems.logout') },
  ];

  return (
    <AppNavBar
      title={LOGO}
      mainItems={MAIN_NAVIGATION_ITEMS}
      isMainItemActive={(item) => item.path === location.pathname}
      onMainItemSelect={handleNavigationItemSelect}
      userItems={USER_NAVIGATION_ITEMS}
      username="Username"
      onUserItemSelect={handleNavigationItemSelect}
    />
  );

  function handleNavigationItemSelect(item) {
    if (item.action) {
      item.action();
      return;
    }
    if (item.path !== location.pathname) {
      history.push(item.path);
    }
  }
}
