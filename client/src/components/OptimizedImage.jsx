import React, { useState } from 'react';
import { getOptimizedImageUrl, generateSrcSet } from '../utils/imageOptimizer';

export default function OptimizedImage({
  src,
  alt = 'KS Chartered Engineers Asset',
  className = '',
  style = {},
  width,
  height,
  priority = false, // True for Above-The-Fold hero banners
  quality = 80,
  fallback = '/seo/chartered-engineer-jaipur.jpg',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 1200px',
  objectFit = 'cover',
  ...props
}) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const finalSrc = error ? fallback : (src || fallback);
  const optimizedSrc = getOptimizedImageUrl(finalSrc, { width, height, quality, format: 'webp' });
  const srcSet = generateSrcSet(finalSrc);

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: style.width || '100%',
        height: style.height || '100%',
        display: style.display || 'block',
        backgroundColor: loaded ? 'transparent' : 'rgba(15, 23, 42, 0.25)',
        ...style
      }}
      className={`optimized-image-wrapper ${className}`}
    >
      {/* Skeleton Pulse while loading */}
      {!loaded && !error && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 75%)',
            backgroundSize: '200% 100%',
            animation: 'skeletonPulse 1.5s infinite linear',
            zIndex: 1
          }}
        />
      )}

      {/* Main Responsive Image */}
      <img
        src={optimizedSrc}
        srcSet={srcSet || undefined}
        sizes={srcSet ? sizes : undefined}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setError(true);
          setLoaded(true);
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: objectFit,
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.35s ease-in-out, transform 0.4s ease-out',
          display: 'block'
        }}
        {...props}
      />
    </div>
  );
}
