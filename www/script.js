    // JavaScript source code
var x = 100

//for quiz html

function falseFunction() {
    x = x - 10;
    //creating
   /* var para = document.createElement("p");
    para.setAttribute("id", "answer");
    var node = document.createTextNode("This is wrong.");
    para.appendChild(node);//within appending
    //appending
    var element = document.getElementById("bigTitle");
    element.appendChild(para);*/
    alert("this is wrong");
    //removing
    var parent = document.getElementById("qnTime");
    var child = document.getElementById("qnsloh");
    parent.removeChild(child);
    //question
    var question2 = document.createElement("h3");
   question2.setAttribute("id", "Q2");
    var textelement = document.createTextNode("how does crazy ranch keep the number of pest at bay?");
    question2.appendChild(textelement);//within append
    //appending
    var q = document.getElementById("bigTitle");
    q.appendChild(question2);
    //adding event listener
    document.getElementById("Q2").addEventListener("click", function () {
        var parent = document.getElementById("bigTitle");
        var child = document.getElementById("Q2");
        parent.removeChild(child);
        document.write("you have scored" + x + "correctly");
    });


    //first answer creation
    var q2 = document.getElementById("")
    var buttonQ2A1 = document.createElement("button");
    buttonQ2A1.setAttribute("id", "Q2A1");
    var textelementQ2A1 = document.createTextNode("use of pesticidies");
    buttonQ2A1.appendChild(textelementQ2A1);//within appending
    //apending
    var ebq2a1 = document.getElementById("Q2")
    ebq2a1.appendChild(buttonQ2A1);
    //adding eventlistener
    document.getElementById("Q2A1").addEventListener("click", function () {
        x = x - 10;
        var parent = document.getElementById("bigTitle");
        var child = document.getElementById("Q2");
        parent.removeChild(child);
        document.write("you have scored" + x + "correctly");
    });


    //second answer creation
    var buttonQ2A2 = document.createElement("button");
    buttonQ2A2.setAttribute("id", "Q2A2");
    var textelementQ2A2 = document.createTextNode("Hu mama clear it herself");
    buttonQ2A2.appendChild(textelementQ2A2);//within appending
    //appending
    var ebq2a2 = document.getElementById("Q2");
    ebq2a2.appendChild(buttonQ2A2)
   //adding event listener
    document.getElementById("Q2A2").addEventListener("click", function () {
        x = x - 10;
        var parent = document.getElementById("bigTitle");
        var child = document.getElementById("Q2");
        parent.removeChild(child);
        document.write("you have scored" + x + "correctly");
    });

    //third answer creation    
    var buttonQ2A3 = document.createElement("button");
    buttonQ2A3.setAttribute("id", "Q2A3");
    var textelementQ2A3 = document.createTextNode("use light as a lure beforekilling it with electricity");
    buttonQ2A3.appendChild(textelementQ2A3);//within appending
    //appending
    var ebQ2A3 = document.getElementById("Q2");
    ebQ2A3.appendChild(buttonQ2A3)
    //adding event listener
    document.getElementById("Q2A3").addEventListener("click", function () {
        x = x - 10;
        var parent = document.getElementById("bigTitle");
        var child = document.getElementById("Q2");
        parent.removeChild(child);
        document.write("you have scored" + x + "correctly");
    });


    //fourth answer creation
    var buttonQ2A4 = document.createElement("button");
    buttonQ2A4.setAttribute("id", "Q2A4");
    var textelementQ2A4 = document.createTextNode("none of the above");
    buttonQ2A4.appendChild(textelementQ2A4);//within appending
    //appending
    var ebQ2A4 = document.getElementById("Q2");
    ebQ2A4.appendChild(buttonQ2A4)
    //adding event listener
    document.getElementById("Q2A4").addEventListener("click", function () {
        x = x - 10;
        var parent = document.getElementById("bigTitle");
        var child = document.getElementById("Q2");
        parent.removeChild(child);
        document.write("you have scored" + x + "correctly");
    });


};








