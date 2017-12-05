import React, { Component } from 'react';

export class SideMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {

    return (
      <div id="offCanvasSide" className="mui-off-canvas-left">
      	<div id="offCanvasSideScroll" className="mui-scroll-wrapper">
      		<div className="mui-scroll">
      			<div style={{ margin: '10px 15px', textIndent: '1em', fontSize: 16, color: '#fff' }}>菜单栏</div>
            <div className="mui-card">
            	<ul className="mui-table-view">
            		<li className="mui-table-view-cell mui-collapse">
            			<a className="mui-navigate-right" href="#">表单</a>
                  <ul className="mui-table-view">
                    <li className="mui-table-view-cell">Item 1</li>
                    <li className="mui-table-view-cell">Item 2</li>
                    <li className="mui-table-view-cell">Item 3</li>
                  </ul>
            		</li>
            		<li className="mui-table-view-cell mui-collapse">
            			<a className="mui-navigate-right" href="#">文字排版</a>
                  <ul className="mui-table-view">
                    <li className="mui-table-view-cell">Item 4</li>
                    <li className="mui-table-view-cell">Item 5</li>
                    <li className="mui-table-view-cell">Item 6</li>
                  </ul>
            		</li>
            	</ul>
            </div>
      		</div>
      	</div>
      </div>
    );
  }
}
