import { useContext, useState } from 'react';
import BooksContext from '../context/books';
import Button from '../Button';

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
    <div className="text-2xl" >
      <h3>add a book</h3>
      <form onSubmit= {handleSubmit}>
        <button primary>Title</button>
        <input  value ={title} onChange ={handleChange} />
        <Button primary >Create! </Button> 
      </form>
    </div>
  );
}

export default BookCreate;
