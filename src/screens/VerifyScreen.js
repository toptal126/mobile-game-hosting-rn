import React,{useState,useEffect} from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import arSvg from '../assets/welcome/arrow-left.svg';
import {styles} from './style/Auth';

const VerifyScreen = ({navigation}) => {
	let tmp = 59;
	const [timer,setTimer] = useState(59);
	const [value,setValue] = useState(0);

	let setCountTimer = null;
	useEffect(() => {
		console.log("useEffect");
		clearInterval(setCountTimer);
		setCountTimer = setInterval(()=>{
			decTimer();
		},1000)
		return () => {
			clearInterval(setCountTimer);
		}
	}, [value]);

	const decTimer = () => {
		if(tmp == 0)
		{
			clearInterval(setCountTimer);
		}
		else
		{
			tmp = tmp -1;
			setTimer(tmp);
		}
			
	};

	const resendCode = () => {
		tmp = 59;
		setTimer(tmp);
		setValue(value + 1);
	}

	//Go SignIn page
	const onSubmit = () => {
		navigation.navigate('Home')
	}

	return (
		<ScrollView style={styles.container}>
			<View style={styles.topHeader}>
				<TouchableOpacity onPress={()=>navigation.goBack()}>
					<SvgXml width="24" height="24" xml={arSvg} />
				</TouchableOpacity>
			</View>
			<View style={styles.mainContainer}>
				<Text style={styles.welcomeText}>Verfication Code</Text>
				<Text style={styles.welcomeDesc}>We’ve sent OTP verification code</Text>
				<Text style={styles.welcomeDesc}>on your registered number or email</Text>
				<View style={[styles.formInput,{justifyContent:'center',textAlign:'center'}]}>
					
					<TextInput style={[styles.formtextInput,{textAlign:'center',alignSelf:'center'}]} placeholder="Enter 4 Digit OTP" placeholderTextColor="#858C9D">

					</TextInput>
				</View>

				<TouchableOpacity style={{marginTop:24}} onPress={()=>onSubmit()}>
					<LinearGradient style={styles.signInButton} start={{x:0,y:0}} end={{x:1.1,y:0}} colors={['rgba(255, 81, 47, 1)', 'rgba(240, 152, 25, 1)']}
					> 
						<Text style={styles.signText}>Submit
							
						</Text>
					</LinearGradient>
				</TouchableOpacity>

				<View style={styles.verifyfooter}>
					<Text style={{color:'white'}}>0:{timer} min left</Text>
					<TouchableOpacity onPress={()=>resendCode()}><Text style={{color:'white',fontSize:14}}>Resend</Text></TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default VerifyScreen;