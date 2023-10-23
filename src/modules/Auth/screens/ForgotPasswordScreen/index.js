import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import TextField from '../../../../components/TextField/index';
import Button from '../../../../components/Button/button';
import {ForgotPasswordScreenLogo} from '../../../../Assets/SVG/Svg';
const ForgotPassword = ({navigation}) => {
  const countdownRef = useRef(null);
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const sendCode = () => {
    navigation.navigate('createnewpassword');
    //  // -------Email validation---------
    //  let validate = emailValidation(value);
    //  if (validate.valid == false) {
    //    setError(validate.errors);
    //    return;
    //  } else {
    //    setError('');
    //  }
    //  const body ={
    //    email:value,
    //  }
    //  console.log("body-------------->",body)
    //  dispatch(otpRequest({otpData:body}));
  };
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={styles.view1}>
          <ForgotPasswordScreenLogo style={styles.logo} />
        </View>
        <View style={styles.view2}>
          <Text style={styles.forgetpassword}>Forget Password</Text>
          <Text style={styles.fgdiscription}>
            Please enter your email address{'\n'} to recieve verification code
          </Text>
        </View>
        <View style={styles.view3}>
          <View style={styles.bluebackground}>
            <Text style={styles.text}>Enter Your Email</Text>
            <View style={{}}>
              <Text></Text>
            </View>
            <View style={styles.whitebackground}>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginVertical: 30,
                }}>
                <View style={{marginVertical: 15}}>
                  <TextField
                    value={value}
                    label="Email"
                    errorText={error}
                    onChangeText={text => setValue(text)}
                  />
                </View>
                <View>
                  <Button
                    text={'Send Code'}
                    color={'#fff'}
                    fontSize={15}
                    height={50}
                    width={'100%'}
                    borderWidth={1}
                    marginTop={20}
                    // marginBottom={10}
                    backgroundColor={'#0277FA'}
                    onPress={sendCode}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
