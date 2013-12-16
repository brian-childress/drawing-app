var colors = ['red','brown','orange','yellow','green', 'blue', 'violet', 'black', 'grey', 'white'];

for(var i=0, n=colors.length; i<n; i++){
	var sample = document.createElement('div');
	sample.className = 'sample';
	sample.style.backgroundColor = colors[i];
	sample.addEventListener('click', setSample);
	document.getElementById('colorPicker').appendChild(sample);
}

function setColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('active')[0];
	if(active){
		active.className = 'sample';
	}
}

function setSample(e) {
	// identify sample
	var sample = e.target;
	// set color
	setColor(sample.style.backgroundColor);
	// set active class
	sample.className += ' active'; // adds active classname to selected color
}

setSample({target: document.getElementsByClassName('sample')[0]});