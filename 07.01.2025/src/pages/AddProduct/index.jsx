import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePostNewCategoryMutation } from "../../redux/services/productApi";

const AddCategory = () => {
  const [category, setCategory] = useState({ name: "", description: "" });
  const [postCategory, response] = usePostNewCategoryMutation();
  const navigate = useNavigate();

  const [error, setError] = useState(""); // To track validation errors

  const handleAddCategory = async (e) => {
    e.preventDefault();
    
    // Check if both name and description are not empty
    if (!category.name.trim() || !category.description.trim()) {
      setError("Both name and description are required.");
      return; // Prevent form submission if validation fails
    }

    try {
      await postCategory(category);
      navigate("/"); // Redirect after successful submission
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleAddCategory}>
      <label htmlFor="name">Name: </label>
      <input
        type="text"
        id="name"
        value={category.name}
        onChange={(e) =>
          setCategory({ ...category, name: e.target.value.trim() })
        }
      />
      <br />
      <br />
      <label htmlFor="desc">Description: </label>
      <input
        type="text"
        id="desc"
        value={category.description}
        onChange={(e) =>
          setCategory({ ...category, description: e.target.value.trim() })
        }
      />
      <br />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
      <button type="submit">Add</button>
    </form>
  );
};

export default AddCategory;
