import { StyleSheet} from 'react-native';

export const style = (width, text_color) => StyleSheet.create({
     title_container:{
      flexDirection:'row',
      paddingLeft:35,
      opacity:0.5,
      alignItems:'center',
      justifyContent:'flex-start',
    },
    title:{
    color:text_color,
    },
    title_icon:{
      marginRight:10
    },
    forecast_days_container:{
      paddingTop:10,
      justifyContent:'space-around',
      flexDirection:'row',
      flexWrap:'wrap', 
    },
    day_info_container:{
      flexShrink:1,
      flexDirection:'row',
      width: (width/1.11)-25,
      justifyContent:'space-between',
      alignItems:'center',
      paddingLeft:25,
      paddingRight:25,
      paddingTop:20
    },
    day:{
      fontSize:16,
      fontWeight:'500',
      color:text_color,
      width:(width/1.11)/5
    },
    day_info_max_min_container:{
      width:(width/1.11)/2.25,
      flexDirection: 'row',
      justifyContent:'space-between'

    },
    day_temperature:{
      fontSize:16,
      fontWeight:'500',
      color:text_color,
    },
    icon:{
      width:(width/1.11)/5
    },
    day_info_line:{
      borderBottomColor:text_color,
      borderBottomWidth:1,
      opacity:0.2,
      width:(width/1.11)-25,
      paddingBottom:15,
    }
})