const Card = document.querySelectorAll(".product-card");
let i = 0 ; 
function cartCounter(){
    Card.forEach(function(card){

        card.querySelector(".add-to-cart").addEventListener("click" , function(){
            i++ ;
            document.querySelector(".container").textContent = i ;
        })
    })
}
function modelCartOverlay(card){
        const modalOver = document.createElement("div");
        modalOver.className = "modal-overlay active";
        const modalBox = document.createElement("div");
        modalBox.className = "modal-box" ;
        const modalClose = document.createElement("button");
        modalClose.id = "close-modal";
        modalClose.textContent ="X"
        const modalTitle = document.createElement("h2");
        modalTitle.id ="modal-title";
        modalTitle.textContent = card.querySelector(".productName").textContent ;
        const modalPrice = document.createElement("p");
        modalPrice.id = "modal-price";
        modalPrice.textContent = card.querySelector(".productPrice").textContent ;
        const modalInfo = document.createElement("p");
        modalInfo.id = "modal-info";
        modalInfo.textContent = card.querySelector(".productInfo").textContent ;
        const addTocart = document.createElement("button");
        addTocart.className = "add-to-cart";
        addTocart.textContent = card.querySelector(".add-to-cart").textContent ;
        modalBox.appendChild(modalClose);
        modalBox.appendChild(modalTitle);
        modalBox.appendChild(modalPrice);
        modalBox.appendChild(modalInfo);
        modalBox.appendChild(addTocart);
        modalOver.appendChild(modalBox);
        document.body.appendChild(modalOver);
    }
function LiveSearch(card){
    const query = card.querySelector(".productName").textContent.trim().toLowerCase() ;
    const Sinput = document.querySelector(".Search").value.trim().toLowerCase() ;
    const Sresult = query.includes(Sinput) ;
    const Catygories = document.querySelectorAll(".catygory");
    Catygories.forEach(function(catygory){
        const Catygory = catygory.textContent.trim().toLocaleLowerCase();
        const catySelect = Catygory === "all" || Catygory === Sinput ;
        if(catySelect && Sresult){
            card.style.display= "block" ;
        }else{
           card.style.display = "none" ;
        }

    })
}