import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import baseURL from '../../../utils/baseUrl';

export const loginActionService = async () => {
  try {
    const response = await AccessToken.getCurrentAccessToken();
    const result = await new Promise((resolve, reject) => {
      const infoRequest = new GraphRequest(
        '/me',
        {
          parameters: {
            fields: {
              string:
                'email,name,first_name,middle_name,last_name,gender,address,picture.type(large)',
            },
          },
          accessToken: response.accessToken,
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        },
      );
      new GraphRequestManager().addRequest(infoRequest).start();
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const instagramLoginActionService = async data => {
  fetch(
    `https://graph.instagram.com/${data.user_id}?fields=id,username,account_type,email,media_count&access_token=${data.access_token}`,
  )
    .then(response => response.json())
    .then(json => {
      console.log(json);
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};

/**
 * Generate Access Token
 * @param {*} data // OAuth Client
 * @returns // Access Token
 */
export const getAccessToken = async data => {
  try {
    const response = await baseURL.post('oauth/issueToken', data);
    console.log('RES : ' + response);
    return response;
  } catch (error) {
    console.error(error);
  }
};

/**
 * User Login
 * @param {*} data // user data
 * @param {*} token // access token
 * @returns
 */
export const userSignIn = async (data, token) => {
  const response = await baseURL.post('api/v1/login', data, {
    headers: {Authorization: 'Bearer ' + token},
  });
  return response;
};
