import React from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../style/paymentPage.style.css";

const OrderCompletePage = () => {
  const { orderNum } = useSelector((state) => state.order);
  // If user come this page w/o Order#, Back to main page
  //만약 주문번호가 없는상태로 이페이지에 왔다면 다시 메인페이지로 돌아가기
  if (orderNum === "") 
    return (
      <Container className="confirmation-page">
        <h1>No Order Found</h1>
        <div>
          Please Back to Main
          <Link to={"/"}>Back to Main</Link>
        </div>
      </Container>
    );
  return (
    <Container className="confirmation-page">
      <img
        src="/images/greenCheck.png"
        width={100}
        className="check-image"
        alt="greenCheck.png"
      />
      <h2>Completed your order</h2>
      <div>Order Number:{orderNum}</div>
      <div>
        Please check your order status in My Orders
        <div className="text-align-center">
          <Link to={"/account/purchase"}>Go to my order</Link>
        </div>
      </div>
    </Container>
  );
};

export default OrderCompletePage;
