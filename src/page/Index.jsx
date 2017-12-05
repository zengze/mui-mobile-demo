import React, { Component } from 'react';

import * as Components from '../components';

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
      <div id="offCanvasWrapper" className="mui-off-canvas-wrap mui-draggable mui-slide-in">
        {/* 侧滑菜单部分 */}
        <Components.SideMenu />
        {/* 主界面部分 */}
        <div className="mui-inner-wrap">
          <Components.TopNav title={'首页'}>zzz</Components.TopNav>
        	<div id="offCanvasContentScroll" className="mui-content mui-scroll-wrapper">
        		<div className="mui-scroll">
        			<div className="mui-content-padded">
        				<p>
                  这是可拖动式右滑导航示例，主页面和菜单在一个HTML文件中， 优点是支持拖动手势（跟手），缺点是不支持菜单内容在多页面的复用； 当前页面为主界面，你可以在主界面放置任何内容；
        				</p>
        			</div>
        		</div>
        	</div>
        	{/* off-canvas backdrop */}
        	<div className="mui-off-canvas-backdrop"></div>
        </div>
      </div>
    );
  }
}
