import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchResultItem from './SearchResultItem';
import './SearchResult.scss';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.api.autocomplete.data && (
          <div className="result">
              {/* <h3>Search results for <b>'{this.props.form.query}'</b> <small>({this.props.api.autocomplete.data.totalItems} item(s) found)</small></h3> */}
              <ul className="books">
                {this.props.api.autocomplete.data.items.map(book =>
                  <SearchResultItem key={book.id} book={book} />,
                )}
              </ul>
          </div>
        )}
      </React.Fragment>
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
