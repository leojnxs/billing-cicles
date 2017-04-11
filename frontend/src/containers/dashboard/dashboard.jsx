import React, {Component} from 'react';

import Row from '../../components/common/row/row';
import Content from '../../components/content/content';
import ContentHeader from '../../components/contentHeader/contentHeader';
import ValueBox from '../../components/valueBox/valueBox';

class Dashboard extends Component {
  render() {
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value="R$ 10"
              text="Total de créditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value="R$ 10"
              text="Total de débitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value="R$ 0"
              text="Valor consolidado"
            />
          </Row>
        </Content>
      </div>
    );
  }
}

export default Dashboard;
