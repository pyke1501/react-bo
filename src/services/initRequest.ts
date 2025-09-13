import axios from "axios";
import { PATH } from "../configs/path";

const configs = {
  baseURL: 'https://tony-auth-express-vdee.vercel.app',
  showLoading: true,
  timeout: 5000,
}

export const httpRequest = axios.create(configs);

// FE call api -> BE check access token -> if access token expired -> system auto call refresh token to get new access token -> system auto call that api before

export const initRequest = () => {
  httpRequest.interceptors.request.use(function (config) {
      console.log('request success: ', config);
      // add header, add json ....
      config.headers['Content-Type'] = 'application/json';

      const access_token = window.localStorage.getItem('access_token');
      if (access_token) {
        config.headers['x-auth-token'] = access_token;
      }

      // code something
      return config;
    }, function (error) {
      console.log('request failure: ', error)
      return Promise.reject(error);
    },
  );

  httpRequest.interceptors.response.use(function onFulfilled(response) {
    console.log('response success: ', response)
    return response.data;
  }, async function onRejected(error) {
    console.log('response failure: ', error);

    // timeout
    if (error.code === "ECONNABORTED") {
      // show dialog message server timout
    }

    // token expired
    if (error?.response?.status === 401) {
      try {
        const refresh_token = window.localStorage.getItem('refresh_token');
        const bodyData = {
          "data": {
              "refresh_token": refresh_token
          }
        }
        const res = await httpRequest('/api/user/refresh-token', {
          method: 'POST',
          data: bodyData,
        });
        const access_token = res.data.access_token;
        window.localStorage.setItem('access_token', access_token);
        error.config.headers['x-auth-token'] = access_token;
        return httpRequest(error.config)
      } catch (_) {
        window.localStorage.clear();
        window.sessionStorage.clear();
        window.location.href = PATH.LOGIN
      }
    }

    // hande common error
    switch (error.status) {
      case 400: {
        // show dialog message ...
        break;
      }
      case 404: {
        // show dialog message ...
        break;
      }
      case 500: {
        // show dialog message ...
        break;
      }
      default:
        break;
    }


    return Promise.reject(error?.response?.data);
  });
}
