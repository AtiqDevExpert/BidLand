import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar, Modal, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import AuthModule from './modules/Auth/navigation/index';
import {LogBox} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTab from './navigator/BottomTab';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();
const App = () => {
  const fetchUserDetail = async () => {
    let user = await AsyncStorage.getItem('USER_INFO');
    console.log('🚀 ~ file: App.js:18 ~ fetchUserDetail ~ user:', user);
    let registeredUser = JSON.parse(user);
    if (registeredUser === null) {
      setUser(false);
    } else {
      setUser(true);
    }
  };
  useEffect(() => {
    fetchUserDetail();

    SplashScreen.hide();
  }, []);
  const [user, setUser] = useState();
  return (
    <SafeAreaView style={styles.mainView}>
      <NavigationContainer>
        <StatusBar backgroundColor="black" />
        <Stack.Navigator>
          {user === true ? (
            <>
              <Stack.Screen
                name="BottomTab"
                component={BottomTab}
                options={{headerShown: false}}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="AuthModule"
                component={AuthModule}
                options={{headerShown: false}}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
});

export default App;
