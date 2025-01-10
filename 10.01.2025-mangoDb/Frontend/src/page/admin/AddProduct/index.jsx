import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import controller from '../../../services/index'; 
import { useNavigate } from 'react-router-dom';
import "./index.css"

const AddProduct = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (values, { resetForm }) => {
    try {

      await controller.addNewData('products', values);
     
      navigate('/admin/TableProducts'); 
      resetForm(); 
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="add-product-container">
      <h1>Add New Product</h1>

      <Formik
        initialValues={{
          title: '',
          image: '',
          rating: '',
          reviews: '',
          description: '',
          price: '',
        }}
        validate={(values) => {
          const errors = {};
          if (!values.title) errors.title = 'Title is required';
          if (!values.image) errors.image = 'Image is required';
          if (!values.rating) errors.rating = 'Rating is required';
          else if (values.rating < 0 || values.rating > 5) errors.rating = 'Rating must be between 0 and 5';
          if (!values.reviews) errors.reviews = 'Reviews is required';
          if (!values.description) errors.description = 'Description is required';
          if (!values.price) errors.price = 'Price is required';
          else if (isNaN(values.price)) errors.price = 'Price must be a number';
          return errors;
        }}
        onSubmit={handleFormSubmit}
      >
        {({ values, handleChange }) => (
          <Form>
            <div>
              <label>Title</label>
              <Field
                type="text"
                name="title"
                value={values.title}
                onChange={handleChange}
                className="form-control"
              />
              <ErrorMessage name="title" component="div" className="error-message" />
            </div>

            <div>
              <label>Image URL</label>
              <Field
                type="url"
                name="image"
                value={values.image}
                onChange={handleChange}
                className="form-control"
              />
              <ErrorMessage name="image" component="div" className="error-message" />
            </div>

            <div>
  <label>Rating</label>
  <Field
    type="number"
    name="rating"
    value={values.rating}
    onChange={handleChange}
    className="form-control"
    min="0"
    max="5"
  />
  <ErrorMessage name="rating" component="div" className="error-message" />
</div>


            <div>
              <label>Reviews</label>
              <Field
                type="number"
                name="reviews"
                value={values.reviews}
                onChange={handleChange}
                className="form-control"
              />
              <ErrorMessage name="reviews" component="div" className="error-message" />
            </div>

            <div>
              <label>Description</label>
              <Field
                type="text"
                name="description"
                value={values.description}
                onChange={handleChange}
                className="form-control"
              />
              <ErrorMessage name="description" component="div" className="error-message" />
            </div>

            <div>
              <label>Price</label>
              <Field
                type="number"
                name="price"
                value={values.price}
                onChange={handleChange}
                className="form-control"
              />
              <ErrorMessage name="price" component="div" className="error-message" />
            </div>

            <button type="submit" className="btn btn-primary">Add Product</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;
