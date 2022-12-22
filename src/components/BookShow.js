import { useState, useContext } from 'react';
import BookEdit from './BookEdit';
import BooksContext from '../context/books';
import Button from '../Button';
import { TiEdit } from "react-icons/ti";
import { TiDeleteOutline } from "react-icons/ti";

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

  let content = book.title;
  if (showEdit){
    content = <BookEdit onSubmit= {handleSubmit} book={book} />;
  }


  return (
    
    <div className ="container"  >
        <img className='max-w-full'
          alt ="books"
          src ={`https://picsum.photos/seed/${book.id}300/200`}
        />
          <div className='text-center' >{content}</div>
          <div className = "topRight">
            <button  onClick = {handleEdit}>
              <TiEdit/>
            </button>
            <button  onClick = {handleDeleteclick}>
            <TiDeleteOutline/>
            </button>

          </div>
     

     </div>);



}



export default BookShow;
