import React, { useState, useEffect } from 'react';
import { Globe, Languages } from 'lucide-react';

const loadGoogleTranslateScript = (onLoaded) => {
  if (window.google && window.google.translate) {
    if (onLoaded) onLoaded();
    return;
  }

  window.googleTranslateElementInit = function() {
    try {
      new window.google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,hi',
        autoDisplay: false
      }, 'google_translate_element');
    } catch (e) {
      console.warn('Translate element init warning', e);
    }
    if (onLoaded) setTimeout(onLoaded, 150);
  };

  if (!document.getElementById('google-translate-script')) {
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }
};

export default function LanguageToggle({ isMobile = false, onToggleCallback }) {
  const [currentLang, setCurrentLang] = useState('en');

  // Check language state on mount
  useEffect(() => {
    const cookies = document.cookie;
    const isHindi = cookies.includes('googtrans=/en/hi') || localStorage.getItem('site_lang') === 'hi';
    setCurrentLang(isHindi ? 'hi' : 'en');

    // If already in Hindi, load translate script lazily after page is interactive
    if (isHindi) {
      const timer = setTimeout(() => {
        loadGoogleTranslateScript();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang = currentLang === 'en' ? 'hi' : 'en';

    // Update state and storage
    setCurrentLang(nextLang);
    localStorage.setItem('site_lang', nextLang);

    // Set Google Translate cookie
    const hostname = window.location.hostname;
    const cookieVal = nextLang === 'hi' ? '/en/hi' : '/en/en';

    document.cookie = `googtrans=${cookieVal}; path=/;`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${hostname};`;
    
    if (hostname.includes('.')) {
      const parts = hostname.split('.');
      if (parts.length >= 2) {
        const rootDomain = parts.slice(-2).join('.');
        document.cookie = `googtrans=${cookieVal}; path=/; domain=.${rootDomain};`;
      }
    }

    // Instantly suppress any injected banner frame and body top displacement
    const suppressBanner = () => {
      if (document.body) {
        document.body.style.setProperty('top', '0px', 'important');
      }
      const banners = document.querySelectorAll(
        'iframe.skiptranslate, .goog-te-banner-frame, [class*="VIpgJd"], iframe[id*=":1.container"], iframe[id*=":2.container"]'
      );
      banners.forEach((b) => {
        b.style.setProperty('display', 'none', 'important');
        b.style.setProperty('visibility', 'hidden', 'important');
        b.style.setProperty('height', '0px', 'important');
        b.style.setProperty('opacity', '0', 'important');
      });
    };

    // If switching to Hindi, ensure script is loaded and trigger select
    if (nextLang === 'hi') {
      loadGoogleTranslateScript(() => {
        const select = document.querySelector('.goog-te-combo');
        if (select) {
          select.value = 'hi';
          select.dispatchEvent(new Event('change'));
        }
        setTimeout(suppressBanner, 50);
        setTimeout(suppressBanner, 250);
        setTimeout(suppressBanner, 600);
      });
    } else {
      // If switching back to English, clear cookies and reload cleanly
      document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${hostname};`;
      setTimeout(() => {
        window.location.reload();
      }, 100);
      return;
    }

    if (onToggleCallback) {
      onToggleCallback(nextLang);
    }
  };

  if (isMobile) {
    return (
      <button
        onClick={toggleLanguage}
        className="mobile-lang-btn"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          width: '100%',
          padding: '12px 16px',
          borderRadius: '12px',
          background: currentLang === 'hi' 
            ? 'linear-gradient(135deg, rgba(217, 119, 6, 0.2) 0%, rgba(180, 83, 9, 0.15) 100%)' 
            : 'rgba(255, 255, 255, 0.06)',
          border: currentLang === 'hi' ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.12)',
          color: currentLang === 'hi' ? '#fbbf24' : '#e2e8f0',
          fontSize: '0.92rem',
          fontWeight: 700,
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          marginBottom: '10px'
        }}
        aria-label="Change website language between English and Hindi"
      >
        <Languages size={18} color={currentLang === 'hi' ? '#fbbf24' : '#38bdf8'} />
        <span>
          {currentLang === 'hi' ? 'Language: हिन्दी (Click for English)' : 'वेबसाइट हिन्दी में देखें (Switch to Hindi)'}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="nav-lang-toggle"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '7px 14px',
        borderRadius: '9999px',
        background: currentLang === 'hi'
          ? 'linear-gradient(135deg, rgba(217, 119, 6, 0.25) 0%, rgba(180, 83, 9, 0.2) 100%)'
          : 'rgba(255, 255, 255, 0.07)',
        border: currentLang === 'hi' ? '1.5px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.18)',
        color: currentLang === 'hi' ? '#fbbf24' : '#e2e8f0',
        fontSize: '0.84rem',
        fontWeight: 700,
        cursor: 'pointer',
        boxShadow: currentLang === 'hi' ? '0 0 12px rgba(245, 158, 11, 0.25)' : 'none',
        transition: 'all 0.25s ease'
      }}
      title={currentLang === 'hi' ? 'Click to switch back to English' : 'पूरी वेबसाइट को हिन्दी में देखने के लिए क्लिक करें'}
      aria-label="Toggle language English / Hindi"
    >
      <Languages size={15} color={currentLang === 'hi' ? '#fbbf24' : '#38bdf8'} />
      <span>{currentLang === 'hi' ? 'English' : 'हिन्दी'}</span>
    </button>
  );
}
