import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Product from './pages/Product';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';



function App() {
  return (
    <>
    <AuthProvider>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Product' element={<Product/>}/>
    <Route path='/Product/:id' element={<Product/>}/>
    <Route path='/ProductList' element={<ProductList/>}/>
    <Route path='/Register' element={<Register/>}/>
    
    <Route path='/*' element={<NotFound/>}/>
    
    </Routes>
    <Footer />
    </AuthProvider>
    </>
  );
}

export default App;
