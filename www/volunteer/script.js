//javascript for form 

//define a function checkFields
function checkFields() {
    //define a variable name and use it to store the users name
    var name = document.getElementById("firstNameinput").value;
    if (name == null || name == "") {
        alert("Please fill in your name!");
        return false;
    }
    //check if the surname is null or empty and is not a surname

    //define a variable surname
    var surname = document.getElementById("Surnameinput").value;
    if (surname == null || surname == "") {
        alert("Please fill in your surname");
        return false;
    }
    //define a message	
    var message = document.getElementById("textbox").value;
    if (message == null || message == "") {
        alert("Please write something!");
        return false;
    }

    //no errors, continue to display the thank you message	
    alert('Thank you for your feedback, ' + name);
    //reset the form to clear all the fields
    document.forms["contact"].reset();
    return false;
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};


// get results
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


