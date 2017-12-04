import React, { Component } from 'react';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div>
        <header className="mui-bar mui-bar-nav">
    			<a className="mui-action-menu mui-icon mui-icon-bars mui-pull-left"></a>
    			<a className="mui-action-back mui-btn mui-btn-link mui-pull-right">关闭</a>
    			<h1 className="mui-title">off canvas（侧滑导航）</h1>
    		</header>
      </div>
    );
  }
}
