import { useHistory, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import React from 'react';

import { Navigation } from 'baseui/side-navigation';

import { ROUTE_PATHS } from 'app/routes';

export function MainLayoutSidebarNavigation() {
  const { t } = useTranslation();
  const history = useHistory();
  const location = useLocation();

  const SIDEBAR_ROUTES = [
    { itemId: ROUTE_PATHS.MAIN, title: t('sidebar.navigation.main') },
    { itemId: '/test1', title: 'Test 1' },
    { itemId: '/test2', title: 'Test 2' },
    { itemId: '/test3', title: 'Test 3' },
    { itemId: '/test4', title: 'Test 4' },
    { itemId: '/test5', title: 'Test 5' },
  ];

  return (
    <Navigation
      items={SIDEBAR_ROUTES}
      activeItemId={location.pathname}
      onChange={({ event, item }) => {
        event.preventDefault();
        history.push(item.itemId);
      }}
    />
  );
}
