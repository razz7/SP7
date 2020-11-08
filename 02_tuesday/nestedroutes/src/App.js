import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";

import "./style2.css";
// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function NestingExample({info}) {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink exact activeClassName="selected" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="selected" to="/topics">Topics</NavLink>
          </li>
        </ul>

        <hr />
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics topics = {info} />
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics(info) {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();
  console.log(info.topics);
  const topicData = info.topics.map((topic, index) => 
<li key={index}><Link to={`${url}/${topic.id}`}>{topic.title}</Link></li>
  )
  
  return (
    
    <div>
      <h2>Topics</h2>
      <ul>
        
        {topicData}
      
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic topics = {info} />
        </Route>
      </Switch>
    </div>
  );
}

function Topic(info) {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
      <h4>{info.topics.info}</h4>
    </div>
  );
}