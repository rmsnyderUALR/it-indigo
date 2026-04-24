function clearForm() {
    
    /* Form Validation */
    $( "#myform" ).validate({
    
    });
    /* Set all of the form values to blank or false */
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("firstNameError").innerHTML = "";
    document.getElementById("lastNameError").innerHTML = "";
    document.getElementById("email").value = "";
    document.getElementById("telNumber").value = "";
    document.getElementById("message").value = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";
}

