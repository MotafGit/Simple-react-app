import BookShow from "./BookShow";
import BooksContext from "../context/books";
import {useContext, useState} from 'react';

function BookList() {
  const {books} = useContext(BooksContext);

  
  const renderBooks = books.map((book) => { 
    return (
      < BookShow key = {book.id} book = {book} /> 
    );
    
  });

  return (
    <div>
      
      <div className= "bg-gray-400 grid grid-cols-3">
      {renderBooks} 
      </div>
    </div>
  );
}

export default BookList;
