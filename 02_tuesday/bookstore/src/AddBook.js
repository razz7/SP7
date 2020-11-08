
import React, {useState} from 'react';


function AddBook({bookFacade}) {
    
        
        const emptyBook = { id: "", title: "", info: "" };
        const [book, setBook] = useState({ ...emptyBook });
        let [isBlocking, setIsBlocking] = useState(false);
      
        const handleChange = e => {
          const { id, value } = e.target;
          setBook({ ...book, [id]: value });
          setIsBlocking(true);
        };
        const handleSubmit = e => {
          e.preventDefault();
          bookFacade.addBook(book);
          setBook({ ...emptyBook });
          setIsBlocking(false);
        };
        return (
            
          <div>
            <p>Add Book</p>
            <form>
              <input
                id="title"
                value={book.title}
                placeholder="Add title"
                onChange={handleChange}
              />
              <br />
              <input
                id="info"
                value={book.info}
                placeholder="Add Info"
                onChange={handleChange}
              />
              <br />
              <button onClick={handleSubmit}>Save</button>
            </form>
            </div>

    )
}

export default AddBook