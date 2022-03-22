import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';

export default function Principal({navigaton}) {
  return (
    <View style={styles.container}>
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
  botao: {
    borderRadius: 30,
    width: 200,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: "center",
    marginBottom: 500
  }
});