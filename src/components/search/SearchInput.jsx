import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formActions from '../../actions/form.actions';

import SearchResult from './SearchResult';
import './SearchInput.scss';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search">
        <input type="text"
          id="query"
          name="query"
          value={this.props.form.query}
          placeholder="Search books..."
          onChange={this.changeQuery.bind(this)}
          ref={r => this.inputRef = r}
          autoCorrect="off"
          autoCapitalize="off"
          autoComplete="off" />

        <SearchResult />
      </div>
    );
  }

  changeQuery(evt) {
    this.props.emitChange(evt.target.value);
  }
}

const mapStateToProps = (state) => ({
  form: state.form
});

const mapDispatchToProps = (dispatch) => {
  return {
    emitChange: change => dispatch(formActions.changeForm(change)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchInput));
