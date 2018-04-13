import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import Cart from './cart/CartContent';
import Book from './books/Book';
import appActions from '../actions/app.actions';
import './App.scss';

const NoMatch = ({ location }) => (
  <div className="row">
    <div className="column">
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  </div>
);

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    let storedBookIds = localStorage.getItem('bookstore_bookids');
    if (storedBookIds) {
      this.props.setCartFromStorage(JSON.parse(storedBookIds));
    }
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact strict path="/" component={Home}/>
          <Route exact path="/books/:bookid" component={Book}/>
          <Route exact path="/cart" component={Cart}/>
          <Route path="*" component={NoMatch}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCartFromStorage: (bookIds) => dispatch(appActions.setCartFromStorage(bookIds))
  };
};

export default withRouter(connect(undefined, mapDispatchToProps)(App));
