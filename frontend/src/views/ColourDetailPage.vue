<template>
  <div class="colour-detail">
    <div v-if="loading" class="loading">Loading...</div>
    
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <router-link to="/colours" class="back-link">← Back to Colours</router-link>
    </div>
    
    <article v-else-if="colour">
      <header class="article-header">
        <router-link to="/colours" class="back-link">← Back to Colours</router-link>
        <h1>{{ colour.title }}</h1>
      </header>
      
      <div class="colour-hero">
        <div 
          class="colour-swatch-large"
          :style="{ backgroundColor: colour.hexValue || '#cccccc' }"
        >
          <div class="hex-display">{{ colour.hexValue || '#cccccc' }}</div>
        </div>
      </div>
      
      <div class="colour-info">
        <h2>Details</h2>
        <dl class="info-list">
          <dt>Hex Code:</dt>
          <dd>{{ colour.hexValue || '#cccccc' }}</dd>
          
          <dt>RGB:</dt>
          <dd>{{ hexToRgb(colour.hexValue || '#cccccc') }}</dd>
          
          <dt v-if="colour.colourDescription">Description:</dt>
          <dd v-if="colour.colourDescription">{{ colour.colourDescription }}</dd>
        </dl>
      </div>
      
      <div v-if="colour.content" class="article-content" v-html="colour.content"></div>
      
      <PageBuilder 
        v-if="colour.pageComponents?.pageComponents"
        :components="colour.pageComponents.pageComponents"
      />
    </article>
  </div>
</template>

<script>
import { fetchColour } from '../services/wordpress'
import PageBuilder from '../components/PageBuilder.vue'

export default {
  name: 'ColourDetailPage',
  components: {
    PageBuilder
  },
  data() {
    return {
      colour: null,
      loading: true,
      error: null
    }
  },
  async mounted() {
    await this.loadColour()
  },
  methods: {
    async loadColour() {
      try {
        const slug = this.$route.params.slug
        this.colour = await fetchColour(slug)
      } catch (err) {
        this.error = 'Failed to load colour. ' + err.message
      } finally {
        this.loading = false
      }
    },
    hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
        : 'N/A'
    }
  },
  watch: {
    '$route.params.slug': 'loadColour'
  }
}
</script>

<style scoped>
.colour-detail {
  max-width: 900px;
  margin: 0 auto;
}

.article-header {
  margin-bottom: 2rem;
}

.back-link {
  display: inline-block;
  margin-bottom: 1rem;
  color: #42b983;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}

.article-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
  line-height: 1.2;
}

.colour-hero {
  margin-bottom: 2rem;
}

.colour-swatch-large {
  height: 300px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
}

.hex-display {
  font-size: 2.5rem;
  font-weight: bold;
  font-family: monospace;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.3);
  padding: 1rem 2rem;
  border-radius: 8px;
}

.colour-info {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
}

.colour-info h2 {
  margin-bottom: 1rem;
}

.info-list {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 1rem;
  line-height: 1.8;
}

.info-list dt {
  font-weight: bold;
  color: #666;
}

.info-list dd {
  color: #333;
}

.article-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  line-height: 1.8;
}

@media (max-width: 768px) {
  .article-header h1 {
    font-size: 2rem;
  }
  
  .colour-swatch-large {
    height: 200px;
  }
  
  .hex-display {
    font-size: 1.5rem;
  }
  
  .info-list {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
}
</style>
