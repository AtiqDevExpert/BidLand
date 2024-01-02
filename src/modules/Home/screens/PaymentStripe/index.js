import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StripeProvider} from '@stripe/stripe-react-native';
import Payment from '../../../../components/PaymentOnStripe/Payment';
import {Colors} from '../../../../constants/Colors';

export default function PaymentScreen({route}) {
  const details = route.params;
  console.log('details', details);

  const navigation = useNavigation();

  const handleGoBack = () => {
    // Handle navigation or other logic to go back
    navigation.goBack();
  };

  return (
    <StripeProvider
      publishableKey="pk_test_51NO5Z9COYbX4EEUkrTs8Zb2tvXYstfc1aLzXCwlg1k9bOKy5BPuriLZAgCjMNmXkERdYyzwYEKz6P0OzF2IkVdjg00ly46twDk"
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
              <Text style={{fontWeight: 'bold'}}>PKR-{details.fixedPrice}</Text>
            </Text>
          </View>
        </View>

        {/* Payment Component */}
        <Payment details={route.params} />
      </View>
    </StripeProvider>
  );
}
