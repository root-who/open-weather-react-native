import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Container({height, width, component, padding_top, color}){


    const styles = StyleSheet.create({
        forecast_container:{
            backgroundColor:color,
            width:width,
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
