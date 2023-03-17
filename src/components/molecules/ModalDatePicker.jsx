import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Colors from '../../constants/styles';
import Icon from '../atoms/Icon';

export default function DatePicker({
  data = {},
  onDateChange,
  placholder = 'Select Date',
}) {

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const showPicker = () => {
    setShowDatePicker(true);
  };

  const hidePicker = () => {
    setShowDatePicker(false);
  };

  const handleDateChange = (event, newDate) => {
    if (event.type === 'dismissed') {
      hidePicker();
      return;
    }
    setDate(newDate);
    onDateChange(newDate);
    hidePicker();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: 48,
      position: 'relative',
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 48,
      width: '100%',
      backgroundColor: Colors['white'],
      borderRadius: 4,
    },
    item: {
      fontSize: 16,
      color: Colors['fontBlack'],
      paddingLeft: 16,
    },
    icon: {
      paddingHorizontal: 16,
    },
  });

  const renderDatePicker = () => {
    return (
      <DateTimePicker
        value={date}
        mode={'date'}
        display="default"
        onChange={handleDateChange}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={showPicker}>
        <View style={styles.itemContainer}>
          <View style={styles.item}>
            <Text>{data.date ? data.date : date.toLocaleDateString()}</Text>
          </View>
          <View style={styles.icon}>
            <Icon name="calendar" size={24} color={Colors['fontGray']} />
          </View>
        </View>
      </TouchableOpacity>
      {showDatePicker && renderDatePicker()}
    </View>
  );
};