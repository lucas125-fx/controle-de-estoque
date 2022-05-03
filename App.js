import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/Pages/routes/routes';

export default function App() {
  return (
    <NavigationContainer>
       <Routes/>
    </NavigationContainer>
       
  );
}
