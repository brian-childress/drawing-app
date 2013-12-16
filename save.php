<?php
	$data = $_POST['img']; // Find img in POST array

	$data = str_replace('data:img/png;base64,', '',$data); // Remove base64 prefix
	$data = str_replace(' ','+',$data); //Replace spaces with +
	$img = base64_decode($data);
	$path = 'images/' . uniqid() . '.png';
	if(file_put_contents($path, $img)){
		print $path;
	}else{
		header("HTTP/1.1 500 Internal Server Error"); // Error Handling before using Header anywhere else
	}
?>