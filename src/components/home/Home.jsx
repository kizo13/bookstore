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
          <div className="search-book">Let's find a book</div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(Home));
