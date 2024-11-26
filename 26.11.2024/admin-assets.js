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

function drawTable(array) {
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
                <button id = "Edit-btn" data-id=${product.id
            }>Edit</button>
                <button id = "delete-btn" data-id=${product.id
            }>delete</button>
                </td>
            
               
              
            `;

        tBody.appendChild(trElem);
    });
    const allDeleteBtns = document.querySelectorAll("#delete-btn");

    allDeleteBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");

            Swal.fire({
                title: "Are you sure to delete product!?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteProduct(productId, this);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                    });
                }
            });
        });
    });

    async function deleteProduct(id, btn) {
        const response = await deleteDataById(endpoints.products, id)
        btn.closes('tr').remove()
    }
    const EditBtn = document.querySelectorAll("#Edit-btn");

    EditBtn.forEach((btn) => {
        btn.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            const product = products.find(p => p.id === productId);
            Swal.fire({
                title: 'Edit Product',
                html: `
                  <form>
                    <div class = "id">
                  <label for="id">id</label>
                    <input type="number" id="id" value="${product.id}">
                  </div>
                  <div class = "name">
                  <label for="name">name</label>
                    <input type="text" id="name" value="${product.name}">
                  </div>
                     <div class = "description">
                       <label for="description">Description</label>
                    <input type="text" id="description" value="${product.description}">
                     </div>
                      <div class = "price">
                       <label for="price">Price</label>
                    <input type="number" id="price" value="${product.price}">
                      </div>
                  </form>
                `,
                showCancelButton: true,
                confirmButtonText: 'Save Changes',
                cancelButtonText: 'Cancel',
                preConfirm: () => {
                    const newId = document.getElementById("id").value;
                    const newName = document.getElementById("name").value;
                    const newDescription = document.getElementById("description").value;
                    const newPrice = parseFloat(document.getElementById("price").value);

                    product.id = newId;
                    product.name = newName;
                    product.description = newDescription;
                    product.price = newPrice;


                    drawTable();
                }
            });
        });
    })
}

const BackBtn = document.getElementById('back-btn');
BackBtn.addEventListener('click', () => {
    location.href = "./home.html"
})

const CreateBtn = document.getElementById('Create-btn')
CreateBtn.addEventListener('click', () => {
    location.href = "./Add-product.html"
})

