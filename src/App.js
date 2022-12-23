import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList'; 
import BooksContext from './context/books';
import Button from './Button';
import FAQpage from './pages/FAQpage';



function App() {
  const {fetchBooks} = useContext(BooksContext);


   useEffect(()=> {
    fetchBooks();
  }, []); 



  


  return (
    <div className='bg-blue-200 h-[48rem]'> 
    
      <div square className=" bg-gray-100" >Book list:</div>
      <BookList />
      <BookCreate/>
      <div className="grid grid-cols-2">
        <div className='ml-6'><FAQpage /></div>
        <div className='ml-6'> dropdown de links</div>
      </div>
    </div>
  );
}
export default App;
