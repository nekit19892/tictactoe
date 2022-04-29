import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../ui/theme';

const styles = StyleSheet.create({
  main: {
    zIndex: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  battleWrapper: {
    padding: 30,
    zIndex: 2,
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  singleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textWrapper: {
    position: 'absolute',
    top: 20.24,
    left: 20.79
  },
  playerText: {
    ...fonts.rubikBold,
    color: colors.white
  },
  hintText: {
    ...fonts.rubikBold,
    fontSize: 14,
    color: colors.white
  },
  hintWrapper: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  animatedTap: {
    width: 50,
    height: 50
  },
  animatedImg: {
    width: '100%',
    flex: 1,
    resizeMode: 'contain',
  },
  circle: {
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 1000,
    width: 30,
    height: 30,
    padding: 7
  },
  circleSmall: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: colors.white,
    borderRadius: 1000,
  },
  animatedWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
});

export default styles