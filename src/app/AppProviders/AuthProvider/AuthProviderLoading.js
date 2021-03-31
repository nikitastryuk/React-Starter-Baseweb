import { Spinner } from 'baseui/spinner';

import { StyledApp } from 'app/StyledApp';
import { StyledPage } from 'styles/StyledPage';

export function AuthProviderLoading() {
  return (
    <StyledApp>
      <StyledPage style={{ height: '100vh' }}>
        <Spinner />
      </StyledPage>
      ;
    </StyledApp>
  );
}
