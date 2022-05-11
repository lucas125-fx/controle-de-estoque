import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity, TouchableHighlight, ScrollView } from 'react-native';
import { collection, query, where, getDocs, doc } from "firebase/firestore";
import db from '../../Config/firebase';
import { FlatList } from "react-native-gesture-handler";
import tw from 'twrnc'

// const listar = async ()=>{
//   const q = query(collection(db, "Produtos"), where("nome", "==", true));
//   const querySnapshot = await getDocs(q);
//   querySnapshot.forEach((doc) => {
//     // doc.data() is never undefined for query doc snapshots
//     console.log(doc.id, " => ", doc.data());
//   });

// } 

export default function Saida({ navigation }) {

  const [produtos, setProdutos] = useState(true);
  const [dadosRetorno, setDadosRetorno] = useState();

  // const getUserId = async () => {
  //     const usuario_id = await AsyncStorage.getItem("usuario_id").then(res => {
  //         setUserId(res)
  //     });
  // };
  const busca = async () => {
    const querySnapshot = await getDocs(collection(db, "Saída"));

    const document = [];
    querySnapshot.forEach((doc) => {
      document.push({
        ...doc.data(),
        id: doc.id
      });
    });
    setDadosRetorno(document)
    if (produtos) {
      const docSnap = await getDocs(doc(db, "Saída")).then(
        (doc) => {
          if (doc.exists()) {
            const newData = [
              ['nome', doc.data().nome],
              ['preco', doc.data().preco],
              ['quantidade', doc.data().quantidade],
              ['tipo', doc.data().tipo]
              ['data', doc.data().data]
              ['funcionario', doc.data().funcionario]
            ]
            console.log('setDadosRetorno', newData)
            setDadosRetorno(newData)
          }
        }
      );
    }
  }

  // useEffect(async () => {
  //     // await AsyncStorage.getItem(" ")
  //     // .then(res => {
  //     //     setUserId(res)
  //     //     busca()
  //     // });
  // }, [userId])

  useEffect(() => {
    busca();
  }, [])


  //   const querySnapshot = await getDocs(collection(db, "Produtos"));
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar Produto"
        placeholderTextColor="#FFF"
      />
      <View style={styles.produtos}>
        <ScrollView>
          <Text style={styles.font}>Seus Produtos:</Text>
          <FlatList
            data={dadosRetorno}
            renderItem={(item) => (

              <View style={styles.produtos_container}>
                <View style={styles.produtos_container_inside}>
                  <View>
                    <Text style={tw `text-white` }>
                      Nome do Produto:
                      {console.log(item)}
                    </Text>
                  </View>
                  <View>
                    <Text style={tw `text-white` }>
                      {item['item']['nome']}
                    </Text>
                  </View>
                </View>
                <View style={styles.produtos_container_inside}>
                  <View>
                    <Text style={tw `text-white` }>
                      Meu ID:
                    </Text>
                  </View>
                  <View>
                    <Text style={tw `text-white` }>
                      {item['item']['id']}
                    </Text>
                  </View>
                </View>
                <View style={styles.produtos_container_inside}>
                  <View>
                    <Text style={tw `text-white` }>
                      Meu Preço:
                    </Text>
                  </View>
                  <View>
                    <Text style={tw `text-white` }>
                      {item['item']['preco']}
                    </Text>
                  </View>
                </View>
                <View style={styles.produtos_container_inside}>
                  <View>
                    <Text style={tw `text-white` }>
                      Quantidade disponível:
                    </Text>
                  </View>
                  <View>
                    <Text>
                      {item['item']['quantidade']}
                    </Text>
                  </View>
                </View>
                <View style={styles.produtos_container_inside}>
                  <View>
                    <Text style={tw `text-white` }>
                      Tipo:
                    </Text>
                  </View>
                  <View>
                    <Text style={tw `text-white` }>
                      {item['item']['tipo']}
                    </Text>
                  </View>
                </View>
                <View style={styles.produtos_container_inside}>
                  <View>
                    <Text style={tw `text-white` }>
                      Data:
                    </Text>
                  </View>
                  <View>
                    <Text style={tw `text-white` }>
                      {item['item']['data']}
                    </Text>
                  </View>
                </View>
                <View style={styles.produtos_container_inside}>
                  <View>
                    <Text style={tw `text-white` }>
                      funcionario:
                    </Text>
                  </View>
                  <View>
                    <Text style={tw `text-white` }>
                      {item['item']['funcionario']}
                    </Text>
                  </View>
                </View>

              </View>
            )}
          />
        </ScrollView>
      </View>
      <View style={styles.linha}>
        <TouchableOpacity
          onPress={() => (navigation.navigate('Cadastro De Produtos'))}
          style={styles.botao}>
          <Text style={{ fontSize: 20, color: '#fff', }}>Cadastre Seu Produto</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => (navigation.navigate('Qrcode'))}
          style={styles.botao2}>
          <Text style={{ fontSize: 20, color: '#fff', }}>Ler Qr Code</Text>
        </TouchableOpacity>
      </View>
    </View >
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
    marginTop: 160,
    marginBottom: 10,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  produtos: { backgroundColor: '#FFB80', ...tw`mb-5 bg-gray p-5 items-center rounded-xxl  w-full h-full max-h-screen` },
  produtos_container: { backgroundColor: 'black', ...tw`mb-5 bg-gray p-2 items-center rounded-lg shadow-lg  w-full   mx-auto` },
  produtos_container_inside: tw`p-4 w-full flex flex-row`,
  // {

  //   // marginBottom: 10,
  //   // backgroundColor: 'gray',
  //   // padding: 30,
  //   // justifyContent: 'center',
  //   // alignItems: 'center',
  //   // borderRadius: 30,
  //   // // flex: 1,
  //   // height: 200,
  //   // width: 400
  // },
  font: {
    fontSize: 15,
    color: 'white',
    marginRight: 50,
    marginLeft: -220,
    marginTop: -100,
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
    marginLeft: 30
  },
  button1: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    marginRight: 30
  },
  countText: {
    color: "black",
    fontSize: 25
  },
  linha: {
    flexDirection: 'row',
    marginTop: 20
  }
});