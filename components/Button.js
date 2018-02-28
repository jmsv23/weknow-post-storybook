import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const {
      children,
      onClick,
    } = this.props;
    return (
      <div onClick={() => { onClick() }}>
        {children}
      </div>
    )
  }
}
