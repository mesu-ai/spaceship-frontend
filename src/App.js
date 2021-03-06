import './App.css';
import Home from './pages/homepage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFind from './pages/notfind/NotFind';
import PrimaryNavbar from './component/navbar/PrimaryNavbar';
import Footer from './component/footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <PrimaryNavbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFind/>}/>


      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
