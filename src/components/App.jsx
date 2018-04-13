import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';

import SearchInput from './search/SearchInput';
import CartIndicator from './cart/CartIndicator';
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
        <React.Fragment>
          <div className="row">
            <div className="column column-90">
              <SearchInput />
            </div>
            <div className="column column-10">
              <CartIndicator />
            </div>
          </div>

          <Switch>
            <Route exact strict path="/" component={Home}/>
            <Route exact path="/books/:bookid" component={Book}/>
            <Route exact path="/cart" component={Cart}/>
            <Route path="*" component={NoMatch}/>
          </Switch>
        </React.Fragment>
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
