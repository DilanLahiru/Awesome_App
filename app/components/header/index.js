import {Stack, Text, Input} from 'native-base';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

// #endregion imports
import {styles} from './style';

export function Header(props) {
  const {headerText} = props;
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <Stack style={styles.headerView}>
      <Text fontSize={'3xl'} fontWeight={800} color={'#512E5F'}>
        {headerText}
      </Text>
    </Stack>
  );
}

Header.propTypes = {
  headerText: PropTypes.any,
};

export default Header;
