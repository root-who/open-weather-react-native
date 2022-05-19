import { StyleSheet} from 'react-native';

export const style = (background_color, height, bigContainer, width) => StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: background_color.backgroud,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container_smalls_info:{
    width:bigContainer,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap'
  },
  spinner_container:{
    marginTop:((height/2) -70),
    alignItems: 'center',
    width:width
  },
  container_footer:{
      height:50,
      width:width,
      alignItems:'flex-end',
      justifyContent:'center',
      paddingRight: 10
    },
    input_city:{
      alignSelf:'center',
      height: 70,
      backgroundColor: '#ffffff',
      paddingLeft: 15,
      paddingRight: 15,
      borderWidth: 2,
      borderColor: "#20232a",
      alignItems: 'stretch',
      width: width/1.2,
      marginBottom:10  
    }
});