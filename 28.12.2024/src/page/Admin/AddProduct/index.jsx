import { useFormik } from "formik"; 
import controller from "../../../services";
import { endpoints } from "../../../services/constants";
import styles from "./index.module.scss"; 

const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
      rating: {
        rate: "",
        count: "",
      }
    },
    onSubmit: async (values) => {
      const res = await controller.addNewData(endpoints.products, values);
      formik.resetForm();
    },
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        className={styles.input}
      />

      <label htmlFor="price">Price</label>
      <input
        id="price"
        name="price"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.price}
        className={styles.input}
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="description"
        onChange={formik.handleChange}
        value={formik.values.description}
        rows={5}
        className={styles.textarea}
      ></textarea>

      <label htmlFor="category">Category</label>
      <input
        id="category"
        name="category"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.category}
        className={styles.input}
      />

      <label htmlFor="image">Image URL</label>
      <input
        id="image"
        name="image"
        type="url"
        onChange={formik.handleChange}
        value={formik.values.image}
        className={styles.input}
      />

      <label htmlFor="rating.rate">Rating (Rate)</label>
      <input
        id="rating.rate"
        name="rating.rate"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.rating.rate}
        className={styles.input}
      />

      <label htmlFor="rating.count">Rating (Count)</label>
      <input
        id="rating.count"
        name="rating.count"
        type="number"
        onChange={formik.handleChange}
        value={formik.values.rating.count}
        className={styles.input}
      />

      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default AddProduct;



