import React, {Component} from 'react';

import Content from '../../components/content/content';
import ContentHeader from '../../components/contentHeader/contentHeader';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          Dashboard
        </Content>
      </div>
    )
  }
}

export default Dashboard;
