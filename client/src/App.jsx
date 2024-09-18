
import './App.css';
import AdminLayout from './components/admin-view/layout';
import AuthLayout from './components/auth/layout';
import AdminDashBoard from './pages/admin-view/dashboard';
import AdminFeatures from './pages/admin-view/features';
import AdminOrders from './pages/admin-view/orders';
import AdminProducts from './pages/admin-view/products';
import AuthLogin from './pages/auth/login';
import AuthRegister from './pages/auth/register';
import { Route, Routes } from 'react-router-dom';
import ShoppingLayout from './pages/admin-view/layout';
import NotFound from './pages/not-found';
import ShoppingHome from './pages/shopping-view/home';
import ShoppingListing from './pages/shopping-view/listingPage';
import ShoppingCheckOut from './pages/shopping-view/checkout';
import ShoppingAccount from './pages/shopping-view/account';
import CheckAuth from './components/common/check-auth';
import UnAuthPage from './pages/unauth-page';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkAuth } from './store/auth-slice';

function App() {

  const {user,isAuthenticated,isLoading}=useSelector((state)=>state.auth)
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(checkAuth());
  },[dispatch]);
  if(isLoading)return(<div>
    Loading....
  </div>);
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <h1>HeaderComponents</h1>
      <Routes>
        <Route path='/auth' element={
          <CheckAuth  isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout/>
          </CheckAuth>
        }>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
          </Route>
          <Route path="/admin"element={
            <CheckAuth>
              <AdminLayout isAuthenticated={isAuthenticated} user={user}/>
            </CheckAuth>
          }>
<Route path="dashboard"element={<AdminDashBoard/>}/>
<Route path="products"element={<AdminProducts/>}/>
<Route path="orders"element={<AdminOrders/>}/>
<Route path="features"element={<AdminFeatures/>}/>
</Route>
<Route path="/shop" element={
  <CheckAuth>
    <ShoppingLayout user={user} isAuthenticated={isAuthenticated}/>
  </CheckAuth>
}>
<Route path="home" element={<ShoppingHome/>}/>
<Route path="listing" element={<ShoppingListing/>}/>
<Route path="checkout" element={<ShoppingCheckOut/>}/>
<Route path="account" element={<ShoppingAccount/>}/>
</Route >
<Route path="*" element={<NotFound/>}/>
<Route path="/unauth-page" element={<UnAuthPage/>}/>
          
      </Routes>
    </div>
  );
}

export default App;
