import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'

class Foo extends React.Component {
  handleChick = () => {
    this.props.dispatch(push('/'))
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