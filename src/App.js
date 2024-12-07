import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Mainhome from './user/mainhome.jsx';
import Contact from './components/contact.jsx';
import Verify from './components/verify.jsx'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/shop' element={<Mainhome/>}/>
          <Route path='/logout' element={<Login/>}/>
          <Route path='/verify/:id' element={<Verify/>}/>
      </Routes>
      <Contact/>
    </BrowserRouter>
    </div>
  );
}

export default App;
