
import { useLanguageContext } from '@/contexts/LanguageContext';

export const useLanguage = () => {
  const { language, setLanguage } = useLanguageContext();

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
