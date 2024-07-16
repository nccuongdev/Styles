import {View, Text, ScrollView} from 'react-native';
import React from 'react';

const FlexDimensions = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'red'}} />
        <View style={{flex: 2, backgroundColor: 'green'}} />
        <View style={{flex: 3, backgroundColor: 'blue'}} />
      </View>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={{flex: 1, backgroundColor: 'yellow'}} />
        <View style={{flex: 2, backgroundColor: 'red'}} />
        <View style={{flex: 3, backgroundColor: 'purple'}} />
      </View>
    </View>
  );
};

export default FlexDimensions;
