import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RouteComponentProps } from 'react-router';
import { withRouter, Switch, Route, NavLink } from 'react-router-dom';
import * as classNames from 'classnames';
import { history } from 'store/store';

// import appActions from 'actions/app.actions';

import './App.scss';

import SearchInput from './search/SearchInput';
import SearchResult from './search/SearchResult';
import CartIndicator from './cart/CartIndicator';

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
        <SearchInput />
        <CartIndicator />
        <SearchResult />
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
