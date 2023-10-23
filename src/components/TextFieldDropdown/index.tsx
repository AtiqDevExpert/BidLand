import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {SearchIcon} from '../../Assets/SVG/Svg';
import {Text, View, TouchableOpacity} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const TextFieldDropdown: React.FC<any> = ({onPress}) => {
  const [searchData, setSearchData] = useState<any>({
    placeholder: 'Search Data',
    name: 'Jawad Ali',
    gmail: 'Jawad123@gmail.com',
  });
  const [items1, setItems1] = useState([
    { label: '2022', value: 1 },
    { label: '2023', value: 2 },
    { label: '2024', value: 3 },
    { label: '2025', value: 4 },
  ]);
  const [open1, setOpen1] = useState(false);

  const [value1, setValue1] = useState();
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{
          // backgroundColor: 'red',
          flexDirection: 'row',
          borderWidth: 1,
          borderRadius: 10,
          borderColor: '#D9D9D9',
          height: 65,
          width: '100%',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            position: 'absolute',
            top: -10,
            left: 9,
            zIndex: 1,
            marginHorizontal: 10,
            paddingHorizontal: 5,
          }}>
          <Text style={{fontSize: 13, color: '#0277FA'}}>Property Manager Percentage </Text>
        </View>
        <View style={{
          justifyContent: 'center', 
          // marginHorizontal: 25, 
          // backgroundColor:'green',
        width:"100%"
        
        }}>
          <DropDownPicker
                  disabled={false}
                  open={open1}
                  value={value1}
                  items={items1}
                  setOpen={setOpen1}
                  setValue={setValue1}
                  setItems={setItems1}
                  placeholder="Select Tenure Year"
                  multiple={false}
                  showArrowIcon={true}
                  showTickIcon={false}
                  textStyle={styles.dropDownTextStyle}
                  dropDownContainerStyle={styles.dropDownContainer}
                  style={styles.dropDownMainStyle}
                />
        </View>

      </TouchableOpacity>
    </>
  );
};

export default TextFieldDropdown;
