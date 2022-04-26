import Login from './src/Pages/Login/';
import Cadastro from './src/Pages/Cadastro/';
import Principal from './src/Pages/Principal';
import Qrcode from './src/Pages/Qrcode'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Armazenamento from './src/Pages/Armazenamento';
import CadastroProdutos from './src/Pages/CadastroProdutos/'

const Drawer = createDrawerNavigator ();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation={true} >
     <Drawer.Screen name="Cadastro"component={Cadastro}/>
     <Drawer.Screen name="Login"component={Login}/> 
     <Drawer.Screen name="Principal"component={Principal}/>
     <Drawer.Screen name="Qrcode"component={Qrcode}/>
     <Drawer.Screen name="Armazenamento"component={Armazenamento}/>
     <Drawer.Screen name="Cadastrodeprodutos"component={CadastroProdutos}/>
     
     </Drawer.Navigator>
        </NavigationContainer>
       
  );
}

