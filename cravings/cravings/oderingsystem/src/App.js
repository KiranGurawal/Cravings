import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import {Routes,Route, Link} from 'react-router-dom';       // react-router-dom new version can not support Switch so we can use Rout
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';
import Orderlist from './views/Orderlist';
import Customerlist from './views/Customerlist';
import Check from './pages/Check';
import ProductCard from './views/ProductCard';
import CardDetail from './views/CardDetail';
import Ordercheck from './views/Ordercheck';
import CustomerPanel from './pages/CustomerPanel';
import Payment from './pages/Payment';
import Customerorder from './views/Customerorder';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/adminlogin' element={<AdminLogin/>}/>
    <Route path='/adminpanel' element={<AdminPanel/>}/>
    <Route path='/customerlist' element={<Customerlist/>}/>
    <Route path='/orderlist' element={<Orderlist/>}/>
    <Route path='/productcard' element={<ProductCard/>}/>
    <Route path='/cart' element={<CardDetail/>}/>
    {/* <Route path='order'element={<Ordercheck/>}/> */}
    <Route path='/customerpanel'element={<CustomerPanel/>}/>
    <Route path='/payment'element={<Payment/>}/>
    <Route path='/customerorders'element={<Customerorder/>}/>
  </Routes> 
  </BrowserRouter>
   
  );
}

export default App;
