import "./App.css";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthDetails from "./components/auth/AuthDetails";
import Home from "./components/auth/Home";
import DummyJson from "./components/Pages/DummyJson";

import { Route, Routes } from "react-router-dom";
// import ButtonTranslate from './components/auth/buttonTranslate';
import PrivateRoutes from "./components/auth/PrivateRoutes";

function App() {
  return (
    // <div className='App'>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path ="/DummyJson" element ={<DummyJson/>}/>
      <Route path="/AuthDetails" element={<AuthDetails />} />
      <Route element={<PrivateRoutes />}>
        <Route element={<Home />} path="/home" exact />
      </Route>
    </Routes>
    // </div>
  );
}

export default App;
