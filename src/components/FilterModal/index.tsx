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
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import Button from '../../components/Button/button';
import {Colors} from '../../constants/Colors';
import TextField from '@components/TextField';
import {
  CreateNewPasswordScreenLogo,
  CrossRedIcon,
  // ModalLogo,
} from '../../Assets/SVG/Svg';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
const FilterModal: React.FC<any> = ({
  modalText1,
  modalButton,
  onPress,
  modalText2,
  ModalLogo,
  isModalVisible,
  setModalVisible,
}) => {
  const showDatePickerFrom = () => {
    setDatePickerVisibilityFrom(true);
  };

  const hideDatePickerFrom = () => {
    setDatePickerVisibilityFrom(false);
  };

  const handleConfirmFrom = (date: any) => {
    console.log(date);
    var d = date.toISOString().slice(0, 10);
    setDateFrom(d);
    console.log(d);
  };

  const showDatePickerTo = () => {
    setDatePickerVisibilityTo(true);
  };

  const hideDatePickerTo = () => {
    setDatePickerVisibilityTo(false);
  };

  const handleConfirmTo = (date: any) => {
    console.log(date);
    var d = date.toISOString().slice(0, 10);
    setDateTo(d);
    console.log(d);
  };

  const navigation = useNavigation();
  // console.log("before trigger",plotNavigation);

  const filterButtonNavigation = () => {
   
    navigation.navigate('Plots');
    // console.log("after trigger",plotNavigation);
    
  }

  const [dateFrom, setDateFrom] = useState<any>();
  const [dateTo, setDateTo] = useState<any>();

  const [isDatePickerVisibleFrom, setDatePickerVisibilityFrom] =
    useState(false);
  const [isDatePickerVisibleTo, setDatePickerVisibilityTo] = useState(false);

  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any>(null);
  const [items, setItems] = useState<any>([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const [selectBlock, setSelectBlock] = React.useState<string>();
  const [priceStart, setPriceStart] = React.useState<string>();
  const [priceEnd, setPriceEnd] = React.useState<string>();

  const toggleModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modelMainView}>
          <TouchableOpacity style={styles.modelView1}>
            <CrossRedIcon onPress={toggleModal} style={styles.crossRedIcon} />
          </TouchableOpacity>
          <View style={styles.view1}>
            <Text style={styles.filter}>Filter</Text>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.view1}>
              <Text style={styles.text1}>Select Society</Text>

              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Select Society"
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
            </View>

            <View style={styles.view1}>
              <Text style={styles.text1}>Block</Text>
              <View style={styles.view11}>
                <TextInput
                  placeholder="Select Block"
                  style={styles.text3}
                  onChangeText={setSelectBlock}
                  value={selectBlock}
                />
              </View>
            </View>

            <View style={styles.view2}>
              <View style={{width: '48%'}}>
                <Text style={styles.text1}>Date From:</Text>
                <TouchableOpacity
                  onPress={showDatePickerFrom}
                  style={{
                    backgroundColor: '#F5F5F5',
                    borderRadius: 10,
                  }}>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisibleFrom}
                    mode="date"
                    onConfirm={handleConfirmFrom}
                    onCancel={hideDatePickerFrom}
                  />

                  <TextInput
                    placeholder="20-mar-2022"
                    style={styles.text3}
                    value={dateFrom}
                    editable={false}
                  />
                </TouchableOpacity>
              </View>
              <View style={{width: '48%'}}>
                <Text style={styles.text1}>Date To:</Text>
                <TouchableOpacity
                  onPress={showDatePickerTo}
                  style={styles.view13}>
                  <DateTimePickerModal
                    isVisible={isDatePickerVisibleTo}
                    mode="date"
                    onConfirm={handleConfirmTo}
                    onCancel={hideDatePickerTo}
                  />

                  <TextInput
                    placeholder="20-June-2022"
                    style={styles.text3}
                    value={dateTo}
                    editable={false}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.view9}>
              <Text style={styles.text1}>Price Range:</Text>
              <View style={styles.view12}>
                <View
                  style={{
                    width: '48%',
                    backgroundColor: '#F5F5F5',
                    borderRadius: 10,
                  }}>
                  <TextInput
                    placeholder="20000000"
                    style={styles.text3}
                    onChangeText={setPriceStart}
                    value={priceStart}
                  />
                </View>

                <View
                  style={{
                    width: '48%',
                    backgroundColor: '#F5F5F5',
                    borderRadius: 10,
                  }}>
                  <TextInput
                    placeholder="30000000"
                    style={styles.text3}
                    onChangeText={setPriceEnd}
                    value={priceEnd}
                  />
                </View>
              </View>
            </View>
          </ScrollView>

          <View style={styles.view1}>
            <Button
              text={'Apply'}
              color={Colors.white}
              fontSize={18}
              height={50}
              width={'50%'}
              backgroundColor={Colors.darkPrimery}
              onPressIn={filterButtonNavigation}

            />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default FilterModal;
