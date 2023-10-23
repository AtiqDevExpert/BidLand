import React from 'react'; //
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Chats from '../screens/Chats';
import ChatDetails from '../screens/ChatDetails';
const Stack = createNativeStackNavigator();
const screenOptions = {headerShown: false};
const ChatModule = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chats" component={Chats} options={screenOptions} />
      <Stack.Screen
        name="ChatDetails"
        component={ChatDetails}
        options={screenOptions}
      />
    </Stack.Navigator>
  );
};

export default ChatModule;
