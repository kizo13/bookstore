import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import appActions from '../../actions/app.actions';

import './CartContentItem.scss';

class CartContentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cart-item">
        <h3 className="title">{this.props.book.title}</h3>
        {this.props.book.authors && (<div className="author">by <i>{this.props.book.authors.join(', ')}</i></div>)}
        <span className="published-date"><i className="fa fa-calendar" aria-hidden="true"></i> <b>Published date:</b> {this.props.book.published}</span>
        {this.props.book.publisher && <span className="publisher"> | <i className="fa fa-book" aria-hidden="true"></i> <b>Published by:</b> {this.props.book.publisher}</span>}
        {this.props.book.pageCount && <span className="pagecount"> | <i className="fa fa-file-text-o" aria-hidden="true"></i> {this.props.book.pageCount} pages</span>}
        <button className="button" onClick={this.removeFromCart.bind(this, this.props.book.id)}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Remove from cart</button>
      </div>
    );
  }

  removeFromCart(bookId) {
    this.props.removeFromCart(bookId);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (bookId) => dispatch(appActions.removeFromCart(bookId))
  };
};

export default withRouter(connect(undefined, mapDispatchToProps)(CartContentItem));
