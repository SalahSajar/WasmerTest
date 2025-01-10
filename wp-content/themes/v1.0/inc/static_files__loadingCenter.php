<?php
function loadStaticScripts__HANDLER()
{
	// Loading Css Stylesheets
	wp_enqueue_style("main theme stylesheet", get_stylesheet_uri());
	wp_enqueue_style("Global Css Stylesheet", get_theme_file_uri("/assets/css/global.css"));
	wp_enqueue_style("Homepage Css Stylesheet", get_theme_file_uri("/assets/css/index.css"));

	// Loading Javascript Scripts
	wp_enqueue_script_module(
		"OpenSimplexNoise Sketching Module",
		get_theme_file_uri("./build/js/bundle.js"),
		["simplex-noise"]
	);
}

add_action("wp_enqueue_scripts", "loadStaticScripts__HANDLER");