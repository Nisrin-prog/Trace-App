import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';
import DSscreen from './screens/DSscreen';
import DGscreen from './screens/DGscreen';
import BCDscreen from './screens/BCDscreen';
import AboutUS from './screens/AboutUS'
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';


export default function App() {
  return (
    <View style={styles.container}>
        <AppContainer />
    </View>
  );
}
var AppNavigator = createSwitchNavigator({
  Drawer: { screen: AppDrawerNavigator },
  HomeScreen: HomeScreen,
  DGscreen: DGscreen,
  DSscreen: DSscreen,
  BCDscreen: BCDscreen,
  AboutUS : AboutUS
});
const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

 
});
