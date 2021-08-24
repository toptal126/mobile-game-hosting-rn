import React,{useEffect} from 'react';
import { View, Text,useWindowDimensions,TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import LinearGradient from 'react-native-linear-gradient';
import ChatScreen from './ChatScreen';
import MessageGroupScreen from './MessageGroupScreen';
import CallScreen from './CallScreen';

import {styles} from './style/Message';

import { SvgXml } from 'react-native-svg';
import hr1Svg from '../assets/home/svg/header_right1.svg';
import hr2Svg from '../assets/home/svg/header_right2.svg';

const renderScene = SceneMap({
	Chats: ChatScreen,
	Groups: MessageGroupScreen,
	Calls: CallScreen,
});

const MessageScreen = ({navigation}) => {
	const layout = useWindowDimensions();
	
	const [index, setIndex] = React.useState(0);

	useEffect(() => {
		navigation.setOptions({title:routes[index].key})
		navigation.setOptions({headerRight:()=>showNavRight()})
	}, [index]);

	const showNavRight = () => {
		return (
			<View style={styles.topRightHeader}>
				<TouchableOpacity>
				<LinearGradient style={styles.topRightCircle} colors={['rgba(255, 81, 47, 1)', 'rgba(240, 152, 25, 1)']}
				>
					<SvgXml width="20" height="20" xml={hr1Svg} />
				</LinearGradient>
			</TouchableOpacity>
			<TouchableOpacity>
				<SvgXml style={{marginLeft:5}} width="20" height="20" xml={hr2Svg} />
			</TouchableOpacity></View>
		)
	}


	const [routes] = React.useState([
	  { key: 'Chats', title: 'Messages' },
	  { key: 'Groups', title: 'Groups' },
	  { key: 'Calls', title: 'Calls' }
	]);
	
	const renderIndicator = ({getTabWidth}) => {
		const tabWidth = getTabWidth(index);
		const tabLeft = (index + 0.5) * tabWidth - 3;
		return (
			<View style={[styles.tabIndicator,{marginLeft:tabLeft}]}>

			</View>
		)
	}

	const renderLabel = ({route}) => (
		<Text style={styles.tablabel}>{route.title}</Text>
	)

	const renderTabBar = props => (
		<TabBar
			{...props}
			renderLabel={renderLabel}
			style={{ backgroundColor: '#242A38' , height:60 }}
			renderIndicator={renderIndicator}
		/>
	  );

	return (
		<TabView
			renderTabBar={renderTabBar}
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			initialLayout={{ width: layout.width }}
	  />
	);
};

export default MessageScreen;