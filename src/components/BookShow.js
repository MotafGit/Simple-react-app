import { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';

function BookShow({book}) {

const [showEdit, setShowEdit] = useState(false);
const {deleteBook} = useContext(BooksContext);

  const handleDeleteclick = () => {
    deleteBook(book.id);
  };

  const handleEdit = () => {
    setShowEdit(!showEdit);

  };

  const handleSubmit = () => {
    setShowEdit(false);
    
  };

  let content = <h3>{book.title}</h3>;
  if (showEdit){
    content = <BookEdit onSubmit= {handleSubmit} book={book} />;
  }


  return (
  <div >
      <img
        alt ="books"
        src ={`https://picsum.photos/seed/${book.id}300/200`}
      />
        <div>{content}</div>
        <div >
          <button  onClick = {handleEdit}>
            Edit
          </button>
          <button  onClick = {handleDeleteclick}>
            Delete
          </button>

        </div>
     

     </div>);



}



export default BookShow;
