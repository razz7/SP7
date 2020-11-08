import logo from './logo.svg';
import React from "react" 
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Products from "./Products";
import Company from "./Company";
import Header from "./Header";
import NoMatch from "./NoMatch";
import AddBook from "./AddBook";
import FindBook from './FindBook';

function App({bookFacade}) {
  console.log(bookFacade.findBook(100))
  return (
    <div>
  <Header />
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/products">
      <Products bookFacade = {bookFacade}/>
    </Route>
    <Route path="/company">
      <Company />
    </Route>
    <Route path="/add-book">
      <AddBook  bookFacade= {bookFacade}/>
    </Route>
    <Route path="/findbook">
      <FindBook bookFacade = {bookFacade}/>
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </Switch>
</div>

  );
}

export default App;
