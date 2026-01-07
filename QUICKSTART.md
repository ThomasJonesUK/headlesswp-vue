# Headless WordPress + Vue.js Monorepo - Quick Start

This guide provides step-by-step instructions for setting up the monorepo.

## Prerequisites

- Node.js (v16+)
- PHP (v7.4+)
- npm or yarn

## Setup Instructions

### 1. Install Dependencies

```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install
cd ..
```

### 2. Download WordPress

Since WordPress needs to be downloaded separately, follow these steps:

**Option A: Manual Download**
```bash
cd wordpress
curl -O https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz --strip-components=1
rm latest.tar.gz
cd ..
```

**Option B: Use Existing WordPress**
If you have WordPress installed elsewhere, you can:
1. Copy it to the `wordpress/` directory
2. Or create a symbolic link

### 3. Configure WordPress

```bash
# Copy the sample config
cp wordpress/wp-config-sample.php wordpress/wp-config.php
```

Edit `wordpress/wp-config.php` and update the database settings if needed.

### 4. Start Development Servers

```bash
# Start both WordPress and Vue frontend
npm run dev
```

This will start:
- WordPress: http://localhost:8080
- Vue Frontend: http://localhost:5173

### 5. Complete WordPress Installation

1. Visit http://localhost:8080
2. Follow the WordPress installation wizard
3. Create admin account

### 6. Install Required WordPress Plugins

Install these plugins through the WordPress admin (Plugins → Add New):

1. **WPGraphQL** - Required for API
2. **WPGraphQL for Advanced Custom Fields** - Required for custom fields
3. **Advanced Custom Fields (ACF)** - Required for page builder

Then activate:
4. **Headless WP Setup** (included plugin) - Plugins → Installed Plugins
5. **Headless Theme** (included theme) - Appearance → Themes

### 7. Configure Permalinks

1. Go to Settings → Permalinks
2. Select "Post name"
3. Save Changes

### 8. Create Sample Content

**Create News:**
1. Go to News → Add New
2. Add title and content
3. Add Page Components (Hero, Text Block, etc.)
4. Publish

**Create Colours:**
1. Go to Colours → Add New
2. Add title
3. Select hex colour
4. Add description
5. Add Page Components
6. Publish

### 9. View Frontend

Visit http://localhost:5173 to see your content!

## Individual Commands

```bash
# Start only WordPress
npm run dev:wordpress

# Start only Vue frontend
npm run dev:frontend

# Build frontend for production
cd frontend && npm run build
```

## Troubleshooting

### Port Already in Use
If ports 8080 or 5173 are in use, you can:
- Stop the conflicting process
- Or change ports in `package.json` and `vite.config.js`

### WordPress Not Loading
- Ensure PHP is installed: `php -v`
- Check `wp-config.php` is configured
- Verify WordPress files are in `wordpress/` directory

### Frontend Can't Fetch Data
- Ensure WordPress is running
- Install and activate WPGraphQL plugin
- Check http://localhost:8080/graphql is accessible

## Next Steps

See the main README.md for:
- Detailed feature documentation
- Component usage guide
- GraphQL query examples
- Production deployment guide
