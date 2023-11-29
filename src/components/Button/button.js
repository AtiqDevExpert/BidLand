import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export const Button = ({
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
  padding,
  textPadding,
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
        borderColor: '#000',
        padding: padding,
      }}>
      <Text
        style={{
          color: color,
          fontSize: fontSize,
          textAlign: 'center',
          fontWeight: fontWeight,
          textPadding: textPadding,
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
