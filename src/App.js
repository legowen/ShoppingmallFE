import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';

function App() {
 
  const {authenticate,setAuthenticate} = useState (false); //If it is true signin, if it is false, stay signout. 

  return ( 
    <div> 
      <Navbar/>
        <Routes>
            <Route path="/" element={<ProductAll/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/product/:id" element={<ProductDetail/>}/> 
        </Routes>   
    </div>
    // /product/:id => Restful Route's Rule 
  );
}

export default App;
