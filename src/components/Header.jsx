import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/header.css';

const Header = () => {
  const { itemCount, isAuthenticated, logout } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">ShopNow</Link>
        <nav className="header-nav">
          {isAuthenticated ? (
            <>
              <Link to="/" className="header-link">Home</Link>
              <Link to="/cart" className="header-link cart-link">
                Cart
                {itemCount > 0 && (
                  <span className="cart-badge">{itemCount}</span>
                )}
              </Link>
              <button 
                onClick={handleLogout} 
                className="header-link logout-btn"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="header-link">Login</Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;