// import logo from './logo.svg';
import './Pagination.css';
import { useState, useEffect} from "react";
import App from './App';

var page = 0;

var perPage = 11;
function Pagination(props) {
    // useEffect(()=>{
    //     prevPage()
    //     console.log("ye challl")
    // }, [])
    let [books, setBooks] = useState(props.bookLst.slice((page*10)+1, (page*10)+11));
    var newBooks = props.bookLst.slice((page*10)+1, (page*10)+perPage);
        
    console.log(newBooks)

    function prevPage(){
        if(page>0){
            page-=1;
        }
        setBooks(props.bookLst.slice((page*10)+1, (page*10)+perPage))
        newBooks = "";
        console.log(perPage)

    }
    function nextPage(){
        if(page<3){
            page = page+1;
        }
        setBooks(props.bookLst.slice((page*10)+1, (page*10)+perPage))
        newBooks = "";
        console.log(perPage)

    }

    function perPageFun (e){
        perPage = e.target.value
        setBooks(props.bookLst.slice((page*10)+1, (page*10)+perPage))
        newBooks = "";
        console.log(page, perPage)
    }


          return (
              <>
                <div id='bottomDiv'>
                    <select onChange={perPageFun}>
                        <option value={11}>10</option>
                        <option value={9}>8</option>
                        <option value={7}>6</option>
                    </select>
                    <button onClick={prevPage}>Prev</button>
                    <p>{page+1}</p>
                    <button onClick={nextPage}>Next</button>                    
                </div>
                {newBooks?newBooks.map( (book) => (
                        <App name={book.volumeInfo.title} src={book.volumeInfo.imageLinks.thumbnail} price={book?.saleInfo?.listPrice?.amount} author={book.volumeInfo.authors?book.volumeInfo.authors[0]:"Author Not Available"}  category={book.volumeInfo.categories?book.volumeInfo.categories[0]:"Genre Not Available"} />
                    )):books?.map( (book) => (
                        <App name={book.volumeInfo.title} src={book.volumeInfo.imageLinks.thumbnail} price={book?.saleInfo?.listPrice?.amount} author={book.volumeInfo.authors?book.volumeInfo.authors[0]:"Author Not Available"}  category={book.volumeInfo.categories?book.volumeInfo.categories[0]:"Genre Not Available"} />
                    ))}
              </>
          )
     


}



export default Pagination