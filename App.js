import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Pressable, Button, ActivityIndicator  } from 'react-native';
import WeatherForecast from './src/pages/WeatherForecast';

export default function App() {
  return (
    <>
      <WeatherForecast></WeatherForecast>
    </>
  )
}

