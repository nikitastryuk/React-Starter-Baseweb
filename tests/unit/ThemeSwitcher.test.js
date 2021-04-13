import { render, screen } from '@testing-library/react';
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
    render(<ThemeSwitcher />);
    const button = screen.getByTestId('light-theme-button');
    userEvent.click(button);
    expect(mockedSetTheme).toBeCalledWith(THEMES.LIGHT);
  });
  it('should change theme to dark', async () => {
    render(<ThemeSwitcher />);
    const button = screen.getByTestId('dark-theme-button');
    userEvent.click(button);
    expect(mockedSetTheme).toBeCalledWith(THEMES.DARK);
  });
});
