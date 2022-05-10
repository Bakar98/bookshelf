import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";



export default function App(props) {

      return (
          <div className="App">
            {/* <h1>Books</h1> */}
          
                  <div id='parent'>
                    <div> 
                      <img src={props.src || ""} alt='image' />
                    </div>                 
                    <div id='bookInfo'>
                      <p><span>Name: </span>{props.name || "Not Available"}</p>
                      <p><span>Author: </span>{props.author || "Not Available"}</p>
                      <p><span>Genere: </span>{props.category || "Not Available"} </p>
                      <p><span>Price: </span>{props.price || "Not For Sale"}</p>
                    </div>
                  </div>            
          </div>
        );
        


}
