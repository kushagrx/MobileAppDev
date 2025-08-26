import { View, Text, StyleSheet, Pressable} from 'react-native'
import React from 'react'
import icedcoffee from '@/assets/images/icedcoffee.jpg'
import { ImageBackground } from 'expo-image'
import { Link } from 'expo-router'

export default function app() {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={icedcoffee} 
      style={styles.image}
      >
      <Text style={styles.text}>Welcome To My Coffee Shop!</Text>
      <Link href="/explore" style={{marginHorizontal:'auto'}}>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Explore</Text>
      </Pressable>
      </Link>
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
  link:{
    color:'white',
    fontSize:42,
    fontWeight:'bold',
    textAlign:'center',
    backgroundColor:'#000000a0',
    marginBottom:20,
  },
  button:{
    height:60,
    borderRadius:20,
    justifyContent:'center',
    backgroundColor:'rgba(0,0,0,0.75)',
    padding:4
  },
  buttonText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
    padding:2,
  }, 
  image:{
    width:'100%',
    height:'100%',
    flex:1,
    resizeMode:'cover',
    justifyContent:'center'
  }
})
