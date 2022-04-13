import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, TouchableHighlight } from 'react-native';


export default function Principal({navigaton}){
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count + 1);
  const onPress1 = () => setCount(count - 1);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar Produto"
        placeholderTextColor="#FFF"
      />
      <View style={styles.produtos}>
        <Text style={styles.font}>Seus Produtos:</Text>
        
<<<<<<< HEAD
      
          <View style={styles.linha}>
        <TouchableHighlight onPress={onPress1}>
        <View style={styles.button1}>
          <Text style={{color:'white'}}>-</Text>
        </View>
       </TouchableHighlight>

=======
        <TouchableHighlight onPress={onPress}>
        <View style={styles.button}>
          <Text style={{color:'white'}}>+</Text>
        </View>
      </TouchableHighlight>
>>>>>>> 4be3dfba9030a3810550c399da69f4cd7ed4f0c0
        <Text style={styles.countText}>
          {count || null}
        </Text>

<<<<<<< HEAD
        <TouchableHighlight onPress={onPress} >
        <View style={styles.button}>
          <Text style={{color:'white'}}>+</Text>
        </View>
      </TouchableHighlight>
        </View>
=======
        <TouchableHighlight onPress={onPress1}>
        <View style={styles.button1}>
          <Text style={{color:'white'}}>+</Text>
        </View>
      </TouchableHighlight>
>>>>>>> 4be3dfba9030a3810550c399da69f4cd7ed4f0c0
      </View>
      <View>
        <TouchableOpacity
          onPress={() => alert('Erro')}
          style={styles.botao}>
          <Text style={{ fontSize: 20, color: '#fff', }}>Cadastre seu produto</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  produtos: {
    marginBottom: 10,
    backgroundColor: 'black',
    padding: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flex: 1,
    height:800,
    width:385
  },
  font: {
    fontSize: 15,
    color: 'white',
    marginRight: 50,
    marginLeft:-220,
    marginTop:-100,
    marginBottom: 250
  },
  botao: {
    borderRadius: 40,
    width: 220,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 420,
  },
  button: {
<<<<<<< HEAD
    alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    marginLeft:30
=======
    // alignItems: "center",
    backgroundColor: "green",
    padding: 10,
    marginLeft:100
>>>>>>> 4be3dfba9030a3810550c399da69f4cd7ed4f0c0
  },
  button1: {
    // alignItems: "center",
    backgroundColor: "red",
    padding: 10,
<<<<<<< HEAD
    marginRight:30
  },
  countText: {
    color: "#fff",
    fontSize:25
  },
  linha:{
    flexDirection:'row',
    backgroundColor:'gray',
    whidth:0
=======
    marginRight:100
  },
  countText: {
    color: "#fff"
>>>>>>> 4be3dfba9030a3810550c399da69f4cd7ed4f0c0
  }
});
