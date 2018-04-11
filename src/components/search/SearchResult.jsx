import * as React from 'react';
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';

import './SearchResult.scss';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="result">
        {this.props.api.autocomplete.data ? (
          <React.Fragment>
            <h3>Search results for '{this.props.form.query}' <small>({this.props.api.autocomplete.data.totalItems} item(s) found)</small></h3>
            <ul className="books">
              {this.props.api.autocomplete.data.items.map(book =>
                // <DeskCategoryCard key={category.id} {...category} />,
                <li key={book.id}>{book.volumeInfo.title}</li>
              )}
            </ul>
          </React.Fragment>
        ) : (
          <span>Nothing to display</span>
        )}
      </div>

      /**
      result {
        totalItems: number,
        items: [
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
      }
       */
    );
  }
}

const mapStateToProps = (state) => ({
  api: state.api,
  form: state.form
});

// const mapDispatchToProps = (dispatch: Dispatch<DeskCategoriesProps>) => {
//   return {
//     getNovelCategories: () => dispatch(apiActions.getNovelCategories()),
//     setBackgroundImage: (imageName: string) => dispatch(appActions.setBackgroundImage(imageName)),
//   };
// };

export default withRouter(connect(mapStateToProps)(SearchResult));
