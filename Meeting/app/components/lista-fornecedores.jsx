import { StyleSheet, Text, View } from 'react-native';
import CardFornecedor from './cardFornecedor';

export default function ListaFornecedores(Database) {
    var cards = []
    Database.fornecedores.forEach(element => {
      cards.push(<CardFornecedor nome={element.nome} source={element.logotipo} key={element.id} uuid={element.id}></CardFornecedor>)
    });   
    return(cards)
}

const styles = StyleSheet.create({

  });