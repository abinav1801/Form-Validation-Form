document.getElementById("my-form").addEventListener("submit",function(event){
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;

    if(name == "" || email == "" || mobile == ""){
        alert("Please fill all the details");
        event.preventDefault();
        return;
    }

    if(email.indexOf("@") == -1 || email.indexOf(".") == -1){
        alert("Please enter a valid Email Address");
        event.preventDefault();
        return;
    }

    if(mobile.length != 10){
        alert("Please enter a valid mobile number.");
        event.preventDefault();
        return;
    }

    alert("Thank you for submitting the form!");

});