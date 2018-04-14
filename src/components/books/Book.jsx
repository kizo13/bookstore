import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as classNames from 'classnames';
import apiActions from '../../actions/api.actions';
import appActions from '../../actions/app.actions';

import './Book.scss';

class Book extends React.Component {
  isBookAddedToCart;

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getBookById(this.props.match.params.bookid);
    this.isBookAddedToCart = this.props.app.cart.findIndex(book => book.id === this.props.match.params.bookid) === -1 ? false : true;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookid !== nextProps.match.params.bookid) {
      this.props.getBookById(nextProps.match.params.bookid);
    }
    this.isBookAddedToCart = nextProps.app.cart.findIndex(book => book.id === this.props.match.params.bookid) === -1 ? false : true;
  }

  render() {
    return (
      <div className="row main">
        <div className="column">
          {this.props.api.books.isLoading ? (
            <span className="loader"></span>
          ) : (
            this.props.api.books.data ? (
              <div className="row book-detail">
                {this.props.api.books.data.volumeInfo.imageLinks && <div className={classNames('column', { 'column-20': this.props.api.books.data.volumeInfo.imageLinks })}>
                  <img className="book-cover" src={this.props.api.books.data.volumeInfo.imageLinks.thumbnail} />
                </div>}
                <div className={classNames('column', { 'column-80': this.props.api.books.data.volumeInfo.imageLinks })}>
                  <h3 className="title">{this.props.api.books.data.volumeInfo.title}</h3>
                  {this.props.api.books.data.volumeInfo.authors && (<div className="author">by <i>{this.props.api.books.data.volumeInfo.authors.join(', ')}</i></div>)}
                  <span className="published-date"><i className="fa fa-calendar" aria-hidden="true"></i> <b>Published date:</b> {this.props.api.books.data.volumeInfo.publishedDate}</span>
                  {this.props.api.books.data.volumeInfo.publisher && <span className="publisher"> | <i className="fa fa-book" aria-hidden="true"></i> <b>Published by:</b> {this.props.api.books.data.volumeInfo.publisher}</span>}
                  {this.props.api.books.data.volumeInfo.printedPageCount && <span className="pagecount"> | <i className="fa fa-file-text-o" aria-hidden="true"></i> {this.props.api.books.data.volumeInfo.printedPageCount} pages</span>}
                  {this.props.api.books.data.volumeInfo.description && <div className="description" dangerouslySetInnerHTML={{__html: this.props.api.books.data.volumeInfo.description}}></div>}
                  {!this.isBookAddedToCart && <button className="button button-outline" onClick={this.addToCart.bind(this, this.props.api.books.data)}><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>}
                  {this.isBookAddedToCart && <button className="button" onClick={this.removeFromCart.bind(this, this.props.api.books.data.id)}><i className="fa fa-shopping-cart" aria-hidden="true"></i> Remove from cart</button>}
                </div>
              </div>
            ) : (
              <h4>Can not find details for book id {this.props.match.params.bookid}</h4>
            )
          )}
        </div>
      </div>
    );
  }

  addToCart(book) {
    const bookData = {
      id: book.id,
      title: book.volumeInfo.title,
      published: book.volumeInfo.publishedDate,
      authors: book.volumeInfo.authors,
      publisher: book.volumeInfo.publisher,
      pageCount: book.volumeInfo.pageCount
    }
    this.props.addToCart(bookData);
  }

  removeFromCart(bookId) {
    this.props.removeFromCart(bookId);
  }
}

const mapStateToProps = (state) => ({
  api: state.api,
  app: state.app,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getBookById: (bookId) => dispatch(apiActions.getBookById(bookId)),
    addToCart: (bookId) => dispatch(appActions.addToCart(bookId)),
    removeFromCart: (bookId) => dispatch(appActions.removeFromCart(bookId))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Book));
