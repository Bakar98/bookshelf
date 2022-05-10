// import logo from './logo.svg';
import './Request.css';
import { useState } from "react";
// import App from './App';
import Pagination from './Pagination';

function loadBooks (d, callback){
    console.log(d, "=====================================")
    if(!d)d="all"
    let req = new XMLHttpRequest();
    req.open("GET", "https://www.googleapis.com/books/v1/volumes?q="+d+"&key=AIzaSyCxzpTReWxfx2hi4l8VVZGYSO62DeLGn3o&maxResults=40");
    req.send();
    req.addEventListener("load", function(){
      callback(JSON.parse(req.responseText).items);
      
    })
  }

  
  
  
  export default function Request(props) {
      let [data, setData] = useState("java");
      let [books, setBooks] = useState(props.books);
      
    
    //   window.onload = function(){
    //     search();
    //     console.log("yoooooowalaaaa")
    //    }
    function handleChange(event) {
        setData(event.target.value)    
      }

    function search() {
        console.log(data);
       loadBooks(data, function(bookList){
            
            setBooks(bookList)
            console.log(books)
       })

      }  
    

          return (
              <>
                <div id='searchDiv'>
                    <input id="input" onChange={handleChange} placeholder='Search books' ></input> 
                    <button onClick={search}>Search</button>
                </div>
                    
                <Pagination bookLst={books}></Pagination>
              </>
          )
     


}
