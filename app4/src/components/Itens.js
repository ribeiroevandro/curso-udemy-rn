import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

export default class Itens extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.imgage}>
          <Image style={{ width: 100, height: 100 }} source={{ uri: this.props.item.foto }} />
        </View>
        <View style={styles.containerInfo}>
          <Text style={styles.infoTitulo}>{this.props.item.titulo}</Text>
          <Text style={styles.infoValor}>R$ {this.props.item.valor},00</Text>
          <Text style={styles.infoItem}>Local: {this.props.item.local_anuncio}</Text>
          <Text style={styles.infoItem}>Data:{this.props.item.data_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    flexDirection: 'row',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#999',
    backgroundColor: '#fff'
  },
  imgage: {
    width: 102,
    height: 102,
    justifyContent: 'center'
  },
  containerInfo: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    flex: 1
  },
  infoTitulo: {
    fontWeight: 'bold',
    paddingBottom: 5,
    fontSize: 18,
    color: 'blue'
  },
  infoValor: {
    fontWeight: 'bold',
    fontSize: 16
  },
  infoItem: {
    fontSize: 16
  }
});
