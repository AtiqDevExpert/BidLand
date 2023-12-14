import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StripeProvider} from '@stripe/stripe-react-native';
import Payment from '../../../../components/PaymentOnStripe/Payment';

export default function PaymentScreen({route}) {
  const {price} = route.params;
  const navigation = useNavigation();

  const handleGoBack = () => {
    // Handle navigation or other logic to go back
    navigation.goBack();
  };

  return (
    <StripeProvider
      publishableKey="pk_test_51Nq98VKzlwySXelsLW0RjGYfpEbD6O5rhl3XhQO8sWLMGeVGevtYF2xX5Iyn0QUDpIDaHrJrqeZzwFgUsuDUaP4L00O6fN4K0Z"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <View style={{flex: 1}}>
        {/* Header */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 16,
            backgroundColor: '#000', // White background color
          }}>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
              marginLeft: 16,
              color: '#fff',
            }}>
            Check Out
          </Text>
          <View style={{width: 24}} />
        </View>

        {/* Payment Component */}
        <Payment price={price} />
      </View>
    </StripeProvider>
  );
}
