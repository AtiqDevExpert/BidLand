import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {
  CreateNewPasswordScreenLogo,
  ModalLogo,
  CrossRedIcon,
} from '../../../../Assets/Intro/SVG/Svg';
import React, {useEffect, useState, useRef} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import TextField from '../../../../components/TextField/index';
import Button from '../../../../components/Button/button';

import styles from './styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Colors} from '../../../../constants/Colors';
import CheckBox from '@react-native-community/checkbox';
import {Modalize} from 'react-native-modalize';
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
import StepIndicatorComponent from '@components/stepIndicator/StepIndicatorComponent';
import ListofClientCard from '@components/ListofClientCard/ListofClientCard';

import {BackIcon} from '../../../../Assets/SVG/Svg';
import IconButton from '@components/Button/iconButton';
import TextFieldDropdown from '@components/TextFieldDropdown';
import {TextInput} from 'react-native-gesture-handler';
//component containing the view of Login screen
const NewClient = ({navigation}) => {
  // const modalizeRef = useRef<Modalize>(null);
  const onOpen = () => {
    setApiCheck(true);
    modalizeRef.current?.open();
  };

  // var remaining = height - 130;
  var remaining = height - 130;
  const dat = [{}, {}, {}, {}];

  const [dateErrorhandle, setdateErrorhandle] = useState(false);
  const [EnddateErrorhandle, setEnddateErrorhandle] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState(null);
  const [emailValue, setEmailValue] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [cnic, setCnic] = useState('');
  const [cnicError, setCnicError] = useState(null);
  const [location, setLocation] = useState('');
  const [locationError, setLocationError] = useState(null);
  const [nationality, setNationality] = useState('');
  const [nationalityError, setNationalityError] = useState(null);
  const [totalInvestment, setTotalInvestment] = useState('');
  const [totalInvestmentError, setTotalInvestmentError] = useState(null);
  const [propertySharing, setPropertySharing] = useState('');
  const [propertySharingError, setPropertySharingError] = useState(null);
  const [pMPercentageProfit, setPMPercentageProfit] = useState('');
  const [pMPercentageProfitError, setPMPercentageProfitError] = useState(null);
  const [clientPercentageProfit, setClientPercentageProfit] = useState('');
  const [clientPercentageProfitError, setClientPercentageProfitError] =
    useState(null);
  const [pMPercentageLose, setPMPercentageLose] = useState(null);
  const [pMPercentageLoseError, setPMPercentageLoseError] = useState(null);
  const [clientPercentageLose, setClientPercentageLose] = useState(null);
  const [clientPercentageLoseError, setClientPercentageLoseError] =
    useState(null);
  const modalizeRef = useRef(null);

  const [image, setImage] = useState('');
  const [selecter, setSelecter] = useState(false);
  const [visible, setVisible] = useState(false);
  const [apiCheck, setApiCheck] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const [date, setDate] = useState('');
  const [dateError, setDateError] = useState(null);
  const [dateEnd, setDateEnd] = useState('');
  const [dateEndError, setDateEndError] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isDatePickerEndVisible, setDatePickerEndVisibility] = useState(false);
  const clientlistdatareducer = useSelector(
    state => state?.propertyReducer?.clientList,
  );
  const clientListCheck = useSelector(
    state => state?.propertyReducer?.clientListCheck,
  );

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showDateEndPicker = () => {
    setDatePickerEndVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const hideDateEndPicker = () => {
    setDatePickerEndVisibility(false);
  };

  const handleConfirm = date => {
    console.log(date);
    var d = date.toISOString().slice(0, 10);
    setDate(d);
    setDatePickerVisibility(false);
  };

  const handleEndDateConfirm = dateEnd => {
    console.log(dateEnd);
    var dENd = dateEnd.toISOString().slice(0, 10);
    setDateEnd(dENd);
    setDatePickerEndVisibility(false);
  };

  const progressStepsStyle = {
    activeStepIconBorderColor: '#0277FA',
    activeLabelColor: '#0277FA',
    activeStepNumColor: '#0277FA',
    activeStepIconColor: '#fff',
    completedStepIconColor: '#fff',
    completedProgressBarColor: '#0277FA',
    completedCheckColor: '#0277FA',
    borderWidth: 0,
    disabledStepNumColor: '##0277FA',
  };

  const clientDetail = [
    {
      personName: 'John Smith',
      plotcount: '5',
      Block: 'Block C',
      location: 'Plot 266, Block B H.B.F.C Society, Lahore, Punjab, Pakistan',
      totalInvestment: '50 Lacs',
    },
    {
      personName: 'John Aly',
      plotcount: '8',
      Block: 'Block B',
      location: 'Plot 266, Block B H.B.F.C Society, Lahore, Punjab, Pakistan',
      totalInvestment: '70 Lacs',
    },
    {
      personName: 'Smith Asad',
      plotcount: '7',
      Block: 'Block C',
      location: 'Plot 266, Block B H.B.F.C Society, Lahore, Punjab, Pakistan',
      totalInvestment: '10 Lacs',
    },
    {
      personName: 'Jawad Ahmed',
      plotcount: '5',
      Block: 'Block K',
      location: 'Plot 266, Block B H.B.F.C Society, Lahore, Punjab, Pakistan',
      totalInvestment: '60 Lacs',
    },
  ];
  const body = {
    name: name,
    email: emailValue,
    cnic: cnic,
    location: location,
    nationality: nationality,
    total_investment: totalInvestment,
    property_sharing: propertySharing,
    property_manager_percentage_profit: pMPercentageProfit,
    client_percentage_profit: clientPercentageProfit,

    property_manager_percentage_loss: pMPercentageLose,
    client_percentage_loss: clientPercentageLose,

    tenure_start_date: date,
    tenure_end_date: dateEnd,
    loss_sharing: toggleCheckBox,
  };
  const listofClient = () => {
    console.log('==========================> button working ');

    setdateErrorhandle(true);
    setEnddateErrorhandle(true);

    // ------- Name validation---------
    let validate = nameValidation(name);
    if (validate.valid == false) {
      setNameError(validate.errors);
      return;
    } else {
      setNameError('');
    }

    // -------Email validation---------
    let validateEmail = emailValidation(emailValue);
    if (validateEmail.valid == false) {
      setEmailError(validateEmail.errors);
      return;
    } else {
      setEmailError('');
    }

    // -------Cnic validation---------
    let validateCnic = cnicValidation(cnic);
    if (validateCnic.valid == false) {
      setCnicError(validateCnic.errors);
      return;
    } else {
      setCnicError('');
    }

    // -------Society Location validation---------
    let validateSocietyLocation = societyLocationValidation(location);
    if (validateSocietyLocation.valid == false) {
      setLocationError(validateSocietyLocation.errors);
      return;
    } else {
      setLocationError('');
    }

    // -------Nationality validation---------
    let validateNationality = nationalityValidation(nationality);
    if (validateNationality.valid == false) {
      setNationalityError(validateNationality.errors);
      return;
    } else {
      setNationalityError('');
    }

    // -------Total Investment validation---------
    let validateTotalInvestment = totalInvestmentValidation(totalInvestment);
    if (validateTotalInvestment.valid == false) {
      setTotalInvestmentError(validateTotalInvestment.errors);
      return;
    } else {
      setTotalInvestmentError('');
    }

    // -------Property Sharing validation---------
    let validatePropertySharing = sharingValidation(propertySharing);
    if (validatePropertySharing.valid == false) {
      setPropertySharingError(validatePropertySharing.errors);
      return;
    } else {
      setPropertySharingError('');
    }

    // -------Property Manager Persentage Profit validation---------
    let validatepMPercentageProfit = sharingValidation1(pMPercentageProfit);
    if (validatepMPercentageProfit.valid == false) {
      setPMPercentageProfitError(validatepMPercentageProfit.errors);
      return;
    } else {
      setPMPercentageProfitError('');
    }

    // -------Client Persentage Profit validation---------
    let validateclientPercentageProfit = sharingValidation(
      clientPercentageProfit,
    );
    if (validateclientPercentageProfit.valid == false) {
      setClientPercentageProfitError(validateclientPercentageProfit.errors);
      return;
    } else {
      setClientPercentageProfitError('');
    }

    // -------Lose Persentage Section Validation---------
    if (toggleCheckBox === true) {
      // -------Property Manager Persentage Lose validation---------
      let validatepMPercentageLose = sharingValidation3(pMPercentageLose);
      if (validatepMPercentageLose.valid == false) {
        setPMPercentageLoseError(validatepMPercentageLose.errors);
        return;
      } else {
        setPMPercentageLoseError('');
      }

      // -------Client Persentage Lose validation---------
      let validateclientPercentageLose =
        sharingValidation3(clientPercentageLose);
      if (validateclientPercentageLose.valid == false) {
        setClientPercentageLoseError(validateclientPercentageLose.errors);
        return;
      } else {
        setClientPercentageLoseError('');
      }
    }

    // -------Start Date validation---------
    let validateStartDate = dateValidation(date);
    if (validateStartDate.valid == false) {
      setDateError(validateStartDate.errors);
      return;
    } else {
      setDateError('');
    }

    // -------End Date validation---------
    let validateEndDate = dateValidation(dateEnd);
    if (validateEndDate.valid == false) {
      setDateEndError(validateEndDate.errors);
      return;
    } else {
      setDateEndError('');
    }

    dispatch(addClientRequest({postData: body}));
  };
  const buttonTextStyle = {
    color: '#fff',
    // fontWeight: 'bold',
  };

  const onNextStep = () => {
    navigation.navigate('addNewClient');
  };

  const onPrevStep = () => {
    console.log('called previous step');
  };

  const onSubmitSteps = () => {
    console.log('called on submit step.');
  };
  const defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center',
    },
  };
  const goBack = () => {
    navigation.goBack();
  };

  const takePhotoFromCamera = () => {
    setVisible(false);

    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      if (selecter === false) {
        setImage(image.path);
      } else {
        Alert.alert('Error1');
      }
    });
  };
  const gobacktoclient = () => {
    modalizeRef.current?.close();
  };

  const takePhotoFromGallery = () => {
    setVisible(false);
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      if (selecter === false) {
        setImage(image.path);
      } else {
        Alert.alert('Error2');
      }
    });
  };

  const onClear = () => {
    setImage('');
  };

  const addNewProperty = () => {
    navigation.navigate('addNewProperty');
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <TouchableOpacity onPress={goBack} style={styles.buttonTouch}>
        <BackIcon onPress={goBack} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.indicator}>
        <StepIndicatorComponent />
      </View>
      <View style={styles.dummyView}>
        <View style={styles.mainView1}>
          <View style={styles.bluebackground}>
            <Text style={styles.text}>Add New Client</Text>
            <ScrollView>
              <View style={styles.whitebackground}>
                <View style={styles.dummy}>
                  <View style={styles.input}>
                    <TextField
                      value={name}
                      label="Name"
                      errorText={nameError}
                      onChangeText={text => setName(text)}
                      secure={false}
                    />
                  </View>
                  <View style={styles.input}>
                    <TextField
                      value={emailValue}
                      label="Email"
                      errorText={emailError}
                      onChangeText={text => setEmailValue(text)}
                      secure={false}
                    />
                  </View>
                </View>
                <>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={cnic}
                        label="CNIC"
                        errorText={cnicError}
                        onChangeText={text => setCnic(text)}
                        secure={false}
                        keyboardType="number-pad"
                      />
                    </View>
                  </View>
                </>
                <>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={location}
                        label="Location"
                        errorText={locationError}
                        onChangeText={text => setLocation(text)}
                        secure={false}
                      />
                    </View>
                  </View>
                </>
                <>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={nationality}
                        label="Nationality"
                        errorText={nationalityError}
                        onChangeText={text => setNationality(text)}
                        secure={false}
                      />
                    </View>
                  </View>
                </>

                <>
                  <Text style={styles.bigText}>Investment</Text>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={totalInvestment}
                        label="Total Investment"
                        errorText={totalInvestmentError}
                        onChangeText={text => setTotalInvestment(text)}
                        secure={false}
                        keyboardType="number-pad"
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        value={propertySharing}
                        label="Property Sharing"
                        errorText={propertySharingError}
                        onChangeText={text => {
                          console.log(text);
                          setPropertySharing(text);
                          // setNameper(text);
                        }}
                        secure={false}
                        keyboardType="number-pad"
                      />
                    </View>
                  </View>
                </>
                <>
                  <Text style={styles.bigText}>Profit Sharing</Text>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        value={pMPercentageProfit}
                        label="Property Manager Percentage"
                        errorText={pMPercentageProfitError}
                        onChangeText={text => {
                          setPMPercentageProfit(text);
                        }}
                        secure={false}
                        keyboardType="number-pad"
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        value={clientPercentageProfit}
                        label="Client Percentage"
                        errorText={clientPercentageProfitError}
                        onChangeText={text => setClientPercentageProfit(text)}
                        secure={false}
                        keyboardType="number-pad"
                      />
                    </View>
                  </View>
                </>
                <>
                  <View style={styles.checkBox}>
                    <View style={{justifyContent: 'center'}}>
                      <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={newValue => {
                          setToggleCheckBox(newValue);
                          setPMPercentageLose(null);
                          setClientPercentageLose(null);
                        }}
                      />
                    </View>
                    <Text style={styles.bigText}>Loss Sharing</Text>
                  </View>

                  {toggleCheckBox == true ? (
                    <>
                      <View style={styles.dummy}>
                        <View style={styles.input}>
                          <TextField
                            value={pMPercentageLose}
                            label="Property Manager Percentage"
                            errorText={pMPercentageLoseError}
                            onChangeText={text => setPMPercentageLose(text)}
                            secure={false}
                            keyboardType="number-pad"
                          />
                        </View>
                        <View style={styles.input}>
                          <TextField
                            value={clientPercentageLose}
                            label="Client Percentage"
                            errorText={clientPercentageLoseError}
                            onChangeText={text => setClientPercentageLose(text)}
                            secure={false}
                            keyboardType="number-pad"
                          />
                        </View>
                      </View>
                    </>
                  ) : null}
                </>
                <>
                  <Text style={styles.bigText}>Agreement Tenure</Text>
                  <View style={styles.dummy}>
                    {/* <TouchableOpacity onPress={showDatePicker}>
                      <View style={styles.input}>
                        <TextField
                          editable={false}
                          value={date}
                          label="Purchase Date"
                          onChangeText={date => {
                            setDate(date);
                          }}
                          secure={false}
                        />
                      </View>
                    </TouchableOpacity> */}

                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                    />

                    <TouchableOpacity
                      onPress={showDatePicker}
                      style={styles.dateView1}>
                      <View style={styles.dateView2}>
                        <Text style={styles.dateText1}>Start Date </Text>
                      </View>

                      <View style={styles.dateView3}>
                        <Text style={styles.dateText2}> {date} </Text>
                      </View>
                    </TouchableOpacity>
                    {dateErrorhandle == true ? (
                      date === '' ? (
                        <Text style={{color: '#B00020'}}> {dateError} </Text>
                      ) : null
                    ) : null}
                  </View>

                  <View style={styles.dummy}>
                    <DateTimePickerModal
                      isVisible={isDatePickerEndVisible}
                      mode="date"
                      onConfirm={handleEndDateConfirm}
                      onCancel={hideDateEndPicker}
                    />

                    <TouchableOpacity
                      onPress={showDateEndPicker}
                      style={styles.dateView1}>
                      <View style={styles.dateView2}>
                        <Text style={styles.dateText1}>End Date </Text>
                      </View>

                      <View style={styles.dateView3}>
                        <Text style={styles.dateText2}> {dateEnd} </Text>
                      </View>
                    </TouchableOpacity>
                    {dateErrorhandle == true ? (
                      dateEnd === '' ? (
                        <Text style={{color: '#B00020', marginBottom: 15}}>
                          {dateEndError}{' '}
                        </Text>
                      ) : null
                    ) : null}
                  </View>
                </>
                <View style={styles.buttonView}>
                  <Button
                    text={'Save'}
                    color={Colors.white}
                    fontSize={15}
                    height={50}
                    width={'90%'}
                    backgroundColor={Colors.darkPrimery}
                    marginBottom={80}
                    onPress={() => {
                      listofClient();
                      // onOpen();
                    }}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      {/* Modalize list of clients */}
      <>
        <Modalize
          snapPoint={remaining}
          ref={modalizeRef}
          modalStyle={{
            borderTopStartRadius: width * 0.09,
            borderTopEndRadius: width * 0.09,
          }}>
          <View style={styles.modalizeBluebackground}>
            <Text style={styles.text}>Lists of Clients</Text>
            <View style={styles.modalizeWhitebackground}>
              <View style={styles.mcView1}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  style={styles.mcScroolView}>
                  <FlatList
                    nestedScrollEnabled={true}
                    style={{
                      borderRadius: 20,
                    }}
                    data={clientlistdatareducer}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, index}) => {
                      return <ListofClientCard item1={item} />;
                    }}
                    keyExtractor={item => item.id}
                  />
                </ScrollView>

                <View style={styles.mcView1}>
                  <IconButton
                    text={'Add New Client'}
                    color={'#fff'}
                    fontSize={15}
                    height={50}
                    width={'100%'}
                    borderWidth={1}
                    backgroundColor={'#0277FA'}
                    onPress={
                      gobacktoclient
                      //   () => {
                      //   modalizeRef.current?.close();
                      // }
                    }
                    fill={Colors.white}
                    stroke={Colors.white}
                    borderRadius={10}
                  />

                  <Button
                    text={'Next'}
                    color={'#fff'}
                    fontSize={15}
                    height={50}
                    width={'100%'}
                    borderWidth={1}
                    marginTop={15}
                    //  marginBottom={10}
                    backgroundColor={'#0277FA'}
                    onPress={addNewProperty}
                  />
                </View>
              </View>
            </View>
          </View>
        </Modalize>
      </>
    </SafeAreaView>
  );
};
export default NewClient;
