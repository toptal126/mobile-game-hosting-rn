import React,{useState} from 'react';
import { View, ScrollView, Text, TouchableOpacity, TextInput} from 'react-native';
import CheckBox from 'react-native-check-box'
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import arSvg from '../assets/welcome/arrow-left.svg';
import personSvg from '../assets/welcome/person.svg';
import emailSvg from '../assets/welcome/email.svg';
import lockSvg from '../assets/welcome/mdi_lock.svg';
import eyeSvg from '../assets/welcome/eye.svg';
import {styles} from './style/Auth';

const SignUpScreen = ({navigation}) => {

	const [isChecked,setIsChecked] = useState(false);

	//Go SignIn page
	const goSignInPage = () => {
		navigation.navigate('SignIn')
	}

	return (
		<ScrollView style={styles.container}>
			<View style={styles.topHeader}>
				<TouchableOpacity onPress={()=>navigation.goBack()}>
					<SvgXml width="24" height="24" xml={arSvg} />
				</TouchableOpacity>
			</View>
			<View style={styles.mainContainer}>
				<Text style={styles.welcomeText}>Create Account</Text>
				<Text style={styles.welcomeDesc}>Enter your details to create account</Text>
				<View style={styles.formInput}>
					
					<SvgXml width="20" height="20" xml={personSvg} />
					<TextInput style={styles.formtextInput} placeholder="Username" placeholderTextColor="#858C9D">

					</TextInput>
				</View>

				<View style={styles.formInput}>
					
					<SvgXml width="20" height="20" xml={emailSvg} />
					<TextInput style={styles.formtextInput} placeholder="Email" placeholderTextColor="#858C9D">

					</TextInput>
				</View>

				<View style={styles.formInput}>
					
					<SvgXml width="20" height="20" xml={lockSvg} />
					<TextInput secureTextEntry={true} style={styles.formtextInput_password} placeholder="Password" placeholderTextColor="#858C9D">

					</TextInput>
					<TouchableOpacity>
						
						<SvgXml width="20" height="20" xml={eyeSvg} />
					</TouchableOpacity>
				</View>
				<CheckBox
					style={styles.checkBoxComp}
					onClick={()=>{
						setIsChecked(!isChecked)
					}}
					isChecked={isChecked}
					rightText={"I agree to terms and conditions"}
					rightTextStyle={{color:'white',marginLeft:10,fontSize:13}}
					checkBoxColor="rgba(255, 138, 52, 1)"
				/>

				<TouchableOpacity style={{marginTop:16}}>
					<LinearGradient style={styles.signInButton} start={{x:0,y:0}} end={{x:1,y:0}} colors={['rgba(255, 81, 47, 1)', 'rgba(240, 152, 25, 1)']}
					> 
						<Text style={styles.signText}>Register
							
						</Text>
					</LinearGradient>
				</TouchableOpacity>
				<View style={{flexDirection:'row',marginTop:8}}>
					<Text style={styles.forgottext}>Already have an account? </Text>
					<TouchableOpacity style={{marginTop:3}} onPress={()=>goSignInPage()}>
						<Text style={{color:'rgb(255, 130, 47)',fontWeight:'bold'}}>Login</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};

export default SignUpScreen;