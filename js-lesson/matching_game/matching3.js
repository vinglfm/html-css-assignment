
function generateFaces() {
	var numberOfFaces = 5;
	var theLeftSide = document.getElementById("leftSide");
	var theRightSide = document.getElementById("rightSide");
	for(var i = 0; i < 5; ++i) {
		var img = document.createElement("img");
		img.src = "smile.png";
		img.style.top= randomPosition();
		img.style.left=randomPosition();
		theLeftSide.appendChild(img);
	}
	
	var images = theLeftSide.cloneNode(true);
	images.removeChild(images.lastChild);
	theRightSide.appendChild(images);
}

function randomPosition() {
	return Math.ceil(Math.random() * 401) + "px";
}