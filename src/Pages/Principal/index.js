
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
    width: '410px',
    backgroundColor: 'black',
    color: 'white',
    marginTop: '20px',
    marginBottom: '160px',
    borderRadius: 10
  },
  produtos: {
    marginBottom: '200px',
    backgroundColor: 'black',
    padding: '60px',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    flex: 1,
  },
  font: {
    fontSize: '15px',
    color: 'white',
    marginRight: '250px',
    marginBottom: '250px'
  },
  botao: {
    borderRadius: 30,
    width: '250px',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: '50px'
  }
});
