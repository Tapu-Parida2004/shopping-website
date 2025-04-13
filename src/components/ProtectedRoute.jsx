import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useCart();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login page, saving the current location they were trying to go to
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;