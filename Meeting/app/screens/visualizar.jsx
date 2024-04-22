import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ProfilePhoto from "../components/profilePhoto"
import { Database } from './home';
import * as ImagePicker from 'expo-image-picker';
import Galeria from '../components/galeria';
import { Fornecedor } from '../entities/fornecedor';


export default function Visualizar(props) {

  const [id, setId] = useState('');
  const [index, setIndex] = useState(0);
  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [profile, setProfile] = useState('')
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
        setProfile(element.profile)
        setCategoria(element.categoria)
        setGaleria(element.galeria)
      } counter += 1
    })}, [])

  const editar = () => {
    navigation.navigate('Editar', {uuid : id})
  };

  const deletar = () => {
    Database.fornecedores.splice(index,1)
    navigation.navigate('Home')
  }

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
        setProfile(imageResult.assets[0].uri);
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
          var novaImagem=imageResult.assets[0].uri
          var updatedGaleria = [...galeria,novaImagem]
          setGaleria(updatedGaleria)
      }} catch {
      }
      }
    
    
  return (
    <ScrollView style={styles.container}>
      <View styel={styles.centralized}>
          <ProfilePhoto source={profile} size={250} style={styles.profilePhoto}></ProfilePhoto>
      </View>
      <Text style={styles.label}>Nome:</Text>
      <Text style={styles.decription}>{nome}</Text>
      <Text style={styles.label}>Contato:</Text>
      <Text style={styles.decription}>{contato}</Text>
      <Text style={styles.label}>Logradouro:</Text>
      <Text style={styles.decription}>{logradouro}</Text>
      <Text style={styles.label}>Cidade:</Text>
      <Text style={styles.decription}>{cidade}</Text>
      <Text style={styles.label}>Estado:</Text>
      <Text style={styles.decription}>{estado}</Text>
      <Text style={styles.label}>Categoria:</Text>
      <Text style={styles.decription}>{categoria}</Text>
        <Text style={styles.label}>Galeria</Text>
        <View style={{flexDirection:"row"}}>
        <Galeria imagens={galeria}></Galeria>
        </View>
      <Button title="Editar" onPress={editar} padding={20} color={"green"}></Button>
      <Button title="Deletar" onPress={deletar} padding={20} color={"darkred"}></Button>
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
  decription: {
    fontSize: 22,
    marginBottom: 5,
  },
  footer: {
    height: 40
  }
});