import {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import PrivateRoute from './routes/PrivateRoute';

function App() {
 
  let [authenticate, setAuthenticate] = useState (false); //If it is true signin, if it is false, stay signout. 
  useEffect( () => {
    console.log("AAA", authenticate);
  },[authenticate]);

  return ( 
    <div> 
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
        <Routes>
            <Route path="/" element={<ProductAll/>}/>

            <Route 
             path="/login"
             element={<Login setAuthenticate={setAuthenticate}/>}
            />

            <Route 
              path="/product/:id" 
              element={<PrivateRoute authenticate={authenticate}/>}/> 
        </Routes>   
    </div>
    // /product/:id => Restful Route's Rule 
  );
}

export default App;
