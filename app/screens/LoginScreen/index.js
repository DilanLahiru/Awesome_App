import {SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {Stack, Text, Input} from 'native-base';
import React, {useLayoutEffect, useState, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {LoginManager} from 'react-native-fbsdk-next';
import LottieView from 'lottie-react-native';
import InstagramLogin from 'react-native-instagram-login';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';

// #region assets | components
import Header from '../../components/header';
import Footer from '../../components/footer';
import Facebook from '../../assets/icons/icon_facebook.png';
import Instagram from '../../assets/icons/icon_instagram.png';
import {SCREEN_WIDTH, SCREEN_HEIGHT} from '../../components/theme/index';

// #region imports
import {
  setLoginUserData,
  setLoginUserAccessToken,
} from '../../reducer/DashboardReducer';
import {OAuthClient} from '../../utils/oauthClient';

// #endregion imports
import {
  loginActionService,
  instagramLoginActionService,
  getAccessToken,
  userSignIn,
} from './service/index';
import {styles} from './style';

const LoginScreen = () => {
  const navigation = useNavigation();
  const insRef = useRef();
  const dispatch = useDispatch();

  // ** This state use to store userName
  const [userName, setUserName] = useState('');
  // ** This state use to store password
  const [password, setPassword] = useState('');
  // ** This state use to store password
  const [userToken, setUserToken] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    //getToken();
  });

  useEffect(() => {
    getToken();
  }, []);

  const getToken = async () => {
    console.log(OAuthClient);
    try {
      const data = await getAccessToken(OAuthClient);
      console.log(data.data);
      setUserToken(data.data.access_token);
      dispatch(setLoginUserAccessToken(data.data.access_token));
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * This function use to store userName to app state
   * @param {*} text
   */
  const getUserName = text => {
    setUserName(text);
  };

  /**
   * This function use to store password to app state
   * @param {*} text
   */
  const getPassword = text => {
    setPassword(text);
  };

  /**
   * This function use to login user to app
   */
  const userLogin = async () => {
    try {
      let obj = {
        username: userName,
        password: password,
      };
      const response = await userSignIn(obj, userToken);
      console.log(response.data);
      if (response.status === 200) {
        dispatch(setLoginUserData(response.data.user));
        Toast.show({
          type: 'success',
          text1: 'AWESOME APP',
          text2: 'Login Success',
          visibilityTime: 2000,
          autoHide: true,
        });
        navigation.navigate('dashboard');
      } else {
        Toast.show({
          type: 'error',
          text1: 'AWESOME APP',
          text2: response.data.error.text,
          visibilityTime: 2000,
          autoHide: true,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * This function use to login into app use instagram
   * @param {*} token
   */
  const getLoginUserData = token => {
    const response = instagramLoginActionService(token);
    console.log(response);
  };

  /**
   * This function use to login into app use facebook
   */
  const loginWithFacebook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);
      if (result.isCancelled) {
        console.log('==> Login cancelled');
      } else {
        const data = await loginActionService();
        if (data) {
          dispatch(setLoginUserData(data));
          navigation.navigate('dashboard');
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.safeView}>
      <Stack style={styles.mainView}>
        <Header headerText={'SIGN IN'} />
        <Stack style={styles.iconView}>
          <LottieView
            source={require('../../assets/lottie/login.json')}
            speed={0.8}
            autoPlay
            loop
            style={styles.icon}
            resizeMode="cover"
          />
        </Stack>
        <Stack style={styles.textInputView}>
          <Stack style={styles.labelView}>
            <Text fontSize={'sm'} fontWeight={600} color={'#512E5F'}>
              USER NAME
            </Text>
          </Stack>
          <Input
            mt={2}
            variant="unstyled"
            w={SCREEN_WIDTH * 0.8}
            h={SCREEN_HEIGHT * 0.055}
            fontSize={'lg'}
            onChangeText={value => {
              getUserName(value);
            }}
            value={userName}
            _focus={{
              style: {
                borderWidth: 1,
                borderRadius: 15,
                borderColor: '#512E5F',
                backgroundColor: 'white',
              },
            }}
            style={styles.input}
          />
          <Stack mt={3} style={styles.labelView}>
            <Text fontSize={'sm'} fontWeight={600} color={'#512E5F'}>
              PASSWORD
            </Text>
          </Stack>
          <Input
            mt={2}
            variant="unstyled"
            w={SCREEN_WIDTH * 0.8}
            secureTextEntry={true}
            h={SCREEN_HEIGHT * 0.055}
            fontSize={'lg'}
            onChangeText={value => {
              getPassword(value);
            }}
            value={password}
            _focus={{
              style: {
                borderWidth: 1,
                borderRadius: 15,
                borderColor: '#512E5F',
                backgroundColor: 'white',
              },
            }}
            style={styles.input}
          />
          <Stack mt={3} style={styles.buttonView}>
            <TouchableOpacity
              onPress={() => {
                userLogin();
              }}>
              <Stack style={styles.button}>
                <Text fontSize={'md'} fontWeight={800} color={'#fff'}>
                  SIGN IN
                </Text>
              </Stack>
            </TouchableOpacity>
          </Stack>
          <Stack style={styles.regTxtView}>
            <Text fontSize={'md'} fontWeight={800} color={'#512E5F'}>
              LOGIN WITH
            </Text>
          </Stack>
          <Stack mt={3} style={styles.footerIconView}>
            <TouchableOpacity
              onPress={() => {
                loginWithFacebook();
              }}>
              <Image source={Facebook} style={styles.socialMediaIcon} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                insRef.current.show();
              }}>
              <Image source={Instagram} style={styles.socialMediaIcon} />
            </TouchableOpacity>
          </Stack>
          <Footer />
        </Stack>
      </Stack>
      <InstagramLogin
        ref={insRef}
        appId="225274930152801"
        appSecret="826a8b1e4d213e680832173dbe469a8d"
        redirectUrl="https://www.orangehrm.com/"
        scopes={['user_profile', 'user_media']}
        onLoginSuccess={token => {
          getLoginUserData(token);
        }}
        onLoginFailure={data => console.log(data)}
        language="en"
      />
    </SafeAreaView>
  );
};

export default LoginScreen;
