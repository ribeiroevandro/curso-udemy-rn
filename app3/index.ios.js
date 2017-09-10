import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

class app3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: ''
    };
  }

  jokenpo(escolhaUsuario) {
    // Gerar número aleatório
    const numAleatorio = Math.floor(Math.random() * 3);
    let escolhaComputador = '';
    let resultado = '';

    switch (numAleatorio) {
      case 0: escolhaComputador = 'pedra'; break;
      case 1: escolhaComputador = 'papel'; break;
      case 2: escolhaComputador = 'tesoura'; break;
      default: escolhaComputador = '';
    }

    if (escolhaComputador === 'pedra') {
      if (escolhaUsuario === 'pedra') {
        resultado = 'Empate';
      } else if (escolhaUsuario === 'papel') {
        resultado = 'Você ganhou!';
      } else {
        resultado = 'Você perdeu!';
      }
    }

    if (escolhaComputador === 'papel') {
      if (escolhaUsuario === 'papel') {
        resultado = 'Empate';
      } else if (escolhaUsuario === 'tesoura') {
        resultado = 'Você ganhou!';
      } else {
        resultado = 'Você perdeu!';
      }
    }

    if (escolhaComputador === 'tesoura') {
      if (escolhaUsuario === 'tesoura') {
        resultado = 'Empate';
      } else if (escolhaUsuario === 'pedra') {
        resultado = 'Você ganhou!';
      } else {
        resultado = 'Você perdeu!';
      }
    }

    this.setState({ 
      escolhaUsuario,
      escolhaComputador,
      resultado
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Topo />
        <View style={styles.acoes}>
          <View>
            <Button title="pedra" onPress={() => { this.jokenpo('pedra'); }} />
          </View>
          <View>
            <Button title="papel" onPress={() => { this.jokenpo('papel'); }} />
          </View>
          <View>
            <Button title="tesoura" onPress={() => { this.jokenpo('tesoura'); }} />
          </View>
        </View>
        <View style={styles.resultado}>
          <Text style={styles.resultadoTxt}>{ this.state.resultado }</Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Você' />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  resultado: {
    alignItems: 'center'
  },
  resultadoTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    height: 25,
    marginBottom: 50,
  },
});

AppRegistry.registerComponent('app3', () => app3);
