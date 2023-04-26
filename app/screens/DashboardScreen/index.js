import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Stack, Text, Image} from 'native-base';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {useSelector} from 'react-redux';

// #region assets | components
import Header from '../../components/header';
import Footer from '../../components/footer';

// #region imports
import {userLoginData} from '../../reducer/DashboardReducer';

// #endregion imports
import {styles} from './style';

const LoginScreen = () => {
  const navigation = useNavigation();
  const useData = useSelector(userLoginData);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  const userLogout = async () => {
    LoginManager.logOut();
    const token = await AccessToken.getCurrentAccessToken();
    if (!token) {
      navigation.navigate('login');
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Stack style={styles.mainView}>
        <Header headerText={'DASHBOARD'} />
        <Stack style={styles.iconView}>
          <Image
            source={{uri: useData.picture.data.url}}
            size={150}
            mt={5}
            rounded={100}
          />
        </Stack>
        <Stack style={styles.detailView}>
          <Stack mt={5} style={styles.textView}>
            <Text fontSize={'md'} ml={5} fontWeight={600} color={'#512E5F'}>
              USER ID : {useData.id}
            </Text>
          </Stack>
          <Stack mt={5} style={styles.textView}>
            <Text fontSize={'md'} ml={5} fontWeight={600} color={'#512E5F'}>
              USER NAME : {useData.first_name}
            </Text>
          </Stack>
          <Stack mt={5} style={styles.textView}>
            <Text fontSize={'md'} ml={5} fontWeight={600} color={'#512E5F'}>
              NAME : {useData.name}
            </Text>
          </Stack>
          <TouchableOpacity
            onPress={() => {
              userLogout();
            }}>
            <Stack mt={10} style={styles.buttonView}>
              <Text fontSize={'md'} fontWeight={800} color={'#fff'}>
                SIGN OUT
              </Text>
            </Stack>
          </TouchableOpacity>
        </Stack>
        <Footer />
      </Stack>
    </SafeAreaView>
  );
};

export default LoginScreen;
