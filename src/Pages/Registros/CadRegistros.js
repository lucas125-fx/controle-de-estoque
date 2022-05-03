import { StatusBar } from 'expo-status-bar';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, Linking, Text, View, TextInput,Button, Image } from 'react-native';
import db from '../../Config/firebase';


export default function CadRegistros({navigation}) {
  
  const [nome, onChangeNome] = useState("");
  const [tipo, onChangeTipo] = useState('');
  const [preco, onChangePreco] = useState('');
  const [quantidade, onChangeQuantidade] = useState('');
  const [data, onChangeData] = useState('');
  const [funcionario, onChangeFuncionario] = useState('');

  const request = async () => {
    const querySnapshot = await getDocs(
      collection(db, "Saída")
    );

    querySnapshot.forEach(
      (doc) => {
        console.log(doc.data());
      }
    );
  }
  const insertData = async () => {
    const docRef = await addDoc(collection(db, "Saída"), {
      nome: nome,
      tipo: tipo,
      preco: preco,
      quantidade: quantidade,
      data: data,
      funcionario: funcionario,
    });
    console.log("Document written with ID: ", docRef.id);
  }

  useEffect(() => {
    request();
  }, [])

  useEffect(() => {
    console.log(nome)
  }, [nome])
  return (
    <View style={styles.container}>
     
      <View style={styles.container1}>
      <Image
          style={styles.logo}
          source={require('../../../assets/images/icon2.png')}
        />
      <Text style={styles.text}>EstoVirtu</Text>
      <TextInput
        style={styles.input1}
        placeholder="Nome Do Produto:"      
        placeholderTextColor="#FFF"
        onChangeText={onChangeNome}
      />
      <TextInput
        style={styles.input1}
        placeholder="Tipo Do Produto:"      
        placeholderTextColor="#FFF"
        onChangeText={onChangeTipo}
      />
      <TextInput
        style={styles.input2}
        placeholder="Preço:"
        placeholderTextColor="#FFF"             
        onChangeText={onChangePreco}
      />
      <TextInput
        style={styles.input2}
        placeholder="Quantidade:"
        placeholderTextColor="#FFF" 
        onChangeText={onChangeQuantidade}            
      />
      <TextInput
        style={styles.input2}
        placeholder="Data:"
        placeholderTextColor="#FFF" 
        onChangeText={onChangeData}            
      />
      <TextInput
        style={styles.input2}
        placeholder="Funcionário:"
        placeholderTextColor="#FFF" 
        onChangeText={onChangeFuncionario}            
      />
      <View >
      <TouchableOpacity
      onPress={() => (insertData(),alert('Produto retirado com sucesso!!'),navigation.navigate('Principal'))}
        style={styles.botao}>

        <Text style={{ fontSize: 20, color: '#fff', }}>Registrar Saída</Text>

      </TouchableOpacity>
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
    color:'white',
   
  },
  container1:{
    //border:'solid black',
    height: 90,
    width: 90,
  marginBottom:40
  },
  text:{
    marginTop: 0,
    fontFamily: 'normal',
    color: 'white',
    marginLeft:-20,
    marginRight:-110,
    fontSize:30
  },
  input: {
    color: 'white',
    marginLeft: -150,
    marginRight:-150,
    borderWidth: 1,
    backgroundColor: 'black',
    marginTop: 10,
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  input1: {
    marginTop: 0,
    marginLeft: -150,
    marginRight:-150,
    borderWidth: 1,
    color: 'white',
    backgroundColor: 'black',
    // fontSize:40,
    marginTop: 30,
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,

},
  input2: {
    marginTop: 0,
    marginLeft: -150,
    marginRight:-150,
    borderWidth: 1,
    color: 'white',
    backgroundColor: 'black',
    // fontSize:40,
    marginTop: 30,
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
   
},
    botao: {
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      paddingBottom: 5,
      marginLeft: -30,
      marginRight: -30,
      marginTop: 50
   },
   logo: {
    width: 200,
    height: 200,
    marginLeft: -85,
    marginTop: -250
  },
  Link:{
    
    color: 'black',
    marginLeft: -5,
    marginRight:-10
    
  }
 

});