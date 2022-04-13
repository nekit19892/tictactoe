import { Platform } from 'react-native'

const isIOS = Platform.OS === 'ios' ? true : false

const fonts = {
  rubikBold: {
    fontFamily: isIOS ? 'Rubik' : 'Rubik-Bold',
    fontWeight: '500',
    fontSize: 22,
  }
}

export default fonts