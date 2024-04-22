import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';


export default function MenuButton(props) {

    navigation = useNavigation()

    const onClick = () => {
        console.log(props.link)
        navigation.navigate(props.link)
    };

    return(
        <TouchableOpacity onPress={onClick} style={styles.button}>
            <View style={styles.button}>
                <FontAwesome5 name={props.icon} size={45} color='#5E5D5D'>                  
                </FontAwesome5>
                <Text style={styles.text}>{props.nome}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        width: 100,
        height: 100,
        margin: 10,
    },
    text: {
        textAlign: "center",
        color: "#3E3A3A",
        fontStyle: 'italic',
    }
  });