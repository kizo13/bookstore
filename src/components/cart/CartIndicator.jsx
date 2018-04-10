import * as React from 'react';
import { connect } from 'react-redux';
// import { Dispatch } from 'redux';
import { withRouter } from 'react-router-dom';

import './CartIndicator.scss';

class CartIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // TODO: check localstorage
  }

  render() {
    return (
      <div className="cart-indicator">Cart ({this.props.app.cart.length})</div>
    );
  }
}

const mapStateToProps = (state) => ({
  app: state.app,
});

// const mapDispatchToProps = (dispatch: Dispatch<DeskCategoriesProps>) => {
//   return {
//     getNovelCategories: () => dispatch(apiActions.getNovelCategories()),
//     setBackgroundImage: (imageName: string) => dispatch(appActions.setBackgroundImage(imageName)),
//   };
// };

export default withRouter(connect(mapStateToProps)(CartIndicator));
