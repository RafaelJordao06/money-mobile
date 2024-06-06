
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/home/home';
import CadDespesa from './src/screens/cad-despesa/cad-despesa';

const Stack = createStackNavigator();

 function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
          <Stack.Screen name="despesa" component={CadDespesa} options={{headerShown: true, title: "Despesa", headerTitleAlign: "center", headerShadowVisible: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;