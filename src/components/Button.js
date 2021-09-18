import React from 'react';

import {TouchableOpacity, Text} from 'react-native';

export const EmojiButton = ({
  width,
  height,
  emoji,
  backgroundColor,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: backgroundColor,
          width: width,
          height: height,
          borderRadius: 30,
          alignItems: 'center',
        },
        style,
      ]}>
      <Text
        style={{
          fontSize: width / 2,
          height: '100%',
          textAlignVertical: 'center',
        }}>
        {emoji}
      </Text>
    </TouchableOpacity>
  );
};
export const BorderButton = ({
  text,
  backgroundColor,
  borderColor,
  color,
  width,
  height,
  emoji,
  style,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: backgroundColor,
          borderColor: borderColor,
          width: width,
          height: height,
          borderRadius: 30,
          paddingLeft: 10,
          borderWidth: 5,
          alignItems: 'center',
          flexDirection: 'row',
        },
        style,
      ]}>
      <Text style={{fontSize: 20}}>{emoji}</Text>
      <Text style={{color: color, textAlign: 'center', width: width - 55}}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
