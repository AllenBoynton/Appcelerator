// global variables
var beachNames = ["Miami South Beach, FL", "Myrtle Beach, SC", 
				"Daytona Beach, FL", "Laguna Beach, CA", "Venice Beach, CA", 
				"Clearwater Beach, FL", "Long Beach, NJ"];
// Assign array order by use of variable
var i = 6;

// Function to move and cycle through beaches
var nextBeach = function(){
	if(beachNames[i] === "Long Beach, NJ"){
		titleText.text = beachNames[i];
		i = 0;
	} else {
		titleText.text = beachNames[i];
		i++;
	}
};

// Function to move and cycle through beaches
var previousBeach = function(){
	if(beachNames[i] === "Miami South Beach, FL"){
		titleText.text = beachNames[i];
		i = 6;
	} else {
		titleText.text = beachNames[i];
		i--;
	}
};

// Event listeners to give buttons a purpose
previousButton.addEventListener("click", previousBeach);
nextButton.addEventListener("click", nextBeach);