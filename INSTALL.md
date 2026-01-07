# WordPress Installation Guide

## Manual WordPress Installation Steps

Since this is a fresh setup, you'll need to complete the WordPress installation manually:

1. **Start the development servers:**
   ```bash
   npm run dev
   ```

2. **Complete WordPress Installation:**
   - Visit http://localhost:8080
   - Select your language
   - Click "Let's go!"
   - Fill in the database information (or use SQLite plugin)
   - Create admin account:
     - Username: `admin`
     - Password: (choose a strong password)
     - Email: your email
   - Click "Install WordPress"

3. **Install Required Plugins:**
   
   Go to **Plugins → Add New** and install/activate these plugins in order:
   
   a. **WPGraphQL**
      - Search: "WPGraphQL"
      - Install and Activate
   
   b. **WPGraphQL for Advanced Custom Fields**
      - Search: "WPGraphQL for Advanced Custom Fields"
      - Install and Activate
   
   c. **Advanced Custom Fields (ACF)**
      - Search: "Advanced Custom Fields"
      - Install and Activate
   
   d. **Headless WP Setup** (included)
      - Go to **Plugins → Installed Plugins**
      - Find "Headless WP Setup"
      - Click "Activate"

4. **Activate Theme:**
   - Go to **Appearance → Themes**
   - Find "Headless Theme"
   - Click "Activate"

5. **Configure Permalinks:**
   - Go to **Settings → Permalinks**
   - Select "Post name"
   - Click "Save Changes"

6. **Test GraphQL:**
   - Visit http://localhost:8080/graphql
   - You should see the GraphiQL interface

7. **Create Sample Content:**
   
   **Create a News Post:**
   - Go to **News → Add New**
   - Title: "Welcome to Our News Section"
   - Add content in the editor
   - Scroll down to "Page Components"
   - Add a Hero component:
     - Component Type: Hero
     - Hero Title: "Breaking News"
     - Hero Subtitle: "Stay updated with the latest"
   - Add a Text Block:
     - Component Type: Text Block
     - Text Content: Some rich text content
   - Click "Publish"
   
   **Create a Colour:**
   - Go to **Colours → Add New**
   - Title: "Ocean Blue"
   - Use the colour picker to select a blue colour
   - Add description: "A calming blue reminiscent of the ocean"
   - Add page components (Hero, Text Block, etc.)
   - Click "Publish"

8. **View the Frontend:**
   - Visit http://localhost:5173
   - Navigate to News and Colours sections
   - See your content rendered beautifully!

## Quick Install Plugins via WP-CLI (Optional)

If you have WP-CLI installed:

```bash
cd wordpress

# Install and activate plugins
wp plugin install wpgraphql --activate
wp plugin install wp-graphql-acf --activate
wp plugin install advanced-custom-fields --activate

# Activate theme
wp theme activate headless-theme

# Set permalinks
wp rewrite structure '/%postname%/'
wp rewrite flush
```

## Troubleshooting

### Can't access WordPress admin
- Make sure WordPress is running: `npm run dev:wordpress`
- Check port 8080 is not in use by another application

### GraphQL endpoint not found
- Ensure WPGraphQL plugin is installed and activated
- Check permalinks are set to "Post name"

### Custom fields not appearing in GraphQL
- Install "WPGraphQL for Advanced Custom Fields"
- Ensure ACF is installed
- Check that fields have "Show in GraphQL" enabled

### Database errors
- If using SQLite, ensure `wordpress/wp-content/database/` exists and is writable
- Or configure MySQL in `wp-config.php`
