import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Linking, Text, View, TouchableOpacity, TextInput, Button, Image } from 'react-native';


export default function Login() {
  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/icon2.png')}
        />
        <Text style={styles.text}>EstoVirtu</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Email"
        />
        <TextInput
          style={styles.input1}
          placeholder="Digite sua Senha"
          keyboardType='digite sua senha'
        />
        <View >
          <TouchableOpacity
            onPress={() => alert('Hello, world!')}
            style={styles.botao}>
            <Text style={{ fontSize: 20, color: '#fff', }}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.link}
            onPress={() => Linking.openURL('http://google.com')}>
            já possui conta?
          </Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB800',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white'
  },
  container1: {
    border: 'solid black',
    height: '750px',
    width: '400px',
    backgroundColor: 'FFB800',
  },
  text: {
    color: 'white',
    fontSize: '30px',
    textAlign: 'center'
  },
  input: {
    textAligin: 'center',
    margin: 12,
    borderWidth: 1,
    color: 'white',
    backgroundColor: 'black',
    marginTop: '40px',
    borderRadius: 30
  },
  input1: {
    margin: 12,
    borderWidth: 1,
    color: 'white',
    backgroundColor: 'black',
    marginTop: '40px',
    borderRadius: 30,
  },
  botao: {
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingBottom: '5px',
    marginTop:'50px',
    marginLeft: '120px',
    marginRight: '120px',
  },
  logo: {
    width: '250px',
    height: '200px',
    marginLeft: '70px',
    marginTop: '70px'
  },
  link: {
    marginLeft: '150px'
  }
});
