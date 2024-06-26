import { TouchableOpacity, StyleSheet, View, Image} from "react-native";
import  uuid from "react-native-uuid";

export default function Galeria(props) {
    var imagens = []

    if(props.imagens) {       
        props.imagens.forEach(element => {
            imagens.push(
            <View>
                <TouchableOpacity key={uuid.v1().toString()}>
                    <Image source={{uri: element}} style={styles.imagem}></Image>
                </TouchableOpacity>
            </View>
            );
        }); 
    return(
            imagens
    )}
}

const styles = StyleSheet.create({
    imagem: {
        width: 80,
        height: 80,
        padding: 10
    },
  });