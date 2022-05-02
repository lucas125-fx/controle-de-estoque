import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from '../Login';
import Cadastro from '../Cadastro';
import DashboardRoutes from "./DashboardRoutes";
import Principal from "../Principal";

const Stack = createStackNavigator();

export default function Routes() {
    return (
      
        <Stack.Navigator useLegacyImplementation={true} >
          <Stack.Screen name="Login"component={Login}/>
          <Stack.Screen name="Cadastro"component={Cadastro}/>
          <Stack.Screen name="DashboardRoutes"component={DashboardRoutes} options={{title:'Principal',}}/>
        </Stack.Navigator> 
         
    );
  }