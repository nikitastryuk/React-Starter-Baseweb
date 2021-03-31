import { THEMES } from 'app/AppProviders/ThemeProvider';
import { useTheme } from 'hooks/useTheme';

import { Button, KIND, SHAPE, SIZE } from 'baseui/button';
import { styled } from 'baseui';

const StyledLightThemeButton = styled(Button, ({ $theme }) => ({
  marginRight: $theme.sizing.scale100,
}));

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <StyledLightThemeButton
        style={{ marginRight: 8 }}
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
    </div>
  );
}
