import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text style={{padding:20,marginTop:40}}>Lets start some react native!</Text>
    // </View>
 
    <SafeAreaView>
    <Text style={{color:"white",marginLeft:20,fontSize:25}}>Hey there</Text>
    <Pressable style={{color:"white",backgroundColor:"yellow",marginLeft:20}}>
      <Text>Click me</Text>
    </Pressable>
    </SafeAreaView>


  );
}