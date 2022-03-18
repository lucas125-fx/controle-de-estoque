import { StyleSheet, Text, View } from 'react-native';
import Login from './src/Pages/Login/';
import Cadastro from './src/Pages/Cadastro/';
import Principal from './src/Pages/Principal';
import Qrcode from './src/Pages/Qrcode'
import { NavigationContainer } from '@react-navigation/native';
import{ createBottomTabNavigator }from'@react-navigation/bottom-tabs';
import Armazenamento from './src/Pages/Armazenamento';

const Tab= createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
     <Tab.Screen name="Login"component={Login}/> 
     <Tab.Screen name="Cadastro"component={Cadastro}/>
     <Tab.Screen name="Principal"component={Principal}/>
     <Tab.Screen name="Qrcode"component={Qrcode}/>
     <Tab.Screen name="Armazenamento"component={Armazenamento}/>
     
     </Tab.Navigator>
        </NavigationContainer>
  );
}

