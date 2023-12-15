import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StripeProvider} from '@stripe/stripe-react-native';
import Payment from '../../../../components/PaymentOnStripe/Payment';
import {Colors} from '../../../../constants/Colors';

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
      <View style={{flex: 1, backgroundColor: '#fff'}}>
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
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 50,
            backgroundColor: '#fff',
          }}>
          <View
            style={{
              maxWidth: '70%',
              padding: 20,
              marginVertical: 5,
              borderRadius: 8,
              backgroundColor: '#f0f0f0',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: Colors.black}}>
              {'Your Total Payable Amount ' + ' '}
              <Text style={{fontWeight: 'bold'}}>PKR-{price}</Text>
            </Text>
          </View>
        </View>

        {/* Payment Component */}
        <Payment price={price} />
      </View>
    </StripeProvider>
  );
}
