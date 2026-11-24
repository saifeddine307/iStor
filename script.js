let currentCategory = "all";
let i = 0 ; 
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
const categories = document.querySelectorAll(".category");
categories.forEach(function(category){
    category.addEventListener("click", function(){
        const text = category.textContent.trim();
        currentCategory = text;
        const cards = document.querySelectorAll(".product-card");
        cards.forEach(function(card){
            const match = text === "all" || card.dataset.category === text;
            if(match){
                card.style.display = "flex";
            }else{
                card.style.display = "none";
            }
        });
    });
});
const products = [
    { name: "iPhone 16", price: 159000, info: "128GB . Blue", category: "iPhone" , image: "Images/images 2.jpg" },
    {name : "MacPro " , price: 250000 , info : "1TB . Black " , category: "Mac" , image: "Images/images 2.jpg"} , 
    {name : "AirPods" , price : 32000 , info:"10 hours" , category:"AirPods" , image: "Images/images 2.jpg"},
     {name : "watch" , price : 56000 , info:"Orange" , category:"watch" , image: "Images/images 2.jpg"}
];

products.forEach(function(product){
    console.log(product.name);
});
function createCard(product){
    const addBtn = document.createElement("button"); 
    addBtn.className = "add-to-cart"; 
    addBtn.textContent = "Add to cart";
    addBtn.addEventListener("click", function(){
    i++;
    document.querySelector(".container").textContent = i;
    });
    const  backCard = document.createElement("article"); 
    backCard.className = "product-card" ; 
    backCard.dataset.category = product.category;
    const name = document.createElement("h3");
    name.className = "productName";
    name.textContent = product.name ; 
    const informations = document.createElement("p");
    informations.className = "productInfo";
    informations.textContent = product.info ; 
    const price = document.createElement("strong");
    price.className = "productPrice" ;
    price.textContent = product.price + " DA"; 
    const img = document.createElement("img");
    img.className = "product-image";
    img.src = product.image;
    img.alt = product.name;
    backCard.appendChild(img);
    backCard.appendChild(name);
    backCard.appendChild(informations);
    backCard.appendChild(price);
    backCard.appendChild(addBtn);
    return backCard;
}
const grid = document.querySelector(".products-grid");
products.forEach(function (product) {
    grid.appendChild(createCard(product));
});
