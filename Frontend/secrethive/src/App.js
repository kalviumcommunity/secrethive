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
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path='./Pages/Home.jsx' exact Component={Home}/>
            <Route path='./Pages/About.jsx' exact Component={About}/>
            <Route path='./Pages/Encryption.jsx' exact Component={Encryption}/>
            <Route path='./Pages/EncryptionKey.jsx' exact Component={EncryptionKey}/>
            <Route path='./Pages/Decryption.jsx' exact Component={Decryption}/>
            <Route path='./Pages/DecryptionKey.jsx' exact Component={DecryptionKey}/>
            <Route path='./Pages/ForgotPassword.jsx' exact Component={ForgotPassword}/>
            <Route path='/' exact Component={Landing}/>
            <Route path='./Pages/Signin.jsx' exact Component={Signin}/>
            <Route path='./Pages/Signup.jsx' exact Component={Signup}/>
            <Route path='./Pages/Verification.jsx' exact Component={Verification}/>
          </Routes>
        </Router>
      </>
      <div className='foot'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
