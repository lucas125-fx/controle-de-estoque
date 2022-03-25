import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

export default function Principal({navigaton}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar Produto"
        placeholderTextColor="#FFF"
      />
      <View style={styles.produtos}>
        <Text style={styles.font}></Text>
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
    color:'white',
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
  }
});