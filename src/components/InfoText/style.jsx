import { StyleSheet} from 'react-native';

export const style = (width, text_color) => StyleSheet.create({
      forecast_infotext_container:{
      borderBottomWidth:0.25,
      borderBottomColor:'rgb(190, 190, 190)',
      width: (width/1.11) / 1.125,
      alignItems:'center'
    },
    forecast_infotext:{
      fontSize:16,
      fontWeight:'300',
      color:text_color,
      marginBottom:20
    }
  })