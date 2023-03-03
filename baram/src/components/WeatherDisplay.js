import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from '../styles/styles';
import { Card } from 'react-native-paper';


const openWeatherIconURL = 'https://openweathermap.org/img/wn';

//Re-usable component to display weather information per city 
//props > make sense which parts are grouped together > mental box > they become their own component > pass the data down 
export const WeatherDisplay = ({cityName, cityTemp, cityWeather, cityHumidity}) => {
  const iconUrl = `${openWeatherIconURL}/${cityWeather}.png`;
  console.log (iconUrl);

  return(
    <Card elevation={5} style ={styles.card} >
      <View style={styles.container}>
        <View style={styles.column}>
          <Text style={styles.label}>
            City:
          </Text>
          <Text style={styles.values}>
            {cityName ?? 'Finding city'}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>
            Weather:
          </Text>
          <Text style={styles.values}>
            <Image source ={{ uri:iconUrl }} style={styles.icons}/>
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>
            Temp:
          </Text>
          <Text style={styles.values}>
            {cityTemp ?? 'Loading'}°C
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>
            Humidity:
          </Text>
          <Text style={styles.values}>
            {cityHumidity ?? 'Loading'}%
          </Text>
        </View>
      </View>
    </Card>
  )
}
