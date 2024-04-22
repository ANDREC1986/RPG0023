import { StyleSheet, View } from 'react-native';
import MenuButton from './menu-button';

export default function Navigation(props, {navigation}) {
    return (
        <View style={styles.navigation}>
            <MenuButton nome="Adicionar Fornecedor" icon="plus" link="Adicionar"></MenuButton>
            <MenuButton nome="Buscar por Categoria" icon="search" link=""></MenuButton>
            <MenuButton nome="Buscar por Localização" icon="search-location" link=""></MenuButton>
        </View>
    )
}

const styles = StyleSheet.create({
    navigation: {
      flexDirection: "row",
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });