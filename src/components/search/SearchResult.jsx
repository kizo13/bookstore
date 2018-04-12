import * as React from 'react';
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';

import SearchResultItem from './SearchResultItem';
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
            <h3>Search results for <b>'{this.props.form.query}'</b> <small>({this.props.api.autocomplete.data.totalItems} item(s) found)</small></h3>
            <ul className="books">
              {this.props.api.autocomplete.data.items.map(book =>
                <SearchResultItem key={book.id} book={book} />,
              )}
            </ul>
          </React.Fragment>
        ) : (
          <span>Nothing to display</span>
        )}
      </div>
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
