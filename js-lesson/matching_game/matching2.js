
function generateFaces() {
	var numberOfFaces = 5;
	var theLeftSide = document.getElementById("leftSide");
	for(var i = 0; i < 5; ++i) {
		var img = document.createElement("img");
		img.src = "smile.png";
		img.style.top=Math.ceil(Math.random() * 401) + "px";
		img.style.left=Math.ceil(Math.random() * 401) + "px";
		theLeftSide.appendChild(img);
	}
}