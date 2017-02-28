import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {

  render() {
    return (
      <ul className="soc">
        <li><a className="soc-linkedin" href="https://www.linkedin.com/in/qhduong/"></a></li>
        <li><a className="soc-github" href="https://github.com/qhduong"></a></li>
        <li><a className="soc-twitter soc-icon-last" href="https://twitter.com/qhduong"></a></li>
      </ul>
    );
  }
}
