import React, { Component, useState } from 'react';

function FindBook({bookFacade}) {
    const [bookId, setBookId] = useState("");
    const [book, setBook] = useState(null);

    const findbookId = () => {
        const foundBook = bookFacade.findBook(bookId);
        setBook(foundBook);
      };

    return(
    <div>
        <p>Hello from FindBook</p>
 
        <input
        id="book-id"
        placeholder="Enter book Id"
        onChange = {e => {
            setBookId(e.target.value);
          }}
      />
      <button onClick = {findbookId}>Find book</button>

      {book && (
        <div>
          <p>ID: {book.id}</p>
          <p>Title: {book.title}</p>
          <p>Info: {book.info}</p>
        </div>
      )}
      {!book && <p>Enter id for book to see</p>}
    </div>
    )
    
}
    

export default FindBook;