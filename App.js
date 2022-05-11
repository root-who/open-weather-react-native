import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView } from 'react-native';

export default function App() {

  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <SafeAreaView style={styles.container}>
        <View style={styles.sts}>
          <Text style={styles.city}>São Paulo</Text>
          <Text style={styles.current_degree}>16º</Text>
          <Text style={styles.other_info}>Pouco Nublado</Text>
          <View style={styles.other_info_container}>
            <Text style={styles.other_info}>Max: 24º</Text>
            <Text style={styles.other_info}>Min: 12º</Text>
        </View>
        </View>
        <View style={styles.other_days_container}>
          
        </View>
           <Text style={styles.other_info}>Open up App.js to start working on your app!</Text>   
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}
const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20, 21, 51)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sts:{
    backgroundColor: '#00000000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: width,
    marginBottom:70
  },
  city:{
    color:'#fff',
    fontSize:38,
    fontWeight:'300'
  },
  current_degree:{
    color:'#fff',
    fontSize:120,
    fontWeight:'100'
  },
  other_info_container:{
    flexDirection:'row',
    justifyContent:'space-around',
    width: width/2.5,
    
  },
  other_info:{
    color:'#fff',
    fontSize:18,
    fontWeight:'300'
  },
  other_days_container:{
    backgroundColor:'rgb(42, 44, 78)',
    width:width/1.115,
    height:400,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }
});
