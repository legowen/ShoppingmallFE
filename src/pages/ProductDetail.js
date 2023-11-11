import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Dropdown, Alert } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { id } = useParams();

  const getProductDetail = async () => {
    setLoading(true);
    let url = `https://my-json-server.typicode.com/legowen/hnm-react-router/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);

    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  if (loading || product == null) return <h1>Loading</h1>;

  return (
    <Container className="product-detail-card">
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          <Col className="product-detail-img">
            <img src={product?.img} />
          </Col>
          <Col>
            <div className="product-info">{product?.title}</div>
            <div className="product-info">{product?.price}$</div>
            <div className="choice">
              {product?.choice == true ? "Concious Choice" : ""}
            </div>
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                Size
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              Add in Cart
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail;
