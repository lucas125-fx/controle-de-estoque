import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, TouchableHighlight } from 'react-native';
import { collection, query, where, getDocs } from "firebase/firestore";
import db from '../../Config/firebase';


const listar = async ()=>{
  const q = query(collection(db, "Produtos"), where("nome", "==", true));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  
} 


export default function Saida({navigation}){
 
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar Produto"
        placeholderTextColor="#FFF"
      />
        <Text style={styles.font1}>Lista de Produtos Vendidos</Text>
      <View style={styles.produtos}>
        <Text style={styles.font}>Seus Produtos:</Text>
      </View>
      {/* <View style={styles.linha}>
        <TouchableOpacity
          onPress={() => (navigation.navigate('Cadastro De Produtos'))}
          style={styles.botao}>
          <Text style={{ fontSize: 20, color: '#fff',  }}>Cadastre Seu Produto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (navigation.navigate('Qrcode'))}
          style={styles.botao2}>
          <Text style={{ fontSize: 20, color: '#fff', }}>Ler Qr Code</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB800',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 385,
    backgroundColor: 'black',
    color: 'white',
    marginTop: 0,
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  produtos: {
    marginBottom: 10,
    backgroundColor: 'black',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    height:200,
    width:400
  },
  font: {
    fontSize: 15,
    color: 'white',
    marginRight: 50,
    marginLeft:-220,
    marginTop:-100,
    marginBottom: 10
  },
  font1: {
    fontSize: 25,
    color: 'white',
    marginRight: 50,
    marginLeft: 50,
    marginTop:-100,
    marginBottom: 10
  },
  botao: {
    borderRadius: 40,
    width: 200,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: "center",
   marginBottom: 200,
  },
  botao2: {
    borderRadius: 40,
    width: 200,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: "center",
   marginBottom: 200,
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    marginLeft:30
  },
  button1: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    marginRight:30
  },
  countText: {
    color: "black",
    fontSize:25
  },
  linha:{
    flexDirection:'row',
    marginTop:20
  }
});
