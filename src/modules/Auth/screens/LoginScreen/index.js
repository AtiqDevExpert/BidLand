import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TextField from '../../../../components/TextField/index';
import Button from '../../../../components/Button/button';
import TransparentBtn from '../../../../components/TransparentBtn/transparentBtn';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import {Login_Request} from '../../../../utils/API/Requests';
const Login = () => {
  const navigation = useNavigation();
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [loading, setLoading] = useState(false);
  const gotoForgotPassword = () => {
    navigation.navigate('forgotpassword');
  };
  const SubmitLogin = async () => {
    setLoading(true);
    let body = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(body);
    if (!body.email.includes('@') || body.password.length < 8) {
      alert(
        'Invalid Credential! Please check your email has @ and password should be 8 or greater than 8 characters',
      );
      setLoading(false);
    } else {
      try {
        let response = await Login_Request(body);
        console.log('Login response ==== > ', response);
        if (response) {
          await AsyncStorage.setItem(
            'USER_INFO',
            JSON.stringify(response.user),
          );
          await AsyncStorage.setItem('USER_TOKEN', response.token);
          Toast.show('User Login Successfully', Toast.LONG);
          navigation.navigate('BottomTab');
          setLoading(false);
        }
      } catch (error) {
        console.error('Error Login up:', error);
        setLoading(false);
      }
    }
  };

  const gotoSignUp = () => {
    navigation.navigate('signup');
  };

  return (
    <SafeAreaView style={styles.mainView}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../../../../Assets/Images/background2.jpg')}>
        <View pointerEvent={loading ? 'none' : 'auto'} style={styles.dummyView}>
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
                    {loading ? (
                      <View
                        style={{
                          alignSelf: 'center',
                          backgroundColor: Colors.black,
                          height: 50,
                          width: '90%',
                          borderRadius: 10,
                          justifyContent: 'center',

                          borderColor: '#000',
                        }}>
                        <ActivityIndicator size="small" color={Colors.white} />
                      </View>
                    ) : (
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
                      </>
                    )}

                    <View style={styles.dontaccountview}>
                      <Text
                        style={{
                          color: 'black',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>
                        Don’t have an Account ?
                      </Text>
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
