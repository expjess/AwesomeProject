import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  StyleSheet,
  View
 } from 'react-native';

export default class AwesomeProject extends Component {
  render (){
    return(
    <View style={styles.marquee}>
    <Text style={styles.title}>Hello World!</Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  marquee: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  }
})

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
