import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  NewPropertySocietyCharges,PlusIcon
} from '../../Assets/SVG/Svg';

export const IconButton = ({
  disabled,
  text,
  marginBottom,
  fontWeight,
  fontSize,
  marginHorizontal,
  backgroundColor,
  onPress,
  marginTop,
  color,
  elevation,
  flex,
  height,
  width,
  borderRadius,
  borderWidth,
  borderColor,
  onPressIn,
  fill,stroke
}) => {
  // console.log(borderColor)

  return (
    <TouchableOpacity
      disabled={disabled}
      onPressIn={onPressIn}
      onPress={onPress}
     
      style={{
        marginBottom: marginBottom,
        marginHorizontal: marginHorizontal,
        flex: flex,
        alignSelf: 'center',
        backgroundColor: backgroundColor,
        borderWidth: borderWidth,
        height: height,
        width: width,
        borderRadius: borderRadius,
        justifyContent: 'center',
        alignItems:"center",
        marginTop: marginTop,
        elevation: elevation,
        borderColor: '#0277FA',
      }}>
      <View style={{flexDirection:"row", alignItems: "center", justifyContent: "center"}}>
      <PlusIcon 
      style={{height:20, width:20, marginHorizontal:0}}
      fill={fill}
      stroke={stroke}
      />
      <Text
        style={{
          color: color,
          fontSize: fontSize,
          textAlign: 'center',
          fontWeight: fontWeight,
        }}>
        {text}
      </Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
