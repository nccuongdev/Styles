import {View, Text} from 'react-native';
import React from 'react';

const FixedDimensions = () => {
  return (
    <View style={{width: 100, height: 100, backgroundColor: 'red'}}>
      <Text>Box with fixed dimensions</Text>
    </View>
  );
};

export default FixedDimensions;
