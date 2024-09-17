import { useLocation, Navigate } from "react-router-dom";

// Authentication page
function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  if (!isAuthenticated && !(location.pathname.includes('/login') || location.pathname.includes('/register'))) {
    return <Navigate to='/auth/login' />;
  }

  if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/register'))) {
    if (user?.role === 'admin') {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop/home" />;
    }
  }

  if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
    return <Navigate to="/unauth-page" />;
  }

  return children; // Default case to render children if all checks pass
}

export default CheckAuth;
