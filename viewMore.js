 document.addEventListener("DOMContentLoaded", () => {
  let products = JSON.parse(localStorage.getItem("products"));
  let selectedProductId = localStorage.getItem("selectedProductId");
  let producDetails = document.getElementById("productDetails");

  if (products && selectedProductId) {
    let selectedProduct = products.find(
      (product) => product.id == selectedProductId
    );
    if (selectedProduct) {
      producDetails.innerHTML = ` 
      <main>       
            <div id="container">
        <div class="image">
        <img src="${selectedProduct.images}"/>
        </div>
        <div class='details'>
        <h3>${selectedProduct.title}</h3>
        <h4>Category : ${selectedProduct.category}</h4>
        <h4>Brand : ${selectedProduct.brand}</h4>
         
        <div class="priceconatin"> 
        <h3>Price :$${selectedProduct.price} </h3>
        </div>  
       <button id="addTocart">cart</button>
        <button id="backToHome">Back to Home Page</button>  &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp 
            

        </div></div></div>
        
         <div id="review">
            <h1>Customer reviews</h1>
            <hr>
            ${selectedProduct.reviews.map(
              (review) => `
                <div id="ratings">${"❤️".repeat(review.rating)}${"🖤".repeat(
                5 - review.rating
              )}</div>
            <p id="comment">${review.comment}</p>
            <p id="nam">By <strong>${
              review.reviewerName
            }</strong> on ${new Date(review.date)}</p>
                        <hr>
                `
            )}
            </div>
             </main>`;
      document.getElementById("addTocart").addEventListener("click", () => {
        addTocart(selectedProduct);
      });
      document.getElementById("backToHome").addEventListener("click", () => {
        window.location.href = "./Home.html";
      });
    }
  } else {
    producDetails.innerHTML = "<p>No product selected</p>";
  }
});

//! added a product into cart
function addTocart(selectedProduct) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(selectedProduct);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("product is added");
}
