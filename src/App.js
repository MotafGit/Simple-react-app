import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'; 
import BooksContext from './context/books';
import FAQpage from './pages/FAQpage';
import DropdownPage from './pages/DropdownPage';
import Dropdown from './components/Dropdown';



function App() {
  const {fetchBooks} = useContext(BooksContext);


   useEffect(()=> {
    fetchBooks();
  }, []); 

  return (
    <div className='bg-blue-200 h-auto '> 
      <div square className=" bg-gray-100" >Book list:</div>
      <BookList />
      <BookCreate/>       
      <h4 className='ml-8 mb-3 mt-3'>FAQ</h4>
      <div className="grid grid-cols-3">
        <div className='ml-6'><FAQpage /></div>
        <div className='ml-6'>a decidir</div>
        <div>links</div>
      </div>
    </div>
  );
}
export default App;
