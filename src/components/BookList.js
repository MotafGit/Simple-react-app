import BookShow from "./BookShow";
import BooksContext from "../context/books";
import {useContext} from 'react';


function BookList() {
  const {books} = useContext(BooksContext);

  
  const renderBooks = books.map((book) => { 
    return (
      < BookShow key = {book.id} book = {book} /> 
    );
    
  });
  return (
    <div>
      
       <div className= " grid grid-cols-3 justify-items-center bg-center bg-[url('https://cdn.dribbble.com/users/1104330/screenshots/3902777/media/5e7f2863179bd1f5524e7911601408f7.gif')]" > 
      {renderBooks} 
      </div>
    </div>
  );
}

export default BookList;
