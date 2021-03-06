import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Linking, Text, View, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import db from '../../Config/firebase';
import { collection, doc, getDocs } from 'firebase/firestore';
import { async } from '@firebase/util';


export default function Login({ navigation }) {

  // const [email, onChangeEmail] = useState("");
  // const [password, onChangePassword] = useState('');

  // const request = async () => {
  //   const querySnapshot = await getDocs(
  //     collection(db, "Estoque")
  //   );

  //   querySnapshot.forEach(
  //     (doc) => {
  //       console.log(doc.data());
  //     }
  //   );
  // }

  // useEffect(() => {
  //   request();
  // }, [])

  // useEffect(() => {
  //   console.log(email)
  // }, [email])

  return (
    <View style={styles.container}>

      <View style={styles.container1}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/icon2.png')}
        />
        <Text style={styles.text}>EstoVirtu</Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            // onChangeText={onChangeEmail}
            // value={email}
            placeholder="Email:"
            placeholderTextColor="#FFF"
          />
          <TextInput
            style={styles.input1}
            // onChangeText={onChangePassword}
            // value={password}
            secureTextEntry={true}
            password={true}
            placeholder="Senha:"
            placeholderTextColor="#FFF"
          />
        </SafeAreaView>
        <View >
          <TouchableOpacity
            onPress={() => (navigation.navigate('DashboardRoutes'))}
            style={styles.botao}>
            <Text style={{ fontSize: 20, color: '#fff', }}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.link}
            onPress={() => (navigation.navigate('Cadastro'))}>
            J?? possui conta?
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
    borderStyle: 'solid',
    borderColor: "black",
    height: 90,
    width: 90,
    backgroundColor: '#FFB800',
  },
  text: {
    marginTop: 10,
    fontFamily: 'normal',
    color: 'white',
    marginLeft: -20,
    marginRight: -110,
    fontSize: 30
  },
  input: {
    color: 'white',
    marginLeft: -150,
    marginRight: -150,
    borderWidth: 1,
    backgroundColor: 'black',
    marginTop: 30,
    borderRadius: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  input1: {
    marginTop: 0,
    marginLeft: -150,
    marginRight: -150,
    borderWidth: 1,
    color: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: 'black',
    // fontSize:40,
    marginTop: 30,
    borderRadius: 30,
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
    marginTop: -200
  },
  link: {
    // color='blue',
    marginLeft: -5,
    marginRight: -10
  }


});
