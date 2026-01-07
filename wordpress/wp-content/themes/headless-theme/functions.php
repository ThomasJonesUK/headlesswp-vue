<?php
// Theme setup
function headless_theme_setup() {
    add_theme_support('post-thumbnails');
}
add_action('after_setup_theme', 'headless_theme_setup');
