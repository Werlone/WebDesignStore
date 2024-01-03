    let emails;
    let passwords;
    let emailTB;
    let passwordTB;
(function(){
    //localStorage.setItem("logged", "false");
    //console.log(localStorage.getItem("logged"));
    if(localStorage.getItem("logged") == "true"){
        //console.log("testest");
        var form = document.getElementById("form");
        var header = document.getElementById("header");

        var logout = document.createElement("button");
        logout.innerHTML = "Log Out";
        logout.onclick = function(){
            localStorage.setItem("logged", "false");
            location.reload();
        };
        logout.className = "btn btn-primary";

        form.remove();
        header.innerHTML = "You are logged in successfully";
        document.getElementById("formdiv").appendChild(logout);



    }
    else{
    emails = JSON.parse(localStorage.getItem("emails"));
    passwords = JSON.parse(localStorage.getItem("passwords"));
    emailTB = document.getElementById("email");
    passwordTB = document.getElementById("password");

    //console.log(emails);
    //console.log(passwords);

    document.getElementById("loginbtn").addEventListener("click", LogIn, false);
    }
})();

function LogIn(){
    console.log("here");
    if(emails.includes(emailTB.value) && passwords.includes(passwordTB.value)){
        //console.log("logged in");
        if(emails.indexOf(emailTB.value) == passwords.indexOf(passwordTB.value)){
        localStorage.setItem("logged", "true");
        }
        else{
            alert("Log in information doesnt match saved data");
        }
    }
    else{
        alert("Log in information doesnt match saved data");
    }

    
}