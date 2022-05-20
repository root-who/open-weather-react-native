
import Feather from 'react-native-vector-icons/Feather';
import { StyleSheet, Text, View} from 'react-native';
import { style } from './style';

export default function AdditionalInfo({text, icon, title, width, text_color}){
    const styles = style(text_color, width)
    return(
        <View style={styles.additional_info_container}>
            <View style={styles.additional_title_container}>
                <Feather style={styles.icon} name={icon} size={20}></Feather>
                <Text style={styles.title}>{title}</Text>
            </View>
            <Text style={styles.text}>{text}</Text>
        </View> 
    )
}

