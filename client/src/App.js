import React from 'react';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import ProductDisplay from './components/ProductDisplay';
// import TestComponent from './views/TestComponent';
import ProductForm from './components/ProductForm';
import ViewOne from './components/ViewOne';
import Main from './views/Main';
// import Main from './views/Main';
// import Detail from './views/Detail'
import './App.css';
    
function App() {
  return (
    <BrowserRouter>
    <nav></nav>
    <Routes>
        {/* <Route path="/testapi" element ={<TestComponent />}/> */}
        <Route path="/" element = {<Main/>}/>
        <Route path="/product/view/:id" element = {<ViewOne/>} />

        {/* <Route path="*" element = {<Error/>}/> */}
    </Routes>
    </BrowserRouter>
  );
}
    
export default App;
