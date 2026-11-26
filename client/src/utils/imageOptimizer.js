/**
 * Dynamic Image Optimizer Utility
 * Automatically optimizes, compresses, and generates responsive srcSets
 * with WebP conversion, auto-scaling, and fallback handling.
 */

const PRODUCTION_DOMAIN = 'https://www.mscharteredengineer.com';

/**
 * Returns an optimized image URL using dynamic CDN image processing
 * @param {string} src - The relative or absolute image path
 * @param {Object} options - Transformation options (width, height, quality, format)
 * @returns {string} - The optimized CDN URL or original path fallback
 */
export function getOptimizedImageUrl(src, { width, height, quality = 80, format = 'webp' } = {}) {
  if (!src) return '';

  // If SVG or data URI, do not transform
  if (src.endsWith('.svg') || src.startsWith('data:')) {
    return src;
  }

  // Check if we are running in production or if an external CDN can fetch the public image
  const isAbsolute = src.startsWith('http://') || src.startsWith('https://');
  const fullUrl = isAbsolute ? src : `${PRODUCTION_DOMAIN}${src.startsWith('/') ? '' : '/'}${src}`;

  // wsrv.nl is a globally distributed, free, production-ready Cloudflare-backed image proxy
  const params = new URLSearchParams();
  params.set('url', fullUrl);
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  if (quality) params.set('q', quality.toString());
  if (format) params.set('output', format);
  params.set('we', '1'); // WebP effort
  params.set('il', '1'); // Interlace / progressive

  // When developing locally without internet or if local origin isn't publicly reachable yet,
  // return the native local asset path while providing fallback
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return src;
  }

  return `https://wsrv.nl/?${params.toString()}`;
}

/**
 * Generates responsive srcset string for multiple screen sizes
 * @param {string} src - Image path
 * @param {number[]} widths - Target widths e.g. [480, 768, 1200]
 * @returns {string} - Generated srcset string
 */
export function generateSrcSet(src, widths = [480, 768, 1200, 1600]) {
  if (!src || src.endsWith('.svg') || src.startsWith('data:')) return '';
  
  if (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')) {
    return '';
  }

  return widths
    .map(w => `${getOptimizedImageUrl(src, { width: w, quality: 80, format: 'webp' })} ${w}w`)
    .join(', ');
}
