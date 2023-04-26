import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';

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
