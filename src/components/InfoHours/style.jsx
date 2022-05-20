import { StyleSheet} from 'react-native';

export const style = (width, text_color) => StyleSheet.create({
  title_container:{
    flexDirection:'row',
    paddingLeft:30,
    opacity:0.5,
    alignItems:'center',
    justifyContent:'flex-start'
  },
  title:{
    color:text_color,
  },
  title_icon:{
    marginRight:10
  },
  forecast_hours_container:{
    paddingTop:10,
    flexDirection:'row',
    flexWrap:'wrap',
    paddingLeft:0,
    paddingRight:10
  },
  hour_info_container:{
    flexDirection:'column',
    width: (width/1.11)/7,
    justifyContent:'space-around',
    alignItems:'center',
    height:100,
    marginBottom:20,
    
  },
  hour_temperature:{
    fontSize:14,
    fontWeight:'500',
    color:text_color
  }
});