import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native'
import RNBootSplash from "react-native-bootsplash";
import { colors } from './ui/theme';
import styles from './style';
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

export default App;
