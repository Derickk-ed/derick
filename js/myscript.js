function calculateAge(yearBorn){
	var currentTime = new Date();
	var currentYear = currentTime.getFullYear();
	return currentYear - yearBorn;
}
var name = prompt("Enter your name: ");
// console để thử kết nối 
// cammel case :chữ đầu ko viết hoa 2 âm tiết chữ sau sẽ viết hoa (myAge,yearBorn,myCalculator) naming convention
var yearBorn = prompt("Enter the year you were born");
var age;
age = calculateAge(yearBorn); 

console.log(name + " is " + age + " years old");

var message = "";
if (age < 18 ) {
	message += "You are";
	var i=0 ;
	while (i<5) {
		message += " very";
		i++;
	}
	message += " young"

	if((age>5) && (age<10)) {
		message = "you are a kid"
	}
} else if (age<50) {
	message = "you are quite young";
} else {
	message = "you are over 50 years old";
}

console.log(message)

var gender = prompt ("Are you male or female? (male/female)")
switch (gender) {
	case "male":
		console.log("You are a man");
		break;
	case "female":
		console.log("You are a woman");
		break;
	default:
		console.log ("Wrong gender input,undefine") 				
}
var isClose = confirm("Do you want to close current tab?")

message ="";
if (isClose ) {
	for (var i=0; i<11; i++){
		message += " bye";
	}
} else {
	message = "Thank you for staying with me"
}

console.log(message);

