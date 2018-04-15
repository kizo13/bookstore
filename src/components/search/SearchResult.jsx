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

export default withRouter(connect(mapStateToProps)(SearchResult));
