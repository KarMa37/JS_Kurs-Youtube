var myPastDate = new Date(1545, 11, 2, 10, 30, 59);
console.log(myPastDate);

var myDate = new Date();
console.log(myDate);

var myFutureDate = new Date(2515, 0, 31, 10, 30, 59);
console.log(myFutureDate);

var birthday = new Date(1984, 9, 20, 10, 10);
var birthday2 = new Date(1984, 9, 20, 10, 10);
console.log(birthday);
console.log(birthday.getMonth()); //0-11
console.log(birthday.getFullYear());
console.log(birthday.getDate());
console.log(birthday.getDay()); //0-6
console.log(birthday.getHours()); //0-23
console.log(birthday.getTime()); //milisekundy od 1.1.1970


if (birthday.getTime() == birthday2.getTime()) {
    console.log("Daty są takie same");
} else {
    console.log("Daty nie są takie same");
}