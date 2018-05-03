// Code Invitation Component Here
import React from 'react';

export default class Invitation extends React.Component {
  render() {
    return (
      <div className="invite">
        <h1>You've been invited!</h1>
        <div className="invitee">
          {this.props.children}
        </div>
      </div>
    )
  }
}
