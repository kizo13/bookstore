import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import SearchResult from '../search/SearchResult';
import SearchInput from '../search/SearchInput';
import CartIndicator from '../cart/CartIndicator';
import './Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="column column-90">
            <SearchInput />
          </div>
          <div className="column column-10">
            <CartIndicator />
          </div>
        </div>
        <SearchResult />
      </React.Fragment>
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

export default withRouter(connect()(Home));
