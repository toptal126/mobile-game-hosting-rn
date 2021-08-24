import React,{useState} from 'react';
import { View, ScrollView,  Image, Text, TouchableOpacity, TextInput, Touchable} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import {styles} from './style/Chat';
import { SvgXml } from 'react-native-svg';

import plusSvg from '../assets/home/svg/plus.svg';
import tick_all_grey_svg from '../assets/message/tick_all_grey.svg';
import tick_all_yellow_svg from '../assets/message/tick_all_yellow.svg';
import tick_grey_svg from '../assets/message/tick_grey.svg';
import tick_yellow_svg from '../assets/message/tick_yellow.svg';
import homeSvg from '../assets/common/home.svg';
import videoSvg from '../assets/common/video.svg';
import messageSvg from '../assets/common/message_on.svg';
import notificationSvg from '../assets/common/notification.svg';
import profileSvg from '../assets/common/profile.svg';

const ChatScreen = () => {
	const navigation = useNavigation();
	
	const goPersonalChat = () => {
		navigation.navigate('PersonalChat');
	}

	const goMyProfile = () => {
		navigation.navigate('Profile',{type:1});
	};

	return (
		<View style={styles.container}>
			<ScrollView horizontal showsHorizontalScrollIndicator={false}  style={styles.userContainer} contentContainerStyle={{
				alignItems:'center'
			}}>
				<TouchableOpacity style={[styles.userItemContainer,{marginTop:4}]}>
					<View style={styles.userAvatarContainer}>
						<SvgXml width="20" height="20" xml={plusSvg} />
					</View>
					<Text style={styles.userName}>Your Story</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.userItemContainer}>
					<LinearGradient style={styles.userAvatarContainerWithBorder} start={{x:0,y:0}} end={{x:0,y:1}} colors={['rgba(240, 152, 25, 1)','rgba(255, 81, 47, 1)']}
						>
						<Image style={styles.userAvatar} source={require('../assets/home/user/p1.png')}></Image>
						<View style={styles.liveContainer}><Text style={styles.liveText}>LIVE</Text></View>
					</LinearGradient>
					<Text style={styles.userName_avatar}>Edwin</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.userItemContainer}>
					<View style={styles.userAvatarContainerWithBorder_grey}>
						<Image style={styles.userAvatar} source={require('../assets/home/user/p2.png')}></Image>
						<View style={styles.notiContainer_yellow}></View>
					</View>
					<Text style={styles.userName_avatar}>Ramon</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.userItemContainer}>
					<LinearGradient style={styles.userAvatarContainerWithBorder} start={{x:0,y:0}} end={{x:0,y:1}} colors={['rgba(240, 152, 25, 1)','rgba(255, 81, 47, 1)']}
						>
						<Image style={styles.userAvatar} source={require('../assets/home/user/p3_u.png')}></Image>
						<View style={styles.notiContainer_green}></View>
					</LinearGradient>
					<Text style={styles.userName_avatar}>Ramon</Text>
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.userItemContainer}>
					<LinearGradient style={styles.userAvatarContainerWithBorder} start={{x:0,y:0}} end={{x:0,y:1}} colors={['rgba(240, 152, 25, 1)','rgba(255, 81, 47, 1)']}
						>
						<Image style={styles.userAvatar} source={require('../assets/home/user/p4.png')}></Image>
						<View style={styles.notiContainer_grey}></View>
					</LinearGradient>
					<Text style={styles.userName_avatar}>Ramon</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.userItemContainer}>
					<LinearGradient style={styles.userAvatarContainerWithBorder} start={{x:0,y:0}} end={{x:0,y:1}} colors={['rgba(240, 152, 25, 1)','rgba(255, 81, 47, 1)']}
						>
						<Image style={styles.userAvatar} source={require('../assets/home/user/p4.png')}></Image>
						<View style={styles.notiContainer_grey}></View>
					</LinearGradient>
					<Text style={styles.userName_avatar}>Ramon</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.userItemContainer}>
					<LinearGradient style={styles.userAvatarContainerWithBorder} start={{x:0,y:0}} end={{x:0,y:1}} colors={['rgba(240, 152, 25, 1)','rgba(255, 81, 47, 1)']}
						>
						<Image style={styles.userAvatar} source={require('../assets/home/user/p4.png')}></Image>
						<View style={styles.notiContainer_grey}></View>
					</LinearGradient>
					<Text style={styles.userName_avatar}>Ramon</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.userItemContainer}>
					<LinearGradient style={styles.userAvatarContainerWithBorder} start={{x:0,y:0}} end={{x:0,y:1}} colors={['rgba(240, 152, 25, 1)','rgba(255, 81, 47, 1)']}
						>
						<Image style={styles.userAvatar} source={require('../assets/home/user/p4.png')}></Image>
						<View style={styles.notiContainer_grey}></View>
					</LinearGradient>
					<Text style={styles.userName_avatar}>Ramon</Text>
				</TouchableOpacity>
			</ScrollView>
			
			<ScrollView style={styles.scrollContainer} contentContainerStyle={{
				alignItems:'center'
			}}>
				<View style={styles.messageItem}>
					<Image style={styles.msgUserAvatar} source={require("../assets/message/p1.png")}/>
					<TouchableOpacity style={styles.msgContent} onPress={()=>goPersonalChat()}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Nolan Levin</Text>
							<Text style={styles.msgDatetime}>06:42 am</Text>
						</View>
						<View style={styles.msgContentLine}>
							<View style={{flexDirection:'row'}}>
								<SvgXml width="20" height="20" xml={tick_all_grey_svg} />
								<Text style={styles.msgText}>perfect!</Text>
							</View>
							<View style={styles.msgNotiCircle}>
								<Text style={styles.msgNotiCount}>20</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					<Image style={styles.msgUserAvatar} source={require("../assets/home/user/vu3.png")}/>
					<TouchableOpacity style={styles.msgContent} onPress={()=>goPersonalChat()}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Maria Bergson</Text>
							<Text style={styles.msgDatetime}>05:49 pm</Text>
						</View>
						<View style={styles.msgContentLine}>
							<View style={{flexDirection:'row'}}>
								<SvgXml width="20" height="20" xml={tick_grey_svg} />
								<Text style={styles.msgText}>aww</Text>
							</View>
							<View style={styles.msgNotiCircle}>
								<Text style={styles.msgNotiCount}>5</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					<Image style={styles.msgUserAvatar} source={require("../assets/message/p2.png")}/>
					<TouchableOpacity style={styles.msgContent} onPress={()=>goPersonalChat()}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Erin Dias</Text>
							<Text style={styles.msgDatetime}>05:49 pm</Text>
						</View>
						<View style={styles.msgContentLine}>
							<View style={{flexDirection:'row'}}>
								<SvgXml width="20" height="20" xml={tick_all_grey_svg} />
								<Text style={styles.msgText}>aww</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					<Image style={styles.msgUserAvatar} source={require("../assets/home/user/p4.png")}/>
					<TouchableOpacity style={styles.msgContent} onPress={()=>goPersonalChat()}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Maria Bergson</Text>
							<Text style={styles.msgDatetime}>05:49 pm</Text>
						</View>
						<View style={styles.msgContentLine}>
							<View style={{flexDirection:'row'}}>
								<SvgXml width="20" height="20" xml={tick_all_grey_svg} />
								<Text style={styles.msgText}>Haha that's terrifying 😂</Text>
							</View>
							<Text style={styles.msgTyping}>Typing...</Text>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					<Image style={styles.msgUserAvatar} source={require("../assets/message/p2.png")}/>
					<TouchableOpacity style={styles.msgContent} onPress={()=>goPersonalChat()}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Roger Calzoni</Text>
							<Text style={styles.msgDatetime}>05:49 pm</Text>
						</View>
						<View style={styles.msgContentLine}>
							<View style={{flexDirection:'row'}}>
								<SvgXml width="20" height="20" xml={tick_yellow_svg} />
								<Text style={styles.msgText}>Wow, this is really epic</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					<Image style={styles.msgUserAvatar} source={require("../assets/message/p3.png")}/>
					<TouchableOpacity style={styles.msgContent} onPress={()=>goPersonalChat()}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Kianna Bator</Text>
							<Text style={styles.msgDatetime}>05:49 pm</Text>
						</View>
						<View style={styles.msgContentLine}>
							<View style={{flexDirection:'row'}}>
								<SvgXml width="20" height="20" xml={tick_all_yellow_svg} />
								<Text style={styles.msgText}>just ideas for next time</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				
				<View style={styles.messageItem}>
					<Image style={styles.msgUserAvatar} source={require("../assets/message/p3.png")}/>
					<TouchableOpacity style={styles.msgContent} onPress={()=>goPersonalChat()}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Kianna Bator</Text>
							<Text style={styles.msgDatetime}>05:49 pm</Text>
						</View>
						<View style={styles.msgContentLine}>
							<View style={{flexDirection:'row'}}>
								<SvgXml width="20" height="20" xml={tick_all_yellow_svg} />
								<Text style={styles.msgText}>just ideas for next time</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				
				<View style={styles.messageItem}>
					<Image style={styles.msgUserAvatar} source={require("../assets/message/p3.png")}/>
					<TouchableOpacity style={styles.msgContent} onPress={()=>goPersonalChat()}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Kianna Bator</Text>
							<Text style={styles.msgDatetime}>05:49 pm</Text>
						</View>
						<View style={styles.msgContentLine}>
							<View style={{flexDirection:'row'}}>
								<SvgXml width="20" height="20" xml={tick_all_yellow_svg} />
								<Text style={styles.msgText}>just ideas for next time</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				
				<View style={styles.messageItem}>
					<Image style={styles.msgUserAvatar} source={require("../assets/message/p3.png")}/>
					<TouchableOpacity style={styles.msgContent} onPress={()=>goPersonalChat()}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Kianna Bator</Text>
							<Text style={styles.msgDatetime}>05:49 pm</Text>
						</View>
						<View style={styles.msgContentLine}>
							<View style={{flexDirection:'row'}}>
								<SvgXml width="20" height="20" xml={tick_all_yellow_svg} />
								<Text style={styles.msgText}>just ideas for next time</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				
				<View style={styles.messageItem}>
					<Image style={styles.msgUserAvatar} source={require("../assets/message/p3.png")}/>
					<TouchableOpacity style={styles.msgContent} onPress={()=>goPersonalChat()}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Kianna Bator</Text>
							<Text style={styles.msgDatetime}>05:49 pm</Text>
						</View>
						<View style={styles.msgContentLine}>
							<View style={{flexDirection:'row'}}>
								<SvgXml width="20" height="20" xml={tick_all_yellow_svg} />
								<Text style={styles.msgText}>just ideas for next time</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
				
				<View style={styles.messageItem}>
					<Image style={styles.msgUserAvatar} source={require("../assets/message/p3.png")}/>
					<TouchableOpacity style={styles.msgContent} onPress={()=>goPersonalChat()}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Kianna Bator</Text>
							<Text style={styles.msgDatetime}>05:49 pm</Text>
						</View>
						<View style={styles.msgContentLine}>
							<View style={{flexDirection:'row'}}>
								<SvgXml width="20" height="20" xml={tick_all_yellow_svg} />
								<Text style={styles.msgText}>just ideas for next time</Text>
							</View>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
	   
			<View style={styles.footer}>
				<TouchableOpacity>
					<SvgXml width="24" height="24" xml={homeSvg} />
				</TouchableOpacity>
				<TouchableOpacity>
					<SvgXml width="24" height="24" xml={videoSvg} />
				</TouchableOpacity>
				<TouchableOpacity>
					<SvgXml width="24" height="24" xml={messageSvg} />
				</TouchableOpacity>
				<TouchableOpacity>
					<SvgXml width="24" height="24" xml={notificationSvg} />
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>goMyProfile()}>
					<SvgXml width="24" height="24" xml={profileSvg} />
				</TouchableOpacity>
			</View>
	   </View>
	);
};

export default ChatScreen;