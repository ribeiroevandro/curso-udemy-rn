import React from 'react';
import { AppRegistry, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  var frases = Array();
  frases[0] = 'Siga em frente sem medo do que deixa para trás, pois o que realmente importa irá com você.';
  frases[1] = 'Quando faltar sorte, motivação ou esperança lembre-se do poder da sua força!';
  frases[2] = 'Resista sempre com força e coragem, e jamais abandone a certeza de que você vai no caminho certo.';
  frases[3] = 'Não é perdedor aquele que escolhe mudar de rumo, mas quem fica parado esperando que os obstáculos se desviem.';
  frases[4] = 'Não existe uma direção correta, mas sim uma atitude certa que levará ao sucesso.';

  var fraseEscolhida = frases[ numeroAleatorio ];

  Alert.alert(fraseEscolhida);
};

const App = () => {

  const { principal, botao, textoBotao } = Estilos;

  return(
    <View style={ principal }>
      <Image
        source={ require('./imgs/logo.png') }
      />
      <TouchableOpacity 
        onPress={gerarNovaFrase}
        style={ botao }
      >
        <Text style={ textoBotao }>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('app2', () => App);