import {Text, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from '../Icon';
import React, { useEffect, useState } from 'react';
import { style } from './style';
export default function NextSixDays({info, change, text_color, width}) {
  const [icon, setIcon] = useState();
  
  const styles = style(width, text_color)
  
  return(
      <View>
        {/* CONTAINER PRINCIPAL DE ALINHAMENTO PARA TODAS AS 6 TEMPERATURAS, HORARIOS E ICONES*/}
        <View style={styles.title_container}>
          <FontAwesome5 color={text_color} style={styles.title_icon} name="calendar-alt"></FontAwesome5>
          <Text style={styles.title}>Previsão para os próximos 6 dias</Text>  
        </View>
        
        <View style={styles.forecast_days_container}>
          {/* CONTAINER DE ALINHAMENTO PARA CADA TEMPERATURAS, HORARIOS E ICONES*/}
          {info.map((value, index)=>{
              return(
                <View key={index}>
                  <View  style={styles.day_info_container}>                      
                    <Text style={styles.day}>{value.day}</Text>
                    <Icon style={styles.icon} size={22} text_color={text_color} id={value.iconId} icon={value.icon}></Icon>
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
