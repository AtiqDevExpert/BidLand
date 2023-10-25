import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import TextField from '../../../../components/TextField/index';
import Button from '../../../../components/Button/button';
import TransparentBtn from '../../../../components/TransparentBtn/transparentBtn';

import styles from './styles';
import {Colors} from '../../../../constants/Colors';
//component containing the view of Login screen
import {useNavigation} from '@react-navigation/native';
const Login = () => {
  const navigation = useNavigation();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const gotoForgotPassword = () => {
    navigation.navigate('forgotpassword');
  };
  const SubmitLogin = () => {
    navigation.navigate('BottomTab');
  };

  const gotoSignUp = () => {
    navigation.navigate('signup');
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../../../../Assets/Images/background2.jpg')}>
        <View style={styles.dummyView}>
          <View style={styles.mainView1}>
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.bluebackground}>
                <Text style={styles.text}>Login Via Email</Text>

                <View style={styles.whitebackground}>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={emailValue}
                        label="Email"
                        onChangeText={text => {
                          setEmailValue(text);
                        }}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        value={passwordValue}
                        label="Password"
                        secure={true}
                        onChangeText={text => {
                          setPasswordValue(text);
                        }}
                      />
                    </View>
                    <View>
                      <View style={styles.Forgetpass}>
                        <TransparentBtn
                          text={'Forget Password?'}
                          color={Colors.black}
                          fontSize={16}
                          width={'45%'}
                          onPress={gotoForgotPassword}
                        />
                      </View>
                    </View>
                  </View>
                  <>
                    <Button
                      text={'Login'}
                      color={Colors.white}
                      fontSize={15}
                      height={50}
                      width={'90%'}
                      backgroundColor={Colors.black}
                      // onPress={() => navigation.navigate('otp')}
                      onPress={SubmitLogin}
                    />

                    <View style={styles.dontaccountview}>
                      <Text>Don’t have an Account?</Text>
                      <TransparentBtn
                        text={'SignUp'}
                        color={Colors.black}
                        fontSize={15}
                        width={'15%'}
                        onPress={gotoSignUp}
                      />
                    </View>
                  </>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Login;
