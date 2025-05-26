import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import Blogs from './pages/Blogs';
import ContactUs from './pages/ContactUs';


function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </Router>
    </>
  )
}


export default App;
