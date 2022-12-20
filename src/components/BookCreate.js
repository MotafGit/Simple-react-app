import { useContext, useState } from 'react';
import BooksContext from '../context/books';


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
    <div >
      <h3>add a book</h3>
      <form onSubmit= {handleSubmit}>
        <label>Title</label>
        <input value ={title} onChange ={handleChange} />
        <button  >Create! </button> 
      </form>
    </div>
  );
}

export default BookCreate;
