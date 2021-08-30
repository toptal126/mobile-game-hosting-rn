import React, {useRef} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import dot3Svg from './assets/home/svg/dot3.svg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {windowWidth, windowHeight} from './config/config';
import ModalDropdown from 'react-native-modal-dropdown';

const options = [
  {text: 'Your Profile', icon: 'account-cog-outline', navigation: 'Profile'},
  {text: 'Dashboard', icon: 'gamepad-variant-outline', navigation: 'Home'},
  {
    text: 'Contacts',
    icon: 'badge-account-horizontal-outline',
    navigation: 'Message',
  },
  {text: 'Messages', icon: 'wechat', navigation: 'Message'},
  {text: 'Shop', icon: 'shopping-outline', navigation: 'Message'},
];

export const SideMenu = ({navigation}) => {
  const defaultToast = useRef(null);
  const loadMenu = () => {
    return (
      <ModalDropdown
        options={options}
        ref={defaultToast}
        defaultValue=""
        textStyle={{
          width: 0,
        }}
        dropdownStyle={{
          width: windowWidth / 2,
          marginLeft: windowWidth / 2,
          marginTop: -60,
          backgroundColor: '#242A38',
          color: 'white',
          height: windowHeight,
          borderLeftWidth: 1,
        }}
        adjustFrame={params => {
          // eslint-disable-next-line no-param-reassign
          params.left = 0;
          // eslint-disable-next-line no-param-reassign
          params.right = 0;
          return params;
        }}
        renderRow={item => (
          <View
            style={{
              height: 100,
              width: '100%',
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: 'grey',
              paddingHorizontal: '10%',
            }}>
            <Icon
              name={item.icon}
              size={40}
              style={{
                height: '100%',
                textAlignVertical: 'center',
                marginRight: '20%',
                width: 50,
              }}
              color="#fff"
            />
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                height: '100%',
                textAlignVertical: 'center',
              }}>
              {item.text}
            </Text>
          </View>
        )}
        onSelect={onSelectMenu}
        renderSeparator={() => (
          <View style={{color: 'rgba(255,255,255,0.5)'}}></View>
        )}></ModalDropdown>
    );
  };

  const onSelectMenu = index => {
    switch (index) {
      case 0:
        navigation.navigate(options[index].navigation, {type: 1});
        break;
      default:
        navigation.navigate(options[index].navigation);
        break;
    }
    return;
  };

  const openMenu = () => {
    defaultToast.current.show();
  };
  return (
    <TouchableOpacity
      onPress={() => openMenu()}
      style={{position: 'absolute', top: 10, right: 10}}>
      <Icon name={'menu'} size={30} color={'white'} />
      {loadMenu()}
    </TouchableOpacity>
  );
};
