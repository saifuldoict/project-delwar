import { makeUrl } from "./commonFunction.js";
import { useParams } from "./commonFunction.js";
import Loading from "./loading.js";

const rootDiv = document.getElementById('root');

function loadData(){
    rootDiv.innerHTML= Loading();
    const {id}= useParams();
    const url = makeUrl(`/get-product-by/${id}`);
    console.log(url)
   // const url =http://localhost:5000/api/get-product-by/${id}`;
    fetch(url)
        .then(res=> res.json())
        .then(res=> printData(res));

}

const printData = (product)=>{
    
    const{des, img, price, productId, title}= product;
    const htmlCode =    `
                <div class="product">
                <img src="${img}">
                <h4>Product ID : ${productId}</h4>
                <h2>Price : $${price}</h2>
                <h5>${title}</h5>
                <p>${des}</p>
                <a href="shippingForm.html?productId=${productId}"><button class="btn">Buy Now </button></a>
                 </div>
                `;
     rootDiv.innerHTML= htmlCode;
};

loadData();
