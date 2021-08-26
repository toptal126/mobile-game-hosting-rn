import React from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import arSvg from '../assets/welcome/arrow-left.svg';
import emailSvg from '../assets/welcome/email.svg';
import lockSvg from '../assets/welcome/mdi_lock.svg';
import eyeSvg from '../assets/welcome/eye.svg';
import {styles} from './style/Contest';
import {BorderButton, EmojiButton} from '../components/Button';
import {ScreenWidth} from 'react-native-elements/dist/helpers';

import TextTicker from 'react-native-text-ticker';
import {windowHeight, windowWidth} from '../config/config';

const ContestScreen = ({navigation}) => {
  //Go Home page
  const goHome = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml width="24" height="24" xml={arSvg} />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <Text style={styles.welcomeText}>Contest Texas</Text>
        <LinearGradient
          style={styles.contestInfo}
          colors={['#1baee3', '#ffffff']}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: '#2F3542',
              // borderRadius: 27,
            }}>
            <Image
              style={styles.contestBackImage}
              source={require('../assets/home/images/tetris_contest_image1.webp')}></Image>
            <View style={styles.storyHeader}>
              <Text style={styles.contestInfoName}>Contest Texas</Text>
              <TouchableOpacity
                style={styles.hostInfo}
                onPress={() => goProfilePage(2)}>
                <View>
                  <Text style={styles.storyAuthor}>John Doe</Text>
                  <Text style={styles.storyAuthorDesc}>Wonder Share</Text>
                </View>
                <Image
                  style={styles.hostImage}
                  source={require('../assets/home/user/p3.png')}></Image>
              </TouchableOpacity>
            </View>
            <Text style={styles.contestInfoDetail}>
              Dear Friends, Tetris Competition Texas Celebrating 25th August
              2021. The Winner will get $500.
            </Text>
            <View
              style={[
                styles.marquee,
                {
                  borderColor: '#bfec48',
                  backgroundColor: '#bfec4833',
                },
              ]}>
              <TextTicker
                style={{
                  fontSize: 24,
                  height: '100%',
                  textAlignVertical: 'center',
                  color: 'white',
                }}
                duration={20000}
                loop
                bounce={false}
                repeatSpacer={5}
                marqueeDelay={1000}>
                🎪 Finished Competition (25th August 20:30 ~ 21:00)
              </TextTicker>
            </View>
            <View style={styles.footerContainer}>
              <BorderButton
                text={'LIKE IT'}
                emoji={'👍'}
                backgroundColor={'#3153cb'}
                borderColor={'#3153cb55'}
                color={'white'}
                width={ScreenWidth / 4}
                height={ScreenWidth / 10}
              />
            </View>
          </TouchableOpacity>
        </LinearGradient>
        <View style={styles.cupsContainter}>
          <View style={styles.silverCup}>
            <Image
              style={styles.silverCupImage}
              source={require('../assets/home/images/cup1_2.png')}></Image>
            <Text style={styles.silverCupUserName}>Turtle Ninja</Text>
            <Text style={styles.silverCupUserExp}>EXP:13K LEV:18</Text>
          </View>
          <View style={styles.goldCup}>
            <Image
              style={styles.goldCupImage}
              source={require('../assets/home/images/cup1_1.png')}></Image>
            <Text style={styles.goldCupUserName}>Harry Potter</Text>
            <Text style={styles.goldCupUserExp}>EXP:15K LEV:21</Text>
          </View>
          <View style={styles.bronzeCup}>
            <Image
              style={styles.bronzeCupImage}
              source={require('../assets/home/images/cup1_3.png')}></Image>
            <Text style={styles.bronzeCupUserName}>Doom Din</Text>
            <Text style={styles.bronzeCupUserExp}>EXP:12K LEV:16</Text>
          </View>
        </View>
        <View style={styles.leaderBoardContainer}>
          <Text>Leaderboard</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ContestScreen;
