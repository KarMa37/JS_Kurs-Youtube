var myParaJS = document.getElementById("content").getElementsByTagName("p")[5];
var myParaJQ = $("#content p:last-child");

myParaJQ.css({position: "relative", color: "red"});
myParaJQ.animate({left: "50px"});