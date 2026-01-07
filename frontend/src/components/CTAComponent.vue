<template>
  <div class="cta">
    <div class="cta-content">
      <h2 class="cta-title">{{ title }}</h2>
      <a 
        v-if="buttonLink" 
        :href="buttonLink" 
        class="cta-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {{ buttonText }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTAComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.cta {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  text-align: center;
  color: white;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: white;
}

.cta-button {
  display: inline-block;
  padding: 1rem 2rem;
  background: white;
  color: #667eea;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  text-decoration: none;
}
</style>
