<?php
/**
 * Plugin Name: Omega
 * Description:  Adding the Character Map Button to Gutenbergs Wisiwig
 * Version: 0.9.1
 * Author: Palasthotel <rezeption@palasthotel.de> (in person: Benjamin Birkenhake)
 * Author URI: http://www.palasthotel.de
 * Requires at least: 5.0
 * Tested up to: 5.1.1
 * License: http://www.gnu.org/licenses/gpl-2.0.html GPLv2
 * @copyright Copyright (c) 2014, Palasthotel
 * @package Palasthotel
 */

function omega_script_register() {
    wp_register_script(
        'omega-js',
        plugins_url( 'omega.js', __FILE__ ),
        array( 'wp-rich-text', 'wp-element', 'wp-editor', 'jquery')
    );
}
add_action( 'init', 'omega_script_register' );

function omega_enqueue_assets_editor() {
    wp_enqueue_script( 'omega-js' );
    wp_enqueue_style( 'omega-css', plugins_url('omega.css', __FILE__) );
}
add_action( 'enqueue_block_editor_assets', 'omega_enqueue_assets_editor' );



function omega_footer_function() {
	print file_get_contents(plugins_url('charmap.html', __FILE__));
}
add_action('admin_footer', 'omega_footer_function');