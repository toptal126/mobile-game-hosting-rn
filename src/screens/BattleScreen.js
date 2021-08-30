import React, {useRef} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SvgXml} from 'react-native-svg';
import arSvg from '../assets/welcome/arrow-left.svg';
import {styles} from './style/Battle';
import {BorderButton, EmojiButton} from '../components/Button';
import {ScreenWidth} from 'react-native-elements/dist/helpers';

import {windowWidth, windowHeight} from '../config/config';

import {SideMenu} from '../SideMenu';

const BattleScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          position: 'absolute',
          width: windowWidth,
          opacity: 0.3,
        }}
        source={require('../assets/home/images/battle_background.jpg')}
      />

      <View style={styles.topHeader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <SvgXml width="24" height="24" xml={arSvg} />
        </TouchableOpacity>
        <SideMenu navigation={navigation} />
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <Text style={styles.welcomeText}>Battle Doha</Text>
        <LinearGradient
          style={styles.battleInfo}
          colors={['#1baee3', '#ffffff']}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              backgroundColor: '#2F3542',
              height: '100%',
              // borderRadius: 27,
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
              <TouchableOpacity style={styles.hostInfo}>
                <View>
                  <Text style={styles.storyAuthor}>McQRI</Text>
                  <Text style={styles.storyAuthorDesc}>Ninja Tumn</Text>
                </View>
                <Image
                  style={styles.hostImage}
                  source={require('../assets/home/user/p0.jpg')}></Image>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: '10%',
              }}>
              <TouchableOpacity>
                <Image
                  style={styles.playerImage}
                  source={require('../assets/home/user/p0.jpg')}></Image>
                <Text style={styles.playerUserName}>Juddy Hopps</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.playerImage}
                  source={require('../assets/home/user/p2.png')}></Image>
                <Text
                  style={[
                    styles.playerUserName,
                    {textDecorationLine: 'line-through'},
                  ]}>
                  Doom Din
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
              <BorderButton
                text={'SPECTATE (15 min 8s)'}
                emoji={'👁‍🗨'}
                backgroundColor={'#3153cb'}
                borderColor={'#3153cb55'}
                color={'white'}
                width={ScreenWidth / 2}
                height={ScreenWidth / 10}
              />
            </View>
          </TouchableOpacity>
        </LinearGradient>
        <TouchableOpacity style={styles.leaderBoardHeader}>
          <View style={styles.leaderBoardHeader1}>
            <Text style={styles.playerInfo}>Juddy Hopps</Text>
            <Text style={styles.playerInfo}>EXP:2567</Text>
            <Text style={styles.playerInfo}>LEVEL:21</Text>
          </View>
          <Text style={styles.leaderBoardHeader2}>🏹🏹🏹:🛡🛡</Text>
          <View style={styles.leaderBoardHeader3}>
            <Text style={styles.playerInfo}>Doom Din</Text>
            <Text style={styles.playerInfo}>EXP:2341</Text>
            <Text style={styles.playerInfo}>LEVEL:20</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default BattleScreen;
