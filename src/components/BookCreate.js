import { useContext, useState } from 'react';
import BooksContext from '../context/books';
import Button from '../Button';
import FAQpage from '../pages/FAQpage';

function BookCreate() {

  const [title, setTitle] = useState ('');
  const {handlecreateBook} = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle (event.target.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    handlecreateBook(title);
    setTitle ('');
  };

  return (
    
      <div className=" bg-green-200 relative inset-x-0 bottom-0 h-24" >
        <h3 className="mb-3 ml-3 bg-green-600 w-24">insert a book:</h3>
        <form onSubmit= {handleSubmit}>
          <div className="mb-8 ml-3 " >Title
          <input  value ={title} onChange ={handleChange} />
          <Button primary>Create! </Button> </div>
        </form>
      
          
          
      </div>
    
  );
}

export default BookCreate;
