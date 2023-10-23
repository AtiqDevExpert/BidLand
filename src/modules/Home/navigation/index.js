import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '@Home/screens/DetailsScreen';
// import DetailsScreen from '../screens/DetailsScreen';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};
export const HomeModule = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="DetailsScreen"
        component={DetailsScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default HomeModule;
