//! Fetch data and store in array
let products=[];
function fetchdata(){ 
    fetch("https://dummyjson.com/products").then((val)=>{ //here we fetch data
        return val.json();
    }).then((res)=>{
        products=res.products;
        localStorage.setItem("products",JSON.stringify(products))
        fetchProduct(products)
    });
}
//! design a card 
function fetchProduct(products){
    let product=""
    products.map((v)=>{
        product +=`
        <div id="container">
        <div class="image">
        <img src="${v.images}"/>
        </div>
        <h3>${v.title}</h3>

        <h3 class="rate ">${v.rating} ⭐⭐⭐..</h3>

<div class="priceconatin"> <h3>Price : ${v.price} </h3>
        <button onClick="viewMore(${v.id})">View More</button></div>       
        </div>`
    })
    document.getElementById("containerbox").innerHTML=product;
    
}
//! filter method for search icon (comparing user input with product)
document.getElementById("searchproduct").addEventListener("input",
    function searchItem(event){
    let searchTerm = event.target.value.toLowerCase();
    let filterProd = products.filter((product)=>{
       return product.title.toLowerCase().includes(searchTerm) || product.category.toLowerCase().includes(searchTerm)    })
    fetchProduct(filterProd);
})

//! View More
function viewMore(productId){
    localStorage.setItem("selectedProductId",productId);
    window.location.href='./viewMore.html'
}
fetchdata()

