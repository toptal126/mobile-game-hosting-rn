import React, {useEffect} from 'react';
import {View, Text, useWindowDimensions, TouchableOpacity} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import ChatScreen from './ChatScreen';
import MessageGroupScreen from './MessageGroupScreen';

import {styles} from './style/Message';

import {SideMenu} from '../SideMenu';

const renderScene = SceneMap({
  Chats: ChatScreen,
  Groups: MessageGroupScreen,
});

const MessageScreen = ({navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    navigation.setOptions({title: routes[index].key});
    navigation.setOptions({headerRight: () => showNavRight()});
  }, [index]);

  const showNavRight = () => {
    return <SideMenu navigation={navigation} />;
  };

  const [routes] = React.useState([
    {key: 'Chats', title: 'Messages'},
    {key: 'Groups', title: 'Groups'},
  ]);

  const renderIndicator = ({getTabWidth}) => {
    const tabWidth = getTabWidth(index);
    const tabLeft = (index + 0.5) * tabWidth - 3;
    return <View style={[styles.tabIndicator, {marginLeft: tabLeft}]}></View>;
  };

  const renderLabel = ({route}) => (
    <Text style={styles.tablabel}>{route.title}</Text>
  );

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={renderLabel}
      style={{backgroundColor: '#242A38', height: 60}}
      renderIndicator={renderIndicator}
    />
  );

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default MessageScreen;
