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
      <Button square className="mb-5" >Added Books</Button>
      
      <BookList />
      <BookCreate/>

    </div>
  );
}
export default App;
