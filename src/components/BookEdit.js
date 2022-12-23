import { useState, useContext } from "react";
import BooksContext from "../context/books";
import Button from "../Button";

function BookEdit({book, onEdit, onSubmit}) {

  const [title,setTitle] = useState(book.title);
  const [genre,setGenre] = useState(book.genre);

  const {editBookID} = useContext(BooksContext);

  const handleChange = (event) => {
      setTitle (event.target.value);
  };
  const handleChangeGenre = (event) => {
    setGenre (event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit();
      editBookID(book.id, title, genre);
  };


  return <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange}  />
      <input value={genre} onChange={handleChangeGenre}  />


      <Button square className ="bg-green-600">
        Save
      </Button>

  </form>


}

export default BookEdit;
