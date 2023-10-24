import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar, Modal, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import AuthModule from './modules/Auth/navigation/index';
import {LogBox} from 'react-native';
import DrawerNavigator from './navigator/DrawerNavigation/DrawerNavigation';

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [user, setUser] = useState(false);
  return (
    <SafeAreaView style={styles.mainView}>
      <NavigationContainer>
        <StatusBar backgroundColor="black" />
        <Stack.Navigator>
          {user === true ? (
            <>
              <Stack.Screen
                name="Drawer"
                component={DrawerNavigator}
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
