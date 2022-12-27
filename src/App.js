import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'; 
import BooksContext from './context/books';
import FAQpage from './pages/FAQpage';
import Sidebar from './components/Sidebar'
import Route from './components/Route';




function App() {
  const {fetchBooks} = useContext(BooksContext);

  //bg-blue-200 h-auto
   useEffect(()=> {
    fetchBooks();
  }, []); 

  return (
    <div className='bg-blue-200 h-auto'>  
      <Sidebar/>
      
      <div className=''> 
        <Route path="/">
          
        </Route>

        <Route path="/BookCreate">
          <BookCreate />
        </Route>
       

      
            <Route path="/bookList">
              <BookList />
            </Route>

      
            <Route path="/FAQpage">
              <FAQpage />
            </Route>
          </div>
          <div className ="bg-blue-600 h-[42rem] grid grid-cols-3 justify-items-center">
            <div className='mt-6'>About</div>
            <div className='mt-6'>Something</div>
            <div className='mt-6'>Else</div>
          </div>
    </div>
    
  );
}
export default App;
