import React from 'react';
import {NavLink} from "react-router-dom";
 const Qus2 = ()=>{
     return(
         <>
        <h1>this is question 2</h1>
        <NavLink to={"/qus3"}>
            <button
          style={{ textAlign: "center", marginTop: "30px", backgroundColor: "green", padding: "5px 15px 5px 15px", border: "none", borderRadius: "4px", fontWeight: "6", fontSize: "19px" }}
          className="btn btn-primary mt-2"
         

        > Next</button>
      </NavLink>
      </>
        )
 } 
 export default Qus2;