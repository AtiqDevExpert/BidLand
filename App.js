import 'react-native-gesture-handler';
import React from 'react';
import App from './src/App';
import {MenuProvider} from 'react-native-popup-menu';
const Base = () => {
  {
    return (
      <MenuProvider skipInstanceCheck={true} style={{flex: 1}}>
        <App />
      </MenuProvider>
    );
  }
};
export default Base;
