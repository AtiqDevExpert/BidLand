import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
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
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../../../../Assets/Images/house3.jpg')}>
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
                // paddingHorizontal: 20,
                marginVertical: 30,
              }}>
              <View style={{marginVertical: 15, marginHorizontal: 15}}>
                <TextField
                  value={value}
                  label="Email"
                  errorText={error}
                  onChangeText={text => setValue(text)}
                />
              </View>
              <View style={{marginHorizontal: 15}}>
                <Button
                  text={'Send Code'}
                  color={Colors.white}
                  fontSize={15}
                  height={50}
                  width={'100%'}
                  borderWidth={1}
                  marginTop={20}
                  // marginBottom={10}
                  backgroundColor={Colors.black}
                  onPress={sendCode}
                />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default ForgotPassword;
