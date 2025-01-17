import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import AppIntro from '../screens/IntroSlider';
import ForgotPassword from '../screens/ForgotPasswordScreen';
import SignUpScreen from '@Auth/screens/SignUpScreen';
import BottomTab from '../../../navigator/BottomTab';
import ProfileModule from '@Profile/navigation';
import Loading from '@components/Loading/Loading';
import {View} from 'react-native';
const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};

export const AuthModule = () => {
  return (
    <>
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
          name="BottomTab"
          component={BottomTab}
          options={screenOptions}
        />
        <Stack.Screen
          name="profileModule"
          component={ProfileModule}
          options={screenOptions}
        />
      </Stack.Navigator>
    </>
  );
};

export default AuthModule;
