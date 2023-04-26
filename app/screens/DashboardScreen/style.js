import {StyleSheet} from 'react-native';
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
    backgroundColor: '#FAF9F6',
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 2,
  },
  iconView: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.25,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_HEIGHT * 0.3,
    // margin: scale(10),
    alignSelf: 'center',
  },
  detailView: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.5,
    //backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  labelView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.04,
    //backgroundColor: 'red',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'silver',
  },
  buttonView: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_HEIGHT * 0.06,
    backgroundColor: '#512E5F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  button: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_HEIGHT * 0.055,
    backgroundColor: '#512E5F',
    alignItems: 'center',
    borderRadius: 15,
    justifyContent: 'center',
    //elevation: 5,
  },
  regTxtView: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_HEIGHT * 0.05,
    //backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footerIconView: {
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_HEIGHT * 0.08,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  socialMediaIcon: {
    width: 40,
    height: 40,
  },
});