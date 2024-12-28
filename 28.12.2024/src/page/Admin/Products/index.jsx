import { Col, Row, Table, Tooltip, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import controller from "../../../services";
import { endpoints } from "../../../services/constants";
import Swal from "sweetalert2";

const columns = [
  {
    title: "ID",
    dataIndex: "id",
  },
  {
    title: "Photo",
    dataIndex: "image",
    render: (text, record) => {
      return <img src={text} alt={record.title} width={100} />;
    },
  },
  {
    title: "Title",
    dataIndex: "title",
    showSorterTooltip: {
      target: "full-header",
    },
    sorter: (a, b) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
  },
  {
    title: "Description",
    dataIndex: "description",
    render: (text, record) => (
      <Tooltip title={text} color={"black"} key={"black"}>
        {text.slice(0, 50)}...
      </Tooltip>
    ),
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Rate",
    dataIndex: "rating",
    render: (rating) => (rating ? rating.rate : "N/A"),
  },
  {
    title: "Count",
    dataIndex: "rating",
    render: (rating) => (rating ? rating.count : "N/A"),
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: (_, record) => (
      <div>
        <Button
          type="link"
          icon={<EditOutlined />}
          onClick={() => handleEdit(record)}
        >
          Edit
        </Button>
        <Button
          type="link"
          icon={<DeleteOutlined />}
          danger
          onClick={() => handleDelete(record.id)}
        >
          Delete
        </Button>
      </div>
    ),
  },
];

const handleEdit = (record) => {
  Swal.fire({
    title: `Edit Product: ${record.title}`,
    html: `
      <input id="swal-input-title" class="swal2-input" value="${record.title}" placeholder="Title" />
      <input id="swal-input-price" class="swal2-input" value="${record.price}" placeholder="Price" type="number" />
      <input id="swal-input-description" class="swal2-input" value="${record.description}" placeholder="Description" />
      <input id="swal-input-category" class="swal2-input" value="${record.category}" placeholder="Category" />
      <input id="swal-input-image" class="swal2-input" value="${record.image}" placeholder="Image URL" />
    `,
    focusConfirm: false,
    preConfirm: () => {
      const title = document.getElementById('swal-input-title').value;
      const price = document.getElementById('swal-input-price').value;
      const description = document.getElementById('swal-input-description').value;
      const category = document.getElementById('swal-input-category').value;
      const image = document.getElementById('swal-input-image').value;

      if (!title || !price || !description || !category || !image) {
        Swal.showValidationMessage('All fields are required');
        return false;
      }

      return { title, price: parseFloat(price), description, category, image };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const updatedData = result.value;
      controller
        .editDataById(endpoints.products, record.id, updatedData)
        .then(() => {
          Swal.fire("Updated!", "Product has been updated successfully.", "success");
          window.location.reload();  
        })
        .catch((error) => {
          Swal.fire("Error", "There was an error updating the product.", "error");
          console.error("Error editing product:", error);
        });
    }
  });
};

const handleDelete = (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      controller
        .deleteDataById(endpoints.products, id)
        .then(() => {
          Swal.fire("Deleted!", "The product has been deleted.", "success");
          window.location.reload();
        })
        .catch((error) => {
          Swal.fire("Error", "There was an error deleting the product.", "error");
          console.error("Error deleting product:", error);
        });
    }
  });
};

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    controller.getAllData(endpoints.products).then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div id="admin-products">
      <div className="container">
        <div className="admin-products">
          <Table
            columns={columns}
            dataSource={products}
            onChange={(pagination, filters, sorter, extra) => {
              console.log("params", pagination, filters, sorter, extra);
            }}
            rowKey="id"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;


