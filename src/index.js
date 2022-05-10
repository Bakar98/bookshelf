import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Request from './Request';
// import Pagination from './Pagination';

const root = ReactDOM.createRoot(document.getElementById('root'));


    function loadBooks (callback){
      let req = new XMLHttpRequest();
      req.open("GET", "https://www.googleapis.com/books/v1/volumes?q=javascript&key=AIzaSyCxzpTReWxfx2hi4l8VVZGYSO62DeLGn3o&maxResults=40");
      req.send();
      req.addEventListener("load", function(){
        callback(JSON.parse(req.responseText).items);
      })
    }

    loadBooks (function (bookList){
      console.log(bookList)
      root.render(
        <React.StrictMode>
        
            <Request books={bookList}/>
           
            
        </React.StrictMode>
      );
    } )


reportWebVitals();

