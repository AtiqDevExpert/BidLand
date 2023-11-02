import {View, Text} from 'react-native';
import React from 'react';
import {StripeProvider} from '@stripe/stripe-react-native';
import Payment from '../../../../components/PaymentOnStripe/Payment';
export default function PaymentScreen({route}) {
  const {price} = route.params;

  return (
    <StripeProvider
      publishableKey="pk_test_51Nq98VKzlwySXelsLW0RjGYfpEbD6O5rhl3XhQO8sWLMGeVGevtYF2xX5Iyn0QUDpIDaHrJrqeZzwFgUsuDUaP4L00O6fN4K0Z"
      urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <Payment price={price} />
    </StripeProvider>
  );
}
