import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'; 
import BooksContext from './context/books';
import Button from './Button';


function App() {
  const {fetchBooks} = useContext(BooksContext);


   useEffect(()=> {
    fetchBooks();
  }, []); 



  


  return (
    <div >
      <h1>Added Books</h1>
      
      <BookList />
      <BookCreate/>

    </div>
  );
}
export default App;
