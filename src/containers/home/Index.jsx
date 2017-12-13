import React, { Component } from 'react';

import * as Components from '../../components';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {

    return (
      <Components.NavMenu>
        <header className="mui-bar mui-bar-nav" style={{ background: '#fff' }}>
          <a href="#offCanvasSide" className="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
          <a className="mui-action-back mui-btn mui-btn-link mui-pull-right">退出</a>
          <h1 className="mui-title">首页</h1>
        </header>
        <div id="offCanvasContentScroll" className="mui-content mui-scroll-wrapper">
          <div className="mui-scroll">
            <div className="mui-content-padded">
              欢迎来到xxx管理系统！！！
            </div>
          </div>
        </div>
      </Components.NavMenu>
    );
  }
}
