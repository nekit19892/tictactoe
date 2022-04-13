import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme';

const styles = StyleSheet.create({
  text: {
    ...fonts.rubikBold,
    textTransform: 'uppercase',
    color: colors.white
  },
});

export default styles