function trueFunction() {
    //creating
    /*
    var para = document.createElement("p");
    para.setAttribute("id", "answer");
    var node = document.createTextNode("This is right.");
    para.appendChild(node);//within appending
    //appending
    var element = document.getElementById("bigTitle");
    element.appendChild(para);*/
    x = x + 10;
    alert("this is correct");

    //removing
    var parent = document.getElementById("qnTime");
    var child = document.getElementById("qnsloh");
    parent.removeChild(child);

    //question
    var question2 = document.createElement("h3");
    question2.setAttribute("id", "Q2");
    var textelement = document.createTextNode("how does crazy ranch keep the number of pest at bay?");
    question2.appendChild(textelement);//within append
    //appending
    var q = document.getElementById("bigTitle");
    q.appendChild(question2);
    //adding event listener
    document.getElementById("Q2").addEventListener("click", function () {
        x = x - 10;
        var parent = document.getElementById("bigTitle");
        var child = document.getElementById("Q2");
        parent.removeChild(child);
        document.write("you have scored" + x + "correctly");
    });

    //first answer creation
    var q2 = document.getElementById("")

    var buttonQ2A1 = document.createElement("button");
    buttonQ2A1.setAttribute("id", "Q2A1");
    buttonQ2A1.setAttribute("onclick","end()");
    var textelementQ2A1 = document.createTextNode("use of pesticidies");
    buttonQ2A1.appendChild(textelementQ2A1);//within appending
    //apending
    var ebQ2A1 = document.getElementById("Q2")
    ebQ2A1.appendChild(buttonQ2A1);
    //adding event listener
    document.getElementById("Q2A1").addEventListener("click", function () {
        x = x - 10;
        var parent = document.getElementById("bigTitle");
        var child = document.getElementById("Q2");
        parent.removeChild(child);
        document.write("you have scored" + x + "correctly");
    });
    //second answer creation
        var buttonQ2A2 = document.createElement("button");
        buttonQ2A2.setAttribute("id", "Q2A2");
        buttonQ2A2.setAttribute("onclick", "end()");
        var textelementQ2A2 = document.createTextNode("Hu mama clear it herself");
        buttonQ2A2.appendChild(textelementQ2A2);//within appending
        //appending
        var ebQ2A2 = document.getElementById("Q2");
        ebQ2A2.appendChild(buttonQ2A2)
    //adding event listener
    document.getElementById("Q2A2").addEventListener("click", function () {
        x = x - 10; 
        var parent = document.getElementById("bigTitle");
        var child = document.getElementById("Q2");
        parent.removeChild(child);
        document.write("you have scored" + x + "correctly");
    });

    //third answer creation     
   var buttonQ2A3 = document.createElement("button");
    buttonQ2A3.setAttribute("id", "Q2A3");
    buttonQ2A3.setAttribute("onclick", "end()");
    var textelementQ2A3 = document.createTextNode("Hu mama clear it herself");
    buttonQ2A3.appendChild(textelementQ2A3);//within appending
   // appending
    var ebQ2A3 = document.getElementById("Q2");
    ebQ2A3.appendChild(buttonQ2A3);
     //adding event listener
    document.getElementById("Q2A3").addEventListener("click", function () {
        x = x - 10;
        var parent = document.getElementById("bigTitle");
        var child = document.getElementById("Q2");
        parent.removeChild(child);
        document.write("you have scored" + x + "correctly");
    });





    //fourth answer creation

    var buttonQ2A4 = document.createElement("button");
    buttonQ2A4.setAttribute("id", "Q2A4");
    buttonQ2A4.setAttribute("onclick", "end()");
    var textelementQ2A4 = document.createTextNode("none of the above");
    buttonQ2A4.appendChild(textelementQ2A4);//within appending
    //appending
    var ebQ2A4 = document.getElementById("Q2");
    ebQ2A4.appendChild(buttonQ2A4);
    //adding event listener
    document.getElementById("Q2A4").addEventListener("click", function () {
        x = x - 10;
        var parent = document.getElementById("bigTitle");
        var child = document.getElementById("Q2");
        parent.removeChild(child);
        document.write("you have scored" + x + "correctly");
    });

};




/* var newp = document.createElement("p");
    newp.setAttribute("id", "result");
    newp.setAttribute("onclick", "newQn2()");

    var node = document.createTextNode("This is correct");
    newp.appendChild(node);
*/







var div = document.getElementById('Q2A4');
HTMLButtonElement.mouseisclicked= function end() {
     x = x - 10;
        var parent = document.getElementById("bigTitle");
        var child = document.getElementById("Q2");
        parent.removeChild(child);
         document.write("you have scored" + x + "correctly");
 
}


/*
function myFunction() {
    alert('Timeout');
    //first qn timeout 
    var parent = document.getElementById("qnTime");
    var child = document.getElementById("qnsloh");
    parent.removeChild(child);

}
*/






/*
var x = document.getElementById("myBtn");
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);

function myFunction() {
    document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Moused out!<br>";
}
*/

/*
function checkField(){
var loginId = document.getElementById("username").value;
var password = document.getElementById("password").value;

    function checking(){
     if(loginId ==""||loginID== "  "||password==""||password=="  "){
      alert("Please check your credentials")
       return false;
       }
       else{
          return true;
       }
    };

    var check = checking();

    if(checking ==true ){
        href="land.html";
    }

};
*/


//data getback
function result() {

    var formData = location.search;
    formData = formData.substring(1, formData.length);
    while (formData.indexOf("+") !== -1) {
        formData = formData.replace("+", " ");
    }
    formData = decodeURIComponent(formData);
    var formArray = formData.split("&");
    for (var i = 0; i < formArray.length; i = i + 1) {
        document.write("<p>" + formArray[i] + "</p>");
    }
};


//style
var sheet = document.createStyleSheet();
sheet.addRule('h1', 'background: red;');




    /* may need to use this
     *document.getElementById("demo").innerHTML += "Clicked!<br>";  */
