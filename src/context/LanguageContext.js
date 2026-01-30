import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

export const translations = {
  en: {
    // Navbar
    home: 'Home',
    articles: 'Articles',
    about: 'About',
    
    // Home page
    latestArticle: 'Latest Article',
    readArticle: 'Read Article',
    recentArticles: 'Recent Articles',
    exploreLatest: 'Explore the latest writings',
    viewAll: 'View all',
    viewAllArticles: 'View all articles',
    
    // Articles page
    allArticles: 'All Articles',
    articlesDescription: 'Exploring technology, science, and the fascinating world of computing',
    readMore: 'Read article',
    
    // About page
    aboutMe: 'About Me',
    
    // Blog post
    backToArticles: 'Back to articles',
    backToAllArticles: 'Back to all articles',
    
    // Footer
    copyright: '© {year} Ahmet Salih Özmen. All rights reserved.',
    
    // Language
    language: 'EN',
  },
  tr: {
    // Navbar
    home: 'Ana Sayfa',
    articles: 'Yazılar',
    about: 'Hakkımda',
    
    // Home page
    latestArticle: 'Son Yazı',
    readArticle: 'Yazıyı Oku',
    recentArticles: 'Son Yazılar',
    exploreLatest: 'En son yazıları keşfedin',
    viewAll: 'Tümünü gör',
    viewAllArticles: 'Tüm yazıları gör',
    
    // Articles page
    allArticles: 'Tüm Yazılar',
    articlesDescription: 'Teknoloji, bilim ve bilgisayar dünyasını keşfetmek',
    readMore: 'Yazıyı oku',
    
    // About page
    aboutMe: 'Hakkımda',
    
    // Blog post
    backToArticles: 'Yazılara dön',
    backToAllArticles: 'Tüm yazılara dön',
    
    // Footer
    copyright: '© {year} Ahmet Salih Özmen. Tüm hakları saklıdır.',
    
    // Language
    language: 'TR',
  },
};

// Default values for SSR
const defaultLanguage = 'en';
const defaultT = (key) => {
  const translation = translations[defaultLanguage][key];
  if (translation && translation.includes('{year}')) {
    return translation.replace('{year}', new Date().getFullYear());
  }
  return translation || key;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get browser language or saved preference
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
      setLanguage(savedLang);
    } else {
      const browserLang = navigator.language.split('-')[0];
      setLanguage(browserLang === 'tr' ? 'tr' : 'en');
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'tr' : 'en';
    setLanguage(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', newLang);
    }
  };

  const t = (key) => {
    const translation = translations[language][key];
    if (translation && translation.includes('{year}')) {
      return translation.replace('{year}', new Date().getFullYear());
    }
    return translation || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, mounted }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  // Return default values for SSR
  if (!context) {
    return {
      language: defaultLanguage,
      toggleLanguage: () => {},
      t: defaultT,
      mounted: false,
    };
  }
  return context;
};

export default LanguageContext;
