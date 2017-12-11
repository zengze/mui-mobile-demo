import React, { Component } from 'react';

import * as Components from '../../components';

export default class Add extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    document.getElementById("back").addEventListener('tap', () => {
      location.href = 'hwmodel-list.html';
    });
  }

  render() {

    return (
      <Components.NavMenu>
        {/* 标题 */}
        <header className="mui-bar mui-bar-nav" style={{ background: '#fff' }}>
          <a href="#offCanvasSide" className="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
          <a id="back" className="mui-btn mui-btn-link mui-pull-right">返回</a>
          <h1 className="mui-title">添加配置</h1>
        </header>
      </Components.NavMenu>
    );
  }
}
