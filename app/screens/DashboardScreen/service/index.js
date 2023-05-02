import baseURL from '../../../utils/baseUrl';

export const getUserProfileData = async token => {
  const response = await baseURL.get('api/v1/myinfo', {
    headers: {Authorization: 'Bearer ' + token},
  });
  return response;
};
