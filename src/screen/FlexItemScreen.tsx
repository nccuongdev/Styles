import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FlexItemExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Box 1</Text>
      </View>
      <View style={styles.box2}>
        <Text>Box 2</Text>
      </View>
      <View style={styles.box3}>
        <Text>Box 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
  },
  box1: {
    flex: 1,
    alignSelf: 'flex-start',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    order: 2,
    width: 100,
    height: 70,
  },
  box2: {
    flex: 2,
    alignSelf: 'center',
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    order: 1,
  },
  box3: {
    flex: 3,
    alignSelf: 'flex-end',
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    order: 3,
  },
});

export default FlexItemExample;
