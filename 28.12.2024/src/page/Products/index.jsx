import { useState, useEffect } from "react"; 
import controller from "../../services"; 
import { endpoints } from "../../services/constants"; 
import ProductCard from "../../components/ProductCard"; 
import { Container, Row, Col, Form } from "react-bootstrap"; 
  // import "./index.css"

const Products = () => { 
  const [products, setProducts] = useState([]); 
  const [searchQuery, setSearchQuery] = useState("");
  const [sortValue, setSortValue] = useState("default");

  const getProducts = async () => { 
    try { 
      const data = await controller.getAllData(endpoints.products); 
      setProducts(data); 
    } catch (error) { 
      console.log(error); 
    } 
  };

  const filteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortValue) {
      case "priceAsc":
        return a.price - b.price; 
      case "priceDesc":
        return b.price - a.price; 
      case "titleAsc":
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase()); 
      case "titleDesc":
        return b.title.toLowerCase().localeCompare(a.title.toLowerCase()); 
      default:
        return 0;
    }
  });

  useEffect(() => { 
    getProducts(); 
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortValue(e.target.value);
  };

  return ( 
    <> 
      <div id="products"> 
        <Container> 
          <Row className="my-4">

            <Col xs={12} md={4} className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Search" 
                value={searchQuery} 
                onChange={handleSearchChange}
              />
            </Col>

            <Col xs={12} md={4} className="mb-3">
              <Form.Select 
                aria-label="Sort Products" 
                value={sortValue} 
                onChange={handleSortChange} 
              >
                <option value="default">Default</option>
                <option value="priceAsc">By Price Asc</option>
                <option value="priceDesc">By Price Desc</option>
                <option value="titleAsc">By Title Asc</option>
                <option value="titleDesc">By Title Desc</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
          
            {sortedProducts.length > 0 ? (
              sortedProducts.map((p) => (
                <Col xs={12} sm={6} md={3} key={p.id} className="mb-4">
                  <ProductCard product={p} />
                </Col>
              ))
            ) : (
              <p>No products found</p> 
            )}
          </Row>
        </Container>
      </div> 
    </> 
  ); 
};

export default Products;


