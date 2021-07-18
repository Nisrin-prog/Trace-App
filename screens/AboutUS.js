import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Constants from 'expo-constants';
import { RFValue } from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';

export default class AboutUS extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <MyHeader title={'About US'} navigation={this.props.navigation} />
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            marginLeft: 75,
            fontWeight: 'bold',
          }}>
          -About the creator-
        </Text>
        <Image
          style={styles.imageIcon}
          source={{
            uri:
              'https://lh3.googleusercontent.com/-l7ygVXO5ciE/YOMyYYfuujI/AAAAAAAAFdk/8T7o8SFtAcMdQ3D6Jnz6K8gJ4Ructo4NgCL8CGAsYHg/s512/download%2B%25284%2529.png',
          }}
        />
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            marginLeft: 75,
            fontWeight: 'bold',
          }}>
          Noah Polackal 13
        </Text>
        <Text
          style={{
            //fontSize: 25,
            marginTop: 10,
            marginLeft: 70,
            fontWeight: 'bold',
          }}>
          Noah Polackal is a great artist who makes comic cartoons digitally and
          physically
        </Text>
        <Text
          style={{
            fontSize: 25,
            marginTop: 10,
            marginLeft: 40,
            fontWeight: 'bold',
          }}>
          My Drawings
        </Text>

        <Image
          style={styles.imageIcon1}
          source={{
            uri:
              'https://lh3.googleusercontent.com/K0Ui5H8s1fUxm4VEFi1WMujMYRg0yIpmLqeL3eyZM88npzBSOk2IlFKdYLL3cdxdjV-Tjev4nlQHKV_HESRZ8uzepIK2fYSz8hx__CU85bUd6gEasqI3kJQXXIJGUC3W7XVXvvi1SVbaFJ0aJp5IR_jP5AjqJ7fC--HtOhH5ocWn4H9gxfIQX-eoQjTJRi7M6LCmnf3wQrCYaSEvz2l2fACmZwk-YK27ZJikFVi2nN0EB8--4GiQU0zlPCmE9kMhJ_E9wy-2455YUeqboFlI7Gla01th2IOMi7XJvYCtmaVy29tRbWO94tfydgAgXZ6RRCjzuM9-SEOtZtOe5m9NyjNLJY4ImUuxLYJ0_2WMOIh-r-ZYd7XqN2AnENp_7kSgegb4j4yfyuhVzRq6sYMe7VRDjbPWmJyZKhHSUxgt_EyR8NRks4xA64DqdsZL-SwDLVvGbwpyR1VMWwOqdzCkHr0eoECWPOGpiv8c6Se8bjvebPJ7_5khrNCuxcLM2Cm1E0Z6uQlwFNhLVOK8bgNFKGESwJgzt_ef1-wCVhVqhcd9UokXAv0xj3adKDYXWS6nvzDzqh81YlZ9pHMe3R37eKDEtf1s86vBmgAnp_lSd4Tv1XbxnFm002_QNIHjfuoUXdRgdFCiHhC1U5aaeX57TXVKTenhidzuoFeOSL8GOgnMv7R1DyF4sgdvbEkrgyrNOfYYFGoRh8_J_mkx2-elnz13=s625-no?authuser=0',
          }}
        />
        <Image
          style={styles.imageIcon2}
          source={{
            uri:
              'https://lh3.googleusercontent.com/vTe6rgTW9X3BmfEMJHXbfbj8uPxMQzfsaepmK4vVq_0CoYXiLgOFCQeTwCdfaD3ZghgylHYFtahXbTGW3_SiePqxTU_Gl4QR-mG63EYsIQkQLGMUHpTUBDMzE5It4HF8Wqyn7T5Vhf5PCx5k9m4z-CsMeZbZ0aeLBnOioENuBDd82JYISWJVrzIOKjqDeR_VjbmaqW8Acjdxlvv7mwFqEo28SxMxm7sV4ajLAZUACI1Dy4FMiuDRIK7BZo_pxXNG2bz6yOam4XHlH2LNrX4oaSUHWqt3VqdX8_pEBXsn8DZV8A2nZbcZdhGn7DCZvc-aCMhuD15yXK0TV09gbn0M1tB24a8K2nz32wiNm3iuZtmKG3QhpDoN-09c7ACXvuAAOVNV8QtSM-RZiKKzlRD3zmDOFnoQDTM-dQzqK5C34GoKAdxel8VwMBRIkXEFifnjp5yoO5FuadMquWwuLGKOSSmrD0a4oG_mK6npjJuiauyyVN-QadLEnmYrkZPynU1-e9fV3W6raP_2nlqZiYHkNqIvzpZr7pdanFaL8GARnNd_O_bwCeY2qjG_dWZyPlh0YfkgnMLlqOG2ROVzL7IPu_kmNYq5giXmp5RViMmpD4QVl2_fDXnMKsa1EqhAR-CeNrho9NtwE5zSiNMjcbY19Htn-4y4glCEgAVaFNJLDDS-JLGYmKkRV58a4IA71SjNdY1R1bl-gcxbZnN0P41hwcEW=s625-no?authuser=0',
          }}
        />
        <Image
          style={styles.imageIcon3}
          source={{
            uri:
              'https://lh3.googleusercontent.com/vwMyBID6i2_64Mq3MDpFbH061c6QxEVy-7DdsI7yN6Vg8Kzdxuma1owVnmSI_1VSZzemupE7T_32n4gcWAmyxad_t7mZQbd_ras2CmW4673QfmKCT1B2ka7fQiSPHuvraYDGrYuD9B87nPF_HS3O4NORm96EN2tXeVSiwePK9hMEwq-Jixgo-ATBM27mjISzo13AYpmIuYQ1MEnvBQROd9y1jIF3FMANzCT4Ee6AwmV6p-zuVOPS77rUDiDUU421W5tr9L2uDD4mBK2LmNT_X6qBInIzBedAKARfx76CrJuE9XxjIS-OewiCWw8whfCKTy3J1_uvLmiIy4Q89RVn1P4iCqqyJqrnrOmL4mWISmAZ4wZY1ywXNqS9pyYpYjebNE7eleZGwzF9ZpwwiieGLTsx-VQsoMOIHrxfWq7mg4ETqgWUHnM2EDjpHR9EceTSBjgsP8d2gYX6pc000lhvLw1I_K0j6LEbXo0JsQunU4MACySLEPvrrV6TjeRE50a1ln0a-XQjlJ8JmaBurRdvXMz8SERErwgvpG0QS_HQKooaYwig1_g6YwNuTCXMYpL2G9wXdl23hQK8D0J5yFhSm2vHxwk7CIJpdDqEC9jrF5lfyGSlJKlE35RK2w1HHBqKYDtQG_7VTdQ8uUiWqsalHRMkw_hG9wsXXYwpx_dby3LN1H-u2zO8SbhLPln9FXe1xjwWAHODZQVj7LifaiuC2QjV=s625-no?authuser=0',
          }}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 100,
    marginTop: 25,
  },
  imageIcon1: {
    width: 200,
    height: 200,
    marginLeft: 100,
    marginTop: 25,
  },
  imageIcon2: {
    width: 200,
    height: 200,
    marginLeft: 100,
    marginTop: 25,
  },
  imageIcon3: {
    width: 200,
    height: 200,
    marginLeft: 100,
    marginTop: 25,
  },
});
