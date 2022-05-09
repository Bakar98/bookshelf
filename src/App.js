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
// export default function App() {

// const [data, setData] = useState(null);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(null);

// useEffect(() => {
//   fetch(`https://www.googleapis.com/books/v1/volumes?q=harry&key=AIzaSyCxzpTReWxfx2hi4l8VVZGYSO62DeLGn3o&maxResults=40`)
//     .then((response) =>
//       response.json()
    
//     )
//     .then((actualData) => {
//       setData(actualData.items);
//       setError(null);
//     })
//     .catch((err) => {
//       setError(err.message);
//       setData(null);
//     })
//     .finally(() => {
//       setLoading(false);
//     });
// }, []);


//   console.log(data)


// return (
//   <div className="App">
//     <h1>Books</h1>
//     {loading && <div>A moment please...</div>}
//     {error && (
//       <div>{`There is a problem fetching the post data - ${error}`}</div>
//     )}
//     <ul>
//       {data &&
//         data.map( (book) => (
          

//           <div id='parent'>
//             <div> 
//               <img src={book.volumeInfo.imageLinks.thumbnail} alt='image' />
//             </div>
         
//             <div>
//               <p>Name:{book.volumeInfo.title}</p>
//               <p>Author: {book.volumeInfo.authors[0]}</p>
//               <p>Genere: {book.volumeInfo.categories} </p>
//               <p>Price: {4}</p>
              
              
//             </div>
        
        
//           </div>

         
//         ))}
    
//     </ul>
//   </div>
// );
// }