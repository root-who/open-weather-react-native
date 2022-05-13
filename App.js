import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function App() {

  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <SafeAreaView style={styles.container}>
        <View style={styles.status_container}>
          <Text style={styles.city}>São Paulo</Text>
          <Text style={styles.current_degree}>16º</Text>
          <Text style={styles.other_info}>Pouco Nublado</Text>
          <View style={styles.other_info_container}>
            <Text style={styles.other_info}>Max: 24º</Text>
            <Text style={styles.other_info}>Min: 12º</Text>
        </View>
        </View>


        {/* CONTAINER PRINCIPAL PARA TEMPERATURA POR HORARIO + FRASE DA PREVISÃO */}
        <View style={styles.info_by_hour_container}> 

          {/* CONTAINER CONTENDO A FRASE DA PREVISÃO MAIS LINHA DIVISORIA*/}
          <View style={styles.info_day_view}>
            <Text style={styles.info_day}>Previsão de clima nublado até 07:00</Text>
          </View>

          {/* CONTAINER PRINCIPAL DE ALINHAMENTO PARA TODAS AS 6 TEMPERATURAS, HORARIOS E ICONES*/}
          <View style={styles.hours_container}>

            {/* CONTAINER DE ALINHAMENTO PARA CADA TEMPERATURAS, HORARIOS E ICONES*/}
            <View style={styles.other_day_view}>
              <Text style={styles.other_day}>Agora</Text>
              <Icon name="cloud" size={25} color="#fff"></Icon>
              <Text style={styles.other_day}>22º</Text>
            </View>
            {/* CONTAINER DE ALINHAMENTO PARA CADA TEMPERATURAS, HORARIOS E ICONES*/}
            <View style={styles.other_day_view}>
              <Text style={styles.other_day}>22</Text>
              <Icon name="cloud-sun" size={25} color="#fff"></Icon>
              <Text style={styles.other_day}>22º</Text>
            </View>
            {/* CONTAINER DE ALINHAMENTO PARA CADA TEMPERATURAS, HORARIOS E ICONES*/}
            <View style={styles.other_day_view}>
              <Text style={styles.other_day}>23</Text>
              <Icon name="cloud-sun-rain" size={25} color="#fff"></Icon>
              <Text style={styles.other_day}>22º</Text>
            </View>
            {/* CONTAINER DE ALINHAMENTO PARA CADA TEMPERATURAS, HORARIOS E ICONES*/}
            <View style={styles.other_day_view}>
              <Text style={styles.other_day}>00</Text>
              <Icon name="cloud-rain" size={25} color="#fff"></Icon>
              <Text style={styles.other_day}>22º</Text>
            </View>
            {/* CONTAINER DE ALINHAMENTO PARA CADA TEMPERATURAS, HORARIOS E ICONES*/}
            <View style={styles.other_day_view}>
              <Text style={styles.other_day}>01</Text>
              <Icon name="cloud-moon-rain" size={25} color="#fff"></Icon>
              <Text style={styles.other_day}>22º</Text>
            </View>
            {/* CONTAINER DE ALINHAMENTO PARA CADA TEMPERATURAS, HORARIOS E ICONES*/}
            <View style={styles.other_day_view}>
              <Text style={styles.other_day}>02</Text>
              <Icon name="sun" size={25} color="#fff"></Icon>
              <Text style={styles.other_day}>22º</Text>
            </View>
            {/* <View style={styles.other_day_view}>
              <Text style={styles.other_day}>03</Text>
              <Icon name="moon" size={25} color="#fff"></Icon>
              <Text style={styles.other_day}>22º</Text>
            </View>
            <View style={styles.other_day_view}>
              <Text style={styles.other_day}>04</Text>
              <Icon name="cloud-moon" size={25} color="#fff"></Icon>
              <Text style={styles.other_day}>22º</Text>
            </View> */}

          </View>
        </View>
          
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}
const width = Dimensions.get('screen').width;
const widthOtherDays= width/1.11;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20, 21, 51)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  status_container:{
    marginTop:50,
    backgroundColor: '#00000000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: width,
    marginBottom:30,
    alignItems:'center'
  },
  city:{
    color:'#fff',
    fontSize:38,
    fontWeight:'300'
  },
  current_degree:{
    color:'#fff',
    fontSize:110,
    fontWeight:'100'
  },
  other_info_container:{
    flexDirection:'row',
    justifyContent:'space-around',
    width: width/2.5,
    alignItems:'center'    
  },
  other_info:{
    color:'#fff',
    fontSize:18,
    fontWeight:'500'
  },
  info_by_hour_container:{
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
  info_day_view:{
    borderBottomWidth:0.25,
    borderBottomColor:'rgb(190, 190, 190)',
    width: widthOtherDays / 1.125,
    alignItems:'center'
  },
  info_day:{
    fontSize:16,
    fontWeight:'300',
    color:'#FFF',
    marginBottom:20,
    borderBottomWidth:5,
    borderBottomColor:'#fff'
  },
  hours_container:{
    paddingTop:25,
    justifyContent:'space-around',
    flexDirection:'row',
    flexWrap:'wrap',
    paddingLeft:10,
    paddingRight:10
  },
  other_day_view:{
    flexDirection:'column',
    width: widthOtherDays/7,
    justifyContent:'space-around',
    alignItems:'center',
    height:100,
    marginBottom:20,
    
  },
  other_day:{
    fontSize:16,
    fontWeight:'500',
    color:'#FFF'
  }

});
