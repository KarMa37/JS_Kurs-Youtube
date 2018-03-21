var link = document.getElementById("aID");

//link.getAttribute("href"); //metoda
//console.log(link);

link.setAttribute("class", "pie");
link.setAttribute("alt", "Hello");
link.className = "ninja";
console.log(link);

link.href; //właściwość wyrzucająca link
//(podobnie jak getAttribute, ale tutaj wyrzuca link w całości)
