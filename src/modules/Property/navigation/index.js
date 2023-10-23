import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import SignUpProperty from '../screens/SignUpPropertyScreen';
import NewClient from '../screens/NewClientScreen';
import NewProperty from '../screens/NewPropertyScreen';
import ListOfPlots from '../screens/ListOfPlotsScreen';

const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};
export const PropertyModule = () => {
  return (
     <Stack.Navigator>

      <Stack.Screen
       name="signupProperty"
       component={SignUpProperty}
       options={screenOptions}
     /> 

      <Stack.Screen
       name="addNewClient"
       component={NewClient}
       options={screenOptions}
     />  

     <Stack.Screen
       name="addNewProperty"
       component={NewProperty}
       options={screenOptions}
     />

     <Stack.Screen
       name="listOfPlots"
       component={ListOfPlots}
       options={screenOptions}
     />
  
   </Stack.Navigator>
  );
};

export default PropertyModule;
