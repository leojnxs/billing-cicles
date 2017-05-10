import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Row from '../../components/row/row';
import Content from '../../components/content/content';
import ContentHeader from '../../components/contentHeader/contentHeader';
import Tabs from '../../components/tab/tabs';
import TabsHeader from '../../components/tab/tabsHeader';
import TabsContent from '../../components/tab/tabsContent';
import TabHeader from '../../components/tab/tabHeader';
import TabContent from '../../components/tab/tabContent';

import {getList} from './billingCycleActions';
import {selectTab, showTabs} from '../../components/tab/tabActions';

class BillingCycle extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.selectTab('tabList');
    this.props.showTabs('tabList', 'tabCreate');
    //this.props.getList();
  }

  render() {
    return (
      <div>
        <ContentHeader title="Billing Cycle" small="" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="List" icon="bars" target="tabList" />
              <TabHeader label="Add" icon="plus" target="tabCreate" />
              <TabHeader label="Update" icon="pencil" target="tabUpdate" />
              <TabHeader label="Delete" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList"><h1>List</h1></TabContent>
              <TabContent id="tabCreate"><h1>add</h1></TabContent>
              <TabContent id="tabUpdate"><h1>update</h1></TabContent>
              <TabContent id="tabDelete"><h1>delete</h1></TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = state => ({list: state.list});
const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycle);
