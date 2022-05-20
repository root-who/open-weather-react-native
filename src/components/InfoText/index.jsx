import { Text, View} from 'react-native';
import { style } from './style';
export default function InfoText({text_color, width}){
  

  const styles = style(width, text_color)
  
  return(
      //{/* CONTAINER CONTENDO A FRASE DA PREVISÃO MAIS LINHA DIVISORIA*/}
      <View style={styles.forecast_infotext_container}>
          <Text style={styles.forecast_infotext}>Previsão de clima nublado até 07:00</Text>
      </View>
  )
}
