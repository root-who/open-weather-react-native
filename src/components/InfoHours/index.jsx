import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { useEffect, useState } from 'react';
import Container from '../Container';


export default function InfoHours({info}) {

    return(
        <View>
          {/* CONTAINER PRINCIPAL DE ALINHAMENTO PARA TODAS AS 6 TEMPERATURAS, HORARIOS E ICONES*/}
          <View style={styles.title_container}>
            <Icon color='white' style={styles.title_icon} name="clock"></Icon>
            <Text style={styles.title}>Previsão Horária</Text>  
          </View>
          
          <ScrollView horizontal={true} style={styles.forecast_hours_container}>
            {/* CONTAINER DE ALINHAMENTO PARA CADA TEMPERATURAS, HORARIOS E ICONES*/}
            {info.map((value, index)=>{
                return(
                  <View key={index} style={styles.hour_info_container}>
                    {index === 0 ? <Text style={styles.hour_temperature}>{'Agora'}</Text>: <Text style={styles.hour_temperature}>{value.hour}</Text>}
                    <Icon name={'sun'} size={20} color="#fff"></Icon>
                    <Text style={styles.hour_temperature}>{value.temperature+ 'º'}</Text>
                  </View>
            )})}
          </ScrollView>
        </View>

    )
}
const width = Dimensions.get('screen').width;
const widthOtherDays= width/1.11;
const styles = StyleSheet.create({
  title_container:{
    flexDirection:'row',
    paddingLeft:15,
    opacity:0.2,
    alignItems:'center',
    justifyContent:'flex-start'
  },
  title:{
    color:'white',
  },
  title_icon:{
    marginRight:10
  },
  forecast_hours_container:{
    paddingTop:10,
    // justifyContent:'space-around',
    flexDirection:'row',
    flexWrap:'wrap',
    paddingLeft:0,
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
    fontSize:14,
    fontWeight:'500',
    color:'#FFF'
  }
});


