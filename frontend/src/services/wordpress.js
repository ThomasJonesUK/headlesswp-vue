import { GraphQLClient } from 'graphql-request'
import { mockNewsItems, mockColours } from './mockData'

const endpoint = 'http://localhost:8080/graphql'

export const client = new GraphQLClient(endpoint, {
  headers: {},
})

// Flag to use mock data when WordPress is not available
const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true'

// Queries
export const GET_NEWS_ITEMS = `
  query GetNewsItems {
    newsItems {
      nodes {
        id
        title
        content
        slug
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        pageComponents {
          pageComponents {
            componentType
            heroTitle
            heroSubtitle
            heroImage {
              sourceUrl
              altText
            }
            textContent
            galleryImages {
              sourceUrl
              altText
            }
            ctaTitle
            ctaButtonText
            ctaButtonLink
          }
        }
      }
    }
  }
`

export const GET_NEWS_ITEM = `
  query GetNewsItem($id: ID!) {
    newsItem(id: $id, idType: SLUG) {
      id
      title
      content
      slug
      date
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      pageComponents {
        pageComponents {
          componentType
          heroTitle
          heroSubtitle
          heroImage {
            sourceUrl
            altText
          }
          textContent
          galleryImages {
            sourceUrl
            altText
          }
          ctaTitle
          ctaButtonText
          ctaButtonLink
        }
      }
    }
  }
`

export const GET_COLOURS = `
  query GetColours {
    colours {
      nodes {
        id
        title
        content
        slug
        date
        hexValue
        colourDescription
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        pageComponents {
          pageComponents {
            componentType
            heroTitle
            heroSubtitle
            heroImage {
              sourceUrl
              altText
            }
            textContent
            galleryImages {
              sourceUrl
              altText
            }
            ctaTitle
            ctaButtonText
            ctaButtonLink
          }
        }
      }
    }
  }
`

export const GET_COLOUR = `
  query GetColour($id: ID!) {
    colour(id: $id, idType: SLUG) {
      id
      title
      content
      slug
      date
      hexValue
      colourDescription
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      pageComponents {
        pageComponents {
          componentType
          heroTitle
          heroSubtitle
          heroImage {
            sourceUrl
            altText
          }
          textContent
          galleryImages {
            sourceUrl
            altText
          }
          ctaTitle
          ctaButtonText
          ctaButtonLink
        }
      }
    }
  }
`

// API functions
export async function fetchNewsItems() {
  if (USE_MOCK_DATA) {
    console.log('Using mock data for news items')
    return mockNewsItems
  }
  
  try {
    const data = await client.request(GET_NEWS_ITEMS)
    return data.newsItems.nodes
  } catch (error) {
    console.error('Error fetching news items:', error)
    console.log('Falling back to mock data')
    return mockNewsItems
  }
}

export async function fetchNewsItem(slug) {
  if (USE_MOCK_DATA) {
    console.log('Using mock data for news item:', slug)
    return mockNewsItems.find(item => item.slug === slug) || null
  }
  
  try {
    const data = await client.request(GET_NEWS_ITEM, { id: slug })
    return data.newsItem
  } catch (error) {
    console.error('Error fetching news item:', error)
    console.log('Falling back to mock data')
    return mockNewsItems.find(item => item.slug === slug) || null
  }
}

export async function fetchColours() {
  if (USE_MOCK_DATA) {
    console.log('Using mock data for colours')
    return mockColours
  }
  
  try {
    const data = await client.request(GET_COLOURS)
    return data.colours.nodes
  } catch (error) {
    console.error('Error fetching colours:', error)
    console.log('Falling back to mock data')
    return mockColours
  }
}

export async function fetchColour(slug) {
  if (USE_MOCK_DATA) {
    console.log('Using mock data for colour:', slug)
    return mockColours.find(colour => colour.slug === slug) || null
  }
  
  try {
    const data = await client.request(GET_COLOUR, { id: slug })
    return data.colour
  } catch (error) {
    console.error('Error fetching colour:', error)
    console.log('Falling back to mock data')
    return mockColours.find(colour => colour.slug === slug) || null
  }
}
