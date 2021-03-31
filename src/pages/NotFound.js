import { useTranslation } from 'react-i18next';

import { DisplayLarge } from 'baseui/typography';

import { StyledPage } from 'styles/StyledPage';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <StyledPage>
      <DisplayLarge>{t('notFound.title')}</DisplayLarge>
    </StyledPage>
  );
}
