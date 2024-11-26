import { endpoints } from "./home.js";
import { getAllData } from "./contacts.js";

const row = document.querySelector('.row');

let products = null;

async function getProducts() {
    try {
        const response = await getAllData(endpoints.products);
        products = response.data;
        drawCards(products);
    } catch (error) {
        console.log(error);
    }
}

getProducts();


function drawCards(array) {
    row.innerHTML = "";
    array.forEach((products) => {
        const col4Div = document.createElement('div')
        col4Div.className = 'col-4'
        col4Div.innerHTML = `
        <div class = "card">
        <img src="${products.image}" alt="">
        <div class ="texts">
         <h2 class="card-title">${products.name}</h2>
                <p class="card-text">${products.description}</p>
                <p class="author">Price: $${products.price}</p
        </div>
        </div>
        
    `;
        row.append(col4Div)
    });

}
const search = document.getElementById('input-text');
let timeout = null;

search.addEventListener("keyup", function (e) {
    clearTimeout(timeout);
    let response;

    timeout = setTimeout(async () => {
        response = await getAllData(endpoints.products);

        const filteredProducts = response.data.filter((q) =>
            q.name.toLowerCase().includes(e.target.value.toLowerCase().trim()) ||
            q.description.toLowerCase().includes(e.target.value.toLowerCase().trim())
        );

        drawCards(filteredProducts);
    }, 500);
});

const AdminProducts = document.getElementById('Admin-Products');
AdminProducts.addEventListener('click', () => {
    location.href = "./Admin-products.html"
})