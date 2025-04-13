import { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";

const Cart = () => {
  const { cart, clearCart, getTotalPrice } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    let timer;
    if (orderPlaced) {
      timer = setTimeout(() => {
        setOrderPlaced(false);
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [orderPlaced]);

  const handleCheckout = () => {
    clearCart();
    setOrderPlaced(true);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="empty-cart">
        <h1 className="empty-cart-title">Your Cart is Empty</h1>
        <p className="empty-cart-message">Add some products to your cart!</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      {cart.length > 0 && (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="cart-summary">
            <div className="total-row">
              <h2 className="total-label">Total</h2>
              <span className="total-price">${getTotalPrice()}</span>
            </div>
            <button onClick={handleCheckout} className="checkout-btn">
              Checkout
            </button>
          </div>
        </>
      )}

      {orderPlaced && (
        <div className="order-confirmation-overlay">
          <div className="order-confirmation">
            <h2 className="confirmation-title">Order placed successfully!</h2>
            <p className="confirmation-message">Thank you for your purchase.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;