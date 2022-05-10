// import logo from './logo.svg';
import './Request.css';
import { useState } from "react";
// import App from './App';
import Pagination from './Pagination';
import Filter from './Filter';

  function loadBooks(d, callback){
    if(!d)d="all";
    let req = new XMLHttpRequest()
    req.open("GET","https://www.googleapis.com/books/v1/volumes?q="+d+"&key=AIzaSyCxzpTReWxfx2hi4l8VVZGYSO62DeLGn3o&maxResults=40");
    req.send()
    req.addEventListener("load",function(){
      callback(JSON.parse(req.responseText).items)      
    })
  }
  
  export default function Request(props) {
    
      let [data, setData] = useState("java");
      let [books, setBooks] = useState(props.books);

      
   

    function handleChange(event) {
        setData(event.target.value)    
        if(event.keyCode === 13){
          loadBooks(data, function(bookList){
            setBooks(bookList)
            console.log(bookList)
          })
        }
      }

    function search() {
       loadBooks(data, function(bookList){
            setBooks(bookList)
       })

      }  
    

          return (
              <>                
                  <div id='searchDiv'>
                    <div>
                      <input id="input" onKeyUp={handleChange} placeholder='Search books' ></input> 
                      <button onClick={search}>Search</button>
                    </div>
                    {/* <Filter bookLst={books}/> */}
                  </div>

                <Pagination bookLst={books}></Pagination>
              </>
          )
     


}
