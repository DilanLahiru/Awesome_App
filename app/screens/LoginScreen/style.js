import {StyleSheet} from 'react-native';

// #region assets | components
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../components/theme';

export const styles = StyleSheet.create({
  mainView: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.9,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  safeView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  textView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.08,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  iconView: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SCREEN_HEIGHT * 0.01,
  },
  icon: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_HEIGHT * 0.3,
    alignSelf: 'center',
  },
  textInputView: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.4,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  labelView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.04,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'silver',
  },
  buttonView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_HEIGHT * 0.055,
    backgroundColor: '#512E5F',
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
  },
  regTxtView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.05,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footerIconView: {
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_HEIGHT * 0.08,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  socialMediaIcon: {
    width: 40,
    height: 40,
  },
});
