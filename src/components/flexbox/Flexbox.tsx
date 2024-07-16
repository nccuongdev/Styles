import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'green'}} />
      <View style={{width: 50, height: 50, backgroundColor: 'blue'}} />
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({});
