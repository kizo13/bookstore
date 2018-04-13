import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import * as classNames from 'classnames';

import './CartIndicator.scss';

class CartIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cart-indicator">
        <Link to="/cart" className={classNames('button link', { 'button-outline': this.props.app.cart.length === 0 })}>
          <i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart ({this.props.app.cart.length})
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
});

export default withRouter(connect(mapStateToProps)(CartIndicator));
