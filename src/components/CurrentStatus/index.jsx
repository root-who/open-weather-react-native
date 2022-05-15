import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from 'react-native';

export default function CurrentStatus({status}){
    return(
        <View style={styles.status_container}>
          <Text style={styles.status_city}>{status.city}</Text>
          <Text style={styles.status_current_degree}>{status.degree}º</Text>
          <Text style={styles.status_max_min_weather_info}>{status.info}</Text>
          <View style={styles.status_max_min_container}>
            <Text style={styles.status_max_min_weather_info}>Min: {status.min}º</Text>
            <Text style={styles.status_max_min_weather_info}>Max: {status.max}º</Text>
          </View>
        </View>
)}
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
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
    color:'#fff',
    fontSize:38,
    fontWeight:'300'
  },
  status_current_degree:{
    color:'#fff',
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
    color:'#fff',
    fontSize:18,
    fontWeight:'500'
  }
  })