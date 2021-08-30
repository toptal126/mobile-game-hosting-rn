import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TextInput,
  Touchable,
} from 'react-native';

import {useHeaderHeight} from '@react-navigation/elements';

import {styles} from './style/GroupChat';

import {SvgXml} from 'react-native-svg';
import plusSvg from '../assets/chat/plus.svg';
import callSvg from '../assets/chat/call.svg';
import videoSvg from '../assets/chat/video.svg';
import more_vertSvg from '../assets/chat/more_vert.svg';
import emojiSvg from '../assets/chat/emoji.svg';
import cameraSvg from '../assets/chat/camera.svg';
import attachmentSvg from '../assets/chat/attachment.svg';
import pinSvg from '../assets/chat/pin.svg';
import gifSvg from '../assets/chat/gif.svg';
import calendarSvg from '../assets/chat/calendar.svg';
import microphoneSvg from '../assets/chat/microphone.svg';

const GroupChatScreen = ({navigation}) => {
  const [addBar, setAddBar] = useState(false);

  useEffect(() => {
    // set navigation header
    navigation.setOptions({
      title: setNavTitle(),
      headerRight: () => setNavRight(),
    });
  }, []);

  const setNavTitle = () => {
    return (
      <TouchableOpacity style={styles.navTitle}>
        <View style={styles.userAvatarContainer}>
          <Image
            style={styles.userAvatar}
            source={require('../assets/message/g2.png')}></Image>
        </View>
        <Text style={styles.navUserName}>Friends & Family</Text>
      </TouchableOpacity>
    );
  };

  const setNavRight = () => {
    return (
      <View style={styles.navRightContainer}>
        <TouchableOpacity style={styles.navRightButton}>
          <SvgXml width="24" height="24" xml={more_vertSvg} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={useHeaderHeight() + 20}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
          contentContainerStyle={{}}>
          <View style={styles.getMsgContainer}>
            <TouchableOpacity style={styles.userAvatarContainer}>
              <Image
                style={styles.userAvatar}
                source={require('../assets/home/user/p2.png')}></Image>
              <View style={styles.notiContainer_yellow}></View>
            </TouchableOpacity>
            <View style={{marginLeft: 8}}>
              <TouchableOpacity style={styles.getMsgItem}>
                <Text style={styles.msgTitle}>Kadin Bothman • 11:55 am</Text>
                <Text style={styles.getMsgText}>We are starting now!</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.getMsgItem}>
                <Text style={styles.getMsgText}>Good job people</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.getMsgItem}>
                <Text style={styles.getMsgText}>Let’s go!</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.getMsgContainer}>
            <TouchableOpacity style={styles.userAvatarContainer}>
              <Image
                style={styles.userAvatar}
                source={require('../assets/home/user/vu2.png')}></Image>
              <View style={styles.notiContainer_green}></View>
            </TouchableOpacity>
            <View style={{marginLeft: 8}}>
              <TouchableOpacity style={styles.getMsgItem}>
                <Text style={styles.msgTitle}>Rohit Sharma • 11:45 am</Text>
                <Text style={styles.getMsgText}>
                  This was a great show folks!
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.sendMsgItem}>
            <Text style={[styles.getMsgText, {textAlign: 'right'}]}>
              I’m pretty confident that this launch will be successsful. This is
              going to be awesome.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendMsgItem}>
            <Text style={[styles.getMsgText, {textAlign: 'right'}]}>
              The client wasn’t expecting
            </Text>
          </TouchableOpacity>
          <Text style={[styles.getMsgTime, {textAlign: 'right'}]}>
            11:46 am
          </Text>

          <View style={styles.getMsgContainer}>
            <TouchableOpacity style={styles.userAvatarContainer}>
              <Image
                style={styles.userAvatar}
                source={require('../assets/message/p3.png')}></Image>
              <View style={styles.notiContainer_green}></View>
            </TouchableOpacity>
            <View style={{marginLeft: 8}}>
              <TouchableOpacity style={styles.getMsgItem}>
                <Text style={styles.msgTitle}>Rohit Sharma • 11:45 am</Text>
                <Text style={styles.getMsgText}>
                  I can help you with the rollout plan for EMEA as i have been
                  working closely this week with the local marketing team to get
                  the timings from external AD agency.
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.sendMsgItem}>
            <Text style={[styles.getMsgText, {textAlign: 'right'}]}>
              I’m pretty confident that this launch will be successsful. This is
              going to be awesome.
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sendMsgItem}>
            <Text style={[styles.getMsgText, {textAlign: 'right'}]}>
              The client wasn’t expecting
            </Text>
          </TouchableOpacity>
          <Text style={[styles.getMsgTime, {textAlign: 'right'}]}>
            11:46 am
          </Text>
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.msgInputContainer}>
            <TextInput
              style={styles.msgInput}
              placeholderTextColor="#595D68"
              placeholder="Type your message"></TextInput>
            <TouchableOpacity style={{marginRight: 12}}>
              <SvgXml width="20" height="20" xml={emojiSvg} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => setAddBar(!addBar)}>
            <SvgXml fill="black" width="20" height="20" xml={plusSvg} />
          </TouchableOpacity>
        </View>
        {addBar && (
          <View style={styles.addBarContainer}>
            <ScrollView
              horizontal
              style={styles.addBarScrollContainer}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={[styles.addBarBtnContainer, {marginLeft: 16}]}>
                <View
                  style={[
                    styles.addBarItem,
                    {backgroundColor: 'rgba(54, 123, 245, 1)'},
                  ]}>
                  <SvgXml width="24" height="24" xml={cameraSvg} />
                </View>
                <Text style={styles.addBarText}>Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addBarBtnContainer}>
                <View
                  style={[
                    styles.addBarItem,
                    {backgroundColor: 'rgba(255, 87, 95, 1)'},
                  ]}>
                  <SvgXml width="24" height="24" xml={attachmentSvg} />
                </View>
                <Text style={styles.addBarText}>Files</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addBarBtnContainer}>
                <View
                  style={[
                    styles.addBarItem,
                    {backgroundColor: 'rgba(129, 58, 200, 1)'},
                  ]}>
                  <SvgXml width="24" height="24" xml={pinSvg} />
                </View>
                <Text style={styles.addBarText}>Location</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addBarBtnContainer}>
                <View
                  style={[
                    styles.addBarItem,
                    {backgroundColor: 'rgba(255, 121, 52, 1)'},
                  ]}>
                  <SvgXml width="24" height="24" xml={gifSvg} />
                </View>
                <Text style={styles.addBarText}>GIF</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addBarBtnContainer}>
                <View
                  style={[
                    styles.addBarItem,
                    {backgroundColor: 'rgba(243, 167, 46, 1)'},
                  ]}>
                  <SvgXml width="24" height="24" xml={calendarSvg} />
                </View>
                <Text style={styles.addBarText}>Plan</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addBarBtnContainer}>
                <View
                  style={[
                    styles.addBarItem,
                    {backgroundColor: 'rgba(61, 213, 152, 1)'},
                  ]}>
                  <SvgXml
                    fill="#ffffff"
                    width="9"
                    height="16.5"
                    xml={microphoneSvg}
                  />
                </View>
                <Text style={styles.addBarText}>Audio</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default GroupChatScreen;
