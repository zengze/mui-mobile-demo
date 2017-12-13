import React, { Component } from 'react';
const ReactDOMServer = require('react-dom/server');
import _ from 'lodash';

import * as Components from '../../components';

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: '初始化的配置',
          content: '{"userType":2}',
          ts: '初始化的配置',
        },
        {
          name: '管理员的配置',
          content: '{"userType":1}',
          ts: '管理员的配置',
        },
        {
          name: '用户的配置',
          content: '{"userType":0}',
          ts: '用户的配置',
        },
      ],
      listData: [
        {
          name: '初始化的配置',
          content: '{"userType":2}',
          ts: '初始化的配置',
        },
        {
          name: '管理员的配置',
          content: '{"userType":1}',
          ts: '管理员的配置',
        },
        {
          name: '用户的配置',
          content: '{"userType":0}',
          ts: '用户的配置',
        },
      ],
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
    this._add();
    this._modify();
    mui('.mui-slider-right').on('tap', '.mui-icon-trash', (e) => {
      mui.confirm('确认删除该条记录？', '提示', ['确认', '取消'], function(e) {
        if (e.index == 0) {
					mui.toast('删除失败');
				}
			});
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
    const { data, listData } = this.state;
    const that = this;
    setTimeout(() => {
      mui('#pullrefresh').pullRefresh().endPullupToRefresh((data.length <= listData.length + 1)); //参数为true代表没有更多数据了。
      // for (var i = 0; i < 1; i++) {
      //   let list = [...listData];
      //   list.push(data[listData.length]);
      //   that.setState({
      //     listData: list,
      //   });
      // }
    }, 1000);
  }

  _form(item, index) {
    return (
      <li className="mui-table-view-cell">
        <div className="mui-table mui-slider-handle">
          <div className="mui-ellipsis">{item.name}</div>
          <h5>{'内容：' + item.content}</h5>
          <h5>{'备注：' + item.ts}</h5>
        </div>
        <div className="mui-slider-right mui-disabled">
          <a id={'happy-modify' + index} className="happy-modify mui-btn mui-btn-grey mui-icon mui-icon-compose"></a>
          <a className="mui-btn mui-btn-red mui-icon mui-icon-trash"></a>
        </div>
      </li>
    )
  }

  _add() {
    document.getElementById("add").addEventListener('tap', () => {
      location.href = 'hwmodel-add.html';
    });
  }

  _modify() {
    const { data } = this.state;
    for(let i = 0; i < data.length; i++) {
      document.getElementById('happy-modify' + i).addEventListener('tap', () => {
        let params = '?name=' + data[i].name + '&content=' + data[i].content + '&ts=' + data[i].ts;
        location.href = 'hwmodel-modify.html' + params;
      });
    }
  }

  render() {

    const { listData } = this.state;

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
        			{
                listData.length == 0
                ?
                  <div style={{ padding: 10, textAlign: 'center' }}>暂无数据</div>
                :
                  _.map(listData, (item, index) => {
                    return this._form(item, index);
                  })
              }
        		</ul>
        	</div>
        </div>
      </Components.NavMenu>
    );
  }
}
