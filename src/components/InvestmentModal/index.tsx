import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {BackIcon, SearchIcon, TickIcon} from '../../Assets/SVG/Svg';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';

import Modal from 'react-native-modal';
import Button from '../Button/button';
import {Colors} from '../../constants/Colors';
import TextField from '@components/TextField';
import {
  CreateNewPasswordScreenLogo,
  CrossRedIcon,
  // ModalLogo,
} from '../../Assets/SVG/Svg';
import {Image} from 'react-native-svg';
import {DownIcon} from '@assets/SVG/SvgDashboard';
import {ScrollView} from 'react-native-gesture-handler';
import { add } from 'react-native-reanimated';

const InvestmentModal: React.FC<any> = ({
  modalText1,
  modalButton,
  onPress,
  modalText2,
  ModalLogo,
  isModalVisible,
  setModalVisible,
}) => {
  // const [isModalVisible, setModalVisible] = useState<boolean>(true);

  const [open, setOpen] = useState<boolean>(false);
  const [items, setItems] = useState<any>([
    {label: 'January', value: 'january'},
    {label: 'February', value: 'february'},
    {label: 'March', value: 'march'},
    {label: 'April', value: 'april'},
    {label: 'May', value: 'may'},
    {label: 'June', value: 'june'},
    {label: 'July', value: 'july'},
    {label: 'August', value: 'august'},
    {label: 'September', value: 'september'},
    {label: 'October', value: 'october'},
    {label: 'November', value: 'november'},
    {label: 'December', value: 'december'},
  ]);

  const [value, setValue] = useState<any>(null);
  const [monthError, setMonthError] = useState<any>("month not found");
  const [monthHandle, setMonthHandle] = useState<any>(false);

  
  const [enterPrice, setEnterPrice] = React.useState<string>("");
  const [enterPriceError, setEnterPriceError] = React.useState<string>("data not found ");
  const [enterPriceHandle, setEnterPriceHandle] = useState<boolean>(false);

  const add = () => {
    setMonthHandle(true);
    setEnterPriceHandle(true);

     // -------Month  validation---------


  }







  const toggleModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <Modal isVisible={isModalVisible} avoidKeyboard={false}>
        <View style={styles.modelMainView}>
          <TouchableOpacity style={styles.modelView1}>
            <CrossRedIcon onPress={toggleModal} style={styles.crossRedIcon} />
          </TouchableOpacity>

          <View style={styles.view1}>
            <Text style={styles.filter}>Add Investment</Text>
          </View>

          <View
            style={{
              // backgroundColor:"red",
              height: '65%',
            }}>
            <View style={[styles.view1]}>
              <Text style={styles.text1}>Select Month</Text>
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Select Month"
                placeholderStyle={{
                  color: '#A4A4A4',
                  fontWeight: '600',
                  fontSize: 16,
                }}
                style={{
                  backgroundColor: '#F5F5F5',
                  borderWidth: 0,
                  paddingVertical: 25,
                }}
              />
               { 
                      monthHandle == true?
                      value === null ? <Text style={{color:"#B00020"}}> {monthError} </Text>:null
                      :null  
                  }
            </View>
            

            <View style={styles.view1}>
              <Text style={styles.text1}>Investment</Text>
              <View style={styles.view11}>
                <TextInput
                  placeholder="Enter Price"
                  style={styles.text3}
                  onChangeText={setEnterPrice}
                  value={enterPrice}
                  />
                  </View>
                  { 
                      enterPriceHandle == true?
                      enterPrice === "" ? <Text style={{color:"#B00020"}}> {enterPriceError} </Text>:null
                      :null  
                  }
            </View>
          </View>

          <View style={styles.view1}>
            <Button
              text={'Add'}
              color={Colors.white}
              fontSize={18}
              height={50}
              width={'50%'}
              backgroundColor={Colors.darkPrimery}
              onPress={() =>{
                  add()
              }}
              
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default InvestmentModal;
