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
      <div>{this.props.book.title}</div>
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
