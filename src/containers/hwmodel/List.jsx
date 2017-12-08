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
        var li = document.createElement('li');
        li.className = 'mui-table-view-cell';
        li.innerHTML = '<div class="mui-table">'
                      + '<div class="mui-table-cell mui-col-xs-10">'
                      + '<div class="mui-ellipsis">巡查崔庄扬水站</div>'
                      + '<h5>类型：巡检</h5>'
                      + '<h5>状态：处理中</h5>'
                      + '<h5>开始时间：2017/11/18</h5>'
                      + '<h5>截止时间：2017/11/20</h5>'
                      + '</div>'
                      + '</div>';
        table.appendChild(li);
      }
    }, 1000);
  }

  render() {

    return (
      <Components.NavMenu title={'配置列表'}>
        <div id="pullrefresh" className="mui-content mui-scroll-wrapper">
    			<div className="mui-scroll">
    				<ul id='work-list' className="mui-table-view mui-table-view-chevron">
    					<div className='list-title'>我的工作</div>
    					<li className="mui-table-view-cell">
    						<div className="mui-table">
    						  <div className="mui-table-cell mui-col-xs-10">
    						    <div className="mui-ellipsis">维护服务器"A_CentOS6.5_DZ1"</div>
    						    <h5>类型：维护</h5>
    						    <h5>状态：未开始</h5>
    						    <h5>开始时间：2017/11/20</h5>
    						    <h5>截止时间：2017/11/24</h5>
    						  </div>
    						</div>
    					</li>
    					<li className="mui-table-view-cell">
    						<div className="mui-table">
    						  <div className="mui-table-cell mui-col-xs-10">
    						    <div className="mui-ellipsis">巡查南李庄扬水站</div>
    						    <h5>类型：巡检</h5>
    						    <h5>状态：未开始</h5>
    						    <h5>开始时间：2017/11/19</h5>
    						    <h5>截止时间：2017/11/21</h5>
    						  </div>
    						</div>
    					</li>
    					<li className="mui-table-view-cell">
    						<div className="mui-table">
    						  <div className="mui-table-cell mui-col-xs-10">
    						    <div className="mui-ellipsis">巡查五陵镇扬水站</div>
    						    <h5>类型：巡检</h5>
    						    <h5>状态：处理中</h5>
    						    <h5>开始时间：2017/11/18</h5>
    						    <h5>截止时间：2017/11/20</h5>
    						  </div>
    						</div>
    					</li>
    				</ul>
    			</div>
    		</div>
      </Components.NavMenu>
    );
  }
}
