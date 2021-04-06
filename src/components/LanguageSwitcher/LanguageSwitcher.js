import { useTranslation } from 'react-i18next';

import { Button, KIND, SHAPE, SIZE } from 'baseui/button';
import { ButtonGroup } from 'baseui/button-group';

import { LANGUAGES } from 'constants';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <ButtonGroup
      selected={i18n.language === LANGUAGES.RU ? 0 : 1}
      size={SIZE.compact}
      kind={KIND.primary}
      shape={SHAPE.square}
    >
      <Button onClick={() => changeLanguage(LANGUAGES.RU)}>{LANGUAGES.RU}</Button>
      <Button onClick={() => changeLanguage(LANGUAGES.EN)}>{LANGUAGES.EN}</Button>
    </ButtonGroup>
  );

  function changeLanguage(lng) {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }
}
