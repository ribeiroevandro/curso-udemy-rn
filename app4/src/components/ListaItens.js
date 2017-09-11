import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';
import Itens from './Itens';

export default class ListaItens extends Component {
  constructor(props) {
    super(props);
    
    this.state = { listaItens: [] };
  }

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then(response => { this.setState({ listaItens: response.data }); })
      .catch(() => { console.log('Error ao recuperar os dados!'); });
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#ddd' }}>
        { this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />)) }
      </ScrollView>
    );
  }
}
