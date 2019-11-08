import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Main Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
  },
});

export default MainScreen;
