import { FontAwesome5 } from '@expo/vector-icons';
import { Image, StyleSheet } from 'react-native';
export default function ProfilePhoto(props){
        if(!props.source) {
            return (
                <FontAwesome5 name="user-circle" size={props.size} color="black" />
            )
        }
        else {
            return(
                <Image source={{ uri: props.source }} size={props.size} style={styles.image}></Image>
            )
        }

}

const styles = StyleSheet.create({
    image: {
      width: 200,
      height: 200,
      marginTop: 0,
      borderRadius: 0,
    },
  });