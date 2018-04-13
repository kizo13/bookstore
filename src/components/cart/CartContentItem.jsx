import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './CartContentItem.scss';

class CartContentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cart-item">
        <div>{this.props.book.title} <small>({this.props.book.published})</small></div>
        <div>by <i>{this.props.book.authors.join(', ')}</i></div>
        <div>{this.props.book.publisher}</div>
        <div>{this.props.book.pageCount} pages</div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   app: state.app,
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getBookById: (bookId) => dispatch(apiActions.getBookById(bookId)),
//   };
// };

export default withRouter(connect()(CartContentItem));
