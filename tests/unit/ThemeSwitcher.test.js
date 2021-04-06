import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { THEMES } from 'app/AppProviders/ThemeProvider';
import { ThemeSwitcher } from 'components/ThemeSwitcher/ThemeSwitcher';

const mockedSetTheme = jest.fn();

jest.mock('hooks/useTheme', () => ({
  useTheme: () => {
    return {
      setTheme: mockedSetTheme,
    };
  },
}));

describe('<ThemeSwitcher />', () => {
  it('should change theme to light', async () => {
    const { getByTestId } = render(<ThemeSwitcher />);
    const button = getByTestId('light-theme-button');
    userEvent.click(button);
    expect(mockedSetTheme).toBeCalledWith(THEMES.LIGHT);
  });
  it('should change theme to dark', async () => {
    const { getByTestId } = render(<ThemeSwitcher />);
    const button = getByTestId('dark-theme-button');
    userEvent.click(button);
    expect(mockedSetTheme).toBeCalledWith(THEMES.DARK);
  });
});
