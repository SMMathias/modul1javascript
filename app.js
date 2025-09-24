function sayHello() {
}


function sayHello() {
	document.querySelector("h3").innerHTML = "Hej " + document.querySelector("#name").value + "<br>" + "Du er " + document.querySelector("#age").value + " år gammel"
    + "<br>" + "Din email er " + document.querySelector("#email").value;
   
}


document.querySelector("button").addEventListener("click", sayHello);