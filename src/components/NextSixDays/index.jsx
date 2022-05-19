import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
import Container from '../Container';

export default function NextSixDays({info, change, text_color}) {
  const [icon, setIcon] = useState();
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
      color:text_color,
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
      color:text_color,
    },
    icon:{
      width:widthOtherDays/5
    },
    day_info_line:{
      borderBottomColor:text_color,
      borderBottomWidth:1,
      opacity:0.2,
      width:widthOtherDays-25,
      paddingBottom:15,
    }
  });
  return(
      <View>
        {/* CONTAINER PRINCIPAL DE ALINHAMENTO PARA TODAS AS 6 TEMPERATURAS, HORARIOS E ICONES*/}
        <View style={styles.title_container}>
          <FontAwesome5 color='white' style={styles.title_icon} name="calendar-alt"></FontAwesome5>
          <Text style={styles.title}>Previsão para os próximos 6 dias</Text>  
        </View>
        
        <View style={styles.forecast_days_container}>
          {/* CONTAINER DE ALINHAMENTO PARA CADA TEMPERATURAS, HORARIOS E ICONES*/}
          {info.map((value, index)=>{
              return(
                <View key={index}>
                  <View  style={styles.day_info_container}>                      
                    <Text style={styles.day}>{value.day}</Text>
                    <FontAwesome5 style={styles.icon} name={'sun'} size={22} color="#fff"></FontAwesome5>
                    <View style={styles.day_info_max_min_container}>
                      <Text style={styles.day_temperature}>Min: {parseInt(value.min)}º</Text>
                      <Text style={styles.day_temperature}>Max: {parseInt(value.max)}º</Text>
                    </View>
                  </View>
                  {(index !== 7) ? <View key={index+50} style={styles.day_info_line}></View> : null}    
                </View>
          )})}
        </View>
      </View>
  )
}
