import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Linking, Text, View, TouchableOpacity, TextInput, Button, Image } from 'react-native';


export default function Login() {
  return (
    <View style={styles.container}>
     
      <View style={styles.container1}>
      <Image
      style={styles.logo}
      source = {require('../../../assets/images/icon.png')}
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
    color:'white'
  },
  container1:{
    border:'solid black',
    height: '90%',
    width: '90%',
    backgroundColor:'FFB800',
  },
  text:{
    marginTop:'0%',
    fontFamily:'anton',
    color:'white',
    fontSize:'175%',
    marginLeft:'32%',
    // padding:0
  },
  input: {
    
    margin: 12,
    borderWidth: 1,
    color:'white',
    backgroundColor:'black',
    marginTop:'10%',
    borderRadius:30
  },
   input1: {
   // height: 80,
   margin: 12,
   borderWidth: 1,
   color:'white',
   backgroundColor:'black',
   // fontSize:40,
   marginTop:'10%',
   borderRadius:30,
   },
   botao:{
     borderRadius:30,
     backgroundColor:'black',
     marginLeft:'20%',
     marginRight:'20%',
     justifyContent:'center',
     alignItems: "center",
     marginTop:'20%'

   },
   logo:{
      width: '55%',
      height:'28%',
      marginLeft:'22%',
      marginTop:'20%'
  },
  link:{
    // color='blue',
    marginLeft:'20%'
  }
 

});
