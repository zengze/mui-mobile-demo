import React, { Component } from 'react';

import * as Components from '../../components';

export default class Add extends Component {

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
        {/* 标题 */}
        <header className="mui-bar mui-bar-nav" style={{ background: '#fff' }}>
          <a href="#offCanvasSide" className="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
    			<a className="mui-action-back mui-btn mui-btn-link mui-pull-right">返回</a>
          <h1 className="mui-title">添加配置</h1>
        </header>
        <div className="mui-content">
    			<div className="mui-content-padded">
    				<h4>名称：</h4>
            <input type="text" placeholder="请输入名称" />
            <h4>内容：</h4>
            <input type="text" placeholder="请输入内容" />
            <h4>备注：</h4>
            <input type="text" placeholder="请输入备注" />
            <button className="mui-btn mui-btn-primary">添加</button>
    			</div>
    		</div>
      </Components.NavMenu>
    );
  }
}
