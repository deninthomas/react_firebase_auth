
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import AuthDetails from './components/auth/AuthDetails';
import Home from './components/auth/Home';

import { Route , Routes } from 'react-router-dom';
// import ButtonTranslate from './components/auth/buttonTranslate';


function App() {

  return (
    // <div className='App'>
      <Routes>
      
      <Route path="/" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/AuthDetails" element={<AuthDetails/>}/>
      <Route path="/Home" element={<Home/>}/>
  
     </Routes>
    // </div>
  );
}


export default App;
