import React, {Component} from 'react';
import axios from 'axios';

import {BASE_URL} from '../../config/constants';
import Row from '../../components/row/row';
import Content from '../../components/content/content';
import ContentHeader from '../../components/contentHeader/contentHeader';
import ValueBox from '../../components/valueBox/valueBox';

class Dashboard2 extends Component {
  constructor(props) {
      super(props);
      this.state = {summary: {credit: 0, debt: 0}};
  };

  componentWillMount() {
    this.loadData();
  }

  loadData() {
    axios.get(`${BASE_URL}/billingCycles/summary`)
      .then(resp => this.setState({ ...this.state, summary: resp.data }));
  }

  render() {
    const { credit, debt } = this.state.summary;
    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value={`R$ ${credit}`}
              text="Total de créditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value={`R$ ${debt}`}
              text="Total de débitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value={`R$ ${credit - debt}`}
              text="Valor consolidado"
            />
          </Row>
        </Content>
      </div>
    );
  }
}

export default Dashboard2;