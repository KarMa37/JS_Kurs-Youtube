var myArray = new Array();
myArray[0] = 8;
myArray[1] = "hello";


var myCar = new Object();

myCar.maxSpeed = 50;
myCar.driver = "Marcin";
myCar.drive = function() {
    console.log("Now driving");
};

console.log(myCar.maxSpeed);
console.log(myCar.driver);
myCar.drive();




var myArray2 = [true,15,"hi"];

var myCar2 = {
    maxSpeed: 70,
    driver: "Johny",
    drive: function(speed, time) {
        console.log("Now driviiiiing");
        console.log(speed * time);
    }
};

console.log(myCar2.maxSpeed);
console.log(myCar2.driver);
myCar2.drive(50, 3);