import React, { Component } from 'react';

import * as Components from '../../components';

export default class List extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
  }

  render() {

    return (
      <Components.NavMenu title={'配置列表'}>
        <div id="offCanvasContentScroll" className="mui-content mui-scroll-wrapper">
          <div className="mui-scroll">
            <div className="mui-content-padded">
              欢迎来到配置列表！！！
            </div>
          </div>
        </div>
      </Components.NavMenu>
    );
  }
}
