import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";




// function loadBooks (callback){
//   let req = new XMLHttpRequest();
//   req.open("GET", "ttps://www.googleapis.com/books/v1/volumes?q=harry&key=AIzaSyCxzpTReWxfx2hi4l8VVZGYSO62DeLGn3o&maxResults=40");
//   req.send();
//   req.addEventListener("load", function(){
//     callback(JSON.parse(req.responseText).items);
//   })
// }


export default function App(props) {

      return (
          <div className="App">
            {/* <h1>Books</h1> */}
          
                  <div id='parent'>
                    <div> 
                      <img src={props.src} alt='image' />
                    </div>                 
                    <div id='bookInfo'>
                      <p><span>Name: </span>{props.name}</p>
                      <p><span>Author: </span>{props.author}</p>
                      <p><span>Genere: </span>{props.category} </p>
                      <p><span>Price: </span>{props.price || "Not For Sale"}</p>
                    </div>
                  </div>
            
          </div>
        );
        


}
