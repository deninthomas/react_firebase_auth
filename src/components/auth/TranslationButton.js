
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';


const TranslationButton = () => {
  // const { i18n } = useTranslation();

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };


  const {  i18n: {changeLanguage, language} } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language)
  

  const toggleLanguage = () => {
    // const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <Button  onClick={toggleLanguage} variant="ghost" position="fixed" top={4} right={4}>
      Translate 
      {/* {i18n.language.toUpperCase()} */}
    </Button>
  );
};

export default TranslationButton;
