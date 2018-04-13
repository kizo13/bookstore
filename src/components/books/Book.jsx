import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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
    this.isBookAddedToCart = this.props.app.cart.indexOf(this.props.match.params.bookid) === -1 ? false : true;
  }

  componentWillReceiveProps(nextProps) {
    this.isBookAddedToCart = nextProps.app.cart.indexOf(this.props.match.params.bookid) === -1 ? false : true;
  }

  render() {
    return (
      <div className="row">
          <div className="column">
            {this.props.api.books.isLoading ? (
              <span>Loading book data...</span>
            ) : (
              this.props.api.books.data ? (
                <div className="row book-detail">
                  <div className="column column-20">
                    <img className="book-cover" src={this.props.api.books.data.volumeInfo.imageLinks.thumbnail} />
                  </div>
                  <div className="column column-80">
                    <h3 className="title">{this.props.api.books.data.volumeInfo.title} <small>({this.props.api.books.data.volumeInfo.publishedDate})</small></h3>
                    {this.props.api.books.data.volumeInfo.authors && (<div className="author">by <i>{this.props.api.books.data.volumeInfo.authors.join(', ')}</i></div>)}
                    {this.props.api.books.data.volumeInfo.publisher && <span className="publisher">{this.props.api.books.data.volumeInfo.publisher}</span>}
                    {this.props.api.books.data.volumeInfo.pageCount && <span className="pagecount">{this.props.api.books.data.volumeInfo.printedPageCount} pages</span>}
                    {this.props.api.books.data.volumeInfo.description && <div className="description" dangerouslySetInnerHTML={{__html: this.props.api.books.data.volumeInfo.description}}></div>}
                    {!this.isBookAddedToCart && <button className="button button-outline" onClick={this.addToCart.bind(this, this.props.api.books.data.id)}><i className="fa fa-cart-plus" aria-hidden="true"></i> Add to cart</button>}
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

  addToCart(bookId) {
    this.props.addToCart(bookId);
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
