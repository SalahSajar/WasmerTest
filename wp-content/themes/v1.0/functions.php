<?php
	require get_theme_file_path("/inc/static_files__loadingCenter.php");


	function additional_theme_features__FUNC(){
		// add_theme_support("title-tag");
	}
	add_action("after_setup_theme", "additional_theme_features__FUNC");