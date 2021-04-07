import { StyledSpinnerNext } from 'baseui/spinner';

import { StyledApp } from 'app/StyledApp';
import { StyledPage } from 'styles/StyledPage';

export function AuthProviderLoading() {
  return (
    <StyledApp>
      <StyledPage style={{ height: '100vh' }}>
        <StyledSpinnerNext data-testid="auth-provider-loading-spinner" />
      </StyledPage>
      ;
    </StyledApp>
  );
}
