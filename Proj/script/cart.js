let cart = JSON.parse(localStorage.getItem("cart"));
(function(){

    console.log(cart);
    cart.forEach(element => {
        let bookName = document.createElement("li");
        bookName.className = "list-group-item";
        bookName.textContent = element.name;
        bookName.setAttribute("style", "background-color: lightgreen; margin: 0%; font-weight: bold;");
        //bookName.id = "name" + element.id;

        document.getElementById("nameList").appendChild(bookName);

        let bookPrice = document.createElement("li");
        bookPrice.className = "list-group-item";
        bookPrice.textContent = "€" + element.price;
        bookPrice.setAttribute("style", "background-color: lightgreen; margin: 0%; font-weight: bold;");
        //bookPrice.id = "price" + element.id;

        document.getElementById("priceList").appendChild(bookPrice);

        let removeLink = document.createElement("li");
        removeLink.className = "list-group-item";
        removeLink.textContent = "Remove item";
        removeLink.id = "remove" + cart.indexOf(element);
        removeLink.onclick = function(){
            removeItem(removeLink.id);
        }
        removeLink.setAttribute("style", "background-color: lightgreen; margin: 0%; text-decoration: underline; cursor: pointer; font-weight: bold;");

        document.getElementById("removeList").appendChild(removeLink);
    });
})();

function removeItem(removeId){
    
    var id = parseInt(removeId[6]);
    console.log(id);
    cart.splice(id-1, 1);
    console.log(cart)
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}