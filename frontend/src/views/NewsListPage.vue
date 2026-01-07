<template>
  <div class="news-list">
    <h1>News</h1>
    
    <div v-if="loading" class="loading">Loading news...</div>
    
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <p class="error-hint">Make sure WordPress is running at http://localhost:8080 and WPGraphQL is installed.</p>
    </div>
    
    <div v-else-if="newsItems.length === 0" class="empty">
      <p>No news items found. Create some in WordPress!</p>
    </div>
    
    <div v-else class="news-grid">
      <article 
        v-for="item in newsItems" 
        :key="item.id"
        class="news-card"
      >
        <router-link :to="`/news/${item.slug}`" class="news-link">
          <div 
            v-if="item.featuredImage?.node?.sourceUrl" 
            class="news-image"
            :style="{ backgroundImage: `url(${item.featuredImage.node.sourceUrl})` }"
          ></div>
          <div class="news-content">
            <h2>{{ item.title }}</h2>
            <time :datetime="item.date" class="news-date">
              {{ formatDate(item.date) }}
            </time>
            <div class="news-excerpt" v-html="getExcerpt(item.content)"></div>
            <span class="read-more">Read more →</span>
          </div>
        </router-link>
      </article>
    </div>
  </div>
</template>

<script>
import { fetchNewsItems } from '../services/wordpress'

export default {
  name: 'NewsListPage',
  data() {
    return {
      newsItems: [],
      loading: true,
      error: null
    }
  },
  async mounted() {
    try {
      this.newsItems = await fetchNewsItems()
    } catch (err) {
      this.error = 'Failed to load news items. ' + err.message
    } finally {
      this.loading = false
    }
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString(undefined, options)
    },
    getExcerpt(content) {
      const div = document.createElement('div')
      div.innerHTML = content
      const text = div.textContent || div.innerText || ''
      return text.substring(0, 150) + '...'
    }
  }
}
</script>

<style scoped>
.news-list h1 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
}

.news-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.news-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.news-link {
  text-decoration: none;
  color: inherit;
  display: block;
}

.news-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  background-color: #f0f0f0;
}

.news-content {
  padding: 1.5rem;
}

.news-content h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.news-date {
  display: block;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
}

.news-excerpt {
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
  .news-grid {
    grid-template-columns: 1fr;
  }
}
</style>
