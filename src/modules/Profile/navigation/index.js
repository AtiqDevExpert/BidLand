import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import AuthModule from '../../Auth/navigation';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};
export const ProfileModule = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="AuthModule"
        component={AuthModule}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default ProfileModule;
