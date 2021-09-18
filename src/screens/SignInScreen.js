import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import arSvg from '../assets/welcome/arrow-left.svg';
import emailSvg from '../assets/welcome/email.svg';
import lockSvg from '../assets/welcome/mdi_lock.svg';
import eyeSvg from '../assets/welcome/eye.svg';
import {styles} from './style/Auth';

const SignInScreen = ({navigation}) => {
  //Go Forgot Password page
  const goForgotPage = () => {
    navigation.navigate('Forgot');
  };

  //Go Home page
  const goHome = () => {
    navigation.navigate('Home');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml width="24" height="24" xml={arSvg} />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.welcomeDesc}>Let's Go Game Home !!</Text>

        <View style={[styles.formInput, {marginTop: 32}]}>
          <SvgXml width="20" height="20" xml={emailSvg} />
          <TextInput
            style={styles.formtextInput}
            placeholder="Email"
            placeholderTextColor="#858C9D"></TextInput>
        </View>

        <View style={styles.formInput}>
          <SvgXml width="20" height="20" xml={lockSvg} />
          <TextInput
            secureTextEntry={true}
            style={styles.formtextInput_password}
            placeholder="Password"
            placeholderTextColor="#858C9D"></TextInput>
          <TouchableOpacity>
            <SvgXml width="20" height="20" xml={eyeSvg} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{marginTop: 16}} onPress={() => goHome()}>
          <LinearGradient
            style={styles.signInButton}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['rgba(255, 81, 47, 1)', 'rgba(240, 152, 25, 1)']}>
            <Text style={styles.signText}>Sign In</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 8}} onPress={() => goForgotPage()}>
          <Text style={styles.forgottext}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignInScreen;
