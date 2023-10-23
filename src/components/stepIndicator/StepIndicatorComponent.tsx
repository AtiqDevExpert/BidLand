/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import {Colors} from '../../constants/Colors'

const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 1,
  currentStepStrokeWidth: 1,
  stepStrokeWidth: 1,
  stepStrokeUnFinishedColor: Colors.darkPrimery,
  stepStrokeCurrentColor: Colors.darkPrimery,
  separatorFinishedColor: Colors.darkPrimery,
  separatorUnFinishedColor: Colors.darkGrey,
  stepIndicatorFinishedColor: Colors.darkPrimery,
  stepIndicatorUnFinishedColor: Colors.white,
  stepIndicatorCurrentColor: Colors.darkPrimery,
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: Colors.white,
  stepIndicatorLabelFinishedColor: Colors.white,
  stepIndicatorLabelUnFinishedColor: Colors.darkPrimery,
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#4aae4f',
};







export default function StepIndicatorComponent() {
  const [currentPage, setCurrentPage] = React.useState<number>(0);

  const onStepPress = (position: number) => {
    setCurrentPage(position);
  };

 

  
  const renderLabel = ({
    position,
    label,
    currentPosition,
  }: {
    position: number;
    stepStatus: string;
    label: string;
    currentPosition: number;
  }) => {
    return (
      <Text
        style={
          position === currentPosition
            ? styles.stepLabelSelected
            : styles.stepLabel
        }
      >
        {label}
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.stepIndicator}>
        <StepIndicator
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          labels={['Property Setup', 'Client', 'Plots']}
          renderLabel={renderLabel}
          stepCount={3}
          onPress={onStepPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  stepIndicator: {
    marginVertical: 10,
  },
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepLabel: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: Colors.textblack,
  },
  stepLabelSelected: {
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
    color: Colors.textblack,
  },
});