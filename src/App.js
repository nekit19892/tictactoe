import React, { useEffect } from 'react';
import { View, StyleSheet, StatusBar } from 'react-native'

import RNBootSplash from "react-native-bootsplash";

import { colors } from './ui/theme'

import ScreenManager from './screenManager';


const App = () => {

  useEffect(() => {
    RNBootSplash.hide();
  }, [])

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={colors.background} />
      <ScreenManager />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: colors.background
  }
})

export default App;
