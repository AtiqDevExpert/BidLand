import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useRef} from 'react';
import TextField from '../../../../components/TextField/index';
import IconButton from '../../../../components/Button/iconButton';
import Button from '../../../../components/Button/button';
import styles from './styles';
import {Colors} from '../../../../constants/Colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import CheckBox from '@react-native-community/checkbox';
import {BackIcon} from '../../../../Assets/SVG/Svg';
import {
  NewPropertyPlotIcon,
  NewPropertyOthers,
  NewPropertyTransFee,
  NewPropertySocietyCharges,
} from '../../../../Assets/SVG/Svg';
const {width, height} = Dimensions.get('window');
import {Dimensions} from 'react-native';
import StepIndicatorComponent from '@components/stepIndicator/StepIndicatorComponent';
import SmallBottomSheet from '@components/BottomSheet/SmallBottomSheet';
import SearchClientModal from '@components/SearchClientModal';
//component containing the view of Login screen
const NewProperty = ({navigation}) => {
  const modalizeRef = useRef(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  var remaining = height - 130;

  const [valuee, setValuee] = useState(1);
  var radio_props = [
    {label: 'Yes', value: 0},
    {label: 'No', value: 1},
  ];
  const [date, setDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(true);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log(date);
    var d = date.toISOString().slice(0, 10);
    setDate(d);
  };

  const [purchaseDateValue, setPurchaseDateValue] = useState('');
  const [purchaseDateError, setPurchaseDateError] = useState(null);

  const [societyValue, setSocietyValue] = useState('');
  const [societyError, setSocietyError] = useState(null);

  const [plotNoValue, setPlotNoValue] = useState('');
  const [plotNoError, setPlotNoError] = useState(null);

  const [plotDimensionValue, setPlotDimensionValue] = useState('');
  const [plotDimensionError, setPlotDimensionError] = useState(null);

  const [plotAreaValue, setPlotAreaValue] = useState('');
  const [plotAreaError, setPlotAreaError] = useState(null);

  const [plotPriceValue, setPlotPriceValue] = useState('');
  const [plotPriceError, setPlotPriceError] = useState(null);

  const [transferFeeValue, setTransferFeeValue] = useState('');
  const [transferFeeError, setTransferFeeError] = useState(null);

  const [societyFeeValue, setSocietyFeeValue] = useState('');
  const [societyFeeError, setSocietyFeeError] = useState(null);

  const [othersChargesValue, setOthersChargesValue] = useState('');
  const [othersChargesError, setOthersChargesError] = useState(null);

  const [realestateShareValue, setrealestateShareValue] = useState('');
  const [realestateShareError, setrealestateShareError] = useState(null);

  //  Bootom sheet Hook
  const [addClientAmountError, setAddClientAmountError] = useState(null);
  const [addClientAmountValue, setAddClientAmountValue] = useState('');

  const [passwordError, setPasswordError] = useState(null);
  const [username, setUsername] = useState('');

  const [toggleCheckBox, setToggleCheckBox] = useState < any > false;
  const [isModalVisible, setModalVisible] = useState < any > true;
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

  const btndata = [
    {
      name: 'Jawad ',
      persentage: '40%',
    },
    {
      name: 'aSAD Ahmad',
      persentage: '30%',
    },
    {
      name: 'Nabeel Ahmad',
      persentage: '10%',
    },
    {
      name: 'Alipaki Ahmad',
      persentage: '50%',
    },
    {
      name: 'Jawad Ahmad',
      persentage: '10%',
    },
    {
      name: 'Jawad Ahmad',
      persentage: '30%',
    },
    {
      name: 'Jawad Ahmad',
      persentage: '40%',
    },
    {
      name: 'Jawad Ahmad',
      persentage: '10%',
    },
    {
      name: 'Jawad Ahmad',
      persentage: '20%',
    },
  ];

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

  const clientModalopen = () => {
    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
    if (isModalVisible == false) {
      refRBSheet?.current.close();
    } else {
      refRBSheet?.current.open();
    }
  };

  const openlistOfPlotsScreen = () => {
    navigation.navigate('listOfPlots');
  };

  const refRBSheet = useRef();
  const rbsheetOpen = () => {
    refRBSheet?.current.open();
  };

  const rbsheetClose = () => {
    refRBSheet.current.Close();
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
            <Text style={styles.text}>Add New Property </Text>
            <ScrollView>
              <View style={styles.whitebackground}>
                <>
                  <View style={styles.nPropertydummy}>
                    <View style={styles.nPropertydummy1}>
                      <Text style={styles.totalAmount}>
                        Total : 20,000,000/- PKR
                      </Text>
                    </View>
                    <View style={styles.nPropertydummyChild1}>
                      <View style={styles.nPropertydummyChild2}>
                        <NewPropertyPlotIcon style={styles.logo} />
                        <Text style={styles.pricesection}>Plot Price</Text>
                      </View>
                      <View style={styles.nPropertydummyChild3}>
                        <Text
                          style={[styles.bluePrice, {marginHorizontal: 20}]}>
                          18,500,000/-
                        </Text>
                      </View>
                    </View>
                    <View style={styles.nPropertydummyChild1}>
                      <View style={styles.nPropertydummyChild2}>
                        <NewPropertyTransFee style={styles.logo} />
                        <Text style={styles.pricesection}>Transaction Fee</Text>
                      </View>
                      <View style={styles.nPropertydummyChild3}>
                        <Text
                          style={[styles.bluePrice, {marginHorizontal: 20}]}>
                          150,000/-
                        </Text>
                      </View>
                    </View>
                    <View style={styles.nPropertydummyChild1}>
                      <View style={styles.nPropertydummyChild2}>
                        <NewPropertySocietyCharges style={styles.logo} />
                        <Text style={styles.pricesection}>Society Charges</Text>
                      </View>
                      <View style={styles.nPropertydummyChild3}>
                        <Text
                          style={[styles.bluePrice, {marginHorizontal: 20}]}>
                          50,000/-
                        </Text>
                      </View>
                    </View>
                    <View style={styles.nPropertydummyChild1}>
                      <View style={styles.nPropertydummyChild2}>
                        <NewPropertyOthers style={styles.logo} />
                        <Text style={styles.pricesection}>Others</Text>
                      </View>
                      <View style={styles.nPropertydummyChild3}>
                        <Text
                          style={[styles.bluePrice, {marginHorizontal: 20}]}>
                          00/-
                        </Text>
                      </View>
                    </View>
                  </View>
                </>

                <>
                  <View style={styles.radioButton}>
                    <View>
                      <Text style={styles.normalbigText}>
                        Its My Own Proeprty:
                      </Text>
                    </View>
                    <View style={{justifyContent: 'center'}}>
                      <RadioForm
                        radio_props={radio_props}
                        initial={valuee}
                        buttonSize={10}
                        formHorizontal={true}
                        onPress={value => setValuee(value)}
                        labelStyle={{marginHorizontal: 10}}
                      />
                    </View>
                  </View>
                </>
                <>
                  <Text style={styles.bigText}>Purchase Plot</Text>
                  <View style={styles.dummy}>
                    <View style={styles.input}>
                      <TextField
                        editable={true}
                        value={societyValue}
                        label="Society"
                        errorText={societyError}
                        onChangeText={text => setSocietyValue(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        editable={true}
                        value={plotNoValue}
                        label="Plot No"
                        errorText={plotNoError}
                        onChangeText={text => setPlotNoValue(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        editable={true}
                        value={plotDimensionValue}
                        label="Plot Dimension"
                        errorText={plotDimensionError}
                        onChangeText={text => setPlotDimensionValue(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        editable={true}
                        value={plotAreaValue}
                        label="Plot Area"
                        errorText={plotAreaError}
                        onChangeText={text => setPlotAreaValue(text)}
                        secure={false}
                      />
                    </View>
                    <View style={styles.input}>
                      <TextField
                        editable={true}
                        value={plotPriceValue}
                        label="Price"
                        errorText={plotPriceError}
                        onChangeText={text => setPlotPriceValue(text)}
                        secure={false}
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
                        onValueChange={newValue => setToggleCheckBox(newValue)}
                      />
                    </View>
                    <Text style={styles.mediumText}>Additional Charges</Text>
                  </View>

                  {toggleCheckBox == true ? (
                    <>
                      <View style={styles.additionalCharges}>
                        <View style={styles.input}>
                          <TextField
                            editable={true}
                            value={transferFeeValue}
                            label="Transfer Fee"
                            errorText={transferFeeError}
                            onChangeText={text => setTransferFeeValue(text)}
                            secure={false}
                          />
                        </View>
                        <View style={styles.input}>
                          <TextField
                            editable={true}
                            value={societyFeeValue}
                            label="Society Fee"
                            errorText={societyFeeError}
                            onChangeText={text => setSocietyFeeValue(text)}
                            secure={false}
                          />
                        </View>
                        <View style={styles.input}>
                          <TextField
                            editable={true}
                            value={othersChargesValue}
                            label="Other Charges"
                            errorText={othersChargesError}
                            onChangeText={text => setOthersChargesValue(text)}
                            secure={false}
                          />
                        </View>
                      </View>
                    </>
                  ) : null}
                </>

                {valuee == 1 ? (
                  <>
                    <View>
                      <>
                        <Text style={styles.bigText}>Cash Flow Details</Text>
                        <View style={styles.dummy}>
                          <View style={styles.input}>
                            <TextField
                              editable={true}
                              value={realestateShareValue}
                              label="Property Manager Share"
                              errorText={realestateShareError}
                              onChangeText={text =>
                                setrealestateShareValue(text)
                              }
                              secure={false}
                            />
                          </View>
                        </View>
                      </>

                      <View
                        style={{
                          flex: 1,
                          //backgroundColor:"red",
                          marginHorizontal: 20,
                          marginVertical: 10,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          flexWrap: 'wrap',
                          width: '90%',
                        }}>
                        {btndata.map((item, index) => {
                          return (
                            <>
                              <View
                                style={{
                                  backgroundColor: '#B8D7FB',
                                  borderRadius: 30,
                                  width: '30%',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  marginVertical: 5,
                                }}>
                                <Text
                                  style={{
                                    marginTop: 5,
                                    fontSize: 12,
                                    fontWeight: '400',
                                    color: '#033C7B',
                                  }}>
                                  {item.name}
                                </Text>
                                <Text
                                  style={{
                                    marginBottom: 5,
                                    fontSize: 12,
                                    fontWeight: '400',
                                    color: '#033C7B',
                                  }}>
                                  {item.persentage}
                                </Text>
                              </View>
                            </>
                          );
                        })}
                      </View>

                      <View style={styles.addclient}>
                        <IconButton
                          text={'Add More'}
                          color={Colors.buttonborderColor}
                          fontSize={12}
                          height={40}
                          width={'32%'}
                          backgroundColor={Colors.white}
                          marginBottom={10}
                          //onPress={onOpen}
                          borderWidth={1}
                          borderRadius={20}
                          fill={Colors.darkPrimery}
                          stroke={Colors.darkPrimery}
                          onPress={rbsheetOpen}
                        />
                      </View>
                    </View>
                  </>
                ) : null}

                <View style={styles.buttonView}>
                  <Button
                    text={'Purchase'}
                    color={Colors.buttonborderColor}
                    fontSize={15}
                    height={50}
                    width={'90%'}
                    backgroundColor={Colors.white}
                    marginBottom={80}
                    onPress={showDatePicker}
                    borderWidth={1}
                    borderRadius={10}
                    // onPress={openlistOfPlotsScreen}
                  />
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      <View>
        {/* Bootom Sheet  */}
        <>
          <RBSheet
            ref={refRBSheet}
            keyboardAvoidingViewEnabled={false}
            closeOnDragDown={true}
            closeOnPressMask={false}
            dragFromTopOnly={true}
            customStyles={{
              wrapper: {backgroundColor: 'rgba(0,0,0,0.4)'},
              draggableIcon: {backgroundColor: '#D7DADF'},
              container: {
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                backgroundColor: '#FFFFFF',
                height: '47%',
              },
            }}>
            <SmallBottomSheet
              valuee={addClientAmountValue}
              errorText={addClientAmountError}
              onChangeText={setAddClientAmountValue}
              touchonPress={clientModalopen}
              rbsheetClose={rbsheetClose}
            />
          </RBSheet>
        </>

        {/* Search Client Modal */}
        <>
          <SearchClientModal
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            isVisible={clientModalopen}
          />
        </>

        {/* Search Client Modal
          <>
            <SetupCompleteModal
            ModalLogo={ModalLogo}
            modalText1={"Setup Complete!"}
            modalText2={"Thanks to fill out all info you profile setup has been completed click to view your Dashboard"}
            modalButton={"Go To Dashboard"}
            />
        </> */}
      </View>
    </SafeAreaView>
  );
};
export default NewProperty;
