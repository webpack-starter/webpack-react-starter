import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router'

class App extends React.Component {
  handleChick = () => {
    this.props.dispatch(push('/foo'))
  }
  render() {
    return (
      <div onClick={this.handleChick}>
        App:
        {this.props.children}
      </div>
    )
  }
}

export default connect()(App)