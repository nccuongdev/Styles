import {View, Text} from 'react-native';
import React from 'react';

const Size = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 2, backgroundColor: 'green'}} />
      <View style={{flex: 3, backgroundColor: 'blue'}} />
    </View>
  );
};

export default Size;
