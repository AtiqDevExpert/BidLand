import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SoldPlotDetail from '../screens/SoldPlotDetail';
const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};
export const SoldNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SoldPlotDetail"
        component={SoldPlotDetail}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default SoldNavigation;
