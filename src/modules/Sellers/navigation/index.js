import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sellers from '../screens/Sellers';
import SellersDetail from '../screens/SellersDetails';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};
export const SellersModule = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Sellers"
        component={Sellers}
        options={screenOptions}
      />

      <Stack.Screen
        name="SellersDetail"
        component={SellersDetail}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default SellersModule;
