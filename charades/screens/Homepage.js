import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {Header} from 'react-native-elements';
import {SafeAreaProvider} from 'react-native-safe-area-context'

export default class HomePage extends React.Component{
  render(){
    return(
      <View style={{backgroundColor: '#B491C8', flex: 1}}>
        
      <SafeAreaProvider>
      
      <Header
        backgroundColor={'#4C0A70'}
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Charades', style: { color: '#fff', fontSize: 20, fontWeight: 'bold'} }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      
       </SafeAreaProvider>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
