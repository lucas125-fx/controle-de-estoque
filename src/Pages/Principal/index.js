
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import Login from '../Login/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Principal({navigaton}) {
  return (
    <View style={styles.container}>
      <Text onPress={()=>navigaton.navigate('Login')}>login</Text>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar Produto"
      />
      <View style={styles.produtos}>
        <Text style={styles.font}>Seus Produtos:</Text>
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
    width: '100%',
    border: '3px solid black',
    backgroundColor: 'black',
    color: 'white',
    marginTop: '5%',
    marginBottom: '40%',
    borderRadius: 10
  },
  produtos: {
    marginBottom: '40%',
    backgroundColor: 'black',
    padding: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flex: 1,
    marginTop: '-20%'
  },
  font: {
    fontSize: '90%',
    color: 'white',
    marginRight: '350%',
    marginTop: '-550%',
  },
  cadastre: {
    border: '3px solid black',
    backgroundColor: 'black',
    color: 'white',
    fontSize: '90%',
    textAlign: 'center',
    marginStart: '50%',
    borderRadius: 10
  },
  botao: {
    borderRadius: 30,
    backgroundColor: 'black',
    marginLeft: '-20%',
    marginRight: '-20%',
    justifyContent: 'center',
    alignItems: "center",
    marginTop: '-40%'
  }
});
