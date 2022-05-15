import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Pressable, Button, ActivityIndicator  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CurrentStatus from './src/components/CurrentStatus';
import InfoHours from './src/components/InfoHours';
import Container from './src/components/Container';
import InfoText from './src/components/InfoText';
import NextSixDays from './src/components/NextSixDays';
import AdditionalInfo from './src/components/AdditionalInfo';
import moment from 'moment';
import 'moment/locale/pt-br'
// import { Button } from 'react-native-web';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const widthBigContainer = width/1.11;
const widthSmallContainer = widthBigContainer/2.15;
export default function App() {
  const [resposta, setResposta] = useState({})
  const [next_sixHours, setNext_sixHours ] = useState([
    {hour:"Agora", icon:"cloud", temperature:"21º"},
    {hour:"19:00", icon:"cloud-sun", temperature:"22º"},
    {hour:"20:00", icon:"cloud-sun-rain", temperature:"18º"},
    {hour:"21:00", icon:"cloud-rain", temperature:"17º"},
    {hour:"22:00", icon:"cloud-moon-rain", temperature:"16º"},
    {hour:"23:00", icon:"cloud-moon", temperature:"14º"},
    {hour:"00:00", icon:"cloud", temperature:"21º"},
    {hour:"01:00", icon:"cloud-sun", temperature:"22º"},
    {hour:"02:00", icon:"cloud-sun-rain", temperature:"18º"},
    {hour:"03:00", icon:"cloud-rain", temperature:"17º"},
    {hour:"04:00", icon:"cloud-moon-rain", temperature:"16º"},
    {hour:"05:00", icon:"cloud-moon", temperature:"14º"}
  ])
  const [nextDays, setNextDays ] = useState([
    {hour:"Hoje", icon:"cloud", temperature:"21º"},
    {hour:"Sáb", icon:"cloud-sun", temperature:"22º"},
    {hour:"Dom", icon:"cloud-sun-rain", temperature:"18º"},
    {hour:"Seg", icon:"cloud-rain", temperature:"17º"},
    {hour:"Ter", icon:"cloud-moon-rain", temperature:"16º"},
    {hour:"Qua", icon:"cloud-moon", temperature:"14º"}
  ])

  const [currentStatus, setCurrentStatus] = useState({})
  const [days, setDays] = useState([{}])
  const [hours, setHours] = useState([{}])
  const [city, setCity] = useState('Sao Paulo')
  const [forecast, setForecast] = useState({})
  const [foundCity, setFoundCity] = useState(false)
  const [foundWeather, setFoundWeather] = useState(false)
  const [rightCity, setRightCity] = useState(false)
  const [data, setData] = useState(false)
  

  useEffect(()=>{
    rightCity ? getData() : null; 
    foundWeather ? getWeather() : null;
    foundCity  ? null : getCity();    
  }, [foundCity, foundWeather, data, rightCity, forecast])

  function getWeather(){
        if(forecast.coord !== undefined){
          const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${forecast.coord.lat}&lon=${forecast.coord.lon}&exclude=minutely&appid=b5cb9159eb0a6bdcf566597ea3bbbe72&lang=pt_br&units=metric`
          setFoundWeather(false)
          axios.get(url)
          .then((response)=>{
            setForecast(forecast=>({...forecast, current:response.data.current}))
            setForecast(forecast=>({...forecast, daily:response.data.daily}))
            setForecast(forecast=>({...forecast, hourly:response.data.hourly}))
            setRightCity(true)          
          })
          .catch((response)=>{
          })
        }
  }

  function getCity(){
          axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b5cb9159eb0a6bdcf566597ea3bbbe72&lang=pt_br&units=metric`)
            .then((response)=>{
              setFoundCity(true)                
              setForecast(response.data.city)
              setFoundWeather(true)  
            })
            .catch((response)=>{   
              setFoundCity(true) 
              setData(true)          
            })
  }

  function getData(){
    setRightCity(false)

    function capitalize(s){
      return s[0].toUpperCase() + s.slice(1);
    }
    if(forecast.daily !== undefined){

      const status = {
        city:forecast.name,
        degree:parseInt(forecast.current.temp),
        info:capitalize(forecast.current.weather[0].description),
        max:parseInt(forecast.daily[0].temp.max),
        min:parseInt(forecast.daily[0].temp.min)
      } 

      const days = [];
      forecast.daily.forEach((value)=>{
        const day = {
          day: capitalize(moment(value.dt * 1000).format('dddd', 'pt-br').slice(0,3)),
          description:capitalize(value.weather[0].description),
          max:value.temp.max,
          min:value.temp.min
        }
        days.push(day)
      })

      const hours=[];
      for(let i=0; i<=24;i++){
          const hour={
          hour: moment(forecast.hourly[i].dt * 1000).format('LT', 'pt-br'),
          temperature: parseInt(forecast.hourly[i].temp)
        }
        hours.push(hour)
      }
      
      setHours(hours)
      setDays(days)
      setCurrentStatus(status)
      setData(true)   
    }
  }


  function changeCity(){
    city === 'Sao Paulo' ? setCity('Nova York') : setCity('Sao Paulo')
    setFoundCity(false)
    setData(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <SafeAreaView style={styles.container}>
        <View>

        </View> 
        {!data ? 
          (<View style={styles.spinner_container}>
            <Container height={70} padding_top={20} width={70}
              component={<ActivityIndicator size="large"></ActivityIndicator>}>
            </Container>
          </View>) : 
          <>
            <CurrentStatus status={currentStatus}></CurrentStatus>
            <Button onPress={changeCity} title="Press me"></Button>
            <Container height={150} padding_top={10} width={widthBigContainer}
              component={<InfoHours info={hours} change={getCity}></InfoHours>}
            />
            <Container height={500} padding_top={10} width={widthBigContainer}
                component={<NextSixDays info={days} change={getCity}></NextSixDays>}
            />
            <View style={styles.container_smalls_info}>
              <Container height={widthSmallContainer} padding_top={10} width={widthSmallContainer}
                component={<AdditionalInfo title={'Nascer do Sol'} icon={'sunrise'} 
                            width={widthSmallContainer-20} text={moment(forecast.current.sunrise * 1000).format('LT')}/>}
              />
              <Container height={widthSmallContainer} padding_top={10} width={widthSmallContainer}
                component={<AdditionalInfo title={'Pôr do Sol'} icon={'sunset'} 
                            width={widthSmallContainer-20} text={moment(forecast.current.sunset * 1000).format('LT')}/>}
              />
              <Container height={widthSmallContainer} padding_top={10} width={widthSmallContainer}
                component={<AdditionalInfo title={'Visibilidade'} icon={'eye'} 
                            width={widthSmallContainer-20} text={forecast.current.visibility / 1000 + "km"}/>}
              />
              <Container height={widthSmallContainer} padding_top={10} width={widthSmallContainer}
                component={<AdditionalInfo title={'Vento'} icon={'wind'} 
                            width={widthSmallContainer-20} text={forecast.current.wind_speed + " m/s"}/>}
              />
              <Container height={widthSmallContainer} padding_top={10} width={widthSmallContainer}
                component={<AdditionalInfo title={'Sensação Termica'} icon={'thermometer'} 
                            width={widthSmallContainer-20} text={parseInt(forecast.current.feels_like) + "º"}/>}
              />
              <Container height={widthSmallContainer} padding_top={10} width={widthSmallContainer}
                component={<AdditionalInfo title={'Umidade'} icon={'droplet'} 
                            width={widthSmallContainer-20} text={forecast.current.humidity + "%"}/>}
              />
            </View>
          </>
        }
        
       
        {/* {foundCity ? <Text style={styles.texto}>{JSON.stringify(city.current)}</Text>: null} */}
        {/* <Container height={100} padding_top={10} width={widthBigContainer}
          component={<InfoText info={next_sixHours}></InfoText>}
        />
         */}
        
        
        
        
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(20, 21, 51)',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container_smalls_info:{
    width:widthBigContainer,
    flexDirection:'row',
    justifyContent:'space-between',
    flexWrap:'wrap'
  },
  button:{
    color: 'white',
    width:widthBigContainer/1.3,
    marginBottom:20,
    marginTop:20,
    backgroundColor:'rgb(42, 44, 78)',
    alignItems:'center',
  },
  texto:{
    color:'white',
    marginBottom:30,
    marginTop:30,
    paddingLeft:10,
    paddingRight:10
  },
  spinner_container:{
    marginTop:(height/2) -70,
    alignItems: 'center',
    width:width

  }
});
