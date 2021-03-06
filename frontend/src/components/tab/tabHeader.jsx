import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {selectTab} from './tabActions';

class TabHeader extends Component {
  render() {
    const selected = this.props.tab.selected == this.props.target;

    if(this.props.tab.visible[this.props.target]) {
      return (
        <li className={selected ? 'active' : ''}>
          <a
            href="javascript:;"
            onClick={() => this.props.selectTab(this.props.target)}
            data-toggle="tab"
            data-target={this.props.target}
          >
            <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
          </a>
        </li>
      );
    };

    return false;
  };
};

const mapStateToProps = state => ({tab: state.tab});
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);
