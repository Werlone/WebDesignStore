let cart = JSON.parse(localStorage.getItem("cart"));
let total = 0;
(function(){
    cart.forEach(element => {
        total += parseFloat(element.price);
    });

    document.getElementById("total").textContent = "Total is €" + total;

    document.getElementById("form").addEventListener("input", InsertHyphen, false);

    document.getElementById("submitbtn").addEventListener("click", Validate, false);
})();

function InsertHyphen(){

    
    var cn = document.getElementById("inputCardNumber");
    var expd = document.getElementById("inputExpirationDate");
    //console.log(cn.value.length)
    
    if(cn.value.length == 4){
        console.log("First 4n")
        cn.value += "-";
    }
    else if(cn.value.length == 9){
        cn.value += "-";
    }
    else if(cn.value.length == 14){
        cn.value += "-";
    }

    if(expd.value.length == 2){
        expd.value += "/";
    }

    

   
}

function Validate(){
    var cn = document.getElementById("inputCardNumber");
    var expd = document.getElementById("inputExpirationDate");
    var cvv = document.getElementById("inputCVV");

    var expdSplit = expd.value.split("/");
    var cnSplit = cn.value.split("-");

    if(cn.value.length == 19 && expd.value.length == 5 && cvv.value.length == 3 && !isNaN(parseInt(cvv.value)) && !isNaN(parseInt(expdSplit[0])) && !isNaN(parseInt(expdSplit[1])) && !isNaN(parseInt(cnSplit[0])) && !isNaN(parseInt(cnSplit[1])) && !isNaN(parseInt(cnSplit[2])) && !isNaN(parseInt(cnSplit[3]))){
        alert("Payment successful");
        cart = [];
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    else {
        alert("Validation error");
    }
}