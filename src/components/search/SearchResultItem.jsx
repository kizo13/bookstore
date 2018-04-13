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
        <span className="title"><Link to={`/books/${this.props.book.id}`} className="link">{this.props.book.volumeInfo.title}</Link> <small>({this.props.book.volumeInfo.publishedDate})</small></span>
        {this.props.book.volumeInfo.authors && (<span className="author">by <i>{this.props.book.volumeInfo.authors.join(', ')}</i></span>)}
        {this.props.book.volumeInfo.publisher && <span className="publisher">{this.props.book.volumeInfo.publisher}</span>}
        {this.props.book.volumeInfo.pageCount && <span className="pagecount">{this.props.book.volumeInfo.pageCount} pages</span>}
      </li>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
});

export default withRouter(connect(mapStateToProps)(SearchResultItem));
