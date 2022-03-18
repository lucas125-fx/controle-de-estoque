import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

export default function Principal({navigaton}) {
  return (
    <View style={styles.container}>
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
    width: 410,
    backgroundColor: 'black',
    color: 'white',
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 10
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
    width:400
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
    borderRadius: 30,
    width: 250,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 50
  }
});