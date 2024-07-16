import {View, Text} from 'react-native';
import React from 'react';

const InlineStyleScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, color: 'blue'}}>Hello World</Text>
    </View>
  );
};

export default InlineStyleScreen;
