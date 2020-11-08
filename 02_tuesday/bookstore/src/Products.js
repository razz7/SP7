import React from 'react';
import Details from './Details';
import { Link, Route, useRouteMatch } from "react-router-dom";


function Products({ bookFacade }) {
    let { path, url } = useRouteMatch();
    console.log(bookFacade.getBooks().length)
const listData = bookFacade.getBooks().map((book, index) =><li key={index}>{book.title}  <Link to={`${path}/${book.id}`} >Details</Link></li>)
    return (
        <div>
            <p>Hello from Products</p>
            <ul>
            {listData}
            </ul>
            <Route path={`${path}/:bookId`}>
            <Details bookFacade= {bookFacade}/>
            </Route>
        </div>
    )
}

export default Products