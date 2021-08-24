import React, {useState} from 'react';

import {TouchableOpacity, Text} from 'react-native';
export const BorderButton = ({
  text,
  backgroundColor,
  borderColor,
  color,
  width,
  height,
  emoji,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        width: width,
        height: height,
        borderRadius: 30,
        paddingLeft: 10,
        borderWidth: 5,
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Text style={{fontSize: 20}}>{emoji}</Text>
      <Text style={{color: color, textAlign: 'center', width: width - 55}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
