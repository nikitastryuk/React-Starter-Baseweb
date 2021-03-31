// TODO: Using HashRouter instead BrowserRouter to have gh-pages working
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthProvider } from 'app/auth/AuthProvider';
import { AxiosInterceptorsProvider } from 'app/AppProviders/AxiosInterceptorsProvider';
import { QueryClientProvider } from 'app/AppProviders/QueryClientProvider';
import { StyletronProvider } from 'app/AppProviders/StyletronProvider';
import { ThemeProvider } from 'app/AppProviders/ThemeProvider';

import 'i18n/i18n';

export function AppProviders({ children }) {
  return (
    <QueryClientProvider>
      <HashRouter>
        <StyletronProvider>
          <ThemeProvider>
            <AuthProvider>
              <AxiosInterceptorsProvider>{children}</AxiosInterceptorsProvider>
            </AuthProvider>
          </ThemeProvider>
        </StyletronProvider>
      </HashRouter>
    </QueryClientProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
