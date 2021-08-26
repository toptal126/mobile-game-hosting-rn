import React from 'react';
import {View, ScrollView, Image, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import testSvg from '../assets/welcome/arrow-right.svg';
import {styles} from './style/Welcome';
import {windowWidth, windowHeight} from '../config/config';

const windowRate = windowWidth / 360;

const WelcomeScreen = ({navigation}) => {
  //Go SignIn page
  const goSignInPage = () => {
    navigation.navigate('SignIn');
  };

  //Go SignUp page
  const goSignUpPage = () => {
    navigation.navigate('SignUp');
  };

  //Go Home page
  const goHomePage = () => {
    navigation.navigate('Home');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          style={[
            styles.userImg,
            {width: 32, height: 32, top: 40, left: 103 * windowRate},
          ]}
          source={require('../assets/welcome/1.png')}
        />
        <Image
          style={[
            styles.userImg,
            {width: 113, height: 113, top: 40, left: 162 * windowRate},
          ]}
          source={require('../assets/welcome/2.png')}
        />
        <Image
          style={[
            styles.userImg,
            {width: 88, height: 88, top: 85, left: 25 * windowRate},
          ]}
          source={require('../assets/welcome/4.png')}
        />
        <Image
          style={[
            styles.userImg,
            {width: 50, height: 50, top: 128, left: 286 * windowRate},
          ]}
          source={require('../assets/welcome/5.png')}
        />
        <Image
          style={[
            styles.userImg,
            {width: 44, height: 44, top: 174, left: 119 * windowRate},
          ]}
          source={require('../assets/welcome/6.png')}
        />
        <Image
          style={[
            styles.userImg,
            {width: 50, height: 50, top: 215, left: 30.8 * windowRate},
          ]}
          source={require('../assets/welcome/7.png')}
        />
        <Image
          style={[
            styles.userImg,
            {width: 56, height: 56, top: 191, left: 233.7 * windowRate},
          ]}
          source={require('../assets/welcome/3.png')}
        />
      </View>
      <View style={styles.mainContainer}>
        <Image
          style={styles.logoImg}
          source={require('../assets/welcome/synergy.png')}
        />
        <Text style={{marginTop: 10}}>
          <Text style={styles.logoBigName}>Game Hosting</Text>
          <Text style={styles.logoSmallName}>.TETRIS</Text>
        </Text>
        <Text style={styles.descText1}>Tetris with</Text>
        <Text style={styles.descText2}>Friends & Neighbours</Text>
        <TouchableOpacity onPress={() => goHomePage()}>
          <LinearGradient
            style={styles.signInButton}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['rgba(255, 81, 47, 1)', 'rgba(240, 152, 25, 1)']}>
            <Text style={styles.signText}>Dashboard</Text>
            <SvgXml width="20" height="20" xml={testSvg} />
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => goSignInPage()}>
          <LinearGradient
            style={styles.signInButton}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['rgba(255, 81, 47, 1)', 'rgba(240, 152, 25, 1)']}>
            <Text style={styles.signText}>Sign In</Text>
            <SvgXml width="20" height="20" xml={testSvg} />
          </LinearGradient>
        </TouchableOpacity>
        <View style={{marginTop: 16, flexDirection: 'row'}}>
          <Text style={styles.signDesc1}>Don’t have an account? </Text>
          <TouchableOpacity onPress={() => goSignUpPage()}>
            <Text style={styles.signDesc2}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          <Text style={styles.footerText1}>A product of </Text>
          <Image
            style={styles.footerImg}
            source={require('../assets/welcome/footer.png')}
          />
          <Text style={styles.footerText1}> CloudES</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default WelcomeScreen;
