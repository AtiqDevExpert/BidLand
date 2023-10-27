import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const DoubleValueButton= ({
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
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: marginTop,
        elevation: elevation,
        borderColor: '#0277FA',
      }}>
      <Text
        style={{
          color: color,
          fontSize: fontSize,
          textAlign: 'center',
          fontWeight: fontWeight,
        }}>
        {' '}
        {text}
      </Text>
      <Text
        style={{
          color: color,
          fontSize: fontSize,
          textAlign: 'center',
          fontWeight: fontWeight,
        }}>
        {' '}
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default DoubleValueButton;
