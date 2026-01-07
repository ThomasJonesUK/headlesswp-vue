<template>
  <div class="image-gallery">
    <div class="gallery-grid">
      <div 
        v-for="(image, index) in images" 
        :key="index" 
        class="gallery-item"
        @click="openLightbox(index)"
      >
        <img 
          :src="image.sourceUrl" 
          :alt="image.altText || 'Gallery image'" 
          loading="lazy"
        />
      </div>
    </div>
    
    <!-- Simple lightbox -->
    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <span class="close">&times;</span>
      <img 
        class="lightbox-content" 
        :src="images[currentImageIndex]?.sourceUrl" 
        :alt="images[currentImageIndex]?.altText"
      />
      <button 
        v-if="currentImageIndex > 0" 
        class="prev" 
        @click.stop="prevImage"
      >
        &#10094;
      </button>
      <button 
        v-if="currentImageIndex < images.length - 1" 
        class="next" 
        @click.stop="nextImage"
      >
        &#10095;
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageGalleryComponent',
  props: {
    images: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      lightboxOpen: false,
      currentImageIndex: 0
    }
  },
  methods: {
    openLightbox(index) {
      this.currentImageIndex = index
      this.lightboxOpen = true
      // Add keyboard listener when lightbox opens
      document.addEventListener('keydown', this.handleKeyPress)
    },
    closeLightbox() {
      this.lightboxOpen = false
      // Remove keyboard listener when lightbox closes
      document.removeEventListener('keydown', this.handleKeyPress)
    },
    nextImage() {
      if (this.currentImageIndex < this.images.length - 1) {
        this.currentImageIndex++
      }
    },
    prevImage() {
      if (this.currentImageIndex > 0) {
        this.currentImageIndex--
      }
    },
    handleKeyPress(event) {
      switch(event.key) {
        case 'Escape':
          this.closeLightbox()
          break
        case 'ArrowLeft':
          this.prevImage()
          break
        case 'ArrowRight':
          this.nextImage()
          break
      }
    }
  },
  beforeUnmount() {
    // Clean up keyboard listener if component is destroyed while lightbox is open
    document.removeEventListener('keydown', this.handleKeyPress)
  }
}
</script>

<style scoped>
.image-gallery {
  margin-bottom: 2rem;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  aspect-ratio: 1;
  background: #f0f0f0;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.lightbox {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
}

.lightbox-content {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
}

.close {
  position: absolute;
  top: 20px;
  right: 40px;
  color: white;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover {
  color: #ccc;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  color: white;
  border: none;
  font-size: 30px;
  padding: 16px;
  cursor: pointer;
  border-radius: 4px;
}

.prev {
  left: 20px;
}

.next {
  right: 20px;
}

.prev:hover,
.next:hover {
  background: rgba(255, 255, 255, 0.5);
}
</style>
