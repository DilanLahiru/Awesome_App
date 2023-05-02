import {SafeAreaView, TouchableOpacity} from 'react-native';
import {Stack, Text, Image} from 'native-base';
import React, {useLayoutEffect, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import {useSelector} from 'react-redux';

// #region assets | components
import Header from '../../components/header';
import Footer from '../../components/footer';
import User from '../../assets/icons/user.png';

// #region imports
import {userLoginData, userAccessToken} from '../../reducer/DashboardReducer';

// #endregion imports
import {styles} from './style';
import {getUserProfileData} from '../DashboardScreen/service';

const LoginScreen = () => {
  const navigation = useNavigation();
  const useData = useSelector(userLoginData);
  const token = useSelector(userAccessToken);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  useEffect(() => {
    getUserData();
  }, []);

  /**
   * Load user profile info
   */
  const getUserData = async () => {
    try {
      const response = await getUserProfileData(token);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Logout user
   */
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
          {useData.picture === undefined ? (
            <Image source={User} size={150} mt={5} rounded={100} />
          ) : (
            <Image
              source={{uri: useData.picture.data.url}}
              size={150}
              mt={5}
              rounded={100}
            />
          )}
        </Stack>
        <Stack style={styles.detailView}>
          <Stack mt={5} style={styles.textView}>
            <Text fontSize={'md'} ml={5} fontWeight={600} color={'#512E5F'}>
              USER ID : {useData.id || useData.employeeId}
            </Text>
          </Stack>
          <Stack mt={5} style={styles.textView}>
            <Text fontSize={'md'} ml={5} fontWeight={600} color={'#512E5F'}>
              USER NAME : {useData.first_name || useData.userName}
            </Text>
          </Stack>
          <Stack mt={5} style={styles.textView}>
            <Text fontSize={'md'} ml={5} fontWeight={600} color={'#512E5F'}>
              NAME : {useData.name || useData.employeeName}
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
