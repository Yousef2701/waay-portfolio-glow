
import { useLanguageContext } from '@/contexts/LanguageContext';

export const useLanguage = () => {
  const { language, setLanguage } = useLanguageContext();

  // Removed language toggle and direction change
  return {
    language,
    setLanguage
  };
};
