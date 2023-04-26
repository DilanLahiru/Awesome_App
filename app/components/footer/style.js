import {StyleSheet} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../components/theme';

export const styles = StyleSheet.create({
  footerView: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
