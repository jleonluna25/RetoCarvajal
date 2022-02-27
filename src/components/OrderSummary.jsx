import React from "react";
import '../styles/PurchaseHistory.scss';

const OrderSummary = ({children}) => {
    return (
        <div className="order">
            <p>
                <span>03.25.21</span>
                <span>6 articles</span>
            </p>
            <p>$560.00</p>
            {children}
        </div>
    );
}

export default OrderSummary;