import React, { Component } from 'react';

import * as Components from '../../components';

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    mui.init({
      pullRefresh: {
        container: '#pullrefresh',
        down: {
          callback: this.pulldownRefresh.bind(this),
        },
        up: {
          contentrefresh: '正在加载...',
          callback: this.pullupRefresh.bind(this),
        }
      }
    });
    document.getElementById("add").addEventListener('tap', () => {
      location.href = 'hwmodel-add.html';
    });
  }

  // 下拉刷新
  pulldownRefresh() {
    setTimeout(() => {
      mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
    }, 1000);
  }

  // 上拉加载
  pullupRefresh() {
    var count = 0;
    setTimeout(() => {
      mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 0)); //参数为true代表没有更多数据了。
      var table = document.getElementById('work-list');
      var cells = document.body.querySelectorAll('.mui-table-view-cell');
      for (var i = cells.length, len = i + 1; i < len; i++) {

      }
    }, 1000);
  }

  render() {

    return (
      <Components.NavMenu>
        {/* 标题 */}
        <header className="mui-bar mui-bar-nav" style={{ background: '#fff' }}>
          <a href="#offCanvasSide" className="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
          <a id="add" className="mui-icon mui-icon-plus mui-pull-right"></a>
          <h1 className="mui-title">配置列表</h1>
        </header>
        {/* 刷新列表 */}
        <div id="pullrefresh" className="mui-content mui-scroll-wrapper">
        	<div className="mui-scroll">
            <div style={{ display: 'flex' }}>
              <div className="mui-input-row mui-search" style={{ flex: 1 }}>
    						<input type="text" className="mui-input-clear"/>
    					</div>
  						<button className="mui-btn mui-btn-primary mui-icon mui-icon-search" style={{ width: 80, height: 40 }}> 查询</button>
            </div>
            <ul id='work-list' className="mui-table-view mui-table-view-chevron">
        			<li className="mui-table-view-cell">
        				<div className="mui-table mui-slider-handle">
      				    <div className="mui-ellipsis">初始化的配置</div>
      				    <h5>{'内容：' + `{"userType":2}`}</h5>
      				    <h5>备注：初始化的配置</h5>
        				</div>
                <div className="mui-slider-right mui-disabled">
      						<a className="mui-btn mui-btn-grey mui-icon mui-icon-compose"></a>
      						<a className="mui-btn mui-btn-red mui-icon mui-icon-trash"></a>
      					</div>
        			</li>
        			<li className="mui-table-view-cell">
        				<div className="mui-table mui-slider-handle">
      				    <div className="mui-ellipsis">管理员的配置</div>
      				    <h5>{'内容：' + `{"userType":1}`}</h5>
      				    <h5>备注：管理员的配置</h5>
        				</div>
                <div className="mui-slider-right mui-disabled">
      						<a className="mui-btn mui-btn-grey mui-icon mui-icon-compose"></a>
      						<a className="mui-btn mui-btn-red mui-icon mui-icon-trash"></a>
      					</div>
        			</li>
        			<li className="mui-table-view-cell">
        				<div className="mui-table mui-slider-handle">
      				    <div className="mui-ellipsis">用户的配置</div>
      				    <h5>{'内容：' + `{"userType":0}`}</h5>
      				    <h5>备注：用户的配置</h5>
        				</div>
                <div className="mui-slider-right mui-disabled">
                  <a className="mui-btn mui-btn-grey mui-icon mui-icon-compose"></a>
                  <a className="mui-btn mui-btn-red mui-icon mui-icon-trash"></a>
                </div>
        			</li>
        		</ul>
        	</div>
        </div>
      </Components.NavMenu>
    );
  }
}
