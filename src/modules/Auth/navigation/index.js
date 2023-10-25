import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import AppIntro from '../screens/IntroSlider';
import ForgotPassword from '../screens/ForgotPasswordScreen';
import CreateNewPassword from '../screens/CreateNewPasswordScreen';
import SignUpScreen from '@Auth/screens/SignUpScreen';
import BottomTab from '../../../navigator/BottomTab';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};

export const AuthModule = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Intro" component={AppIntro} options={screenOptions} />
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
