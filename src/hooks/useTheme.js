import { useContext } from 'react';

import { ThemeContext } from 'app/AppProviders/ThemeProvider';

export function useTheme() {
  return useContext(ThemeContext);
}
