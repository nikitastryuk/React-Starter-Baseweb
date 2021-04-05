import { THEMES } from 'app/AppProviders/ThemeProvider';
import { useTheme } from 'hooks/useTheme';

import { Button, KIND, SHAPE, SIZE } from 'baseui/button';
import { styled } from 'baseui';

const StyledThemeSwitcher = styled('div', ({ $theme }) => ({
  marginTop: $theme.sizing.scale300,
}));

const StyledDarkThemeButton = styled(Button, ({ $theme }) => ({
  marginLeft: $theme.sizing.scale300,
}));

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <StyledThemeSwitcher>
      <Button
        kind={theme === THEMES.LIGHT ? KIND.secondary : KIND.primary}
        size={SIZE.compact}
        shape={SHAPE.square}
        onClick={() => setTheme(THEMES.LIGHT)}
      />
      <StyledDarkThemeButton
        kind={theme === THEMES.DARK ? KIND.secondary : KIND.primary}
        size={SIZE.compact}
        shape={SHAPE.square}
        onClick={() => setTheme(THEMES.DARK)}
      />
    </StyledThemeSwitcher>
  );
}
