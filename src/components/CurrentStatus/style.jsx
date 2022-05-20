import { StyleSheet} from 'react-native';

export const style = (width, text_color) => StyleSheet.create({
    status_container:{
    marginTop:50,
    backgroundColor: '#00000000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: width,
    marginBottom:30,
    alignItems:'center'
  },
  status_city:{
    color:text_color,
    fontSize:38,
    fontWeight:'300'
  },
  status_current_degree:{
    color:text_color,
    fontSize:110,
    fontWeight:'100'
  },
  status_max_min_container:{
    flexDirection:'row',
    justifyContent:'space-around',
    width: width/2.5,
    alignItems:'center'    
  },
  status_max_min_weather_info:{
    color:text_color,
    fontSize:18,
    fontWeight:'500'
  }
  })