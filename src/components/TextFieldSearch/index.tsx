import React, {useEffect, useRef, useState} from 'react';
import styles from './styles';
import {SearchIcon} from '../../Assets/SVG/Svg';
import {Text, View, TouchableOpacity} from 'react-native';

const TextFieldSearch: React.FC<any> = ({onPress}) => {
  const [searchData, setSearchData] = useState<any>({
    placeholder: 'Search Data',
    name: 'Jawad Ali',
    gmail: 'Jawad123@gmail.com',
  });
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={{
          //backgroundColor: 'red',
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
            backgroundColor: 'white',
            position: 'absolute',
            top: -10,
            left: 9,
            zIndex: 1,
            marginHorizontal: 10,
            paddingHorizontal: 5,
          }}>
          <Text style={{fontSize: 13, color: '#0277FA'}}>Select Client</Text>
        </View>

        <View style={{justifyContent: 'center', marginHorizontal: 25}}>
          <Text style={{fontSize: 14, fontWeight: '400', color: '#263238'}}>
            {searchData.name}
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: '#263238'}}>
            {searchData.gmail}
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 15,
          }}>
          <SearchIcon style={{height: 30, width: 30}} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default TextFieldSearch;
