import React from 'react';
import { connect } from 'react-redux';
import { fetch } from './server';

class Foo extends React.Component {
  handleChick = () => {
    fetch();
  }
  render() {
    return (
      <div
        onClick={this.handleChick}
      >
        foo
      </div>
    )
  }
}

export default connect()(Foo)