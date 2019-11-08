import React, {Component} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

const SettingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Setting Screen</Text>
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

export default SettingScreen;
