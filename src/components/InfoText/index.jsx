import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Button } from 'react-native';

export default function InfoText(){
    return(
        //{/* CONTAINER CONTENDO A FRASE DA PREVISÃO MAIS LINHA DIVISORIA*/}
        <View style={styles.forecast_infotext_container}>
            <Text style={styles.forecast_infotext}>Previsão de clima nublado até 07:00</Text>
        </View>
    )
}
const width = Dimensions.get('screen').width;
const widthOtherDays= width/1.11;
const styles = StyleSheet.create({
    forecast_infotext_container:{
    borderBottomWidth:0.25,
    borderBottomColor:'rgb(190, 190, 190)',
    width: widthOtherDays / 1.125,
    alignItems:'center'
  },
  forecast_infotext:{
    fontSize:16,
    fontWeight:'300',
    color:'#FFF',
    marginBottom:20
  }
})