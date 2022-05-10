import React from 'react';
import Request from './Request';
import './Request.css';
import { useState } from "react";
import ReactDOM from 'react-dom/client';
import Pagination from './Pagination';


const root = ReactDOM.createRoot(document.getElementById('root'));


  function loadBooks(d, callback){
      if(!d)d="all";
      let req = new XMLHttpRequest()
      req.open("GET","https://www.googleapis.com/books/v1/volumes?q="+d+"&key=AIzaSyCxzpTReWxfx2hi4l8VVZGYSO62DeLGn3o&maxResults=40");
      req.send()
      req.addEventListener("load",function(){
        callback(JSON.parse(req.responseText).items)      
      })
    }
  
  export default function Filter(props) {
    //   let [data, setData] = useState("java");
      let [books, setBooks] = useState([]);
    function filterBooks(book){
        return book?.saleInfo?.saleability === "NOT_FOR_SALE";
    }
   
    function filterFun(event) {
            loadBooks(props.bookLst, function(books){
                let filteredBooks = books.filter(filterBooks);
                console.log(filteredBooks);
                setBooks(filteredBooks)
                root.render(
                    <React.StrictMode>
                    
                        <Request books={books}/>
                       
                        
                    </React.StrictMode>
                  );
                
            })
            
      }

    

        
    

          return (
              <> 
                    <div>
                    <button id='filterBtn'>Filter  
                      <select onChange={filterFun} id="select">
                          <option>For Sale</option>
                          <option value={"Not For Sale"}>Not For Sale</option>
                      </select>
                      </button>
                    </div>
                    {/* <Request books={books}/> */}
                   
              </>
          )
     


}
