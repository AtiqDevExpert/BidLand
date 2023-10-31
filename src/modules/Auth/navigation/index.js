import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import AppIntro from '../screens/IntroSlider';
import ForgotPassword from '../screens/ForgotPasswordScreen';
import CreateNewPassword from '../screens/CreateNewPasswordScreen';
import SignUpScreen from '@Auth/screens/SignUpScreen';
import BottomTab from '../../../navigator/BottomTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};

export const AuthModule = () => {
  // const fetchUserDetail = async () => {
  //   let user = await AsyncStorage.getItem('USER_INFO');
  //   console.log('user ====>', user);
  //   let registeredUser = JSON.parse(user);
  //   if (registeredUser === null) {
  //     setUser(false);
  //   } else {
  //     setUser(true);
  //   }
  // };
  // useEffect(() => {
  //   fetchUserDetail();
  // }, []);
  const [user, setUser] = useState(false);
  return (
    <Stack.Navigator>
      {/* {user === false ? (
        <Stack.Screen
          name="Intro"
          component={AppIntro}
          options={screenOptions}
        />
      ) : null} */}
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="signup"
        component={SignUpScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="forgotpassword"
        component={ForgotPassword}
        options={screenOptions}
      />

      <Stack.Screen
        name="createnewpassword"
        component={CreateNewPassword}
        options={screenOptions}
      />
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default AuthModule;
