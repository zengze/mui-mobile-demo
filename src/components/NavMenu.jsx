import React, { Component } from 'react';

export class NavMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this._menuClick();
  }

  //菜单点击事件
  _menuClick() {
    mui('.mui-table-view-cell').on('tap', 'li', (e) => {
      let url = e.target.getAttribute('href');
      location.href = url;
    });
  }

  render() {

    return (
      <div id="offCanvasWrapper" className="mui-off-canvas-wrap mui-draggable mui-slide-in">
        {/* 侧滑菜单部分 */}
        <div id="offCanvasSide" className="mui-off-canvas-left" style={{ background: '#001529' }}>
        	<div id="offCanvasSideScroll" className="mui-scroll-wrapper">
        		<div className="mui-scroll">
        			<div style={{ padding: '12px 15px', fontSize: 20, color: '#fff', background: '#002140' }}>爱美斯国际物流</div>
            	<ul className="mui-table-view">
            		<li className="mui-table-view-cell mui-collapse">
            			<a className="mui-navigate-right" href="#">
                    <div className="mui-icon mui-icon-list" style={{ fontSize: 17, marginRight: 2 }}></div>
                    组织机构管理
                  </a>
                  <ul className="mui-table-view">
                    <li className="mui-table-view-cell">组织机构</li>
                    <li className="mui-table-view-cell">添加组织</li>
                  </ul>
            		</li>
            		<li className="mui-table-view-cell mui-collapse">
            			<a className="mui-navigate-right" href="#">
                    <div className="mui-icon mui-icon-list" style={{ fontSize: 17, marginRight: 2 }}></div>
                    配置管理
                  </a>
                  <ul className="mui-table-view">
                    <li className="mui-table-view-cell" href="hwmodel-list.html">配置列表</li>
                    <li className="mui-table-view-cell">添加配置</li>
                  </ul>
            		</li>
            		<li className="mui-table-view-cell mui-collapse">
            			<a className="mui-navigate-right" href="#">
                    <div className="mui-icon mui-icon-list" style={{ fontSize: 17, marginRight: 2 }}></div>
                    角色管理
                  </a>
                  <ul className="mui-table-view">
                    <li className="mui-table-view-cell">角色列表</li>
                    <li className="mui-table-view-cell">添加角色</li>
                  </ul>
            		</li>
            		<li className="mui-table-view-cell mui-collapse">
            			<a className="mui-navigate-right" href="#">
                    <div className="mui-icon mui-icon-list" style={{ fontSize: 17, marginRight: 2 }}></div>
                    用户管理
                  </a>
                  <ul className="mui-table-view">
                    <li className="mui-table-view-cell">用户列表</li>
                    <li className="mui-table-view-cell">添加用户</li>
                  </ul>
            		</li>
            		<li className="mui-table-view-cell mui-collapse">
            			<a className="mui-navigate-right" href="#">
                    <div className="mui-icon mui-icon-list" style={{ fontSize: 17, marginRight: 2 }}></div>
                    视图管理
                  </a>
                  <ul className="mui-table-view">
                    <li className="mui-table-view-cell">视图列表</li>
                    <li className="mui-table-view-cell">添加视图</li>
                  </ul>
            		</li>
            	</ul>
        		</div>
        	</div>
        </div>
        {/* 主界面部分 */}
        <div className="mui-inner-wrap">
        	{this.props.children}
        	{/* off-canvas backdrop */}
        	<div className="mui-off-canvas-backdrop"></div>
        </div>
      </div>
    );
  }
}
