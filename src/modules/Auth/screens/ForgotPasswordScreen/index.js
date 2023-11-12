import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Toast from 'react-native-simple-toast';
import {Colors} from '../../../../constants/Colors';
import TextField from '../../../../components/TextField/index';
import Button from '../../../../components/Button/button';
import {ForgotPasswordScreenLogo} from '../../../../Assets/SVG/Svg';
import {Forget_Password_Request} from '../../../../utils/API/Requests';
const ForgotPassword = ({navigation}) => {
  const [emailValue, setEmailValue] = useState('');

  const [loading, setLoading] = useState(false);
  const onForgetPassword = async () => {
    setLoading(true);
    const formattedEmailValue =
      emailValue.charAt(0).toLowerCase() + emailValue.slice(1);
    let body = {
      email: formattedEmailValue,
    };
    console.log('onForgetPassword ===>', body?.email);
    if (!body.email.includes('@')) {
      alert('Invalid Credential! Please check your email has @ ');
      setLoading(false);
    } else {
      try {
        let response = await Forget_Password_Request(body);
        console.log('forget password response ==== > ', response?.message);
        if (response) {
          Toast.show(response?.message, Toast.LONG);
          navigation.navigate('login');
          setLoading(false);
        }
      } catch (error) {
        Toast.show(error.message, Toast.LONG);
        setLoading(false);
      }
    }
  };
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../../../../Assets/Images/background2.jpg')}>
        <View style={styles.view3}>
          <View style={styles.whitebackground}>
            <View style={styles.view1}>
              <ForgotPasswordScreenLogo style={styles.logo} />
              <Text style={styles.forgetpassword}>Forget Password</Text>
              <Text style={styles.fgdiscription}>
                Please enter your email address{'\n'} to recieve verification
                code
              </Text>
            </View>

            <View
              style={{
                marginVertical: 30,
              }}>
              <View style={{marginVertical: 15, marginHorizontal: 15}}>
                <TextField
                  value={emailValue}
                  label="Email"
                  autoCapitalize={'none'}
                  onChangeText={text => setEmailValue(text)}
                />
              </View>
              <View style={{marginHorizontal: 15}}>
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
                        text={'Get Code'}
                        color={Colors.white}
                        fontSize={15}
                        height={50}
                        width={'90%'}
                        backgroundColor={Colors.black}
                        onPress={onForgetPassword}
                      />
                    </>
                  )}
                </>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ForgotPassword;
