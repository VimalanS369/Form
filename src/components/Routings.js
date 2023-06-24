import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

class Routings extends React.Component{
    render(){
        return(
  <BrowserRouter>
  <Routes>
       <Route path="/" element={<div> </div>}>
          
          {/* <Route path="/" element={ }/>
          <Route path="" element={ }/>
          <Route path="" element={ } />
          <Route path="" element={ }/> */}


        </Route>
  </Routes>
  </BrowserRouter>
        );
    }
}

export default Routings