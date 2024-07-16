import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('window');

const DimensionsAPI = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{width}</Text>
      <Text style={styles.text}>{height}</Text>
      <View style={styles.dynamicBox}>
        <Text>DimensionsAPI</Text>
      </View>
    </View>
  );
};

export default DimensionsAPI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },

  text: {
    fontSize: 18,
    margin: 10,
    color: 'white',
  },
  dynamicBox: {
    width: width * 0.3,
    height: height * 0.2,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 50,
    left: 50,
  },
});
