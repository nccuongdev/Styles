import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const FlexContainerExample = () => {
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
      <View style={styles.box3}>
        <Text>Box 3</Text>
      </View>
      <View style={styles.box3}>
        <Text>Box 3</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    //alignContent: 'space-between',
    backgroundColor: '#f0f0f0',
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FlexContainerExample;
