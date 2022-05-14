import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { useEffect, useState } from 'react';
import Container from '../Container';


export default function NextSixDays({info, change,h}) {
    return(
        <View>
          {/* CONTAINER PRINCIPAL DE ALINHAMENTO PARA TODAS AS 6 TEMPERATURAS, HORARIOS E ICONES*/}
          <View style={styles.title_container}>
            <Icon color='white' style={styles.title_icon} name="calendar-alt"></Icon>
            <Text style={styles.title}>Previsão para os próximos 6 dias</Text>  
          </View>
          
          <View style={styles.forecast_days_container}>
            {/* CONTAINER DE ALINHAMENTO PARA CADA TEMPERATURAS, HORARIOS E ICONES*/}
            {info.map((value, index)=>{
                return(
                  <View key={index}>
                    <View  style={styles.day_info_container}>
                      <Text style={styles.day}>{value.hour}</Text>
                      <Icon style={styles.icon}name={value.icon} size={22} color="#fff"></Icon>
                      <View style={styles.day_info_max_min_container}>
                        <Text style={styles.day_temperature}>Max: {value.temperature}</Text>
                        <Text style={styles.day_temperature}>Min: {value.temperature}</Text>
                      </View>
                    </View>
                    {(index !== 5) ? <View key={index+50} style={styles.day_info_line}></View> : null}    
                  </View>
            )})}
          </View>
        </View>

    )
}
const width = Dimensions.get('screen').width;
const widthOtherDays= width/1.11;
const styles = StyleSheet.create({
  title_container:{
    flexDirection:'row',
    paddingLeft:35,
    opacity:0.2,
    alignItems:'center',
    justifyContent:'flex-start',
  },
  title:{
    color:'white',
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
    width: widthOtherDays-25,
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:25,
    paddingRight:25,
    paddingTop:20
  },
  day:{
    fontSize:16,
    fontWeight:'500',
    color:'#FFF',
    width:widthOtherDays/5
  },
  day_info_max_min_container:{
    width:widthOtherDays/2.25,
    flexDirection: 'row',
    justifyContent:'space-between'

  },
  day_temperature:{
    fontSize:16,
    fontWeight:'500',
    color:'#FFF',
  },
  icon:{
    width:widthOtherDays/5
  },
  day_info_line:{
    borderBottomColor:'white',
    borderBottomWidth:1,
    opacity:0.2,
    width:widthOtherDays-25,
    paddingBottom:15,
  }
});