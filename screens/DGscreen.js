import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
import db from '../config';


export default class DGscreen extends React.Component {
  constructor() {
    super();
    this.state = {
      like: 0,
      dislike: 0,
    };
  }
  updateStates = async () => {
    var liked, disliked;
    
    var dbref = await db.ref('LikePressed').on('value', (data) => {
      liked = data.val();
      liked = parseInt(liked,2)
      
    });

    dbref = db.ref('DislikePressed').on('value', (data) => {
      disliked = data.val()
      disliked = parseInt(disliked, 10);
    });
    this.setState({ like: liked, dislike: disliked });
    
  };
  componentDidMount() {
    this.updateStates();
  }
  likePressed = async () => {
    const zeroPad = (num, places) => String(num).padStart(places, '0');

    this.state.like = this.state.like + 1;
    this.setState({ like: this.state.like });

    if (this.state.like < 9) {
      this.state.like = zeroPad(this.state.like, 2);
    }
    var like = db.ref('/');

    like.update({
      LikePressed: this.state.like,
    });
  };
  dislikePressed = async () => {

    const zeroPad = (num, places) => String(num).padStart(places, '0');

    this.state.dislike = this.state.dislike + 1;
    this.setState({ dislike: this.state.dislike });

    if (this.state.dislike < 9) {
      this.state.dislike = zeroPad(this.state.dislike, 2);
    }
    var dislike = db.ref('/');
    dislike.update({
      DislikePressed: this.state.dislike,
    });
  };
  render() {
    return (
      <ScrollView>
        <MyHeader title={'Drawing'} navigation={this.props.navigation} />
        <Text
          style={{
            fontSize: 30,
            marginTop: 20,
            marginLeft: 30,
            fontWeight: 'bold',
          }}>
          What is Drawing?
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 40 }}>
          Drawing is a form of visual art in which an artist uses instruments to
          mark paper or other two-dimensional surface. Drawing instruments
          include graphite pencils, pen and ink, various kinds of paints, inked
          brushes, colored pencils, crayons, charcoal, chalk, pastels, erasers,
          markers, styluses, and metals
        </Text>
        <Text
          style={{
            fontSize: 30,
            marginTop: 20,
            marginLeft: 30,
            fontWeight: 'bold',
          }}>
          Who are the famous artist of our century?
        </Text>
        <Text style={{ marginTop: 10, marginLeft: 40 }}>
          1)Pablo Picasso (Spanish painter)
        </Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            marginLeft: 30,
            fontWeight: 'bold',
          }}>
          His Paintings-
        </Text>
         <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://lh3.googleusercontent.com/lCEhzp8iaeK_5xiycJiZZ6I_BlpVNwOGDFkTIw8JajCf-cm-fDvmlwW3VgJXULB5Q5YA=s170',
          }}
        />
        <Text style={{ marginLeft: 130,marginTop: 40}}> {this.state.like} </Text> 
        <Text style={{ marginLeft: 180, marginTop: -20}}> {this.state.dislike} </Text>
        <TouchableOpacity onPress={this.likePressed}>
          <Image
            style={styles.upthumbs}
            source={require('../assets/heart.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.dislikePressed}>
          <Image
            style={styles.downthumbs}
            source={require('../assets/bHeart.png')}
          />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 300,
    height: 150,
    marginLeft: 30,
    marginTop: 25,
  },
  upthumbs: {
    width: 40,
    height: 40,
    marginLeft: 120,
    marginTop: 0,
  },

  downthumbs: {
    width: 40,
    height: 40,
    marginLeft: 170,
    marginTop: -40,
  },
});
