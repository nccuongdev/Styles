import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const BackgroudScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{
          uri: 'https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg',
        }}
        style={styles.image}
        resizeMode="cover">
        <View style={styles.overlay}>
          <Text style={styles.text}>ádjksada</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BackgroudScreen;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});
