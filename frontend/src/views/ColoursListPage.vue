<template>
  <div class="colours-list">
    <h1>Colours</h1>
    
    <div v-if="loading" class="loading">Loading colours...</div>
    
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <p class="error-hint">Make sure WordPress is running at http://localhost:8080 and WPGraphQL is installed.</p>
    </div>
    
    <div v-else-if="colours.length === 0" class="empty">
      <p>No colours found. Create some in WordPress!</p>
    </div>
    
    <div v-else class="colours-grid">
      <article 
        v-for="colour in colours" 
        :key="colour.id"
        class="colour-card"
      >
        <router-link :to="`/colours/${colour.slug}`" class="colour-link">
          <div 
            class="colour-swatch"
            :style="{ backgroundColor: colour.hexValue || '#cccccc' }"
          ></div>
          <div class="colour-content">
            <h2>{{ colour.title }}</h2>
            <div class="colour-hex">{{ colour.hexValue || '#cccccc' }}</div>
            <p v-if="colour.colourDescription" class="colour-description">
              {{ truncate(colour.colourDescription, 100) }}
            </p>
            <span class="read-more">View details →</span>
          </div>
        </router-link>
      </article>
    </div>
  </div>
</template>

<script>
import { fetchColours } from '../services/wordpress'

export default {
  name: 'ColoursListPage',
  data() {
    return {
      colours: [],
      loading: true,
      error: null
    }
  },
  async mounted() {
    try {
      this.colours = await fetchColours()
    } catch (err) {
      this.error = 'Failed to load colours. ' + err.message
    } finally {
      this.loading = false
    }
  },
  methods: {
    truncate(text, length) {
      if (!text) return ''
      return text.length > length ? text.substring(0, length) + '...' : text
    }
  }
}
</script>

<style scoped>
.colours-list h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.colours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.colour-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.colour-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.colour-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.colour-swatch {
  height: 200px;
  border-bottom: 3px solid rgba(0, 0, 0, 0.1);
}

.colour-content {
  padding: 1.5rem;
}

.colour-content h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.colour-hex {
  font-family: monospace;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 1rem;
  font-weight: bold;
}

.colour-description {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.read-more {
  color: #42b983;
  font-weight: bold;
}

.empty {
  text-align: center;
  padding: 3rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.error-hint {
  font-size: 0.9rem;
  margin-top: 0.5rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .colours-grid {
    grid-template-columns: 1fr;
  }
}
</style>
