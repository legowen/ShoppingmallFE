import React from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../action/cartAction";
import CartProductCard from "../component/CartProductCard";
import OrderReceipt from "../component/OrderReceipt";
import "../style/cart.style.css";

const CartPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Request cartList
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} md={7}>
          <div className="text-align-center empty-bag">
            <h2>Your cart is Empty</h2>
            <div>Add Product!</div>
          </div>
        </Col>
        <Col xs={12} md={5}>
          <OrderReceipt />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
