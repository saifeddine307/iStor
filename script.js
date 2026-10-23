const Card = document.querySelectorAll(".product-card");
let i = 0 ; 
function cartCounter(){
    Card.forEach(function(card){
        card.addEventListener("click" , function(){
            i++ ;
            card.querySelector(".add-to-cart").textContent = i ;
        })
    })
}