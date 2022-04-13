import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Linking, Text, View, TextInput,Button, Image } from 'react-native';


export default function Cadastro() {
  return (
    <View style={styles.container}>
     
      <View style={styles.container1}>
      <Image
      style={styles.logo}
      source={require('../../../assets/images/icon2.png')}
      />
      <Text style={styles.text}>EstoVirtu</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"      
        placeholderTextColor="#FFF" 
      />
      <TextInput
        style={styles.input1}
        placeholder="Senha"      
        placeholderTextColor="#FFF"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input2}
        placeholder="Confirmar senha"
        placeholderTextColor="#FFF" 
        secureTextEntry={true}            
      />
      <View >
      <TouchableOpacity

        onPress={() => alert('Conta cadastrada!!')}

        style={styles.botao}>

        <Text style={{ fontSize: 20, color: '#fff', }}>Entrar</Text>

      </TouchableOpacity>
      <Text style={styles.Link}
      onPress={() => Linking.openURL('http://google.com')}>
  já possui conta?
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
    color:'white'
  },
  container1:{
    //border:'solid black',
    height: 90,
    width: 90,
   // backgroundColor:'FFB800',
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
    marginTop: -200
  },
  Link:{
    
    color: 'black',
    marginLeft: -5,
    marginRight:-10
    
  }
 

});
