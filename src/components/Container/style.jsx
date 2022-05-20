import { StyleSheet} from 'react-native';

export const style = (color, width, padding_top, height) => StyleSheet.create({
        forecast_container:{
            backgroundColor:color,
            width:width,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingTop:padding_top,
            height:height,
            alignItems:'center', 
            marginBottom:20 
    }
    })