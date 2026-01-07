// Mock data for testing without WordPress
export const mockNewsItems = [
  {
    id: 'news-1',
    title: 'Welcome to Headless WordPress',
    slug: 'welcome-headless-wordpress',
    content: '<p>This is a sample news article demonstrating the headless WordPress + Vue.js integration. The content you see here can be managed entirely from the WordPress admin panel.</p>',
    date: '2024-01-15T10:00:00',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
        altText: 'News Article'
      }
    },
    pageComponents: {
      pageComponents: [
        {
          componentType: 'hero',
          heroTitle: 'Breaking News',
          heroSubtitle: 'Stay informed with the latest updates',
          heroImage: {
            sourceUrl: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200',
            altText: 'Hero Image'
          }
        },
        {
          componentType: 'text_block',
          textContent: '<h2>About This Project</h2><p>This monorepo combines WordPress as a headless CMS with a Vue.js frontend, allowing you to visually build pages using reusable components.</p><p>Features include custom post types, ACF fields, and GraphQL integration.</p>'
        },
        {
          componentType: 'cta',
          ctaTitle: 'Ready to Get Started?',
          ctaButtonText: 'Learn More',
          ctaButtonLink: 'https://github.com/ThomasJonesUK/headlesswp-vue'
        }
      ]
    }
  },
  {
    id: 'news-2',
    title: 'Building Modern Websites',
    slug: 'building-modern-websites',
    content: '<p>Learn how to build modern, fast, and scalable websites using headless architecture.</p>',
    date: '2024-01-14T15:30:00',
    featuredImage: {
      node: {
        sourceUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
        altText: 'Modern Websites'
      }
    },
    pageComponents: {
      pageComponents: [
        {
          componentType: 'text_block',
          textContent: '<h2>Modern Web Development</h2><p>Headless architecture provides flexibility and performance. With WordPress handling content and Vue.js handling presentation, you get the best of both worlds.</p>'
        }
      ]
    }
  }
]

export const mockColours = [
  {
    id: 'colour-1',
    title: 'Ocean Blue',
    slug: 'ocean-blue',
    content: '<p>A deep, calming blue that evokes the serenity of the ocean.</p>',
    date: '2024-01-15T12:00:00',
    hexValue: '#0077BE',
    colourDescription: 'Ocean Blue is perfect for creating a sense of trust and professionalism in your designs.',
    featuredImage: null,
    pageComponents: {
      pageComponents: [
        {
          componentType: 'hero',
          heroTitle: 'Ocean Blue',
          heroSubtitle: 'The Color of Trust',
          heroImage: null
        },
        {
          componentType: 'text_block',
          textContent: '<h2>Color Psychology</h2><p>Blue is associated with depth, stability, and confidence. It is widely used in corporate branding and web design.</p>'
        }
      ]
    }
  },
  {
    id: 'colour-2',
    title: 'Sunset Orange',
    slug: 'sunset-orange',
    content: '<p>A vibrant orange reminiscent of beautiful sunsets.</p>',
    date: '2024-01-14T14:00:00',
    hexValue: '#FF6B35',
    colourDescription: 'Sunset Orange brings energy and warmth to any design palette.',
    featuredImage: null,
    pageComponents: {
      pageComponents: [
        {
          componentType: 'text_block',
          textContent: '<h2>Energetic and Bold</h2><p>Orange combines the energy of red and the happiness of yellow. It represents enthusiasm, creativity, and determination.</p>'
        }
      ]
    }
  },
  {
    id: 'colour-3',
    title: 'Forest Green',
    slug: 'forest-green',
    content: '<p>A rich green that captures the essence of nature.</p>',
    date: '2024-01-13T11:00:00',
    hexValue: '#2D5016',
    colourDescription: 'Forest Green symbolizes growth, harmony, and environmental awareness.',
    featuredImage: null,
    pageComponents: {
      pageComponents: []
    }
  }
]
