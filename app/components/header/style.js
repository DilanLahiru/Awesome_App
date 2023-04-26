import {StyleSheet} from 'react-native';

// #region assets | components
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../components/theme';

export const styles = StyleSheet.create({
  headerView: {
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.08,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
