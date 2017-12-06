import React, { Component } from 'react';

import * as Components from '../../components';

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
      <Components.NavMenu title={'首页'}>
        <div id="offCanvasContentScroll" className="mui-content mui-scroll-wrapper">
          <div className="mui-scroll">
            <div className="mui-content-padded">
              欢迎来到xxx管理系统！！！
            </div>
          </div>
        </div>
      </Components.NavMenu>
    );
  }
}
