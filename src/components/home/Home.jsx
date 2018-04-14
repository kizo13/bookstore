import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row main">
        <div className="column">
          <div>Something..</div>
        </div>
      </div>
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
