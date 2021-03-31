import { useTranslation } from 'react-i18next';

import { Button } from 'baseui/button';
import { DisplayLarge } from 'baseui/typography';
import { styled } from 'baseui';

import { StyledPage } from 'styles/StyledPage';
import { useAsync } from 'hooks/useAsync';
import { useAuthActions } from 'hooks/useAuthActions';

export const StyledLogin = styled('div', () => ({
  display: 'flex',
}));

export default function Login() {
  const { t } = useTranslation();
  const { loginUser } = useAuthActions();
  const { isLoading, error, run } = useAsync();

  if (error) {
    return (
      <StyledPage>
        <DisplayLarge>{error}</DisplayLarge>
      </StyledPage>
    );
  }

  if (isLoading) {
    return (
      <StyledPage>
        <DisplayLarge>{t('global.loading')}</DisplayLarge>
      </StyledPage>
    );
  }

  return (
    <StyledPage>
      <StyledLogin>
        <DisplayLarge>{t('login.title')}</DisplayLarge>
        <Button type="submit" onClick={handleLogin}>
          {t('login.buttonText')}
        </Button>
      </StyledLogin>
    </StyledPage>
  );

  async function handleLogin() {
    // Redirect happens inside AuthenticatedApp component
    run(loginUser());
  }
}
