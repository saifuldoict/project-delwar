import { sliceTitle } from "./commonFunction.js";

function productCard(product){
    const {img, title, price} = product;
    const htmlCode =`
           <div class="product_card">
                <img src="${img}">
                <h4>$ ${price}</h4>
                <p>${sliceTitle(title)}</p>
                <a href="#"><button>View details</button></a>
            </div>
            
            `;
    return htmlCode;
}
export default productCard;

