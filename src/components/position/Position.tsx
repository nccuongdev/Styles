import {View, Text} from 'react-native';
import React from 'react';

const Position = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
          position: 'absolute',
          top: 50,
          left: 50,
        }}
      />
    </View>
  );
};

export default Position;
