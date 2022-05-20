import { View} from 'react-native';
import React, { useEffect, useState } from 'react';
import { style } from './style';
export default function Container({height, width, component, padding_top, color}){


    const styles = style(color, width, padding_top, height)

    return(
        // {/* CONTAINER PRINCIPAL PARA TEMPERATURA POR HORARIO + FRASE DA PREVISÃO */}
        <View style={styles.forecast_container}>
            {component}
        </View>
    )
}
