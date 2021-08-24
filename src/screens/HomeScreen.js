import React, {useState, useRef} from 'react';
import {
  View,
  ImageBackground,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {SliderBox} from 'react-native-image-slider-box';
import LinearGradient from 'react-native-linear-gradient';
import TextTicker from 'react-native-text-ticker';

import addSvg from '../assets/home/svg/header_add.svg';
import hrSvg1 from '../assets/home/svg/header_right1.svg';
import hrSvg2 from '../assets/home/svg/header_right2.svg';
import plusSvg from '../assets/home/svg/plus.svg';
import cameraSvg from '../assets/home/svg/camera.svg';
import dot3Svg from '../assets/home/svg/dot3.svg';
import heartSvg from '../assets/home/svg/heart.svg';
import msgSvg from '../assets/home/svg/message_on.svg';
import gpsSvg from '../assets/home/svg/gps.svg';
import shareSvg from '../assets/home/svg/share.svg';

import winner1Svg from '../assets/home/svg/winner_1.svg';
import winner2Svg from '../assets/home/svg/winner_2.svg';
import winner3Svg from '../assets/home/svg/winner_3.svg';

import ModalDropdown from 'react-native-modal-dropdown';

import {styles} from './style/Home';
import {windowWidth} from '../config/config';

import {BorderButton} from '../components/Button';
import {ScreenWidth} from 'react-native-elements/dist/helpers';

const HomeScreen = ({navigation}) => {
  const goProfilePage = type => {
    navigation.navigate('Profile', {type: type});
  };

  return (
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <TouchableOpacity>
          <SvgXml width="24" height="24" xml={addSvg} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Image
            width="20"
            height="24"
            style={styles.logoImg}
            source={require('../assets/logo.png')}
          />
          <Text style={styles.logoBigName}>DASHBOARD</Text>
          {/* <Text style={styles.logoSmallName}>.SURF</Text> */}
        </View>
        <View style={styles.topRightHeader}>
          <TouchableOpacity>
            <LinearGradient
              style={styles.topRightCircle}
              colors={['rgba(255, 81, 47, 1)', 'rgba(240, 152, 25, 1)']}>
              <SvgXml width="16" height="16" xml={hrSvg1} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml
              width="16"
              height="16"
              style={{marginLeft: 4}}
              xml={hrSvg2}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search"
          placeholderTextColor="#595D68"></TextInput>
        <TouchableOpacity>
          <LinearGradient
            style={styles.searchRightCircle}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['rgba(240, 152, 25, 1)', 'rgba(255, 81, 47, 1)']}>
            <SvgXml width="24" height="24" xml={cameraSvg} />
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <ScrollView horizontal style={styles.userContainer}>
          <TouchableOpacity style={styles.userItemContainer}>
            <LinearGradient
              style={styles.userAvatarContainerWithBorder}
              start={{x: 0.3, y: 0}}
              end={{x: 0.7, y: 1}}
              colors={['#F9CA87', '#F06E7C']}>
              <Image
                style={styles.tropyImage}
                source={require('../assets/home/images/trophy.png')}></Image>
              <View style={styles.contestWinner}>
                <SvgXml width="40" height="40" xml={winner1Svg} />
                <Text style={styles.winnerName}>Thunder Vault</Text>
                <Text style={styles.winnerDate}>$450</Text>

                <View style={styles.winner2Card}>
                  <SvgXml width="35" height="35" xml={winner2Svg} />
                  <View>
                    <Text style={styles.winner2Name}>Lightning</Text>
                    <Text style={styles.winner2Date}>$200</Text>
                  </View>
                </View>
                <View style={styles.winner2Card}>
                  <SvgXml width="35" height="35" xml={winner3Svg} />
                  <View>
                    <Text style={styles.winner2Name}>Lazor Turing</Text>
                    <Text style={styles.winner2Date}>$100</Text>
                  </View>
                </View>
              </View>
              <View style={styles.contestInfoText}>
                <Text style={styles.contestName}>Contest Texas</Text>
                <Text style={styles.contestDate}>21 August 2021</Text>
              </View>
            </LinearGradient>
            <Text style={styles.hostedByText}>Hosted By Edwin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userItemContainer}>
            <LinearGradient
              style={styles.userAvatarContainerWithBorder}
              start={{x: 0.3, y: 0}}
              end={{x: 0.7, y: 1}}
              colors={['#F9CA87', '#F06E7C']}>
              <Image
                style={styles.tropyImage}
                source={require('../assets/home/images/trophy.png')}></Image>
              <View style={styles.contestWinner}>
                <SvgXml width="40" height="40" xml={winner1Svg} />
                <Text style={styles.winnerName}>Thunder Vault</Text>
                <Text style={styles.winnerDate}>$450</Text>

                <View style={styles.winner2Card}>
                  <SvgXml width="35" height="35" xml={winner2Svg} />
                  <View>
                    <Text style={styles.winner2Name}>Lightning</Text>
                    <Text style={styles.winner2Date}>$200</Text>
                  </View>
                </View>
                <View style={styles.winner2Card}>
                  <SvgXml width="35" height="35" xml={winner3Svg} />
                  <View>
                    <Text style={styles.winner2Name}>Lazor Turing</Text>
                    <Text style={styles.winner2Date}>$100</Text>
                  </View>
                </View>
              </View>
              <View style={styles.contestInfoText}>
                <Text style={styles.contestName}>Contest Texas</Text>
                <Text style={styles.contestDate}>21 August 2021</Text>
              </View>
            </LinearGradient>
            <Text style={styles.hostedByText}>Hosted By Edwin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.userItemContainer}>
            <LinearGradient
              style={styles.userAvatarContainerWithBorder}
              start={{x: 0.3, y: 0}}
              end={{x: 0.7, y: 1}}
              colors={['#F9CA87', '#F06E7C']}>
              <Image
                style={styles.tropyImage}
                source={require('../assets/home/images/trophy.png')}></Image>
              <View style={styles.contestWinner}>
                <SvgXml width="40" height="40" xml={winner1Svg} />
                <Text style={styles.winnerName}>Thunder Vault</Text>
                <Text style={styles.winnerDate}>$450</Text>

                <View style={styles.winner2Card}>
                  <SvgXml width="35" height="35" xml={winner2Svg} />
                  <View>
                    <Text style={styles.winner2Name}>Lightning</Text>
                    <Text style={styles.winner2Date}>$200</Text>
                  </View>
                </View>
                <View style={styles.winner2Card}>
                  <SvgXml width="35" height="35" xml={winner3Svg} />
                  <View>
                    <Text style={styles.winner2Name}>Lazor Turing</Text>
                    <Text style={styles.winner2Date}>$100</Text>
                  </View>
                </View>
              </View>
              <View style={styles.contestInfoText}>
                <Text style={styles.contestName}>Contest Texas</Text>
                <Text style={styles.contestDate}>21 August 2021</Text>
              </View>
            </LinearGradient>
            <Text style={styles.hostedByText}>Hosted By Edwin</Text>
          </TouchableOpacity>
        </ScrollView>
        <View style={styles.storyContainer}>
          <LinearGradient
            style={styles.contestInfo}
            colors={['#1baee3', 'rgba(240, 152, 25, 1)']}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: '#2F3542',
                borderRadius: 27,
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
              <View style={styles.marquee}>
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
                  🎪 Competition Duration: 30mins (25th August 20:30 ~ 21:00),
                  Location: Texas, Prize: 🥇 $500, 🥈 $300, 🥉 $200, Rang4 ~
                  Rank 9 $100
                </TextTicker>
              </View>
              <View style={styles.footerContainer}>
                <BorderButton
                  text={'VIEW'}
                  emoji={'👁‍🗨'}
                  backgroundColor={'#ff397f'}
                  borderColor={'#ff397f55'}
                  color={'white'}
                  width={ScreenWidth / 4}
                  height={ScreenWidth / 10}
                />
                <BorderButton
                  text={'ACCEPT'}
                  emoji={'👍'}
                  backgroundColor={'#3153cb'}
                  borderColor={'#3153cb55'}
                  color={'white'}
                  width={ScreenWidth / 4}
                  height={ScreenWidth / 10}
                />
                <BorderButton
                  text={'JOIN'}
                  emoji={'🎪'}
                  backgroundColor={'#aa30e3'}
                  borderColor={'#aa30e355'}
                  color={'white'}
                  width={ScreenWidth / 4}
                  height={ScreenWidth / 10}
                />
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            style={styles.battleInfo}
            colors={['#1baee3', '#f2295b']}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: '#2F3542',
                borderRadius: 27,
              }}>
              <Image
                style={styles.battleBackImage}
                source={require('../assets/home/images/tetris_contest_image3.webp')}></Image>
              <View style={styles.storyHeader}>
                <Text
                  style={[
                    styles.contestInfoName,
                    {backgroundColor: '#46111f88', borderColor: '#46111f'},
                  ]}>
                  Battle Doha
                </Text>
                <TouchableOpacity
                  style={styles.hostInfo}
                  onPress={() => goProfilePage(2)}>
                  <View>
                    <Text style={styles.storyAuthor}>McQRI</Text>
                    <Text style={styles.storyAuthorDesc}>Ninja Tumn</Text>
                  </View>
                  <Image
                    style={styles.hostImage}
                    source={require('../assets/home/user/p3_u.png')}></Image>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginHorizontal: '10%',
                }}>
                <Image
                  style={styles.playerImage}
                  source={require('../assets/home/user/p3_u.png')}></Image>
                <Image
                  style={styles.playerImage}
                  source={require('../assets/home/user/vu2.png')}></Image>
              </View>
              <View style={styles.footerContainer}>
                <BorderButton
                  text={'SPECTATE'}
                  emoji={'👁‍🗨'}
                  backgroundColor={'#3153cb'}
                  borderColor={'#3153cb55'}
                  color={'white'}
                  width={ScreenWidth / 4}
                  height={ScreenWidth / 10}
                />
              </View>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            style={styles.contestInfo}
            colors={['#1baee3', '#f2295b']}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: '#2F3542',
                borderRadius: 27,
              }}>
              <Image
                style={styles.contestBackImage}
                source={require('../assets/home/images/tetris_contest_image2.webp')}></Image>
              <View style={styles.storyHeader}>
                <Text style={styles.contestInfoName}>Championship Oregon</Text>
                <TouchableOpacity
                  style={styles.hostInfo}
                  onPress={() => goProfilePage(2)}>
                  <View>
                    <Text style={styles.storyAuthor}>Harry Potter</Text>
                    <Text style={styles.storyAuthorDesc}>Fire Bolt</Text>
                  </View>
                  <Image
                    style={styles.hostImage}
                    source={require('../assets/home/user/p1.png')}></Image>
                </TouchableOpacity>
              </View>
              <Text style={styles.contestInfoDetail}>
                Knock-Out Championship August 2021 Oregon, Final held in 31th
                August. The Champion will get $2299.
              </Text>

              <View style={styles.marquee}>
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
                  🏆 Knock-Out Duration: 7 Days (25th August ~ 31th August),
                  Location: Oregon, Prize: 🥇 $2300, 🥈 $1100, 🥉 $500,
                  Quater-Final $100
                </TextTicker>
              </View>
              <View style={styles.footerContainer}>
                <BorderButton
                  text={'VIEW'}
                  emoji={'👁‍🗨'}
                  backgroundColor={'#ff397f'}
                  borderColor={'#ff397f55'}
                  color={'white'}
                  width={ScreenWidth / 4}
                  height={ScreenWidth / 10}
                />
                <BorderButton
                  text={'ENTER'}
                  emoji={'🏆'}
                  backgroundColor={'#3153cb'}
                  borderColor={'#3153cb55'}
                  color={'white'}
                  width={ScreenWidth / 4}
                  height={ScreenWidth / 10}
                />
                <BorderButton
                  text={'DEAD'}
                  emoji={'👽'}
                  backgroundColor={'#aa30e3'}
                  borderColor={'#aa30e355'}
                  color={'white'}
                  width={ScreenWidth / 4}
                  height={ScreenWidth / 10}
                />
              </View>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={{height: 50}}></View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
