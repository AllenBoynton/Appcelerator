// Main .js bootstrap file for cruise ship theme

// Author: Allen Boynton
// Visual Frameworks 1412
// Project 2
// Due: December 6, 2014

Ti.UI.setBackgroundColor("#000");

// Main background
var mainBackground = Ti.UI.createWindow({
	backgroundColor: "#fff"
	//backgroundImage: "Cruiseship.jpg"
});

// Title bar
var titleBar = Ti.UI.createWindow({
	backgroundColor: "#fff",
	top: 20,
	height: 50
});

// Title bar text
var titleText = Ti.UI.createWindow({
	text: "Cruise Ships",
	textAlign: "center",
	font; {fontWeight: "bold", fontSize: 18}
});
