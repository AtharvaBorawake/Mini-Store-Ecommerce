document.addEventListener("DOMContentLoaded",()=>{
    displayCart();
})
function displayCart(){
    let cartContent=document.getElementById("cartContent")
    let totalPrice=document.getElementById("totalPrice")
    let cart = JSON.parse(localStorage.getItem("cart"))||[];
    
    cartContent.innerHTML=""
    let total=0;
    if(cart.length === 0){
        cartContent.innerHTML=`<p class="empty-message">Your cart is empty.<span><a href="./Home.html">start shopping</a></span></p>`
        totalPrice.innerHTML="";
    }
    cart.map((product,index)=>{
        total+=product.price;
        let productDiv = document.createElement("div");
        productDiv.classList.add("product-info")
        productDiv.innerHTML=`
        <div class="cart-container">
        <div class="image"><img class="cartimg" src="${product.images[0]}" alt="${product.title}"/></br></br></br>
        <button onClick="removeFromCart(${index})"> Remove</button>
        <button class='BuyNow' onClick="BuyNow">Buy Now</button>

        </div>
        <div class="details">
        <h2>${product.title}</h2>
        <h2><strong class="cart-price">price:</strong> $${product.price}</h2>
           <p><strong>Availability:</strong> ${product.availabilityStatus}</p>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Return Policy:</strong> ${product.returnPolicy}</p>
            <p><strong>Shipping Information:</strong> ${product.shippingInformation}</p>
            <p><strong>Stock:</strong> ${product.stock}</p>
            <p><strong>Warranty Information:</strong> ${product.warrantyInformation}</p>
            </div>
</div>
        `;
        cartContent.appendChild(productDiv);
    })
    totalPrice.innerHTML=`<h2>Total price: $ ${total.toFixed(2)}</h2> 
    <button id="backToHome">Back to Home Page</button>`;
    document.getElementById("backToHome").addEventListener('click',()=>{
        window.location.href="./Home.html";
    })
     

}
function removeFromCart(index){
    let cart=JSON.parse(localStorage.getItem("cart"))|| [];
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart()
}