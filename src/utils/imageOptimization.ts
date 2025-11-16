/**
 * Image optimization utilities for F1 Showcase
 */

/**
 * Lazy loading intersection observer
 */
export function createLazyImageObserver(callback: (entry: IntersectionObserverEntry) => void): IntersectionObserver {
  const options = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
  }

  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback(entry)
      }
    })
  }, options)
}

/**
 * Image error handling with fallbacks
 */
export function handleImageError(event: Event, fallbackUrl?: string): void {
  const img = event.target as HTMLImageElement

  if (fallbackUrl && img.src !== fallbackUrl) {
    img.src = fallbackUrl
  } else {
    // Set a default placeholder
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='
  }
}