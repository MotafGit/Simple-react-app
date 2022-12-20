import { useState, useContext } from "react";
import BooksContext from "../context/books";

function BookEdit({book, onEdit, onSubmit}) {

  const [title,setTitle] = useState(book.title);
  const {editBookID} = useContext(BooksContext);

  const handleChange = (event) => {
      setTitle (event.target.value);


  };

  const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit();
      editBookID(book.id, title);
  };


  return <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange}  />
      <button >
        Save
      </button>

  </form>


}

export default BookEdit;
