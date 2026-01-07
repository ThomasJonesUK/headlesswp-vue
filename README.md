# Headless WordPress + Vue.js Monorepo

A modern monorepo setup with headless WordPress CMS and Vue.js frontend, featuring custom post types, ACF fields, and dynamic page building with Vue components.

## Features

- 🚀 **Headless WordPress** with SQLite database (no MySQL required)
- 🎨 **Vue 3** frontend with Vite for lightning-fast development
- 📦 **Monorepo** structure - everything in one place
- 🔌 **GraphQL API** via WPGraphQL for efficient data fetching
- 🧩 **Page Builder** with reusable Vue components
- 📰 **Custom Post Types**: News and Colours
- 🎯 **Dynamic Components**: Hero, Text Block, Image Gallery, Call to Action
- ⚡ **One Command Start**: `npm run dev` starts everything

## Project Structure

```
headlesswp-vue/
├── wordpress/              # WordPress backend
│   ├── wp-content/
│   │   ├── plugins/
│   │   │   └── headless-wp-setup/  # Custom plugin for post types & fields
│   │   └── themes/
│   │       └── headless-theme/      # Minimal theme
│   └── wp-config-sample.php
├── frontend/               # Vue.js frontend
│   ├── src/
│   │   ├── components/     # Reusable Vue components
│   │   ├── views/          # Page views
│   │   ├── services/       # API services
│   │   └── router/         # Vue Router config
│   └── package.json
├── package.json           # Root package with monorepo scripts
└── setup.js              # Setup script
```

## Prerequisites

- **Node.js** (v16 or higher)
- **PHP** (v7.4 or higher)
- **npm** or **yarn**

Check if PHP is installed:
```bash
php -v
```

## Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone https://github.com/ThomasJonesUK/headlesswp-vue.git
cd headlesswp-vue

# Install root dependencies
npm install
```

### 2. Set Up WordPress

```bash
# Run the setup script (downloads WordPress if needed)
npm run setup
```

Alternatively, manually download WordPress:

```bash
cd wordpress
curl -O https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz --strip-components=1
rm latest.tar.gz
```

### 3. Install Frontend Dependencies

```bash
cd frontend
npm install
cd ..
```

### 4. Configure WordPress

1. Copy the sample config:
   ```bash
   cp wordpress/wp-config-sample.php wordpress/wp-config.php
   ```

2. Update the security keys in `wordpress/wp-config.php` (optional but recommended)

### 5. Install WordPress

```bash
# Start both servers
npm run dev
```

This will start:
- WordPress at `http://localhost:8080`
- Vue frontend at `http://localhost:5173`

Visit `http://localhost:8080` and complete the WordPress installation:
- Create admin account
- Site title: "Headless WP"
- Click "Install WordPress"

### 6. Install Required WordPress Plugins

After WordPress installation, install these plugins:

1. **WPGraphQL** (required for API)
   - Go to Plugins → Add New
   - Search for "WPGraphQL"
   - Install and activate

2. **WPGraphQL for Advanced Custom Fields** (required for custom fields)
   - Search for "WPGraphQL for Advanced Custom Fields"
   - Install and activate

3. **Advanced Custom Fields (ACF)** (required for page builder)
   - Search for "Advanced Custom Fields"
   - Install and activate

4. **SQLite Database Integration** (optional, for file-based database)
   - Search for "SQLite Database Integration"
   - Install and activate (or use MySQL if preferred)

5. **Headless WP Setup** (included in the repo)
   - Go to Plugins → Installed Plugins
   - Activate "Headless WP Setup"

6. **Headless Theme**
   - Go to Appearance → Themes
   - Activate "Headless Theme"

### 7. Create Sample Content

1. Go to **News → Add New** in WordPress admin
2. Create a news article with:
   - Title and content
   - Add page components (Hero, Text Block, etc.)
   - Publish

3. Go to **Colours → Add New**
4. Create a colour with:
   - Title
   - Hex value (use the colour picker)
   - Description
   - Add page components
   - Publish

### 8. View the Frontend

Visit `http://localhost:5173` to see your Vue frontend displaying the WordPress content!

