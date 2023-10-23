import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PropertyModule from '@Property/navigation';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};
export const AddModule = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AddPlot"
        component={PropertyModule}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default AddModule;
