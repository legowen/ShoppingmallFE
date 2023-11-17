import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { currencyFormat } from "../utils/number";

const OrderReceipt = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="receipt-container">
      <h3 className="receipt-title">Order Status</h3>
      <ul className="receipt-list">
        <li>
          <div className="display-flex space-between">
            <div>Item</div>

            <div>$45</div>
          </div>
        </li>
      </ul>
      <div className="display-flex space-between receipt-title">
        <div>
          <strong>Total:</strong>
        </div>
        <div>
          <strong>Subtotal</strong>
        </div>
      </div>
      {location.pathname.includes("/cart") && (
        <Button
          variant="dark"
          className="payment-button"
          onClick={() => navigate("/payment")}
        >
          Continue Checkout
        </Button>
      )}

      <div>
        The price and shipping fees will not be confirmed until you reach the
        payment step. Possible payment methods.
        <div>
          Read about the 30-day return policy, return fees, and additional
          shipping charges incurred for non-receipt for returns and refunds.
        </div>
      </div>
    </div>
  );
};

export default OrderReceipt;
