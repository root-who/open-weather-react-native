import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { useEffect, useState } from 'react';
import CurrentStatus from './src/components/CurrentStatus';
import InfoHours from './src/components/InfoHours';
import Container from './src/components/Container';
import InfoText from './src/components/InfoText';
import NextSixDays from './src/components/NextSixDays';

export default function App() {

  const [h, setH] = useState('flex')
  const [ho, setHo] = useState(true)
  const [next_sixHours, setNext_sixHours ] = useState([
    {hour:"Agora", icon:"cloud", temperature:"21º"},
    {hour:"19:00", icon:"cloud-sun", temperature:"22º"},
    {hour:"20:00", icon:"cloud-sun-rain", temperature:"18º"},
    {hour:"21:00", icon:"cloud-rain", temperature:"17º"},
    {hour:"22:00", icon:"cloud-moon-rain", temperature:"16º"},
    {hour:"23:00", icon:"cloud-moon", temperature:"14º"},
    {hour:"00:00", icon:"cloud", temperature:"21º"},
    {hour:"01:00", icon:"cloud-sun", temperature:"22º"},
    {hour:"02:00", icon:"cloud-sun-rain", temperature:"18º"},
    {hour:"03:00", icon:"cloud-rain", temperature:"17º"},
    {hour:"04:00", icon:"cloud-moon-rain", temperature:"16º"},
    {hour:"05:00", icon:"cloud-moon", temperature:"14º"}
  ])
  const [testee, setTestee ] = useState([
    {hour:"Hoje", icon:"cloud", temperature:"21º"},
    {hour:"Sáb", icon:"cloud-sun", temperature:"22º"},
    {hour:"Dom", icon:"cloud-sun-rain", temperature:"18º"},
    {hour:"Seg", icon:"cloud-rain", temperature:"17º"},
    {hour:"Ter", icon:"cloud-moon-rain", temperature:"16º"},
    {hour:"Qua", icon:"cloud-moon", temperature:"14º"}
  ])

  useEffect(()=>{
  }, [next_sixHours])

  function changeNext(){
    //h == 'flex' ? setH('none'): setH('flex')
    setNext_sixHours(next_sixHours => testee)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <SafeAreaView style={styles.container}>
        <CurrentStatus></CurrentStatus>
        <Container height={100} padding_top={10}
          component={<InfoText info={next_sixHours}></InfoText>}
        />
        <Container height={150} padding_top={10}
          component={<InfoHours info={next_sixHours} change={changeNext}></InfoHours>}
        />
        <Container height={410} padding_top={10}
          component={<NextSixDays info={testee} change={changeNext}></NextSixDays>}
        />
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
