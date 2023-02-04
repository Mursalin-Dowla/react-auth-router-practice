import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Shared/Header/Header';
import Footer from './Components/Shared/Footer/Footer';
import Explore from './Components/Explore/Explore';
import About from './Components/About/About';
import Book from './Components/Book/Book';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import NotFound from './Components/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/explore' element={<Explore />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/bookings' element={<Book />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/*' element={<NotFound />}></Route>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
