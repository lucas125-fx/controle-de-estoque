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
      />
      <TextInput
        style={styles.input1}
        placeholder="Senha"      
        keyboardType='digite sua senha'    
      />
      <TextInput
        style={styles.input2}
        placeholder="Confirmar senha"      
        keyboardType='digite sua senha novamente'    
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
    border:'solid black',
    height: '90%',
    width: '90%',
    backgroundColor:'FFB800',
  },
  text:{
    fontFamily:'anton',
    color:'white',
    fontSize:'175%',
    marginLeft:'32%',
    // padding:0
  },
  input: {
   // height: 80,
   margin: 12,
   borderWidth: 1,
   color:'white',
   backgroundColor:'black',
   // fontSize:40,
   marginTop:'10%',
   borderRadius:30,
  },
  input1: {
 // height: 80,
 margin: 12,
 borderWidth: 1,
 color:'white',
 backgroundColor:'black',
 // fontSize:40,
 marginTop:'10%',
 borderRadius:30,
},
  input2: {
  // height: 80,
  margin: 12,
  borderWidth: 1,
  color:'white',
  backgroundColor:'black',
  // fontSize:40,
  marginTop:'10%',
  borderRadius:30,
},
   botao:{
    borderRadius: 30,
    justifyContent:'center',
    alignItems:'center',
   backgroundColor:'black',
   paddingBottom:'5px',
   marginLeft:'30%',
   marginRight:'30%',
//   color:'white',
//   // marginTop:20,
//   // fontSize:100
   },
   logo:{
      width: '55%',
      height:'28%',
      marginLeft:'22%',
      marginTop:'20%'

  },
  Link:{
    padding:'3px',
    color: 'blue',
    marginLeft:'35%',
    
  }
 

});
