import { render } from '@testing-library/react';

import { AuthApi } from 'app/AppProviders/AuthProvider/authApi';
import { AuthProvider, AuthStateContext } from 'app/AppProviders/AuthProvider/AuthProvider';
import ls from 'utils/localStorage';

jest.mock('react-i18next');

function renderWithProviders() {
  return render(
    <AuthProvider>
      <AuthStateContext.Consumer>
        {(value) => <p data-testid="auth-provider-state-value">{value}</p>}
      </AuthStateContext.Consumer>
    </AuthProvider>,
  );
}

describe('<AuthProvider />', () => {
  it('should have empty initial state', async () => {
    const { getByTestId } = renderWithProviders();
    expect(getByTestId('auth-provider-state-value').textContent).toBe('');
  });

  it('should not load user if auth tokens are not stored', async () => {
    jest.spyOn(ls, 'getItem').mockReturnValue(null);
    const { queryByTestId } = renderWithProviders();
    expect(queryByTestId('auth-provider-loading-spinner')).toBeNull();
  });

  it('should load user if auth tokens are stored', async () => {
    const getUserResponse = { data: { user: 'user' } };
    jest.spyOn(ls, 'getItem').mockReturnValue('tokens');
    jest.spyOn(AuthApi, 'getUser').mockReturnValue(Promise.resolve(getUserResponse));
    const { getByTestId, findByTestId } = renderWithProviders();
    expect(AuthApi.getUser).toHaveBeenCalledTimes(1);
    expect(getByTestId('auth-provider-loading-spinner')).toBeTruthy();
    expect((await findByTestId('auth-provider-state-value')).textContent).toBe(getUserResponse.data.user);
  });
});
