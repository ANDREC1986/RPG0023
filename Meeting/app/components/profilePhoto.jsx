import { FontAwesome5 } from '@expo/vector-icons';
import { Image, StyleSheet } from 'react-native';
export default function ProfilePhoto(props){
    const size = props.size
        if(!props.source) {
            return (
                <FontAwesome5 name="user-circle" size={props.size} color="black" />
            )
        }
        else {
            return(
                <Image source={{ uri: props.source }} width={props.size} height={props.size} style={styles.image}></Image>
            )
        }

}

const styles = StyleSheet.create({
    image: {
      marginTop: 0,
      borderRadius: 0,
    },
  });