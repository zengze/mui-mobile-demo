import React, { Component } from 'react';
import _ from 'lodash';

import * as Components from '../../components';

export default class Modify extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    let params = decodeURI(location.search).split('?')[1];
    let dataList = params.split('&');
    let dataPairs = _.map(dataList, (item) => {
      return item.split('=');
    })
    let data = _.fromPairs(dataPairs);
    this.setState({
      data: data,
    })
  }

  render() {
    const { data } = this.state;

    return (
      <Components.NavMenu>
        {/* 标题 */}
        <header className="mui-bar mui-bar-nav" style={{ background: '#fff' }}>
          <a href="#offCanvasSide" className="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
    			<a className="mui-action-back mui-btn mui-btn-link mui-pull-right">返回</a>
          <h1 className="mui-title">修改配置</h1>
        </header>
        <div className="mui-content">
    			<div className="mui-content-padded">
    				<h4>名称：</h4>
            <input type="text" placeholder="请输入名称" value={data && data.name} />
            <h4>内容：</h4>
            <input type="text" placeholder="请输入内容" value={data && data.content} />
            <h4>备注：</h4>
            <input type="text" placeholder="请输入备注" value={data && data.ts} />
            <button className="mui-btn mui-btn-primary">保存</button>
    			</div>
    		</div>
      </Components.NavMenu>
    );
  }
}
