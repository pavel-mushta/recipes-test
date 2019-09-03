import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from "./Header";
import ManageCategories from "./ManageCategories";
import ManageRecipes from "./ManageRecipes";

function App() {
  return (
      <Router>
          <Header />
          <div className="container">
                  <Route path="/"  render={() => <h2>Welcome to recipes backend</h2>}  exact />
                  <Route path="/manage_categories/" component={ManageCategories} />
                  <Route path="/manage_recipes/" component={ManageRecipes} />
          </div>
      </Router>

  );
}

export default App;
