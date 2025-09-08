import { ref, onMounted, onUnmounted } from 'vue'
import { createLazyImageObserver, handleImageError } from '@/utils/imageOptimization'

export function useImageOptimization() {
  const observer = ref<IntersectionObserver | null>(null)
  const loadedImages = ref(new Set<string>())

  onMounted(() => {
    observer.value = createLazyImageObserver((entry) => {
      const img = entry.target as HTMLImageElement
      const src = img.dataset.src
      
      if (src && !loadedImages.value.has(src)) {
        img.src = src
        loadedImages.value.add(src)
        observer.value?.unobserve(img)
      }
    })
  })

  onUnmounted(() => {
    observer.value?.disconnect()
  })

  const observeImage = (element: HTMLImageElement) => {
    observer.value?.observe(element)
  }

  const handleError = (event: Event, fallback?: string) => {
    handleImageError(event, fallback)
  }

  return {
    observeImage,
    handleError,
    loadedImages: loadedImages.value
  }
}