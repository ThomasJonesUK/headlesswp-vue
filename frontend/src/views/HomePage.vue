<template>
  <div class="home">
    <div class="hero-section">
      <h1>Welcome to Headless WordPress + Vue</h1>
      <p>A modern monorepo setup with headless WordPress CMS and Vue.js frontend</p>
    </div>
    
    <div class="features">
      <div class="feature-card">
        <h2>📰 News</h2>
        <p>Dynamic news articles with custom page builder components</p>
        <router-link to="/news" class="feature-link">View News →</router-link>
      </div>
      
      <div class="feature-card">
        <h2>🎨 Colours</h2>
        <p>Explore our colour collection with detailed information</p>
        <router-link to="/colours" class="feature-link">View Colours →</router-link>
      </div>
    </div>
    
    <div class="info-section">
      <h2>How It Works</h2>
      <div class="steps">
        <div class="step">
          <h3>1. WordPress Backend</h3>
          <p>Manage content in WordPress with custom post types and ACF fields</p>
        </div>
        <div class="step">
          <h3>2. GraphQL API</h3>
          <p>Content is exposed via WPGraphQL for efficient querying</p>
        </div>
        <div class="step">
          <h3>3. Vue Frontend</h3>
          <p>Dynamic Vue components render the content beautifully</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: white;
  margin-bottom: 3rem;
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: white;
}

.hero-section p {
  font-size: 1.5rem;
  opacity: 0.9;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.feature-card h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-link {
  display: inline-block;
  margin-top: 1rem;
  color: #667eea;
  font-weight: bold;
}

.info-section {
  background: white;
  padding: 3rem 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.info-section h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.step {
  text-align: center;
  padding: 1.5rem;
}

.step h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #667eea;
}

@media (max-width: 768px) {
  .hero-section h1 {
    font-size: 2rem;
  }
  
  .hero-section p {
    font-size: 1.2rem;
  }
}
</style>
