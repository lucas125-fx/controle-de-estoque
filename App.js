import { StyleSheet, Text, View } from 'react-native';
import Segurança from './src/Pages/Segurança';
import Login from './src/Pages/Login/';
import Cadastro from './src/Pages/Cadastro/';
import Principal from './src/Pages/Principal';
import Qrcode from './src/Pages/Qrcode'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Armazenamento from './src/Pages/Armazenamento';
import CadastroProdutos from './src/Pages/CadastroProdutos/'
import RegistroEntrada from './src/Pages/Registros/Entrada/'
import RegistroSaida from './src/Pages/Registros/Saida/'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation={true}>
     <Drawer.Screen name="Login"component={Login}/> 
     <Drawer.Screen name="Cadastro"component={Cadastro}/>
     <Drawer.Screen name="Principal"component={Principal}/>
     <Drawer.Screen name="Qrcode"component={Qrcode}/>
     <Drawer.Screen name="Cadastro de produtos"component={CadastroProdutos}/>
     <Drawer.Screen name="Produtos Vendidos"component={RegistroEntrada}/>
     <Drawer.Screen name="Produtos Adicionados"component={RegistroSaida}/>
     
     </Drawer.Navigator>
        </NavigationContainer>
       
  );
}

