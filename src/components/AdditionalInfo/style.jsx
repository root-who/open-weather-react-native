import { StyleSheet } from 'react-native';

export const style = (text_color, width ) => StyleSheet.create({
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
            color:text_color
        },
        text:{
            fontSize:30,
            color:text_color
        },
        icon:{
            marginRight:5,
            color: text_color
        }
    })