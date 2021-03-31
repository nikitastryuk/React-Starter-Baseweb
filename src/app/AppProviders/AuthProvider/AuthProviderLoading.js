import { useTranslation } from 'react-i18next';

import { DisplayLarge } from 'baseui/typography';

import { StyledApp } from 'app/StyledApp';
import { StyledPage } from 'styles/StyledPage';

export function AuthProviderLoading() {
  const { t } = useTranslation();

  return (
    <StyledApp>
      <StyledPage style={{ height: '100vh' }}>
        <DisplayLarge>{t('global.loading')}</DisplayLarge>
      </StyledPage>
      ;
    </StyledApp>
  );
}
