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
const Forget_Password_Request = async body => {
  try {
    const inst = axios.create({
      baseURL: Url,
    });
    const response = await inst.post('auth/forgot-password', body);
    console.log('Forget_Password_Request response', response.data);

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
const get_All_Orders = async token => {
  // console.log('Token + UL', token, Url);
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.get('orders/getallorders');
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
const verify_user_Profile = async (token, userID, body) => {
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.post(`auth/verify-profile/${userID}`, body);

    return response.data;
  } catch (error) {
    if (error.response) {
      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error('Invalide Error!');
    }
  }
};
const delete_user_Account = async (token, userId) => {
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.delete(`auth/delete/${userId}`);

    return response.data;
  } catch (error) {
    if (error.response) {
      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error('Invalid Error!');
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
const add_Query = async (propertyID, body) => {
  let token = await AsyncStorage.getItem('USER_TOKEN');
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.post(`property/add-query/${propertyID}`, body);

    return response.data;
  } catch (error) {
    if (error.response) {
      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error('Invalide Error!');
    }
  }
};
const get_All_Queries = async propertyID => {
  let token = await AsyncStorage.getItem('USER_TOKEN');
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.get(`property/queries/${propertyID}`);

    return response.data;
  } catch (error) {
    if (error.response) {
      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error('Invalide Error!');
    }
  }
};
const write_review = async (propertyID, body) => {
  let token = await AsyncStorage.getItem('USER_TOKEN');
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.post(`property/review/${propertyID}`, body);

    return response.data;
  } catch (error) {
    if (error.response) {
      return new Error(JSON.stringify(error.response.data.message));
    } else {
      throw new Error('Invalide Error!');
    }
  }
};
const report_property = async (token, propertyID, body) => {
  try {
    const inst = axios.create({
      baseURL: Url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await inst.post(`property/report/${propertyID}`, body);

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
  Forget_Password_Request,
  get_properties,
  get_bidding_properties,
  get_allSeller,
  get_Seller,
  update_user_Profile,
  delete_user_Account,
  verify_user_Profile,
  place_bid,
  write_review,
  report_property,
  get_All_Orders,
  add_Query,
  get_All_Queries,
};
