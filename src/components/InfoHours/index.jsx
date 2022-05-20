import {Text, View, ScrollView} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from '../Icon';
import React, { useEffect, useState } from 'react';
import Container from '../Container';
import { style } from './style';

export default function InfoHours({width, info, text_color}) {

const styles = style(width, text_color)


  return(
      <View>
        {/* CONTAINER PRINCIPAL DE ALINHAMENTO PARA TODAS AS 6 TEMPERATURAS, HORARIOS E ICONES*/}
        <View style={styles.title_container}>
          <FontAwesome5 color={text_color} style={styles.title_icon} name="clock"></FontAwesome5>
          <Text style={styles.title}>Previsão Horária</Text>  
        </View>
        
        <ScrollView horizontal={true} style={styles.forecast_hours_container}>
          {/* CONTAINER DE ALINHAMENTO PARA CADA TEMPERATURAS, HORARIOS E ICONES*/}
          {info.map((value, index)=>{
              return(
                <View key={index} style={styles.hour_info_container}>
                  {index === 0 ? <Text style={styles.hour_temperature}>{'Agora'}</Text>: <Text style={styles.hour_temperature}>{value.hour}</Text>}
                  <Icon id={value.iconId} icon={value.icon} size={20} text_color={text_color}></Icon>
                  <Text style={styles.hour_temperature}>{value.temperature+ 'º'}</Text>
                </View>
          )})}
        </ScrollView>
      </View>
  )
}


