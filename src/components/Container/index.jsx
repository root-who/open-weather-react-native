import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Container({height, component, padding_top}){

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
            paddingTop:padding_top,
            height:height,
            alignItems:'center', 
            marginBottom:20 
    }
    })

    return(
        // {/* CONTAINER PRINCIPAL PARA TEMPERATURA POR HORARIO + FRASE DA PREVISÃO */}
        <View style={styles.forecast_container}>
            {component}
        </View>
    )
}
