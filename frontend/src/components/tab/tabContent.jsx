import React, {Component} from 'react';
import {connect} from 'react-redux';

class TabContent extends Component {
  render() {
    const selected = this.props.tab.selected == this.props.id;

    if(this.props.tab.visible[this.props.id]) {
      return (
        <div
          id={this.props.id}
          className={`tab-pane${selected ? ' active' : ''}`}
        >
          {this.props.children}
        </div>
      );
    };

    return false;
  };
};

const mapStateToProps = state => ({tab: state.tab});

export default connect(mapStateToProps)(TabContent);