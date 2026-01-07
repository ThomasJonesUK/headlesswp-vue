<template>
  <div id="app">
    <header class="header">
      <nav class="nav">
        <router-link to="/" class="logo">Headless WP + Vue</router-link>
        <div class="nav-links">
          <router-link to="/news">News</router-link>
          <router-link to="/colours">Colours</router-link>
        </div>
      </nav>
    </header>
    <main class="main">
      <router-view />
    </main>
    <footer class="footer">
      <p>&copy; 2024 Headless WordPress + Vue.js</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.header {
  background: #2c3e50;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  opacity: 0.8;
  text-decoration: underline;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 200px);
}

.footer {
  background: #2c3e50;
  color: white;
  text-align: center;
  padding: 2rem 0;
  margin-top: 4rem;
}
</style>
