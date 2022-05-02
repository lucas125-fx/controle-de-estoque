import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Principal from '../Principal';
import Qrcode from '../Qrcode'
import CadastroProdutos from '../CadastroProdutos/'

const Tab = createBottomTabNavigator();

export default function DashboardRoutes(){
    return (
      
        <Tab.Navigator useLegacyImplementation={true} >
          <Tab.Screen name="Principal"component={Principal} options={{headerShown:false}}/>
          <Tab.Screen name="Cadastro De Produtos"component={CadastroProdutos}/>
          <Tab.Screen name="Qrcode"component={Qrcode}/> 
        </Tab.Navigator>
      
         
    );
  }