// TODO: Using HashRouter instead BrowserRouter to have gh-pages working
import { BaseProvider, DarkTheme, LightTheme } from 'baseui';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import PropTypes from 'prop-types';

import { AuthProvider } from 'app/auth/AuthProvider';
import { AxiosInterceptorsProvider } from 'app/auth/AxiosInterceptorsProvider';

import 'i18n/i18n';

const engine = new Styletron();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

export function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <StyletronProvider value={engine}>
          <BaseProvider theme={DarkTheme}>
            <AuthProvider>
              <AxiosInterceptorsProvider>{children}</AxiosInterceptorsProvider>
            </AuthProvider>
          </BaseProvider>
        </StyletronProvider>
      </HashRouter>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};
