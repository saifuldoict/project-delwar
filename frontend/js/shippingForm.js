

import { makeUrl } from "./shared/commonFunction.js";
import { useParams } from "./shared/commonFunction.js";

const form= document.getElementById('shipping-form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const {productId}= useParams();
    // const date = new Date();
    // const today = date.toLocalDateString(); ডেট কাজ করে না দেখতে হবে ভিডিও নং ৭২

    

    const data = {
        name: name,
        email: email,
        phone: phone,
        productId: productId,
        // date: today
    };
console.log(data)
    const url = makeUrl('/insert-new-order');
    fetch(url,{
        method: "POST",
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)

    })
    .then(res=> res.json())
    .then(res=>{
        alert('product added successfull');
        window.location.href='/frontend/html/index.html'
        //  if(res.acknowledged){
        //     alert('Order completed');
        //     window.location.href='/frontend/html/index.html'
        //  }
    })

})