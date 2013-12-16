<?php
	// Retrieve file
	$file = $_GET['file'];
	// PNG file
	header('Content-type: image/png');
	// Attachment
	header("Content-disposition:attachment; filename=mydrawing.png");
	// Send file
	readfile($file);
?>