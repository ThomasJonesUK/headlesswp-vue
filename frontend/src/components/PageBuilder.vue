<template>
  <div class="page-builder">
    <component
      v-for="(component, index) in components"
      :key="index"
      :is="getComponent(component.componentType)"
      v-bind="getProps(component)"
    />
  </div>
</template>

<script>
import HeroComponent from './HeroComponent.vue'
import TextBlockComponent from './TextBlockComponent.vue'
import ImageGalleryComponent from './ImageGalleryComponent.vue'
import CTAComponent from './CTAComponent.vue'

export default {
  name: 'PageBuilder',
  components: {
    HeroComponent,
    TextBlockComponent,
    ImageGalleryComponent,
    CTAComponent
  },
  props: {
    components: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    getComponent(type) {
      const componentMap = {
        hero: 'HeroComponent',
        text_block: 'TextBlockComponent',
        image_gallery: 'ImageGalleryComponent',
        cta: 'CTAComponent'
      }
      return componentMap[type] || 'div'
    },
    getProps(component) {
      const { componentType } = component
      
      switch (componentType) {
        case 'hero':
          return {
            title: component.heroTitle || '',
            subtitle: component.heroSubtitle || '',
            image: component.heroImage || null
          }
        case 'text_block':
          return {
            content: component.textContent || ''
          }
        case 'image_gallery':
          return {
            images: component.galleryImages || []
          }
        case 'cta':
          return {
            title: component.ctaTitle || '',
            buttonText: component.ctaButtonText || 'Learn More',
            buttonLink: component.ctaButtonLink || '#'
          }
        default:
          return {}
      }
    }
  }
}
</script>

<style scoped>
.page-builder {
  width: 100%;
}
</style>
