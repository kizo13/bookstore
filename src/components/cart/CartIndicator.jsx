import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import appActions from '../../actions/app.actions';

import './CartIndicator.scss';

class CartIndicator extends React.Component {
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
      <div className="cart-indicator">
        <Link to="/cart" className="link">Cart ({this.props.app.cart.length})</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCartFromStorage: (bookIds) => dispatch(appActions.setCartFromStorage(bookIds))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartIndicator));
