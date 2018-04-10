import * as React from 'react';
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';

import './CartContent.scss';

class CartContent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cart">Cart content</div>
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

export default withRouter(connect()(CartContent));
