import ProfilePhoto from "./profilePhoto"
import { View, Text, TouchableOpacity } from "react-native"

export default function CardFornecedor(props){
    const editar = () => {
        navigation.navigate('Editar',
        {uuid : props.uuid})
    }
    
    return (
        <TouchableOpacity style={{
            padding: 10,
            width: '100%',
            paddingLeft: 20,
            paddingRight: 20,
            flexDirection: 'row'
        }} key={props.uuid} onPress={
            editar
        }>
        
            <ProfilePhoto source={props.image} size={50}></ProfilePhoto>
            <Text style={{
                paddingLeft: 5,
                fontSize: 25
            }}>{props.nome}</Text>
        </TouchableOpacity>
    )
}