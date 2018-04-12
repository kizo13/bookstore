import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route } from 'react-router-dom';

import Home from './home/Home';
import Cart from './cart/CartContent';
import Book from './books/Book';
import SearchInput from './search/SearchInput';
import CartIndicator from './cart/CartIndicator';
import './App.scss';

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
);

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="column column-90">
            <SearchInput />
          </div>
          <div className="column column-10">
            <CartIndicator />
          </div>
        </div>

        <div className="row">
          <div className="column">
            <Switch>
              <Route exact strict path="/" component={Home}/>
              <Route exact path="/books/:bookid" component={Book}/>
              <Route exact path="/cart" component={Cart}/>
              <Route path="*" component={NoMatch}/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }

}

// const mapStateToProps = (state) => ({
//   app: state.app,
// });

// mapDispatchToProps = (dispatch) => {
//   return {
//     setBackground: imageName => dispatch(appActions.setBackgroundImage(imageName)),
//     toggleMenu: isShowing => dispatch(appActions.toggleMenu(isShowing)),
//   };
// };

export default withRouter(connect()(App));
