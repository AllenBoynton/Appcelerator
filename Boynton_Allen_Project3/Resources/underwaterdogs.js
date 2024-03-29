// Global variables
var pWidth = Ti.Platform.displayCaps.platformWidth,
	pHeight = Ti.Platform.displayCaps.platformHeight,
	itemCount = 30,
	rowCount = 4,
	margin = 5,
	canvasWidth = pWidth - margin * (rowCount + 1),
	size = canvasWidth / rowCount,
	imagesFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images3"),
	imageFiles = imagesFolder.getDirectoryListing()
;

// Function for new gallery window
var getGallery = function(){
	var makeWindow = Ti.UI.createWindow({
		backgroundImage: "water.jpg"
	});
	
	// Gallery bar
	var titleBar = Ti.UI.createView({
		backgroundColor: "white",
		top: 15,
		height: 50,
		width: 275,
		borderColor: "blue",
		borderWidth: 2,
		borderRadius: 8
		});
	
	//Gallery bar text
	var titleText = Ti.UI.createLabel({
		text: "Underwater Doggies",
		color: "blue",
		textAlign: "center",
		font: {fontFamily: "Chalkduster", fontSize: 18, fontWeight: "bold"}
	});
	
	// Exit button
	var exitButton = Ti.UI.createLabel({
		text: "Close Gallery",
		backgroundColor: "white",
		color: "blue",
		height: 50,
		bottom: 5,
		font: {fontFamily: "Chalkduster", fontSize: 16},
		textAlign: "center",
		width: 225,
		borderColor: "blue",
		borderWidth: 2,
		borderRadius: 8
	});
	
	// Container for images
	var container = Ti.UI.createScrollView({
		top: titleBar.top + titleBar.height + 2, 
		width: pWidth,
		contentWidth: pWidth,
		height: pHeight - titleBar.top - titleBar.height - exitButton.height,
		showVerticalScrollIndicator: true,
		backgroundColor: "transparent",
		layout: "horizontal"
	});

	// For loop to cycle through images in master image file
	for(var i=0; i<imageFiles.length; i++){
		var thumbnail = Ti.UI.createView({
			backgroundColor: "#33CCFF",
			top: margin,
			left: margin,
			width: size,
			height: size,
			borderColor: "white",
			borderWidth: 2,
			borderRadius: 5
		});
		
		var newImage = Ti.UI.createImageView({
			image: "images3/" + imageFiles[i],
			top: 0,
			width: thumbnail.width * 2,
			borderRadius: 5
		});
		
		thumbnail.add(newImage);
		container.add(thumbnail);
				
		// Exit window
		var exitWindow = function(){
			makeWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
		};
		
		// Main code to return
		exitButton.addEventListener("click", exitWindow);
		
		titleBar.add(titleText);
		makeWindow.add(titleBar, container, exitButton);
		makeWindow.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
			// Event listener for images
		container.addEventListener("click", function(event){
		getPicture(event.source.image);
		});

};

// Function to open gallery window
var getPicture = function(dataSource){
	var picWindow = Ti.UI.createWindow({
		backgroundImage: "water.jpg"
	});
	
	// Title bar
	var titleBar = Ti.UI.createView({
		backgroundColor: "white",
		top: 20,
		height: 50,
		width: 275,
		borderColor: "blue",
		borderWidth: 2,
		borderRadius: 8
	});
	
	// Title bar text
	var titleText = Ti.UI.createLabel({
		text: "Pictures",
		color: "blue",
		textAlign: "center",
		font: {fontFamily: "Chalkduster", fontSize: 20, fontWeight: "bold"}
	});
	
	// Photo view
	var newImage = Ti.UI.createImageView({
		image: dataSource,
		top: 125,
		left:10,
		right: 10,
		borderColor: "white",
		borderRadius: 5,
		borderWidth: 2
	});
	
	// Photo file name
	var picLabel = Ti.UI.createLabel({
		text: dataSource,
		bottom: 150,
		color: "white",
		font: {fontWeight: "bold", fontSize: "18"},
		textAlign: "center"
	});
			
	// Close button
	var closeButton = Ti.UI.createLabel({
		text: "Return to Gallery",
		backgroundColor: "white",
		color: "blue",
		font: {fontFamily: "Chalkduster", fontSize: 16},
		textAlign: "center",
		height: 50,
		bottom: 10,
		width: 225,
		borderColor: "blue",
		borderWidth: 2,
		borderRadius: 8
	});

	// Return window
	var returnWindow = function(){
		picWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	// Main code to return to thumbnails
	closeButton.addEventListener("click", returnWindow);
	
	titleBar.add(titleText);
	picWindow.add(titleBar, picLabel, newImage, closeButton);
	picWindow.open();
};

menuButton.addEventListener("click", getGallery);
	