import {Text, View} from 'react-native';
import { style } from './style';
export default function CurrentStatus({status, text_color, width}){
  

  const styles = style(width, text_color)
  return(
      <View style={styles.status_container}>
        <Text style={styles.status_city}>{status.city}</Text>
        <Text style={styles.status_current_degree}>{status.degree}º</Text>
        <Text style={styles.status_max_min_weather_info}>{status.info}</Text>
        <View style={styles.status_max_min_container}>
          <Text style={styles.status_max_min_weather_info}>Min: {status.min}º</Text>
          <Text style={styles.status_max_min_weather_info}>Max: {status.max}º</Text>
        </View>
      </View>
)}
