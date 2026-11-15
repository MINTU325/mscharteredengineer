import React, { useRef, useState, useEffect } from 'react';

export default function LazySection({ children, minHeight = '300px' }) {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '250px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && typeof window !== 'undefined' && window.AOS) {
      const timer = setTimeout(() => {
        window.AOS.refresh();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div 
      ref={containerRef} 
      className={isVisible ? 'lazy-section-revealed' : ''}
      style={{ minHeight: isVisible ? 'auto' : minHeight }}
    >
      {isVisible ? children : null}
    </div>
  );
}
