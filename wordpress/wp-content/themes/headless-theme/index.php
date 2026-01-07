<!DOCTYPE html>
<html>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body>
    <h1>Headless WordPress</h1>
    <p>This WordPress installation is configured for headless use.</p>
    <p>Access the GraphQL endpoint at: <code><?php echo home_url('/graphql'); ?></code></p>
    <p>View the Vue frontend at: <a href="http://localhost:5173">http://localhost:5173</a></p>
    <?php wp_footer(); ?>
</body>
</html>
