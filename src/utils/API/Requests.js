import Url from '../../baseUrl';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

const get_properties = async token => {
  // console.log('Token + UL', token, Url);
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.get('property/view');
    // console.log('post response', JSON.stringify(response.data));

    return response.data;
  } catch (error) {
    if (error.response) {
      // console.log("post error", JSON.stringify(error.response));

      return new Error(JSON.stringify(error.response.data));
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
      // console.log('post error', JSON.stringify(error.response));

      return new Error(JSON.stringify(error.response.data));
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
const update_user_Profile = async (token, useID) => {
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.get(`auth/user/${useID}`);

    return response.data;
  } catch (error) {
    if (error.response) {
      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error('Invalide Error!');
    }
  }
};
const place_bid = async (propertyID, body) => {
  let token = await AsyncStorage.getItem('USER_TOKEN');
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.post(`bidding/${propertyID}/placeBid`, body);

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
  update_user_Profile,
  place_bid,
};
