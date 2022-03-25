import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert(" Aqui está seu valor  \n" + result);
  } else {
    alert('Nenhum valor armazenado sob essa chave.');
  }
}

export default function Segurança() {
  const [key, onChangeKey] = React.useState('Sua chave aqui');
  const [value, onChangeValue] = React.useState('Seu valor aqui');

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Guarde um item, e pegue-o mais tarde!</Text>
      {}

      <TextInput
        style={styles.textInput}
        clearTextOnFocus
        onChangeText={text => onChangeKey(text)}
        value={key}
      />
      <TextInput
        style={styles.textInput}
        clearTextOnFocus
        onChangeText={text => onChangeValue(text)}
        value={value}
      />
      {}
      <Button
        title="Salve este par de tecla/valor"
        onPress={() => {
          save(key, value);
          onChangeKey('Sua chave aqui');
          onChangeValue('Seu valor aqui');
        }}
      />

      <Text style={styles.paragraph}> Digite sua chave </Text>
      <TextInput
        style={styles.textInput}
        onSubmitEditing={event => {
          getValueFor(event.nativeEvent.text);
        }}
        placeholder="Digite a chave para o valor que você deseja obter"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#Ffb800',
    padding: 8,

  },
  paragraph: {
    marginTop: 34,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    height: 35,
    borderColor: 'gray',
    borderWidth: 0.5,
    padding: 4,
  },
});
