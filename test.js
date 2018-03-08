var Car = function(maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function(speed, time) {
        console.log(speed * time);
    };
    this.logDriver = function() {
        console.log("Driver name is " + this.driver);
    };
}

var myCar = new Car(70, "Marcin");


console.log(myCar.maxSpeed);
console.log(myCar.driver);
myCar.drive(30,5);
myCar.logDriver();