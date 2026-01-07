<template>
  <div class="news-detail">
    <div v-if="loading" class="loading">Loading...</div>
    
    <div v-else-if="error" class="error">
      <p>{{ error }}</p>
      <router-link to="/news" class="back-link">← Back to News</router-link>
    </div>
    
    <article v-else-if="newsItem">
      <header class="article-header">
        <router-link to="/news" class="back-link">← Back to News</router-link>
        <h1>{{ newsItem.title }}</h1>
        <time :datetime="newsItem.date" class="article-date">
          {{ formatDate(newsItem.date) }}
        </time>
      </header>
      
      <div 
        v-if="newsItem.featuredImage?.node?.sourceUrl" 
        class="featured-image"
        :style="{ backgroundImage: `url(${newsItem.featuredImage.node.sourceUrl})` }"
      ></div>
      
      <div class="article-content" v-html="newsItem.content"></div>
      
      <PageBuilder 
        v-if="newsItem.pageComponents?.pageComponents"
        :components="newsItem.pageComponents.pageComponents"
      />
    </article>
  </div>
</template>

<script>
import { fetchNewsItem } from '../services/wordpress'
import PageBuilder from '../components/PageBuilder.vue'

export default {
  name: 'NewsDetailPage',
  components: {
    PageBuilder
  },
  data() {
    return {
      newsItem: null,
      loading: true,
      error: null
    }
  },
  async mounted() {
    await this.loadNewsItem()
  },
  methods: {
    async loadNewsItem() {
      try {
        const slug = this.$route.params.slug
        this.newsItem = await fetchNewsItem(slug)
      } catch (err) {
        this.error = 'Failed to load news item. ' + err.message
      } finally {
        this.loading = false
      }
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(dateString).toLocaleDateString(undefined, options)
    }
  },
  watch: {
    '$route.params.slug': 'loadNewsItem'
  }
}
</script>

<style scoped>
.news-detail {
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

.article-date {
  font-size: 1rem;
  color: #666;
}

.featured-image {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.article-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  line-height: 1.8;
}

.article-content :deep(h2) {
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.article-content :deep(p) {
  margin-bottom: 1rem;
}

.article-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .article-header h1 {
    font-size: 2rem;
  }
  
  .featured-image {
    height: 250px;
  }
}
</style>
