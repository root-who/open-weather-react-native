import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react/cjs/react.development';
import CurrentStatus from './src/components/CurrentStatus';
import InfoHours from './src/components/InfoHours';

export default function App() {

  const [next_sixHours, setNext_sixHours ] = useState([
  {hour:"Agora", icon:"cloud", temperature:"21º"},
  {hour:"19", icon:"cloud-sun", temperature:"22º"},
  {hour:"20", icon:"cloud-sun-rain", temperature:"18º"},
  {hour:"21", icon:"cloud-rain", temperature:"17º"},
  {hour:"22", icon:"cloud-moon-rain", temperature:"16º"},
  {hour:"23", icon:"cloud-moon", temperature:"14º"}

  ])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <SafeAreaView style={styles.container}>
        <CurrentStatus></CurrentStatus>
        <InfoHours info={next_sixHours}></InfoHours>
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
