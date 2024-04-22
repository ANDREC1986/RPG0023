
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import Adicionar from './screens/adicionar';
import Editar from './screens/editar';
import Visualizar from './screens/visualizar';
import BuscaCategoria from './screens/buscaCategoria';
import BuscaLocal from './screens/buscaLocal';

export default function index() {

  const StackNavigaion = createNativeStackNavigator();

return (
  <StackNavigaion.Navigator initialRouteName="Home">
      <StackNavigaion.Screen name="Home" component={Home} />
      <StackNavigaion.Screen name="Adicionar" component={Adicionar} />
      <StackNavigaion.Screen name="Editar" component={Editar}></StackNavigaion.Screen>
      <StackNavigaion.Screen name="Visualizar" component={Visualizar}></StackNavigaion.Screen>
      <StackNavigaion.Screen name="Buscar por Categoria" component={BuscaCategoria}></StackNavigaion.Screen>
      <StackNavigaion.Screen name="Buscar por Localização" component={BuscaLocal}></StackNavigaion.Screen>
  </StackNavigaion.Navigator>
);
}