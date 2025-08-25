import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import icedcoffee from '@/assets/images/icedcoffee.jpg'
import { ImageBackground } from 'expo-image'

export default function app() {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={icedcoffee} 
      style={styles.image}
      >
      <Text style={styles.text}>Welcome To My Coffee Shop!</Text>
      </ImageBackground>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
  },
  text:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'#000000a0',
  },
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  }
})
