function welcome() {
	var greeting = "Hello, " + prompt("Enter you name:");
	document.write(greeting);
	console.log("Index of 'Andrew' is " + greeting.indexOf('Andrew'));
};