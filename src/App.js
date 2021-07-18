import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import Author from "./components/Author";
import NotFound from "./components/NotFound";

const App = ( ) => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:id">
          <PostDetail />
        </Route>
        <Route path="/author/:id">
          <Author />
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
};
export default App;