var myCar2 = {
    maxSpeed: 70,
    driver: "Johny",
    drive: function(speed, time) {
        console.log("Now driviiiiing");
        console.log(speed * time);
    },
    test: function() {
        console.log(this);
    }
};

var myCar3 = {
    maxSpeed: 70,
    driver: "Jeronimo",
    drive: function(speed, time) {
        console.log("Now driviiiiing");
        console.log(speed * time);
    },
    logDriver: function() {
        console.log("Driver name is " + this.driver);
    }
};

console.log(myCar2.maxSpeed);
console.log(myCar2.driver);
myCar2.drive(50, 3);
myCar2.test();
myCar3.logDriver();