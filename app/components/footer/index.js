import {Stack, Text} from 'native-base';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

const Footer = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <Stack style={styles.footerView}>
      <Text fontSize={'sm'} fontWeight={500} color={'#512E5F'}>
        Awesome App Copy Rights
      </Text>
    </Stack>
  );
};

export default Footer;
