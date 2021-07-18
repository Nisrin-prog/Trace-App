import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Card,
  Image,

} from 'react-native';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
import db from './localdb';

export default class DSscreen extends React.Component {
  constructor() {
    super();
    this.state = {
      localdb: [],
      length: 6,
      name: '',
      version: '',
    };
  }
  loaddb = () => {
    var localdb = [];
    //console.log(localdb)
    for (var i = 1; i <= this.state.length; i++) {
      localdb.push(db[i]);
      console.log(localdb);
    }
    this.setState({ localdb: localdb });
  };

  componentDidMount() {
    this.loaddb();
  }
  render() {
    {
      console.log(this.state.localdb);
    }
    return (
      <ScrollView>
        <MyHeader title={'Equipment'} navigation={this.props.navigation} />
        <View>
          {this.state.localdb.map((item, index) => {

            return (
              <View>
                
                <Text style={styles.displayText}>{item.data}</Text>
                <Image style ={styles.imageIcon} source={{ uri:item.image1}} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 300,
    height: 200,
    marginLeft: 30,
    marginTop: 25,
  },
    displayText: {
    fontSize: 20,
    fontWeight:'bold'

  },
});