## Available Scripts

```bash
# Start both WordPress and Vue dev servers
npm run dev

# Start only WordPress
npm run dev:wordpress

# Start only Vue frontend
npm run dev:frontend

# Install all dependencies (root + frontend)
npm install:all

# Run setup script
npm run setup

# Build Vue frontend for production
cd frontend && npm run build
```

## Page Builder Components

The following Vue components are available for building pages in WordPress:

### 1. Hero Component
Large banner with title, subtitle, and background image.
- Hero Title
- Hero Subtitle  
- Hero Image

### 2. Text Block Component
Rich text content area with WYSIWYG editor.
- Text Content (supports HTML)

### 3. Image Gallery Component
Grid of images with lightbox functionality.
- Gallery Images (multiple upload)

### 4. Call to Action Component
Highlighted section with button.
- CTA Title
- Button Text
- Button Link

## How It Works

1. **Content Management**: Create and manage content in WordPress admin with custom post types (News, Colours) and ACF fields
2. **GraphQL API**: WordPress exposes content via WPGraphQL endpoint at `/graphql`
3. **Vue Frontend**: Vue app fetches data using GraphQL and renders it with dynamic components
4. **Page Builder**: WordPress ACF repeater field allows editors to visually build pages by adding and configuring components

## Custom Post Types

### News
- Title, content, featured image
- Page builder components
- Accessible at `/news` in frontend

### Colours
- Title, content, featured image
- Hex value (colour picker)
- Description
- Page builder components
- Accessible at `/colours` in frontend

## GraphQL Queries

GraphQL endpoint: `http://localhost:8080/graphql`

Example query for news:
```graphql
query {
  newsItems {
    nodes {
      title
      content
      slug
      pageComponents {
        pageComponents {
          componentType
          heroTitle
          textContent
        }
      }
    }
  }
}
```

## Development

### Adding New Components

1. Create component in `frontend/src/components/`
2. Register in `PageBuilder.vue`
3. Add ACF fields in `wordpress/wp-content/plugins/headless-wp-setup/headless-wp-setup.php`
4. Update GraphQL queries in `frontend/src/services/wordpress.js`

### Adding New Post Types

1. Register in `wordpress/wp-content/plugins/headless-wp-setup/headless-wp-setup.php`
2. Add GraphQL queries in `frontend/src/services/wordpress.js`
3. Create Vue views in `frontend/src/views/`
4. Add routes in `frontend/src/router/index.js`

## Troubleshooting

### WordPress not starting
- Check if port 8080 is available
- Ensure PHP is installed: `php -v`

### Vue frontend not loading data
- Ensure WordPress is running at `http://localhost:8080`
- Check if WPGraphQL plugin is installed and activated
- Test GraphQL endpoint: `http://localhost:8080/graphql`
- Check browser console for CORS errors

### CORS issues
- The included plugin adds CORS headers automatically
- If issues persist, check WordPress `.htaccess` or server config

### Database issues
- If using SQLite, ensure `wp-content/database/` directory has write permissions
- Alternatively, configure MySQL in `wp-config.php`

### Missing components in GraphQL
- Ensure "WPGraphQL for Advanced Custom Fields" is installed
- Check that ACF fields have "Show in GraphQL" enabled

## Production Deployment

### WordPress
1. Use proper MySQL database instead of SQLite
2. Update `wp-config.php` with production database credentials
3. Set `WP_DEBUG` to `false`
4. Update WordPress site URL

### Vue Frontend
1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Deploy `dist/` folder to your web server
3. Update GraphQL endpoint in `frontend/src/services/wordpress.js` to production URL

## Technologies Used

- **WordPress** - Content management system
- **Vue 3** - Progressive JavaScript framework
- **Vite** - Fast build tool
- **Vue Router** - Official router for Vue
- **WPGraphQL** - GraphQL API for WordPress
- **Advanced Custom Fields** - Custom fields for WordPress
- **GraphQL Request** - Minimal GraphQL client

## License

ISC

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Support

For issues and questions, please use the GitHub issue tracker.
