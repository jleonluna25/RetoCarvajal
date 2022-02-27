import React from 'react';
import OrderSummary from '../components/OrderSummary';
import '../styles/PurchaseHistory.scss';

const PurchaseHistory = () => {
    return (
        <div className="my-order">
            <div className="my-order-container">
                <h1 className="title">My orders</h1>

                <div className="my-order-content">
                    <OrderSummary>
                        <img src="./icons/flechita.svg" alt="arrow" />
                    </OrderSummary>

                    <OrderSummary>
                        <img src="./icons/flechita.svg" alt="arrow" />
                    </OrderSummary>

                    <OrderSummary>
                        <img src="./icons/flechita.svg" alt="arrow" />
                    </OrderSummary>

                    <OrderSummary>
                        <img src="./icons/flechita.svg" alt="arrow" />
                    </OrderSummary>
                </div>
            </div>
        </div>
    );
}

export default PurchaseHistory;