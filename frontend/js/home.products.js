import productCard from "./shared/productCard.js";
function loadProduct(){
    const url = 'http://localhost:5000/api/latest-products';
    fetch(url)
    .then(res=> res.json())
    .then(res=> printData(res))
}
loadProduct();

function printData(products){
    const div = document.getElementById('product_container');

    let htmlCode=``;

    products.forEach(product =>{
        htmlCode += productCard(product);

    });
    div.innerHTML= htmlCode;
}




