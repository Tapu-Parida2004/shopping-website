import { Link } from 'react-router-dom';
import '../styles/not-found.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Page not found</p>
      <Link 
        to="/" 
        className="home-link"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;