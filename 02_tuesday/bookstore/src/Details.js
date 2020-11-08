import React, { Component } from 'react';
import { useParams } from "react-router-dom";


function Details({bookFacade}) {
    const { bookId } = useParams();
    const book = bookFacade.findBook(bookId);

    const showBook = book ? (
    
        <div>
        <h3>Details</h3>
        <p>Title: {book.title}</p>
        <p>ID: {book.id}</p>
        <p>Info: {book.info}</p>
      </div>
    ) : (<p>Book not found</p>);
    
    return (
        
        <div>{showBook}</div>
    )
}

export default Details