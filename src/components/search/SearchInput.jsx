import * as React from 'react';
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';

import './SearchInput.scss';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search">Search</div>
    );
  }
}

// const mapStateToProps = (state: StoreModel.All) => ({
//   api: state.api,
//   app: state.app,
// });

// const mapDispatchToProps = (dispatch: Dispatch<DeskCategoriesProps>) => {
//   return {
//     getNovelCategories: () => dispatch(apiActions.getNovelCategories()),
//     setBackgroundImage: (imageName: string) => dispatch(appActions.setBackgroundImage(imageName)),
//   };
// };

export default withRouter(connect()(SearchInput));
