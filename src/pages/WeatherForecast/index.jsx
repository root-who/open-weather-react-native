import { StatusBar } from 'expo-status-bar';
import {Text, View, SafeAreaView, Dimensions, ScrollView, Pressable, ActivityIndicator, Alert, TextInput } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {style} from './style';
import CurrentStatus from '../../components/CurrentStatus'
import InfoHours from '../../components/InfoHours';
import Container from '../../components/Container';
import InfoText from '../../components/InfoText';
import NextSixDays from '../../components/NextSixDays';
import AdditionalInfo from '../../components/AdditionalInfo';
import moment from 'moment';
import 'moment/locale/pt-br'

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const widthBigContainer = width/1.11;
const widthSmallContainer = widthBigContainer/2.15;

export default function WeatherForecast() {

  const [dataC, setDataC] = useState(new Date())
  const backgroundHr = dataC.getHours() >= 6 && dataC.getHours() < 13
  const backgroundColor = {
    backgroud:  backgroundHr ?  "rgb(211, 238, 252)" : "rgb(20, 21, 51)",
    container_color: backgroundHr  ? "rgb(112, 201, 245)" : "rgb(42, 44, 78)",
    text_color: backgroundHr ? "rgb(50, 50, 50)" : "#FFF"
  }

  const styles = style(backgroundColor, height, (widthBigContainer), width)
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
              setCity(forecast.name)  
              showAlert()
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
          min:value.temp.min,
          icon: value.weather[0].icon,
          iconId: value.weather[0].id,
        }
        days.push(day)
      })

      const hours=[];
      for(let i=0; i<=24;i++){
          const hour={
          hour: moment(forecast.hourly[i].dt * 1000).format('LT', 'pt-br'),
          temperature: parseInt(forecast.hourly[i].temp),
          icon: forecast.hourly[i].weather[0].icon,
          iconId: forecast.hourly[i].weather[0].id,
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
    setFoundCity(false)
    setData(false)
  }

  function showAlert(){
    Alert.alert(
      "Cidade não encontrada",
       "insira uma cidade existente e com nome correto",
       [{ text: "OK"}]
       )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView >
        <SafeAreaView style={styles.container}> 
        {!data ? 
          (<View style={styles.spinner_container}>
            <Container height={70} padding_top={20} width={70}
              component={<ActivityIndicator size="large"></ActivityIndicator>}>
            </Container>
          </View>) : 
          <>
          <View style={styles.container_footer}>
              <Pressable onPress={changeCity}>
                <FontAwesome5 name='search' color={backgroundColor.text_color} size={25}/>
              </Pressable>
          </View>
          <View>
            <TextInput onChangeText={newCity => setCity(newCity)} style={styles.input_city} placeholder="Digite o numero do telefone"/>
          </View>
            <CurrentStatus width={width} text_color={backgroundColor.text_color} status={currentStatus}/>
            <Container color={backgroundColor.container_color} height={150} padding_top={10} width={widthBigContainer}
              component={<InfoHours width={width} text_color={backgroundColor.text_color} info={hours} change={getCity}/>}
            />
            <Container color={backgroundColor.container_color} height={510} padding_top={10} width={widthBigContainer}
                component={<NextSixDays width={width} text_color={backgroundColor.text_color} info={days} change={getCity}/>}
            />
            <View style={styles.container_smalls_info}>
              <Container color={backgroundColor.container_color} height={widthSmallContainer} padding_top={10} width={widthSmallContainer}
                component={<AdditionalInfo title={'Nascer do Sol'} icon={'sunrise'} text_color={backgroundColor.text_color}
                            width={widthSmallContainer-20} text={moment(forecast.current.sunrise * 1000).format('LT')}/>}
              />
              <Container color={backgroundColor.container_color} height={widthSmallContainer} padding_top={10} width={widthSmallContainer}
                component={<AdditionalInfo title={'Pôr do Sol'} icon={'sunset'} text_color={backgroundColor.text_color}
                            width={widthSmallContainer-20} text={moment(forecast.current.sunset * 1000).format('LT')}/>}
              />
              <Container color={backgroundColor.container_color} height={widthSmallContainer} padding_top={10} width={widthSmallContainer}
                component={<AdditionalInfo title={'Visibilidade'} icon={'eye'} text_color={backgroundColor.text_color}
                            width={widthSmallContainer-20} text={forecast.current.visibility / 1000 + "km"}/>}
              />
              <Container color={backgroundColor.container_color} height={widthSmallContainer} padding_top={10} width={widthSmallContainer}
                component={<AdditionalInfo title={'Vento'} icon={'wind'} text_color={backgroundColor.text_color}
                            width={widthSmallContainer-20} text={forecast.current.wind_speed + " m/s"}/>}
              />
              <Container color={backgroundColor.container_color} height={widthSmallContainer} padding_top={10} width={widthSmallContainer}
                component={<AdditionalInfo title={'Sensação Termica'} icon={'thermometer'} text_color={backgroundColor.text_color}
                            width={widthSmallContainer-20} text={parseInt(forecast.current.feels_like) + "º"}/>}
              />
              <Container color={backgroundColor.container_color} height={widthSmallContainer} padding_top={10} width={widthSmallContainer}
                component={<AdditionalInfo title={'Umidade'} icon={'droplet'} text_color={backgroundColor.text_color}
                            width={widthSmallContainer-20} text={forecast.current.humidity + "%"}/>}
              />
            </View>
          </>
        }          
        {/* <Container height={100} padding_top={10} width={widthBigContainer}
          component={<InfoText info={next_sixHours}></InfoText>}
        />
         */}
        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

