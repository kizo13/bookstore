import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import apiActions from '../../actions/api.actions';

import CartContentItem from './CartContentItem';
import './CartContent.scss';

class CartContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="column">
        {this.props.app.cart && (
          <ul className="cart-items">
            {this.props.app.cart.length === 0 ? (
              <span>Your cart is empty</span>
            ) : (
              this.props.app.cart.map(book =>
                <CartContentItem key={book.id} book={book} />,
              )
            )}
          </ul>
        )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
});

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getBookById: (bookId) => dispatch(apiActions.getBookById(bookId)),
//   };
// };

export default withRouter(connect(mapStateToProps)(CartContent));
