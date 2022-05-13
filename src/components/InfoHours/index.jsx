import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


export default function InfoHours({info}) {
    return(
      <>
        {/* CONTAINER PRINCIPAL PARA TEMPERATURA POR HORARIO + FRASE DA PREVISÃO */}
        <View style={styles.forecast_container}> 
          {/* CONTAINER CONTENDO A FRASE DA PREVISÃO MAIS LINHA DIVISORIA*/}
          <View style={styles.forecast_infotext_container}>
            <Text style={styles.forecast_infotext}>Previsão de clima nublado até 07:00</Text>
          </View>
          {/* CONTAINER PRINCIPAL DE ALINHAMENTO PARA TODAS AS 6 TEMPERATURAS, HORARIOS E ICONES*/}
          <View style={styles.forecast_hours_container}>
            {/* CONTAINER DE ALINHAMENTO PARA CADA TEMPERATURAS, HORARIOS E ICONES*/}
            {info.map((value, index)=>{
                return(
                  <View key={index} style={styles.hour_info_container}>
                    <Text style={styles.hour_temperature}>{value.hour}</Text>
                    <Icon name={value.icon} size={25} color="#fff"></Icon>
                    <Text style={styles.hour_temperature}>{value.temperature}</Text>
                  </View>
            )})}
          </View>
        </View>
      </>
    )
}
const width = Dimensions.get('screen').width;
const widthOtherDays= width/1.11;
const styles = StyleSheet.create({
  forecast_container:{
     backgroundColor:'rgb(42, 44, 78)',
      width:widthOtherDays,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      paddingTop:20,
      height:200,
      alignItems:'center'      
  },
  forecast_infotext_container:{
    borderBottomWidth:0.25,
    borderBottomColor:'rgb(190, 190, 190)',
    width: widthOtherDays / 1.125,
    alignItems:'center'
  },
  forecast_infotext:{
    fontSize:16,
    fontWeight:'300',
    color:'#FFF',
    marginBottom:20,
    borderBottomWidth:5,
    borderBottomColor:'#fff'
  },
  forecast_hours_container:{
    paddingTop:25,
    justifyContent:'space-around',
    flexDirection:'row',
    flexWrap:'wrap',
    paddingLeft:10,
    paddingRight:10
  },
  hour_info_container:{
    flexDirection:'column',
    width: widthOtherDays/7,
    justifyContent:'space-around',
    alignItems:'center',
    height:100,
    marginBottom:20,
    
  },
  hour_temperature:{
    fontSize:16,
    fontWeight:'500',
    color:'#FFF'
  }

});
