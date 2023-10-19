import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import HomeScreen from './Components/Screens/HomeScreen';

export default function App() {  
  return (
    <View style={styles.appContainer}>
      <HomeScreen></HomeScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop:10,
    paddingHorizontal: 16
  },
});