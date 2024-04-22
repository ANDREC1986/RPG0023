import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfilePhoto from "../components/profilePhoto"
import { Database } from './home';
import * as ImagePicker from 'expo-image-picker';
import Galeria from '../components/galeria';
import { Fornecedor } from '../entities/fornecedor';
import Cloudinary from '../repositories/Cloudinary';


export default function Editar(props) {

  const [id, setId] = useState('');
  const [index, setIndex] = useState(0);
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [logotipo, setLogotipo] = useState('')
  const [categoria, setCategoria] = useState('');
  const [galeria, setGaleria] = useState([])

  useEffect(() => {
    var target = props.route.params.uuid;
    var counter = 0
    Database.fornecedores.forEach(element => {
      if(element.id == target) {
        setIndex(counter)
        setId(element.id)
        setNome(element.nome)
        setContato(element.contato)
        setLogradouro(element.logradouro)
        setCidade(element.cidade)
        setEstado(element.estado)
        setLogotipo(element.logotipo)
        setCategoria(element.categoria)
        setGaleria(element.galeria)
      } counter += 1
    })}, [])

  const editar = () => {
    var fornecedor = new Fornecedor(nome,contato,logradouro,cidade,estado,logotipo,categoria,galeria,id)
    Database.update(fornecedor)
    navigation.navigate('Home')
  };

  const profilePicker = async () => {
    try{
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();    
      if (!permissionResult.granted) {
        alert('Permissão para acessar a galeria é necessária!');
        return;
      }
  
      const imageResult = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });
  
      if (!imageResult.cancelled) {
        setLogotipo(await Cloudinary(imageResult.assets[0].uri));
        }
    } catch{
    };   
    }

    const galeriaPicker = async () => {
      try{  
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();    
        if (!permissionResult.granted) {
          alert('Permissão para acessar a galeria é necessária!');
          return;
        }
    
        const imageResult = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        });
    
        if (!imageResult.cancelled) {
          var novaImagem = await Cloudinary(imageResult.assets[0].uri)
          var updatedGaleria = [...galeria,novaImagem]
          setGaleria(updatedGaleria)
      }} catch {
      }
      }
    
    
  return (
    <ScrollView style={styles.container}>
      <View styel={styles.centralized}>
        <TouchableOpacity style={styles.profilePhoto} onPress={profilePicker}>
          <ProfilePhoto source={logotipo} size={250}></ProfilePhoto>
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={(text) => setNome(text)}
      />

      <Text style={styles.label}>Contato:</Text>
      <TextInput
        style={styles.input}
        value={contato}
        onChangeText={(text) => setContato(text)}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>Logradouro:</Text>
      <TextInput
        style={styles.input}
        value={logradouro}
        onChangeText={(text) => setLogradouro(text)}
      />

      <Text style={styles.label}>Cidade:</Text>
      <TextInput
        style={styles.input}
        value={cidade}
        onChangeText={(text) => setCidade(text)}
      />

      <Text style={styles.label}>Estado:</Text>
      <TextInput
        style={styles.input}
        value={estado}
        onChangeText={(text) => setEstado(text)}
        placeholder="Digite o estado (ex: SP)"
      />

      <Text style={styles.label}>Categoria:</Text>
      <TextInput
        style={styles.input}
        value={categoria}
        onChangeText={(text) => setCategoria(text)}
        placeholder="Digite a categoria"
      />
        <Text style={styles.label}>Galeria</Text>
        <View style={{flexDirection:"row"}}>
        <Galeria imagens={galeria}></Galeria>
        <TouchableOpacity onPress={galeriaPicker}>
          <MaterialCommunityIcons name="file-image-plus-outline" size={80} color="black" padding={10}/>
        </TouchableOpacity>   
        </View>
      <Button title="Salvar" onPress={editar} padding={20}></Button>
      <View style={styles.footer}></View>
    </ScrollView>
  );
};

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
  profilePhoto: {
    width: 250,
    alignSelf: "center",
    color: "#3E3A3A",
  },
  centralized: {
    width: "100%"
  },
  footer: {
    height: 40
  }
});