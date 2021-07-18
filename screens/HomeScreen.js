import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import { Icons } from 'react-native-elements';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
import db from '../config';
import AboutUS from './AboutUS';
import * as Font from 'expo-font';
let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

export default class HomeScreen extends React.Component {
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
      <ScrollView>
        <MyHeader title={'TRACE'} navigation={this.props.navigation} />

        <Text style={{ color: '#8A2BE2', fontWeight: 'bold' }}>
          "The Ultimate Guide for your drawing needs"
        </Text>

        <Text
          style={{
            fontSize: 30,
            marginTop: 20,
            marginLeft: 30,
            fontWeight: 'bold',
          }}>
          What is Trace?
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 40 }}>
          Trace is a beginners app for guiding drawing beginners throught the
          amazing world of physical and digital art.
        </Text>

        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://qph.fs.quoracdn.net/main-qimg-245ffc57b21f54bf5905a8aa73d6552d',
          }}
        />
        <Text> </Text>

        <View style={styles.cont2}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.props.navigation.navigate('AboutUS');
            }}>
            <Text style={{ marginTop: 0, fontWeight: 'bold', marginLeft: -50,fontFamily:'Bubblegum-Sans',fontSize:20 }}>
            About US
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: 'center',
  },

  cont2: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    marginLeft: -96,
  },

  button1: {
    width: 100,
    height: RFValue(50),
    marginTop: RFValue(130),
    marginLeft: RFValue(130),
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: RFValue(10),
    backgroundColor: '',
  },
  imageIcon: {
    width: 300,
    height: 200,
    marginLeft: 20,
    marginTop: 25,
  },
});
