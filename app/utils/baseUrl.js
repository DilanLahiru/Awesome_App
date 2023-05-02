import axios from 'axios';

export default axios.create({
  baseURL: 'https://dilan-osondemand.orangehrm.com/symfony/web/index.php/',
});

// // create an instance of axios
// const api = axios.create({
//   baseURL: 'https://your-api-url.com',
// });

// // add a request interceptor
// api.interceptors.request.use(
//   config => {
//     // get the access token from your state management library
//     const accessToken = 'YOUR_ACCESS_TOKEN';

//     // if the access token exists, add it to the request header
//     if (accessToken) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }

//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );

// export default api;
