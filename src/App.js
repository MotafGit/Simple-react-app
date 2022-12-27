import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'; 
import BooksContext from './context/books';
import FAQpage from './pages/FAQpage';
import Link from './components/Link';
import Route from './components/Route';



function App() {
  const {fetchBooks} = useContext(BooksContext);


   useEffect(()=> {
    fetchBooks();
  }, []); 

  return (
    <div className='bg-blue-200 h-auto '> 
    
      
    <Link to="/BookCreate">Create a Book</Link>
      
      <div> 
        <Route path="/BookCreate">
          <BookCreate />
        </Route>
      </div>  
      <Link to="/bookList">Show Books Created</Link>
      
          <div> 
            <Route path="/bookList">
              <BookList />
            </Route>
          </div>
          <Link to="/FAQpage">Show FAQ</Link>
          <div>
            <Route path="/FAQpage">
              <FAQpage />
            </Route>
          </div>
    </div>
  );
}
export default App;
