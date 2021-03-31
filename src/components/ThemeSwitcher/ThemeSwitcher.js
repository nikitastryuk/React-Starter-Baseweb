import { THEMES } from 'app/AppProviders/ThemeProvider';
import { useTheme } from 'hooks/useTheme';

import { Button, KIND, SHAPE, SIZE } from 'baseui/button';
import { styled } from 'baseui';

const StyledThemeSwitcher = styled('div', ({ $theme }) => ({
  marginTop: $theme.sizing.scale300,
}));

const StyledLightThemeButton = styled(Button, ({ $theme }) => ({
  marginRight: $theme.sizing.scale300,
}));

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <StyledThemeSwitcher>
      <StyledLightThemeButton
        kind={theme === THEMES.LIGHT ? KIND.secondary : KIND.primary}
        size={SIZE.compact}
        shape={SHAPE.square}
        onClick={() => setTheme(THEMES.LIGHT)}
      />
      <Button
        kind={theme === THEMES.DARK ? KIND.secondary : KIND.primary}
        size={SIZE.compact}
        shape={SHAPE.square}
        onClick={() => setTheme(THEMES.DARK)}
      />
    </StyledThemeSwitcher>
  );
}
