import React from 'react';

import './Cell.css'

export default class Cell extends React.Component {
  render() {
    let cellClasses = "cell ";

    if (this.props.snakeOn)
      cellClasses += " snake-on";
    else if (this.props.appleOn)
      cellClasses += " apple-on";

    return <div className={cellClasses} />;
  }
}
