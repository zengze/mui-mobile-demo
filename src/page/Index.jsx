import React, { Component } from 'react';

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
        <aside id="offCanvasSide" className="mui-off-canvas-left" style={{ color: '#fff' }}>
        	<div id="offCanvasSideScroll" className="mui-scroll-wrapper">
        		<div className="mui-scroll">
        			<div style={{ margin: '10px 15px', textIndent: '1em', fontSize: 16 }}>菜单栏</div>

        		</div>
        	</div>
        </aside>
        {/* 主界面部分 */}
        <div className="mui-inner-wrap">
        	<header className="mui-bar mui-bar-nav">
        		<a href="#offCanvasSide" className="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
        		<a className="mui-action-back mui-btn mui-btn-link mui-pull-right">关闭</a>
        		<h1 className="mui-title">div模式右滑菜单</h1>
        	</header>
        	<div id="offCanvasContentScroll" className="mui-content mui-scroll-wrapper">
        		<div className="mui-scroll">
        			<div className="mui-content-padded">
        				<p>这是可拖动式右滑导航示例，主页面和菜单在一个HTML文件中， 优点是支持拖动手势（跟手），缺点是不支持菜单内容在多页面的复用； 当前页面为主界面，你可以在主界面放置任何内容； 打开侧滑菜单有多种方式： 1、在当前页面向右拖动； 2、点击页面左上角的
        					<span className="mui-icon mui-icon-bars"></span> 图标； 3、通过JS API触发（例如点击如下蓝色按钮体验）；
        					<span className="android-only">4、Android手机按menu键；</span>
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
