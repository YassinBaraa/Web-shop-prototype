document.addEventListener('DOMContentLoaded', function() {

    const products = document.querySelectorAll('#product_div');
    products.forEach(product =>{
        product.addEventListener("click",function(){

            div.textContent = parseInt(div.textContent) + 1;

        });
    });

});


