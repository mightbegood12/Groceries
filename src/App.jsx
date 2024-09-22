

import Home from './pages/Home';

import { BrowserRouter , Routes , Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-in' element={<SignIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/profile' element={<Profile/>} />
      <Route path='/cart' element={<Cart/>} />

    </Routes>
    </BrowserRouter>
   
  )
}

export default App;
