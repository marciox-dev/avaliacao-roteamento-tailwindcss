import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar';
import Login from './pages/Login';

import Register from './pages/Register';
import Admin from './pages/Admin';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import AddProduct from './pages/AddProducts';
import EditProduct from './pages/EditProduct';
import ProductInfo from './pages/ProductInfo';
import Cart from './pages/Cart';
import Complete from './pages/Complete';

function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />

          <Route path='/login' element={<Login />} />

          <Route path='/register' element={<Register />} />

          <Route path='/product/:id' element={
            <ProtectedRoute>
              <ProductInfo />
            </ProtectedRoute>} />

          <Route path='/cart' element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>} />

          <Route path='/complete' element={
            <ProtectedRoute>
              <Complete />
            </ProtectedRoute>} />

          <Route path='/admin' element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>} />

          <Route path='/admin/add-product' element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>} />

          <Route path='/admin/edit-product/:id' element={
            <ProtectedRoute>
              <EditProduct />
            </ProtectedRoute>} />

          <Route path='/*' element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
