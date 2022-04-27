import Login from './src/Pages/Login/';
import Cadastro from './src/Pages/Cadastro/';
import Principal from './src/Pages/Principal';
import Qrcode from './src/Pages/Qrcode'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
<<<<<<< HEAD
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
=======
>>>>>>> dd71750c7026439ecc480bb9030078e6da0068c9
import Armazenamento from './src/Pages/Armazenamento';
import CadastroProdutos from './src/Pages/CadastroProdutos/'
import RegistroEntrada from './src/Pages/Registros/Entrada/'
import RegistroSaida from './src/Pages/Registros/Saida/'

<<<<<<< HEAD
const Tab = createBottomTabNavigator ();
=======
const Drawer = createDrawerNavigator();
>>>>>>> dd71750c7026439ecc480bb9030078e6da0068c9

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Tab.Navigator useLegacyImplementation={true} >
     <Tab.Screen name="Principal"component={Principal}/>
     <Tab.Screen name="Cadastro"component={Cadastro}/>
     <Tab.Screen name="Login"component={Login}/> 
     <Tab.Screen name="Qrcode"component={Qrcode}/>
     <Tab.Screen name="Armazenamento"component={Armazenamento}/>
     <Tab.Screen name="Cadastro De Produtos"component={CadastroProdutos}/>
=======
      <Drawer.Navigator useLegacyImplementation={true}>
     <Drawer.Screen name="Login"component={Login}/> 
     <Drawer.Screen name="Cadastro"component={Cadastro}/>
     <Drawer.Screen name="Principal"component={Principal}/>
     <Drawer.Screen name="Qrcode"component={Qrcode}/>
     <Drawer.Screen name="Cadastro de produtos"component={CadastroProdutos}/>
     <Drawer.Screen name="Produtos Vendidos"component={RegistroEntrada}/>
     <Drawer.Screen name="Produtos Adicionados"component={RegistroSaida}/>
>>>>>>> dd71750c7026439ecc480bb9030078e6da0068c9
     
     </Drawer.Navigator>
        </NavigationContainer>
       
  );
}

