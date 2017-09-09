/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const geraNumeroRandomico = () => {
  var numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio);
};
export default class app1 extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Gerador de Número Randômico!!</Text>
        <Button 
          title="Gerar número randômico"
          onPress={geraNumeroRandomico}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('app1', () => app1);
