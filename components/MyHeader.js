import React, { Component } from 'react';
import { Header, Icon, Badge } from 'react-native-elements';
import { View, Text, StyeSheet, Alert } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
 import * as Font from 'expo-font';
let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { fontsLoaded: false };
  }
  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }
  componentDidMount() {
    this._loadFontsAsync();
  }
  render() {
    return (
      <Header
        leftComponent={
          <Icon
            name="bars"
            type="font-awesome"
            color="white"

            onPress={() => this.props.navigation.toggleDrawer()}
          />
        }
        centerComponent={{
          text: this.props.title,
          style: { color: 'white', fontSize:RFValue(30), fontWeight: 'bold',fontFamily:'Bubblegum-Sans'},
        }}
        backgroundColor="#8A2BE2"
      />
    );
  }
}
