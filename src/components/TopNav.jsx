import React, { Component } from 'react';

export class TopNav extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {
    console.log(this.props);

    return (
      <header className="mui-bar mui-bar-nav">
        <a href="#offCanvasSide" className="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
        <a className="mui-btn mui-btn-link mui-pull-right">退出</a>
        <h1 className="mui-title">{this.props.title}</h1>
      </header>
    );
  }
}
