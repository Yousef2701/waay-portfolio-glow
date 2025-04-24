
import { useLanguageContext } from '@/contexts/LanguageContext';
import { useEffect } from 'react';

export const useLanguage = () => {
  const { language, setLanguage } = useLanguageContext();

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
    document.documentElement.dir = language === 'en' ? 'rtl' : 'ltr';
  };

  return {
    language,
    setLanguage,
    toggleLanguage,
  };
};
