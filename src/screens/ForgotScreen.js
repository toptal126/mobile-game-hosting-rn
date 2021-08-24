import React,{useState} from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import arSvg from '../assets/welcome/arrow-left.svg';
import emailSvg from '../assets/welcome/email.svg';
import phoneSvg from '../assets/welcome/phone.svg';
import {styles} from './style/Auth';

const ForgotScreen = ({navigation}) => {

	const [email,setEmail] = useState('');
	const [phone,setPhone] = useState('');

	//Go Verify page
	const goVerifyPage = () => {
		
		navigation.navigate('Verify');
	}

	return (
		<ScrollView style={styles.container}>
			<View style={styles.topHeader}>
				<TouchableOpacity onPress={()=>navigation.goBack()}>
					<SvgXml width="24" height="24" xml={arSvg} />
				</TouchableOpacity>
			</View>
			<View style={styles.mainContainer}>
				<Text style={styles.welcomeText}>Forgot Password</Text>
				<Text style={styles.welcomeDesc}>Enter your email address or phone no.</Text>
				<Text style={styles.welcomeDesc}>to reset the password</Text>
				<View style={styles.formInput}>
					<SvgXml width="20" height="20" xml={emailSvg} />
					<TextInput style={styles.formtextInput} onChangeText={(text)=>{
						setEmail(text);
						setPhone('');
					}} value={email} placeholder="Email" placeholderTextColor="#858C9D">

					</TextInput>
				</View>
				<Text style={styles.orText}>OR</Text>
				<View style={[styles.formInput,{marginTop:0}]}>
					<SvgXml width="20" height="20" xml={phoneSvg} />
					<TextInput onChangeText={(text)=>{
						setPhone(text);
						setEmail('');
					}} value={phone}  style={styles.formtextInput} placeholder="Phone No." placeholderTextColor="#858C9D">

					</TextInput>
				</View>

				<TouchableOpacity style={{marginTop:24}} onPress={()=>goVerifyPage()}>
					<LinearGradient style={styles.signInButton} start={{x:0,y:0}} end={{x:1.1,y:0}} colors={['rgba(255, 81, 47, 1)', 'rgba(240, 152, 25, 1)']}
					> 
						<Text style={styles.signText}>Reset Password
							
						</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default ForgotScreen;