import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { AuthActionsContext, AuthProvider, AuthStateContext } from 'app/AppProviders/AuthProvider/AuthProvider';
import { AuthApi } from 'app/AppProviders/AuthProvider/authApi';
import ls from 'utils/localStorage';

jest.mock('react-i18next');

function TestComponent() {
  return (
    <AuthStateContext.Consumer>
      {(user) => (
        <AuthActionsContext.Consumer>
          {({ loginUser, refreshUserToken, logoutUser }) => (
            <>
              <p data-testid="auth-provider-state-value">{user}</p>
              <button onClick={loginUser}>Login</button>
              <button onClick={refreshUserToken}>Refresh token</button>
              <button onClick={logoutUser}>Logout</button>
            </>
          )}
        </AuthActionsContext.Consumer>
      )}
    </AuthStateContext.Consumer>
  );
}

function renderWithProviders() {
  return render(<TestComponent />, { wrapper: AuthProvider });
}

describe('<AuthProvider />', () => {
  beforeEach(() => {
    jest.spyOn(ls, 'getItem').mockReturnValue(null);
  });
  it('should have empty initial state', async () => {
    const { getByTestId } = renderWithProviders();
    expect(getByTestId('auth-provider-state-value').textContent).toBe('');
  });

  it('should not load user if auth tokens are not stored', async () => {
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

  it('should login and logout user', async () => {
    const loginUserResponse = { data: { user: 'user' } };
    jest.spyOn(AuthApi, 'loginUser').mockReturnValue(Promise.resolve(loginUserResponse));
    const { getByRole, findByTestId } = renderWithProviders();
    userEvent.click(getByRole('button', { name: 'Login' }));
    expect(AuthApi.loginUser).toHaveBeenCalledTimes(1);
    expect((await findByTestId('auth-provider-state-value')).textContent).toBe(loginUserResponse.data.user);

    jest.spyOn(AuthApi, 'logoutUser').mockReturnValue(Promise.resolve());
    userEvent.click(getByRole('button', { name: 'Logout' }));
    expect(AuthApi.logoutUser).toHaveBeenCalledTimes(1);
    expect((await findByTestId('auth-provider-state-value')).textContent).toBe('');
  });
});
