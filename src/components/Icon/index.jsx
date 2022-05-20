import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { whaticon } from '../../util/icon';

export default function Icon({style, size, text_color, id, icon}){

    function whatIconRender(weatherIcon){
        if(weatherIcon.pack == 'FontAwesome5'){
            return <FontAwesome5 name={weatherIcon.icon} style={style} size={size} color={text_color}/>
        }
        if(weatherIcon.pack == 'MaterialCommunityIcons'){
            return <MaterialCommunityIcons name={weatherIcon.icon} style={style} size={size} color={text_color}/>
        } 
        if(weatherIcon.pack == 'Ionicons'){
            return <Ionicons name={weatherIcon.icon} style={style} size={size} color={text_color}/>
        }  
    }
    
    return(
       whatIconRender(whaticon(id, icon))
    )

}