import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Default from './components/Default'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import BooksStore from './components/feauters/BooksStore'
import SellSingleBook from './components/feauters/SellSingleBook'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
              <Route exact path='/' component={Default} />  
              <Route path='/login' component={Login} />
              <Route path='/signUp' component={SignUp} />
              <Route path='/sellSingleBook' component={SellSingleBook} />
              <Route path='/:userName' component={BooksStore} />
            </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
