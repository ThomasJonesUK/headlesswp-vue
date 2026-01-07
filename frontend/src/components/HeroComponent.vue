<template>
  <div class="hero" :style="{ backgroundImage: backgroundImage }">
    <div class="hero-overlay">
      <div class="hero-content">
        <h1 class="hero-title">{{ title }}</h1>
        <p v-if="subtitle" class="hero-subtitle">{{ subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    image: {
      type: Object,
      default: null
    }
  },
  computed: {
    backgroundImage() {
      if (this.image && this.image.sourceUrl) {
        return `url(${this.image.sourceUrl})`
      }
      return 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  text-align: center;
  color: white;
  padding: 2rem;
  max-width: 800px;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

@media (max-width: 768px) {
  .hero {
    min-height: 300px;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>
