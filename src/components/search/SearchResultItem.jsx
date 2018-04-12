import * as React from 'react';
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';

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
        <span className="title">{this.props.book.volumeInfo.title}</span>
        {this.props.book.volumeInfo.authors && (<span className="author">{this.props.book.volumeInfo.authors.join(', ')}</span>)}
        <span className="published">{this.props.book.volumeInfo.publishedDate} {this.props.book.volumeInfo.publisher}</span>
        <span className="pagecount">{this.props.book.volumeInfo.pageCount}p</span>
      </li>
    );
  }
}

// const mapStateToProps = (state) => ({
//   app: state.app,
// });

// const mapDispatchToProps = (dispatch: Dispatch<DeskCategoriesProps>) => {
//   return {
//     getNovelCategories: () => dispatch(apiActions.getNovelCategories()),
//     setBackgroundImage: (imageName: string) => dispatch(appActions.setBackgroundImage(imageName)),
//   };
// };

export default withRouter(connect()(SearchResultItem));
