var myContentDivs =
    document.getElementsByClassName("content");

console.log(myContentDivs);

var myH2 = myContentDivs[0].getElementsByTagName("a");
console.log(myH2);

myH2[0].innerHTML = "Link 5000";

var H2ID = document.getElementById("aID");

H2ID.innerHTML = "Link blah blah";