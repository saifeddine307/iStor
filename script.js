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