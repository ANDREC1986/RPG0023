import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from '../components/navigation';
import ListaFornecedores from '../components/lista-fornecedores';
import { FornecedorController } from '../repositories/inMemoryFornecedor';
import { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export const Database = new FornecedorController();

export default function Home() {
  const [fornecedores, setFornecedores] = useState([])

  useFocusEffect(() => {
    setTimeout(() => {
      setFornecedores(ListaFornecedores(Database))
    },1000)
  })

  

    return (
        <View style={styles.container}>
          <Navigation database={Database}/>
        <View style={styles.list}>
          <Text style={styles.title}>Fornecedores</Text>
        </View>
          {fornecedores}
          <StatusBar style="auto" />
        </View>
      );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 5
    },
    list: {
      width: '100%',
      textAlign: 'justify',
      paddingLeft: 20,
      paddingRight: 20
  },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      width: '100%',
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      color: '#5E5D5D'
  }
});