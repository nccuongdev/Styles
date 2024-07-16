import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DimensionsEx = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexcontainer}>
        <View style={styles.flexBox1}>
          <Text style={{color: '#FFF'}}>1/6</Text>
        </View>
        <View style={styles.flexBox2}>
          <Text style={{color: '#FFF'}}>2/6</Text>
        </View>
        <View style={styles.flexBox3}>
          <Text style={{color: '#000'}}>3/6</Text>
        </View>
      </View>
      <View style={styles.percentageBox}>
        <Text style={{color: '#FFF'}}>%</Text>
      </View>
      <View style={styles.fixedBox}>
        <Text style={{color: '#000'}}>FIX</Text>
      </View>
      <View style={styles.dyamicBox}>
        <Text style={{color: '#FFF'}}>Dimensions</Text>
      </View>
    </View>
  );
};

export default DimensionsEx;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexcontainer: {flexDirection: 'row', width: '100%', height: 100},
  flexBox3: {
    flex: 3,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexBox2: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexBox1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  percentageBox: {
    width: '50%',
    height: '30%',
    backgroundColor: 'purple',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fixedBox: {
    width: 100,
    height: 100,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dyamicBox: {
    width: width * 0.44,
    height: height * 0.22,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
