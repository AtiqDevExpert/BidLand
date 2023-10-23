import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PlotDetail from '../screens/PlotDetail';
const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};
export const PlotDetailNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlotDetail"
        component={PlotDetail}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default PlotDetailNavigation;
