let currentCategory = "all";
const cart = [];
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
const searchInput =  document.querySelector(".Search");
function applyFilters(){
    const value =  searchInput.value.trim().toLowerCase();
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(function(card){
        const name  = card.querySelector(".productName").textContent.trim().toLowerCase()  ;
        const matchName = name.includes(value);
        const matchCategory = currentCategory === "all" || card.dataset.category === currentCategory ;  
        if(matchName && matchCategory){
            card.style.display = "flex" ; 
        }else{
            card.style.display = "none" ;
        }
    });
}
searchInput.addEventListener("input" , applyFilters);
const categories = document.querySelectorAll(".category");
categories.forEach(function(category){
    category.addEventListener("click", function(){
        currentCategory = category.textContent.trim();
        applyFilters();
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
function renderCart(){
    const itemsBox = document.querySelector("#cart-items");
    itemsBox.innerHTML = "";
    cart.forEach(function(item , index){
        const row = document.createElement("p");
        row.textContent = item.name + "-" + item.price + " DA";
        const remov  = document.createElement("button");
        remov.textContent = "Remov";
        itemsBox.appendChild(row);
        itemsBox.appendChild(remov);
        remov.addEventListener("click" , function(){
        cart.splice(index, 1);
        document.querySelector(".container").textContent = cart.length ; 
        renderCart();
        })
    });
    document.querySelector("#cart-total").textContent = getTotal() + " DA";
}
function createCard(product){
    const addBtn = document.createElement("button"); 
    addBtn.className = "add-to-cart"; 
    addBtn.textContent = "Add to cart";
    addBtn.addEventListener("click", function(){
    cart.push(product) ;
    document.querySelector(".container").textContent = cart.length ; 
    renderCart();
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
function getTotal(){
    let totalPrice = 0;
    cart.forEach(function(item){
        totalPrice += item.price ; 
    })
    return totalPrice ;
}
const grid = document.querySelector(".products-grid");
products.forEach(function (product) {
    grid.appendChild(createCard(product));
});
const cartBtn = document.querySelector(".cart");
const cartPanel = document.querySelector("#cart-panel");

cartBtn.addEventListener("click", function(){
    cartPanel.classList.toggle("open");
});