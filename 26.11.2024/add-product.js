import { endpoints } from "./home.js";
import { deleteDataById, getAllData } from "./contacts.js";

const tBody = document.querySelector('tbody');

let products = null;

async function getProducts() {
    try {
        const response = await getAllData(endpoints.products);
        products = response.data;
        drawTable(products);
    } catch (error) {
        console.log(error);
    }
}

getProducts();


const form = document.getElementById('add-product-form');
const nameInput = document.getElementById('product-name');
const descriptionInput = document.getElementById('product-description');
const priceInput = document.getElementById('product-price');
const stockInput = document.getElementById('product-stock');


form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const newProduct = {
        id: (products.length + 1).toString(), 
        name: nameInput.value,
        description: descriptionInput.value,
        price: parseFloat(priceInput.value),
        stock: parseInt(stockInput.value),
        discount: 0,
        categoryId: 1,
        image: "https://via.placeholder.com/150", 
        createdAt: new Date().toISOString() 
    };

    products.push(newProduct);

    drawTable(products);

    form.reset();
});

function drawTable(array) {
    const tBody = document.querySelector('tbody');
    tBody.innerHTML = "";

    array.forEach((product) => {
        const trElem = document.createElement("tr");
        trElem.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>
            <td>${product.stock}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        tBody.appendChild(trElem);
    });
}

// Изначальный вызов для отрисовки таблицы
drawTable(products);
