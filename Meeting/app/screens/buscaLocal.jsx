import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Navigation from '../components/navigation';
import ListaFornecedores from '../components/lista-fornecedores';
import { FornecedorController } from '../repositories/inMemoryFornecedor';
import { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Database } from './home';
import CardFornecedor from '../components/cardFornecedor';

export default function BuscaLocal() {
    const [busca, setBusca] = useState('');
    const [fornecedores, setFornecedores] = useState('');
    var resultado = []
    useEffect(() => {
        Database.fornecedores.forEach(element => {
            if(element.cidade.includes(busca) && busca != '' || element.estado.includes(busca) && busca != '') {
                resultado.push((<CardFornecedor nome={element.nome} source={element.logotipo} key={element.id} uuid={element.id}></CardFornecedor>))
            }
            setFornecedores(resultado)
        })
    },[busca])

    return (
        <View style={styles.container}>
        <Text style={styles.label}>Cidade ou Estado:</Text>
            <TextInput style={styles.input} value={busca} onChangeText={(text) => setBusca(text)}
        />
        <Text style={styles.label}>Fornecedores em <Text style={{
            fontWeight: "bold"
        }}>"{busca}"</Text></Text>
        {fornecedores}
        </View>
      );
}

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
      },
    label: {
        fontSize: 16,
        marginBottom: 5,
      },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
      },
});