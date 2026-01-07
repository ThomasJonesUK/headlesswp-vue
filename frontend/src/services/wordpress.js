import { GraphQLClient } from 'graphql-request'

const endpoint = 'http://localhost:8080/graphql'

export const client = new GraphQLClient(endpoint, {
  headers: {},
})

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
  try {
    const data = await client.request(GET_NEWS_ITEMS)
    return data.newsItems.nodes
  } catch (error) {
    console.error('Error fetching news items:', error)
    throw error
  }
}

export async function fetchNewsItem(slug) {
  try {
    const data = await client.request(GET_NEWS_ITEM, { id: slug })
    return data.newsItem
  } catch (error) {
    console.error('Error fetching news item:', error)
    throw error
  }
}

export async function fetchColours() {
  try {
    const data = await client.request(GET_COLOURS)
    return data.colours.nodes
  } catch (error) {
    console.error('Error fetching colours:', error)
    throw error
  }
}

export async function fetchColour(slug) {
  try {
    const data = await client.request(GET_COLOUR, { id: slug })
    return data.colour
  } catch (error) {
    console.error('Error fetching colour:', error)
    throw error
  }
}
