import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image } from 'react-native';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader'

export default class BCDscreen extends React.Component{
  render(){
    return(
      <View>
       <MyHeader title={"Courses"} navigation={this.props.navigation}/>
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://influencermarketinghub.com/wp-content/uploads/2020/09/default-meta-image.png',
          }}
        /> 
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_cb112747780a2d0e3cdf7761d20ebffa/skillshare.png',
          }}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  imageIcon: {
    width: 300,
    height: 150,
    marginLeft: 30,
    marginTop: 25,
  },
});

