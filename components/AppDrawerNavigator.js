import * as React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import DGscreen from '../screens/DGscreen';
import DSscreen from '../screens/DSscreen';
import HomeScreen from '../screens/HomeScreen';
import BCDscreen from '../screens/BCDscreen';
import AboutUs from '../screens/AboutUS';
export const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Art: {
    screen: DGscreen,
  },
  Equipment: {
    screen: DSscreen,
  },
  Courses: {
    screen: BCDscreen,
  },
  AboutUs: {
    screen: AboutUs,
  },
});
