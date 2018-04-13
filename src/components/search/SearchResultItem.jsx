import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import './SearchResultItem.scss';

class SearchResultItem extends React.Component {
  constructor(props) {
    super(props);
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
        <span className="title">
          <Link to={`/books/${this.props.book.id}`} className="link">{this.props.book.volumeInfo.title}</Link> 
          {this.props.book.volumeInfo.authors && (<span className="author">by <i>{this.props.book.volumeInfo.authors.join(', ')}</i></span>)}
        </span>
        <span className="published-date"><i class="fa fa-calendar" aria-hidden="true"></i> <b>Published date:</b> {this.props.book.volumeInfo.publishedDate}</span>
        {this.props.book.volumeInfo.publisher && <span className="publisher"> | <i class="fa fa-book" aria-hidden="true"></i><b> Published by:</b> {this.props.book.volumeInfo.publisher}</span>}
        {this.props.book.volumeInfo.pageCount && <span className="pagecount"> | <i class="fa fa-file-text-o" aria-hidden="true"></i> {this.props.book.volumeInfo.pageCount} pages</span>}
      </li>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
});

export default withRouter(connect(mapStateToProps)(SearchResultItem));
