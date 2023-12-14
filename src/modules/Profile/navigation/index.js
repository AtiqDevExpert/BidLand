import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import EditProfile from '../screens/EditProfile';
import UserOrders from '../screens/UserOrders';
import ChatSupport from '../screens/ChatSupports';

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
        name="editProfile"
        component={EditProfile}
        options={screenOptions}
      />
      <Stack.Screen
        name="orders"
        component={UserOrders}
        options={screenOptions}
      />
      <Stack.Screen
        name="chatSupports"
        component={ChatSupport}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default ProfileModule;
