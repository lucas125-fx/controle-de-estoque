import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Principal from '../Principal';
import Qrcode from '../Qrcode';
import CadastroProdutos from '../CadastroProdutos/';
import Saida from '../Registros/Saida';
import CadRegistros from "../Registros/CadRegistros";

const Tab = createBottomTabNavigator();

export default function DashboardRoutes(){
    return (
      
        <Tab.Navigator useLegacyImplementation={true} >
          <Tab.Screen name="Principal"component={Principal}/>
          <Tab.Screen name="Cadastro De Produtos"component={CadastroProdutos}/>
          <Tab.Screen name="Qrcode"component={Qrcode}/>  
          <Tab.Screen name="Saida"component={Saida} options={{title:'Registro de saida'}}/> 
          <Tab.Screen name="CadRegistros"component={CadRegistros} options={{title:'cadastro de registros'}}/> 
        </Tab.Navigator>
      
         
    );
  }