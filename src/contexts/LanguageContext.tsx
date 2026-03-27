import React, { createContext, useContext, useState } from 'react';
import { translations, Language } from '../i18n/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  translateValue: (val: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    return value || key;
  };

  const translateValue = (val: string) => {
    if (language === 'zh') return val;
    return val
      .replace('寸', ' inch')
      .replace('个 (可定制)', ' (Customizable)')
      .replace('单缸', 'Single cylinder ')
      .replace('双缸', 'Double cylinder ')
      .replace('风冷', 'Air cooling')
      .replace('1g左右', 'Around 1g')
      .replace('安卓', 'Android ');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translateValue }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

