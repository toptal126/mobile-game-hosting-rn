import React,{useState} from 'react';
import { View, ScrollView,  Image, Text, TouchableOpacity, TextInput, Touchable} from 'react-native';
import {styles} from './style/MessageGroup';
import { useNavigation } from '@react-navigation/native';

import { SvgXml } from 'react-native-svg';
import plusSvg from '../assets/home/svg/plus.svg';
import star_enable_svg from '../assets/message/star_enable.svg';
import star_disable_svg from '../assets/message/star_disable.svg';
import dot3_svg from '../assets/home/svg/dot3.svg';

import homeSvg from '../assets/common/home.svg';
import videoSvg from '../assets/common/video.svg';
import messageSvg from '../assets/common/message_on.svg';
import notificationSvg from '../assets/common/notification.svg';
import profileSvg from '../assets/common/profile.svg';
const MessageGroupScreen = () => {
	
	const navigation = useNavigation();
	const goGroupChat = () => {
		navigation.navigate('GroupChat')
	}

	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollContainer} contentContainerStyle={{
				flexDirection:'row',
				flexWrap:'wrap'
			}}>
				<TouchableOpacity style={[styles.groupBox,{justifyContent:'center'}]}>
					<View style={styles.groupBoxCircle}>
						<SvgXml width="20" height="20" xml={plusSvg} />
					</View>
					<Text style={styles.newGroupBoxText}>Create New</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.groupBox} onPress={() => goGroupChat()}>
					<View style={styles.groupLine}>
						<TouchableOpacity>
							<SvgXml width="20" height="20" xml={star_enable_svg} />
						</TouchableOpacity>
						<TouchableOpacity>
							<SvgXml width="18" height="18" xml={dot3_svg} />
						</TouchableOpacity>
					</View>
					<View style={styles.groupBoxCont}>
						<Image style={styles.groupImg} source={require("../assets/message/g1.png")}/>
						<Text style={styles.groupTitle}>Office Colleage</Text>
						<View style={styles.groupMembers}>
							<Image style={styles.gMemImg} source={require("../assets/message/p1.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/home/user/p4.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p3.png")}/>
						</View>
					</View>
					
				</TouchableOpacity>
				<TouchableOpacity style={styles.groupBox} onPress={() => goGroupChat()}>
					<View style={styles.groupLine}>
						<TouchableOpacity>
							<SvgXml width="20" height="20" xml={star_enable_svg} />
						</TouchableOpacity>
						<TouchableOpacity>
							
							<SvgXml width="18" height="18" xml={dot3_svg} />
						</TouchableOpacity>
					</View>
					<View style={styles.groupBoxCont}>
						<Image style={styles.groupImg} source={require("../assets/message/g2.png")}/>
						<Text style={styles.groupTitle}>Friends & Family</Text>
						<View style={styles.groupMembers}>
							<Image style={styles.gMemImg} source={require("../assets/home/user/vu3.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/home/user/vu2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p1.png")}/>
						</View>
					</View>
					
				</TouchableOpacity>
				<TouchableOpacity style={styles.groupBox} onPress={() => goGroupChat()}>
					<View style={styles.groupLine}>
						<TouchableOpacity>
							<SvgXml width="20" height="20" xml={star_disable_svg} />
						</TouchableOpacity>
						<TouchableOpacity>
							<SvgXml width="18" height="18" xml={dot3_svg} />
						</TouchableOpacity>
					</View>
					<View style={styles.groupBoxCont}>
						<Image style={styles.groupImg} source={require("../assets/message/g3.png")}/>
						<Text style={styles.groupTitle}>Friends & Family</Text>
						<View style={styles.groupMembers}>
							<Image style={styles.gMemImg} source={require("../assets/home/user/vu3.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/home/user/vu2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p1.png")}/>
						</View>
					</View>
					
				</TouchableOpacity>
				<TouchableOpacity style={styles.groupBox} onPress={() => goGroupChat()}>
					<View style={styles.groupLine}>
						<TouchableOpacity>
							<SvgXml width="20" height="20" xml={star_disable_svg} />
						</TouchableOpacity>
						<TouchableOpacity>
							<SvgXml width="18" height="18" xml={dot3_svg} />
						</TouchableOpacity>
					</View>
					<View style={styles.groupBoxCont}>
						<Image style={styles.groupImg} source={require("../assets/message/g4.png")}/>
						<Text style={styles.groupTitle}>Friends & Family</Text>
						<View style={styles.groupMembers}>
							<Image style={styles.gMemImg} source={require("../assets/home/user/vu3.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/home/user/vu2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p1.png")}/>
						</View>
					</View>
					
				</TouchableOpacity>
				<TouchableOpacity style={styles.groupBox} onPress={() => goGroupChat()}>
					<View style={styles.groupLine}>
						<TouchableOpacity>
							<SvgXml width="20" height="20" xml={star_disable_svg} />
						</TouchableOpacity>
						<TouchableOpacity>
							<SvgXml width="18" height="18" xml={dot3_svg} />
						</TouchableOpacity>
					</View>
					<View style={styles.groupBoxCont}>
						<Image style={styles.groupImg} source={require("../assets/message/g5.png")}/>
						<Text style={styles.groupTitle}>School Buddies</Text>
						<View style={styles.groupMembers}>
							<Image style={styles.gMemImg} source={require("../assets/home/user/vu3.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/home/user/vu2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p1.png")}/>
						</View>
					</View>
					
				</TouchableOpacity>
				<TouchableOpacity style={styles.groupBox}>
					<View style={styles.groupLine}>
						<TouchableOpacity>
							<SvgXml width="20" height="20" xml={star_disable_svg} />
						</TouchableOpacity>
						<TouchableOpacity>
							<SvgXml width="18" height="18" xml={dot3_svg} />
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.groupBoxCont}>
						<Image style={styles.groupImg} source={require("../assets/message/g5.png")}/>
						<Text style={styles.groupTitle}>School Buddies</Text>
						<View style={styles.groupMembers}>
							<Image style={styles.gMemImg} source={require("../assets/home/user/vu3.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/home/user/vu2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p1.png")}/>
						</View>
					</TouchableOpacity>
					
				</TouchableOpacity>
				<TouchableOpacity style={styles.groupBox}>
					<View style={styles.groupLine}>
						<TouchableOpacity>
							<SvgXml width="20" height="20" xml={star_disable_svg} />
						</TouchableOpacity>
						<TouchableOpacity>
							<SvgXml width="18" height="18" xml={dot3_svg} />
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.groupBoxCont}>
						<Image style={styles.groupImg} source={require("../assets/message/g5.png")}/>
						<Text style={styles.groupTitle}>School Buddies</Text>
						<View style={styles.groupMembers}>
							<Image style={styles.gMemImg} source={require("../assets/home/user/vu3.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/home/user/vu2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p1.png")}/>
						</View>
					</TouchableOpacity>
					
				</TouchableOpacity>
				<TouchableOpacity style={styles.groupBox}>
					<View style={styles.groupLine}>
						<TouchableOpacity>
							<SvgXml width="20" height="20" xml={star_disable_svg} />
						</TouchableOpacity>
						<TouchableOpacity>
							<SvgXml width="18" height="18" xml={dot3_svg} />
						</TouchableOpacity>
					</View>
					<TouchableOpacity style={styles.groupBoxCont}>
						<Image style={styles.groupImg} source={require("../assets/message/g5.png")}/>
						<Text style={styles.groupTitle}>School Buddies</Text>
						<View style={styles.groupMembers}>
							<Image style={styles.gMemImg} source={require("../assets/home/user/vu3.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/home/user/vu2.png")}/>
							<Image style={[styles.gMemImg,{marginLeft:-8}]} source={require("../assets/message/p1.png")}/>
						</View>
					</TouchableOpacity>
					
				</TouchableOpacity>

				<View style={{height:30,width:'100%'}}></View>
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

export default MessageGroupScreen;