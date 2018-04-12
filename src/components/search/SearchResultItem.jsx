import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import appActions from '../../actions/app.actions';

import './SearchResultItem.scss';

class SearchResultItem extends React.Component {
  isBookAddedToCart;

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.isBookAddedToCart = this.props.app.cart.indexOf(this.props.book.id) === -1 ? false : true;
  }

  componentWillReceiveProps(nextProps) {
    this.isBookAddedToCart = nextProps.app.cart.indexOf(this.props.book.id) === -1 ? false : true;
  }

  render() {
    return (
        /**
        this.props.book: [
          {
            id: string,
            volumeInfo: {
              authors: string[],
              description: string,
              imageLinks: {
                smallThumbnail: string,
                thumbnail: string
              },
              language: string,
              pageCount: number,
              publishedDate: string,
              publisher: string,
              title: string
            }
          }
        ]
       */
      <li className="result-item">
        {/* <img src={this.props.book.volumeInfo.imageLinks.smallThumbnail} height="40" /> */}
        <span className="title"><Link to={`/books/${this.props.book.id}`} className="link">{this.props.book.volumeInfo.title}</Link> <small>({this.props.book.volumeInfo.publishedDate})</small></span>
        {this.props.book.volumeInfo.authors && (<span className="author">by <i>{this.props.book.volumeInfo.authors.join(', ')}</i></span>)}
        {this.props.book.volumeInfo.publisher && <span className="publisher">{this.props.book.volumeInfo.publisher}</span>}
        {this.props.book.volumeInfo.pageCount && <span className="pagecount">{this.props.book.volumeInfo.pageCount} pages</span>}
        {!this.isBookAddedToCart && <button className="button button-outline" onClick={this.addToCart.bind(this, this.props.book.id)}>Add to cart</button>}
        {this.isBookAddedToCart && <button className="button button-outline" onClick={this.removeFromCart.bind(this, this.props.book.id)}>Remove from cart</button>}
      </li>
    );
  }

  addToCart(bookId) {
    this.props.addToCart(bookId);
  }

  removeFromCart(bookId) {
    this.props.removeFromCart(bookId);
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (bookId) => dispatch(appActions.addToCart(bookId)),
    removeFromCart: (bookId) => dispatch(appActions.removeFromCart(bookId)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResultItem));
