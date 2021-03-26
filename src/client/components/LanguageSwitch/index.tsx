import { Button, ButtonGroup, Popover } from "@blueprintjs/core";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const handleLanguageChange = (language: string) => {
    localStorage.setItem("default-language", language);
    i18n.changeLanguage(language);
  };
  return (
    <Popover
      content={
        <ButtonGroup>
          {[
            { code: "en", languageName: "English" },
            { code: "cs", languageName: "Čeština" },
          ].map(({ code, languageName }) => (
            <Button
              key={code}
              onClick={() => handleLanguageChange(code)}
              disabled={i18n.language === code}
            >
              {languageName}
            </Button>
          ))}
        </ButtonGroup>
      }
      placement="bottom"
      isOpen={isVisible}
      onInteraction={setIsVisible}
    >
      <Button icon="globe" minimal />
    </Popover>
  );
};
