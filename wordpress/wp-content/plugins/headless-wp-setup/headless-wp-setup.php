<?php
/**
 * Plugin Name: Headless WP Setup
 * Description: Sets up custom post types, fields, and GraphQL schema for headless WordPress
 * Version: 1.0.0
 * Author: Headless WP
 */

if (!defined('ABSPATH')) {
    exit;
}

// Register Custom Post Types
function hwp_register_post_types() {
    // News Post Type
    register_post_type('news', [
        'labels' => [
            'name' => 'News',
            'singular_name' => 'News',
            'add_new' => 'Add New',
            'add_new_item' => 'Add New News',
            'edit_item' => 'Edit News',
            'new_item' => 'New News',
            'view_item' => 'View News',
            'search_items' => 'Search News',
            'not_found' => 'No news found',
            'not_found_in_trash' => 'No news found in trash'
        ],
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'newsItem',
        'graphql_plural_name' => 'newsItems',
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'menu_icon' => 'dashicons-media-document',
        'rewrite' => ['slug' => 'news'],
    ]);

    // Colours Post Type
    register_post_type('colour', [
        'labels' => [
            'name' => 'Colours',
            'singular_name' => 'Colour',
            'add_new' => 'Add New',
            'add_new_item' => 'Add New Colour',
            'edit_item' => 'Edit Colour',
            'new_item' => 'New Colour',
            'view_item' => 'View Colour',
            'search_items' => 'Search Colours',
            'not_found' => 'No colours found',
            'not_found_in_trash' => 'No colours found in trash'
        ],
        'public' => true,
        'has_archive' => true,
        'show_in_rest' => true,
        'show_in_graphql' => true,
        'graphql_single_name' => 'colour',
        'graphql_plural_name' => 'colours',
        'supports' => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'menu_icon' => 'dashicons-art',
        'rewrite' => ['slug' => 'colours'],
    ]);
}
add_action('init', 'hwp_register_post_types');

// Register ACF Fields
function hwp_register_acf_fields() {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    // Page Builder Field for News
    acf_add_local_field_group([
        'key' => 'group_news_components',
        'title' => 'Page Components',
        'fields' => [
            [
                'key' => 'field_page_components',
                'label' => 'Page Components',
                'name' => 'page_components',
                'type' => 'repeater',
                'show_in_graphql' => true,
                'layout' => 'block',
                'button_label' => 'Add Component',
                'sub_fields' => [
                    [
                        'key' => 'field_component_type',
                        'label' => 'Component Type',
                        'name' => 'component_type',
                        'type' => 'select',
                        'show_in_graphql' => true,
                        'choices' => [
                            'hero' => 'Hero',
                            'text_block' => 'Text Block',
                            'image_gallery' => 'Image Gallery',
                            'cta' => 'Call to Action',
                        ],
                        'default_value' => 'text_block',
                    ],
                    [
                        'key' => 'field_hero_title',
                        'label' => 'Hero Title',
                        'name' => 'hero_title',
                        'type' => 'text',
                        'show_in_graphql' => true,
                        'conditional_logic' => [
                            [
                                [
                                    'field' => 'field_component_type',
                                    'operator' => '==',
                                    'value' => 'hero',
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'field_hero_subtitle',
                        'label' => 'Hero Subtitle',
                        'name' => 'hero_subtitle',
                        'type' => 'text',
                        'show_in_graphql' => true,
                        'conditional_logic' => [
                            [
                                [
                                    'field' => 'field_component_type',
                                    'operator' => '==',
                                    'value' => 'hero',
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'field_hero_image',
                        'label' => 'Hero Image',
                        'name' => 'hero_image',
                        'type' => 'image',
                        'show_in_graphql' => true,
                        'return_format' => 'array',
                        'conditional_logic' => [
                            [
                                [
                                    'field' => 'field_component_type',
                                    'operator' => '==',
                                    'value' => 'hero',
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'field_text_content',
                        'label' => 'Text Content',
                        'name' => 'text_content',
                        'type' => 'wysiwyg',
                        'show_in_graphql' => true,
                        'conditional_logic' => [
                            [
                                [
                                    'field' => 'field_component_type',
                                    'operator' => '==',
                                    'value' => 'text_block',
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'field_gallery_images',
                        'label' => 'Gallery Images',
                        'name' => 'gallery_images',
                        'type' => 'gallery',
                        'show_in_graphql' => true,
                        'conditional_logic' => [
                            [
                                [
                                    'field' => 'field_component_type',
                                    'operator' => '==',
                                    'value' => 'image_gallery',
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'field_cta_title',
                        'label' => 'CTA Title',
                        'name' => 'cta_title',
                        'type' => 'text',
                        'show_in_graphql' => true,
                        'conditional_logic' => [
                            [
                                [
                                    'field' => 'field_component_type',
                                    'operator' => '==',
                                    'value' => 'cta',
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'field_cta_button_text',
                        'label' => 'Button Text',
                        'name' => 'cta_button_text',
                        'type' => 'text',
                        'show_in_graphql' => true,
                        'conditional_logic' => [
                            [
                                [
                                    'field' => 'field_component_type',
                                    'operator' => '==',
                                    'value' => 'cta',
                                ],
                            ],
                        ],
                    ],
                    [
                        'key' => 'field_cta_button_link',
                        'label' => 'Button Link',
                        'name' => 'cta_button_link',
                        'type' => 'url',
                        'show_in_graphql' => true,
                        'conditional_logic' => [
                            [
                                [
                                    'field' => 'field_component_type',
                                    'operator' => '==',
                                    'value' => 'cta',
                                ],
                            ],
                        ],
                    ],
                ],
            ],
        ],
        'location' => [
            [
                [
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'news',
                ],
            ],
            [
                [
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'colour',
                ],
            ],
        ],
    ]);

    // Colour-specific fields
    acf_add_local_field_group([
        'key' => 'group_colour_fields',
        'title' => 'Colour Details',
        'fields' => [
            [
                'key' => 'field_hex_value',
                'label' => 'Hex Value',
                'name' => 'hex_value',
                'type' => 'color_picker',
                'show_in_graphql' => true,
                'default_value' => '#000000',
            ],
            [
                'key' => 'field_colour_description',
                'label' => 'Description',
                'name' => 'colour_description',
                'type' => 'textarea',
                'show_in_graphql' => true,
            ],
        ],
        'location' => [
            [
                [
                    'param' => 'post_type',
                    'operator' => '==',
                    'value' => 'colour',
                ],
            ],
        ],
    ]);
}
add_action('acf/init', 'hwp_register_acf_fields');

// Enable CORS for GraphQL
function hwp_add_cors_headers() {
    // Get allowed origins from environment or default to localhost in development
    $allowed_origins = apply_filters('hwp_allowed_origins', [
        'http://localhost:5173',
        'http://localhost:5174',
    ]);
    
    $origin = isset($_SERVER['HTTP_ORIGIN']) ? sanitize_text_field(wp_unslash($_SERVER['HTTP_ORIGIN'])) : '';
    
    if (in_array($origin, $allowed_origins, true)) {
        header('Access-Control-Allow-Origin: ' . $origin);
    }
    
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    
    if (isset($_SERVER['REQUEST_METHOD']) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        status_header(200);
        exit();
    }
}
add_action('init', 'hwp_add_cors_headers');
