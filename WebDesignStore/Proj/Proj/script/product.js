let data;
let cart = [];
let index = parseInt(localStorage.getItem("id"));
(async function(){
    console.log(localStorage.getItem("id"));
    console.log(JSON.parse(localStorage.getItem("cart")));

        let books= JSON.parse(localStorage.getItem("books"));

        var book = books[index-1];
        console.log(book);

        let description = document.createElement("p");
        description.innerHTML = book.desc + book.desc + book.desc;
        document.getElementById("book").appendChild(description);

        let cartbtn = document.createElement("button");
        cartbtn.textContent = "Add to cart";
        cartbtn.className = "btn btn-success";
        cartbtn.onclick = function(){ addToCart(book)};
        document.getElementById("book").appendChild(cartbtn);
        
})();

function addToCart(book){
    
    cart = JSON.parse(localStorage.getItem("cart"));
    if(cart == null){
        cart = [book];
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart");
    }
    else {
        cart.push(book);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Item added to cart");
    }
}