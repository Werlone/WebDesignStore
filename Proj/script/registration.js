let button = document.getElementById("submitbtn");
let form = document.getElementById("form");
    
let email = document.getElementById("inputEmail");
let password = document.getElementById("inputPassword");
let fname = document.getElementById("inputFirstName");
let lname = document.getElementById("inputLastName");
let address = document.getElementById("inputAddress");
let city = document.getElementById("inputCity");
let zip = document.getElementById("inputZip");

let emailArray;
let passwordArray;
(function(){

    //console.log("aaaaaa");

    button.setAttribute('disabled', 'disabled');

    button.addEventListener("click", Register, false);
    form.addEventListener("input", CheckForm, false);


    emailArray = JSON.parse(localStorage.getItem("emails"));
    passwordArray = JSON.parse(localStorage.getItem("passwords"));

    console.log(JSON.parse(localStorage.getItem("emails")));
    //console.log(localStorage.getItem("email"));
    //console.log(localStorage.getItem("password"));
    
})();

function CheckForm(){
     
    if(fname.value.trim() != "" && lname.value.trim() != "" && email.value.trim() != "" && password.value.trim() != "" && address.value.trim() != "" && city.value.trim() != "" && zip.value.trim() != ""){
        button.removeAttribute('disabled');
    }
    else{
        button.setAttribute('disabled', 'disabled');  
    }
    
    
}

function Register(){

    if(email.value.trim() != "" && password.value.trim() != ""){
        
        emailArray.push(email.value);
        passwordArray.push(password.value);
        
        localStorage.setItem("emails", JSON.stringify(emailArray));
        localStorage.setItem("passwords", JSON.stringify(passwordArray));
        //console.log(email.value);
        //console.log(password.value);
    }
}




