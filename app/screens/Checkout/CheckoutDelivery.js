import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { scale } from 'react-native-size-matters';
import SelectAble from '../../components/SelectAble';
import { deliveryTypes } from '../../utils/MockData';

export default function CheckoutDelivery({ navigation, dileveryMethod, setDileveryMethod }) {
  const [selectedAddress, setSelectedAddress] = useState("Standard Delivery")
  const onSelect = (item) => {
    setDileveryMethod(item.label)
  }
  return (
    <View style={{ paddingVertical: scale(20) }}>
      <FlatList
        data={deliveryTypes}
        renderItem={({ item, index }) => <SelectAble selected={dileveryMethod === item.label} onSelect={onSelect} item={item} key={index} />}
      />
    </View>
  );
}
