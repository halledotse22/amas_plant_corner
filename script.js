import products from "./products.js";


const productsContainer = document.querySelector("#products-container");
const productCards = products.map((product) => {
    return `
        <li class="product-card">
            <img
                class="card-photo"
                src="${product.image}"
                alt="${product.name}"
            />
            <div class="card-body">
                <h3>${product.name}</h3>
                <p class="price">GH₵ ${product.price}</p>
                <p>${product.description}</p>
            </div>
        </li>
    `;
});
productsContainer.innerHTML = productCards.join("");

