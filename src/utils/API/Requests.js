import Url from '../../baseUrl';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const get_request = async ({target, auth_token = null}) => {
  try {
    console.log(Url + target);
    // let token = await get_data("USER_TOKEN")
    console.log('x-auth-token:' + token);
    const inst = axios.create({
      baseURL: Url,
      headers: {
        'x-auth-token': token ? token : auth_token,
      },
    });
    const response = await inst.get(target);
    console.log('get response', JSON.stringify(response.data));

    return response;
  } catch (error) {
    if (error.response) {
      console.log('get error', JSON.stringify(error.response));

      return error.response.data.message;
    } else {
      return 'Invalide Error!';
    }
  }
};
const SignUp_Request = async body => {
  try {
    const inst = axios.create({
      baseURL: Url,
    });
    const response = await inst.post('auth/register', body);
    console.log('SignUp response', response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log('post error', error.response);
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Invalide Error!');
    }
  }
};
const Login_Request = async body => {
  try {
    const inst = axios.create({
      baseURL: Url,
    });
    const response = await inst.post('auth/login', body);
    console.log('Login response', response.data);

    return response.data;
  } catch (error) {
    console.log(error);
    if (error.response) {
      console.log('post error', error.response);
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Invalide Error!');
    }
  }
};
const post_request_with_Token = async ({target, body}) => {
  let token = await AsyncStorage.getItem('USER_TOKEN');
  console.log(
    '🚀 ~ file: Requests.js:71 ~ constpost_request_with_Token= ~ token:',
    token,
  );
  try {
    var myHeaders = new Headers();
    myHeaders.append('x-auth-token', '' + token);
    myHeaders.append('Authorization', 'Bearer ' + token);
    myHeaders.append('Accept', 'application/json');
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify(body);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    const data = await fetch(`${Url}${target}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        //   console.log( "result data",result);
        return result;
      })
      .catch(error => {
        console.log('error', error.message);
        throw new error.message();
      });
    console.log('post response===============> ', data);
    return data;
  } catch (error) {
    console.log('----------', error);
    return error;
  }
};
const get_properties = async token => {
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.get('property/view');
    // console.log("post response", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    if (error.response) {
      // console.log("post error", JSON.stringify(error.response));

      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error('Invalide Error!');
    }
  }
};
const get_bidding_properties = async token => {
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.get('property/get-bidding-properties');
    // console.log("post response", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    if (error.response) {
      // console.log("post error", JSON.stringify(error.response));

      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error('Invalide Error!');
    }
  }
};
const get_allSeller = async token => {
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.get('auth/get-all-sellers');
    // console.log("post response", JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    if (error.response) {
      // console.log("post error", JSON.stringify(error.response));

      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error('Invalide Error!');
    }
  }
};
const get_Seller = async (token, sellerId) => {
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.get(`auth/seller/${sellerId}`);

    return response.data;
  } catch (error) {
    if (error.response) {
      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error('Invalide Error!');
    }
  }
};
export {
  SignUp_Request,
  Login_Request,
  get_properties,
  get_bidding_properties,
  get_allSeller,
  get_Seller,
};
