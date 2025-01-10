import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2'; 
import controller from '../../../services/index'; 
import './index.css';

const TableProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await controller.getAllData('products');
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (priceFilter === 'AscToPrice') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (priceFilter === 'DescToPrice') {
      filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [searchQuery, priceFilter, products]);

  const handleEdit = (product) => {
    Swal.fire({
      title: 'Edit Product',
      html: `
        <input type="text" id="swal-title" class="swal2-input" value="${product.title}" placeholder="Title" />
        <input type="text" id="swal-description" class="swal2-input" value="${product.description}" placeholder="Description" />
        <input type="number" id="swal-price" class="swal2-input" value="${product.price}" placeholder="Price" />
        <input type="text" id="swal-image" class="swal2-input" value="${product.image}" placeholder="Image URL" />
        <input type="number" id="swal-rating" class="swal2-input" value="${product.rating}" placeholder="Rating" min="0" max="5" />
        <input type="number" id="swal-reviews" class="swal2-input" value="${product.reviews}" placeholder="Reviews" />
      `,
      focusConfirm: false,
      showCancelButton: true,
      cancelButtonText: 'Cancel',
      confirmButtonText: 'OK',
      preConfirm: async () => {
        const title = document.getElementById('swal-title').value;
        const description = document.getElementById('swal-description').value;
        const price = document.getElementById('swal-price').value;
        const image = document.getElementById('swal-image').value;
        let rating = document.getElementById('swal-rating').value;
        const reviews = document.getElementById('swal-reviews').value;

        rating = parseInt(rating);
        
        if (rating < 0 || rating > 5 || isNaN(rating)) {
          Swal.fire('Error!', 'Rating must be between 0 and 5.', 'error');
          return false;
        }

        const updatedProduct = { 
          ...product, 
          title, 
          description, 
          price: parseFloat(price), 
          image, 
          rating, 
          reviews: parseInt(reviews) 
        };

        if (JSON.stringify(updatedProduct) === JSON.stringify(product)) {
          Swal.fire('No changes detected!', 'Please make some changes before updating.', 'info');
          return false; 
        }
        try {
          await controller.editDataById('products', updatedProduct.id, updatedProduct);
          setProducts(products.map(p => p.id === updatedProduct.id ? updatedProduct : p));
          Swal.fire('Updated!', 'Product has been updated.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'There was an issue updating the product.', 'error');
        }
      }
    });
  };

  const handleDelete = (productId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await controller.deleteDataById('products', productId);
          setProducts(products.filter(product => product.id !== productId));
          Swal.fire('Deleted!', 'Your product has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'There was an issue deleting the product.', 'error');
        }
      }
    });
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handlePriceFilter = (e) => {
    setPriceFilter(e.target.value);
  };

  return (
    <div>    
      <h1 className='Product-List'>Product List</h1>
      <div className="container">
        <div className="row mb-4">
          <div className="col-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search..." 
              onChange={(e) => handleSearch(e.target.value)} 
            />
          </div>
          <div className="col-4"></div>
          <div className="col-3">
            <select 
              className="form-control" 
              id="price-filter" 
              onChange={handlePriceFilter}
            >
              <option value="">Filter by Price</option>
              <option value="AscToPrice">Asc to price</option>
              <option value="DescToPrice">Desc to price</option>
            </select>
          </div>
        </div>
        <div className="table-products">
          <table cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Title</th>
                <th>Rating</th>
                <th>Reviews</th>
                <th>Description</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                      <img src={product.image} alt={product.title} width="100" />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.rating}</td>
                    <td>{product.reviews}</td>
                    <td>{product.description}</td>
                    <td>${product.price}</td>
                    <td className='actions'>
                      <button onClick={() => handleEdit(product)} className='btns btn-edit'>Edit</button>
                      <button onClick={() => handleDelete(product.id)} className='btns btn-delete'>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8">No products available.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TableProducts;



