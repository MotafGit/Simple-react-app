import { useContext, useState } from 'react';
import BooksContext from '../context/books';
import Button from '../Button';
import DropdownPage from '../pages/DropdownPage';


function BookCreate() {

  const [title, setTitle] = useState ('');
  const [genre, setGenre] = useState ('');
  const {handlecreateBook} = useContext(BooksContext);

  const handleChange = (event) => {
    setTitle (event.target.value);
  };

  const handleChangeGenre = (event) => {
    setGenre (event.value);
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
    handlecreateBook(title,genre);
    setTitle ('');
  };
  
  return (
    
      <div className=" bg-green-200 relative inset-x-0 bottom-0 h-auto" >
        <h3 className="mb-3 ml-3 bg-green-600 w-24">insert a book:</h3>
        <form onSubmit= {handleSubmit}>
          <div  className="ml-3 ">Title 
            <input value ={title} onChange ={handleChange} />
            <div className='flex'><DropdownPage   onSelect={handleChangeGenre}  /></div>
  {/*              <input  value ={genre} onChange ={handleChangeGenre} />
  */}            
          
            <Button primary className="flex flex-wrap" >Create! </Button> 
          </div>
        </form> 
      </div>
    
  );
}

export default BookCreate;
