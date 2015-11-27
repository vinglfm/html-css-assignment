
function generateFaces(numberOfFaces) {

	var theLeftSide = document.getElementById("leftSide");
	var theRightSide = document.getElementById("rightSide");
	for(var i = 0; i < numberOfFaces; ++i) {
		var img = document.createElement("img");
		img.src = "smile.png";
		img.style.top= randomPosition();
		img.style.left=randomPosition();
		theLeftSide.appendChild(img);
	}
	
	var images = theLeftSide.cloneNode(true);
	images.removeChild(images.lastChild);
	theRightSide.appendChild(images);
	var theBody = document.getElementById("theBody");
	theBody.onclick = function gameOver() {
		alert("You haven't found a right smile.");
		theBody.onclick = null;
		theLeftSide.lastChild.onclick = null;
	}
	theLeftSide.lastChild.onclick = function nextLevel(event) {
		event.stopPropagation();	
		
		removeAllNodes(theLeftSide);
		removeAllNodes(theRightSide);
		
		generateFaces(numberOfFaces + 5);
	};
}

function randomPosition() {
	return Math.ceil(Math.random() * 401) + "px";
}

function removeAllNodes(parentNode) {
	while(parentNode.firstChild) {
		parentNode.removeChild(parentNode.firstChild);
	}
}