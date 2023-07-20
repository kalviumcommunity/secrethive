import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Encryption from './Pages/Encryption';
import EncryptionKey from './Pages/EncryptionKey';
import Decryption from './Pages/Decryption';
import DecryptionKey from './Pages/DecryptionKey';
import ForgotPassword from './Pages/ForgotPassword';
import Landing from './Pages/Landing';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import Verification from './Pages/Verification';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <>
      <Router>
        <Routes>
          <Route path='./Pages/Home' element={<Home/>}/>
          <Route path='/Pages/About' element={<About/>}/>
          <Route path='/Pages/Encryption' element={<Encryption/>}/>
          <Route path='/Pages/EncryptionKey' element={<EncryptionKey/>}/>
          <Route path='/Pages/Decryption' element={<Decryption/>}/>
          <Route path='/Pages/DecryptionKey' element={<DecryptionKey/>}/>
          <Route path='/Pages/ForgotPassword' element={<ForgotPassword/>}/>
          <Route path='/' element={<Landing/>}/>
          <Route path='/Pages/Signin' element={<Signin/>}/>
          <Route path='/Pages/Signup' element={<Signup/>}/>
          <Route path='/Pages/Verification' element={<Verification/>}/>
        </Routes>
      </Router>
    </>
    </div>
  );
}

export default App;
