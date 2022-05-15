
import Feather from 'react-native-vector-icons/Feather';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Pressable, Button, ActivityIndicator  } from 'react-native';


export default function AdditionalInfo({text, icon, title, width}){
    const styles = StyleSheet.create({
        additional_info_container:{
            alignItems:'center',
            opacity:0.4,
        },
        additional_title_container:{
            width:width,
            flexDirection: 'row',
            justifyContent:'flex-start',
            marginBottom:40
        },
        title:{
            fontSize:16,
            color:'white'
        },
        text:{
            fontSize:30,
            color:'white'
        },
        icon:{
            marginRight:5,
            color:'white'
        }
    })
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

