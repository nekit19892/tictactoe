import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import styles from './style'
import MainScreenModel from '../screens/Main'

const ScreenManager = () => {
  return (
    <SafeAreaView style={styles.main}>
      <MainScreenModel />
    </SafeAreaView>
  );
};

export default ScreenManager;
