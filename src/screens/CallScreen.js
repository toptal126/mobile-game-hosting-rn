import React,{useState} from 'react';
import { View, ScrollView,  Image, Text, TouchableOpacity, TextInput, Touchable} from 'react-native';

import {styles} from './style/Call';
import { SvgXml } from 'react-native-svg';

import homeSvg from '../assets/common/home.svg';
import videoSvg from '../assets/common/video.svg';
import messageSvg from '../assets/common/message_on.svg';
import notificationSvg from '../assets/common/notification.svg';
import profileSvg from '../assets/common/profile.svg';

import call_missed_svg from '../assets/message/call_missed.svg';
import call_phone_svg from '../assets/common/call_phone.svg';
import call_video_svg from '../assets/common/call_video.svg';
import call_made_green_svg from '../assets/message/call_made_green.svg';
import call_received_green_svg from '../assets/message/call_received_green.svg';
import call_made_red_svg from '../assets/message/call_made_red.svg';

const CallScreen = ({navigation}) => {

	return (
		<View style={styles.container}>
			
			<ScrollView style={styles.scrollContainer} contentContainerStyle={{
				alignItems:'center'
			}}>
				<View style={styles.messageItem}>
					<TouchableOpacity>
						<Image style={styles.msgUserAvatar} source={require("../assets/message/p1.png")}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.msgContent}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Nolan Levin</Text>
							<Text style={styles.msgDatetime}>06:42 am</Text>
						</View>
						<View style={[styles.msgContentLine,{marginTop:3}]}>
							<View style={{flexDirection:'row'}}>
								<SvgXml width="20" height="20" xml={call_missed_svg} />
								<Text style={styles.msgText_red}>July 27, 2021 03:15 PM</Text>
							</View>
							<TouchableOpacity>
								 <SvgXml width="20" height="20" xml={call_phone_svg} />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					
					<TouchableOpacity>
						<Image style={styles.msgUserAvatar} source={require("../assets/message/videoUser.png")}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.msgContent}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Nolan Levin</Text>
							<Text style={styles.msgDatetime}>06:42 am</Text>
						</View>
						<View style={[styles.msgContentLine,{marginTop:3}]}>
							<View style={{flexDirection:'row'}}>
								 <SvgXml width="20" height="20" xml={call_received_green_svg} />
								<Text style={styles.msgText}>July 27, 2021 03:15 PM</Text>
							</View>
							<TouchableOpacity>
								 <SvgXml width="20" height="20" xml={call_video_svg} />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					
					<TouchableOpacity>
						<Image style={styles.msgUserAvatar} source={require("../assets/message/p2.png")}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.msgContent}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Nolan Levin</Text>
							<Text style={styles.msgDatetime}>06:42 am</Text>
						</View>
						<View style={[styles.msgContentLine,{marginTop:3}]}>
							<View style={{flexDirection:'row'}}>
								 <SvgXml width="20" height="20" xml={call_made_green_svg} />
								<Text style={styles.msgText}>July 27, 2021 03:15 PM</Text>
							</View>
							<TouchableOpacity>
								 <SvgXml width="20" height="20" xml={call_phone_svg} />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					
					<TouchableOpacity>
						<Image style={styles.msgUserAvatar} source={require("../assets/home/user/vu2.png")}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.msgContent}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Nolan Levin</Text>
							<Text style={styles.msgDatetime}>06:42 am</Text>
						</View>
						<View style={[styles.msgContentLine,{marginTop:3}]}>
							<View style={{flexDirection:'row'}}>
								 <SvgXml width="20" height="20" xml={call_made_red_svg} />
								<Text style={styles.msgText_red}>July 27, 2021 03:15 PM</Text>
							</View>
							<TouchableOpacity>
								 <SvgXml width="20" height="20" xml={call_video_svg} />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					
					<TouchableOpacity>
						<Image style={styles.msgUserAvatar} source={require("../assets/home/user/vu2.png")}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.msgContent}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Nolan Levin</Text>
							<Text style={styles.msgDatetime}>06:42 am</Text>
						</View>
						<View style={[styles.msgContentLine,{marginTop:3}]}>
							<View style={{flexDirection:'row'}}>
								 <SvgXml width="20" height="20" xml={call_made_red_svg} />
								<Text style={styles.msgText_red}>July 27, 2021 03:15 PM</Text>
							</View>
							<TouchableOpacity>
								 <SvgXml width="20" height="20" xml={call_video_svg} />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					
					<TouchableOpacity>
						<Image style={styles.msgUserAvatar} source={require("../assets/home/user/vu2.png")}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.msgContent}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Nolan Levin</Text>
							<Text style={styles.msgDatetime}>06:42 am</Text>
						</View>
						<View style={[styles.msgContentLine,{marginTop:3}]}>
							<View style={{flexDirection:'row'}}>
								 <SvgXml width="20" height="20" xml={call_made_red_svg} />
								<Text style={styles.msgText_red}>July 27, 2021 03:15 PM</Text>
							</View>
							<TouchableOpacity>
								 <SvgXml width="20" height="20" xml={call_video_svg} />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					
					<TouchableOpacity>
						<Image style={styles.msgUserAvatar} source={require("../assets/home/user/vu2.png")}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.msgContent}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Nolan Levin</Text>
							<Text style={styles.msgDatetime}>06:42 am</Text>
						</View>
						<View style={[styles.msgContentLine,{marginTop:3}]}>
							<View style={{flexDirection:'row'}}>
								 <SvgXml width="20" height="20" xml={call_made_red_svg} />
								<Text style={styles.msgText_red}>July 27, 2021 03:15 PM</Text>
							</View>
							<TouchableOpacity>
								 <SvgXml width="20" height="20" xml={call_video_svg} />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					
					<TouchableOpacity>
						<Image style={styles.msgUserAvatar} source={require("../assets/home/user/vu2.png")}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.msgContent}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Nolan Levin</Text>
							<Text style={styles.msgDatetime}>06:42 am</Text>
						</View>
						<View style={[styles.msgContentLine,{marginTop:3}]}>
							<View style={{flexDirection:'row'}}>
								 <SvgXml width="20" height="20" xml={call_made_red_svg} />
								<Text style={styles.msgText_red}>July 27, 2021 03:15 PM</Text>
							</View>
							<TouchableOpacity>
								 <SvgXml width="20" height="20" xml={call_video_svg} />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					
					<TouchableOpacity>
						<Image style={styles.msgUserAvatar} source={require("../assets/home/user/vu2.png")}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.msgContent}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Nolan Levin</Text>
							<Text style={styles.msgDatetime}>06:42 am</Text>
						</View>
						<View style={[styles.msgContentLine,{marginTop:3}]}>
							<View style={{flexDirection:'row'}}>
								 <SvgXml width="20" height="20" xml={call_made_red_svg} />
								<Text style={styles.msgText_red}>July 27, 2021 03:15 PM</Text>
							</View>
							<TouchableOpacity>
								 <SvgXml width="20" height="20" xml={call_video_svg} />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					
					<TouchableOpacity>
						<Image style={styles.msgUserAvatar} source={require("../assets/home/user/vu2.png")}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.msgContent}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Nolan Levin</Text>
							<Text style={styles.msgDatetime}>06:42 am</Text>
						</View>
						<View style={[styles.msgContentLine,{marginTop:3}]}>
							<View style={{flexDirection:'row'}}>
								 <SvgXml width="20" height="20" xml={call_made_red_svg} />
								<Text style={styles.msgText_red}>July 27, 2021 03:15 PM</Text>
							</View>
							<TouchableOpacity>
								 <SvgXml width="20" height="20" xml={call_video_svg} />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</View>
				<View style={styles.messageItem}>
					
					<TouchableOpacity>
						<Image style={styles.msgUserAvatar} source={require("../assets/home/user/vu2.png")}/>
					</TouchableOpacity>
					<TouchableOpacity style={styles.msgContent}>
						<View style={styles.msgContentLine}>
							<Text style={styles.msgUserName}>Nolan Levin</Text>
							<Text style={styles.msgDatetime}>06:42 am</Text>
						</View>
						<View style={[styles.msgContentLine,{marginTop:3}]}>
							<View style={{flexDirection:'row'}}>
								 <SvgXml width="20" height="20" xml={call_made_red_svg} />
								<Text style={styles.msgText_red}>July 27, 2021 03:15 PM</Text>
							</View>
							<TouchableOpacity>
								 <SvgXml width="20" height="20" xml={call_video_svg} />
							</TouchableOpacity>
						</View>
					</TouchableOpacity>
				</View>
				
				
				<View style={{width:'100%',height:10}}></View>

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
				<TouchableOpacity>
					<SvgXml width="24" height="24" xml={profileSvg} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default CallScreen;