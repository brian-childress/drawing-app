var saveButton = document.getElementById('saveImage');

saveButton.addEventListener('click', saveImage);

function saveImage() {
	var data = canvas.toDataURL();

	var request = new XMLHttpRequest();

	request.onreadystatechange = function() { //Response handler, if readyState is fully loaded and request was successful
		if(request.readyState == 4 && request.status ==200){
			var response = request.responseText;
			// console.log(responseText); 
			window.open('download.php?file+'+response, '_blank', 'location=0, menubar=0');
		}
	}
	request.open('POST', 'save.php', true);
	request.setRequestHeader('Content-type','application/x-www-form-urlencoded'); 
	request.send('img='+data);
}

