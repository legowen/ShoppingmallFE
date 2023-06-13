import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [products, setProducts] = useState([]);

    const [query, setQuery] = useSearchParams();

    let [error, setError] = useState("");

    const getProducts = async() =>{
    
        try{ 
            let keyword = query.get("q") || "";
            let url = `http://localhost:5000/products?q=${keyword}`;
            let response = await fetch(url);
            let data = await response.json();
            if (data.length < 1 ){
                if (keyword !== "") {
                    setError(`Sorry, We couldn't find any results with ${keyword}`)
                } else {
                    throw new Error ("Sorry, We couldn't find any results")
                }
            }
            setProducts(data);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect( () => {
        getProducts();
    }, [query]);

  return (
    <Container>
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          {products.length > 0 &&
            products.map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductAll