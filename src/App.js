import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';

function App() {
 

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
