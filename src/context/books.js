import { createContext,useState } from "react";
import axios from 'axios';


const BooksContext = createContext();

function Provider({children}) {
    const [books, setBooks] = useState([]);
  
    const fetchBooks = async () => {
      const response = await axios.get('http://localhost:3001/books');
      setBooks (response.data);
    };

    const editBookID = async (id,newTitle,newGenre) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {title:newTitle, genre:newGenre});
     
        console.log (response);
         const updatedBooks = books.map((book) => {
           if (book.id === id) {
             return {...book, ...response.data};
           }
           return book;
         });
         setBooks (updatedBooks);
       };
     
     
       const deleteBook = async (id) => {
         await axios.delete(`http://localhost:3001/books/${id}`);
     
         const updatedBooks = books.filter((book) => {
           return book.id !== id;
         });
     
         setBooks(updatedBooks);
     
       };
     
       const handlecreateBook = async (title, genre) => {
          const response = await axios.post ('http://localhost:3001/books', {
          title,
          genre
     
         });
     
         console.log(response);
            const updatedBooks =[
             ...books,
             response.data
           ];
           setBooks(updatedBooks); 
     
       };

       const valorAPartilhar = {
        books,
        fetchBooks,
        editBookID,
        deleteBook,
        handlecreateBook

       };

    return <BooksContext.Provider value = {valorAPartilhar}> {children}
    </BooksContext.Provider>

}

export default BooksContext;
export {Provider};