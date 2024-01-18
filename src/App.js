
import './App.css';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
//  import AuthDetails from './components/auth/AuthDetails';

import { Route , Routes } from 'react-router-dom';
// import ButtonTranslate from './components/auth/buttonTranslate';


function App() {

  return (
    // <div className='App'>
      <Routes>
      
      <Route path="/" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      
  
     </Routes>
    // </div>
  );
}


export default App;
