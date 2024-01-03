let data;
let list = document.getElementById("bookList");
(async function(){
    //console.log("aaaa");

    const response = await fetch("https://werlone.github.io/JsonHost/help.json");
        if(!response.ok) alert("error");
    
        //process data as json
        data = await response.json();

        let books;
        books = JSON.stringify(data);
        localStorage.setItem("books", books);

        //read book data, generate elements for each
        data.forEach(element => {
            let col = document.createElement("div");
            col.className = "col";
            col.id = element.id;
            col.onclick = function() {logInfo(col);};

            let card = document.createElement("div");
            card.className = "card h-100"
            card.style = "min-width: 5rem;"

            let image = document.createElement("img");
            image.setAttribute("src", "images/book.png");
            image.className = "card-img-top";
            image.setAttribute("alt", "bookimg")

            let body = document.createElement("div");
            body.className = "card-body";

            let title = document.createElement("h5");
            title.className = "card-title";
            title.innerHTML = element.name;

            //shorten description (split in middle)
            var middle = Math.floor(element.desc.length / 2);
            var before = element.desc.lastIndexOf(' ', middle);
            var after = element.desc.indexOf(' ', middle + 1);

            if (middle - before < after - middle) {
                middle = before;
            } else {
                middle = after;
            }

            var s1 = element.desc.substr(0, middle);



            var cont = element.author + ", " + element.genre + ", " + s1;      
            let desc = document.createElement("p");
            desc.className = "card-text";
            desc.innerHTML = cont;

            let link = document.createElement("a");
            link.setAttribute("href", "product.html");
            link.className = "stretched-link";
            //link.setAttribute("id", element.id);
            //link.setAttribute('onclick', logInfo(link));

            body.appendChild(title);
            body.appendChild(desc);
            body.appendChild(link);
            
            card.appendChild(image);
            card.appendChild(body);

            col.appendChild(card);

            bookList.appendChild(col);
        });
})();

function logInfo(e){
    console.log(e.getAttribute("id"));
    localStorage.setItem("id", e.getAttribute("id"));
}



/*
                <div class="col">
                  <div class="card h-100" style="min-width: 5rem;">
                    <img src="images/book.png" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <a href="#" class="stretched-link"></a>
                    </div>
                  </div>
                </div>
                */ 