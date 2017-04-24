import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Row from '../../components/row/row';
import Content from '../../components/content/content';
import ContentHeader from '../../components/contentHeader/contentHeader';

class BillingCycle extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {

  }

  render() {
    return (
      <div>
        <ContentHeader title="Billing Cycle" small="" />
        <Content>
          <Row>
          </Row>
        </Content>
      </div>
    );
  }
}

//const mapStateToProps = state => ({summary: state.BillingCycle});
//const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch);

//export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle);

export default BillingCycle;
