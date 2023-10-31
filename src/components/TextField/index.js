import React, {Children, useEffect, useRef, useState} from 'react';
import styles from './styles';
import {
  Text,
  TextInput,
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';

const TextField = props => {
  const {
    label,
    errorText,
    value,
    style,
    onBlur,
    onFocus,
    secure,
    editable,
    keyboardType,
    Children,
    ...restOfProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef(null);
  const focusAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(focusAnim, {
      toValue: isFocused || !!value ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    }).start();
  }, [focusAnim, isFocused, value]);

  let color = isFocused ? '#000' : '#D9D9D9';
  if (errorText) {
    color = '#B00020';
  }

  return (
    <>
      <View style={style}>
        <TextInput
          style={[styles.input, {borderColor: `#D9D9D9`}]}
          ref={inputRef}
          editable={editable}
          {...restOfProps}
          value={value}
          placeholder={label}
          selectionColor="#000"
          secureTextEntry={secure}
          onBlur={event => {
            setIsFocused(false);
            onBlur?.(event);
          }}
          onFocus={event => {
            setIsFocused(true);
            onFocus?.(event);
          }}
          placeholderTextColor="#000"
          keyboardType={keyboardType}
        />

        <TouchableWithoutFeedback
          onPress={() => {
            inputRef.current?.focus();
          }}>
          <Animated.View
            style={[
              styles.labelContainer,
              {
                transform: [
                  {
                    scale: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, 0.75],
                    }),
                  },
                  {
                    translateY: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [24, -12],
                    }),
                  },
                  {
                    translateX: focusAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [16, 0],
                    }),
                  },
                ],
              },
            ]}>
            <Text
              style={[
                styles.label,
                {
                  color,
                },
              ]}>
              {label}
              {errorText ? '*' : ''}
            </Text>
          </Animated.View>
        </TouchableWithoutFeedback>
        {!!errorText && <Text style={styles.error}>{errorText}</Text>}
      </View>
    </>
  );
};

export default TextField;
