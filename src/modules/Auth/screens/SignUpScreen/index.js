import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import TextField from '../../../../components/TextField/index';
import Button from '../../../../components/Button/button';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import React, {useState} from 'react';
import {SignUp_Request} from '../../../../utils/API/Requests';
const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [role, setRole] = useState('user');

  const Signup = async () => {
    let finalUsername = name.replace(/\s+/g, '');
    let body = {
      username: finalUsername,
      email: emailValue,
      password: passwordValue,
      role: role,
      phone: phoneNumber,
    };
    if (!body?.email.includes('@') || body?.password.length < 8) {
      alert(
        'Invalid Credential! Please check your email has @ and passowrd should be 8 or greater than 8 characters',
      );
    } else {
      // let response = await SignUp_Request(body);

      Toast.show('User Registered Successfully', Toast.LONG);
      // console.log('🚀 ~ file: index.js:31 ~ Signup ~ response:', response);
    }
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'center'}}
        source={require('../../../../Assets/Images/house3.jpg')}>
        <View style={styles.dummyView}>
          <View style={styles.mainView1}>
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.bluebackground}>
                <View style={styles.whitebackground}>
                  <Text style={styles.text}>Sign Up</Text>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={name}
                        label="Name"
                        onChangeText={text => setName(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        value={phoneNumber}
                        label="Phone Number"
                        onChangeText={text => setPhoneNumber(text)}
                        secure={false}
                      />
                    </View>
                  </View>
                  <>
                    <View style={styles.dummy}>
                      <View style={styles.input}>
                        <TextField
                          editable={false}
                          value={role}
                          label="Role"
                          onChangeText={text => setRole(text)}
                          secure={false}
                        />
                      </View>
                    </View>
                  </>
                  <>
                    <View style={styles.dummy}>
                      <View style={styles.input}>
                        <TextField
                          value={emailValue}
                          label="Email"
                          onChangeText={text => setEmailValue(text)}
                          secure={false}
                        />
                      </View>
                      <View style={styles.input}>
                        <TextField
                          value={passwordValue}
                          label="Password"
                          onChangeText={text => setPasswordValue(text)}
                          secure={true}
                        />
                      </View>
                    </View>
                  </>

                  <>
                    <View style={styles.dummy}>
                      <Button
                        text={'Next'}
                        color={Colors.white}
                        fontSize={15}
                        height={50}
                        width={'100%'}
                        backgroundColor={Colors.black}
                        marginBottom={20}
                        onPress={Signup}
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
export default SignUp;
