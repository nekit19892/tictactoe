import { StyleSheet } from 'react-native'
import { colors } from '../../theme';

const styles = StyleSheet.create({
  main: {
    borderWidth: 3.89,
    borderColor: colors.white,
    borderRadius: 20.9553,
    overflow: 'hidden',
    width: 62.22,
    height: 62.22,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  image: {
    width: '100%',
    flex: 1,
    resizeMode: 'contain'
  },
});

export default styles