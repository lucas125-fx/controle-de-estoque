import Login from './src/Pages/Login/';
import Cadastro from './src/Pages/Cadastro/';
import Principal from './src/Pages/Principal';
import Qrcode from './src/Pages/Qrcode'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Armazenamento from './src/Pages/Armazenamento';
import CadastroProdutos from './src/Pages/CadastroProdutos/'
import RegistroEntrada from './src/Pages/Registros/Entrada/'
import RegistroSaida from './src/Pages/Registros/Saida/'

const Tab = createBottomTabNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator useLegacyImplementation={true} >
     <Tab.Screen name="Principal"component={Principal}/>
     <Tab.Screen name="Cadastro"component={Cadastro}/>
     <Tab.Screen name="Login"component={Login}/> 
     <Tab.Screen name="Qrcode"component={Qrcode}/>
     <Tab.Screen name="Armazenamento"component={Armazenamento}/>
     <Tab.Screen name="Cadastro De Produtos"component={CadastroProdutos}/>
     </Tab.Navigator>
        </NavigationContainer>
       
  );
}

