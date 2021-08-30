import React, {useEffect, useState} from 'react';
import {
  Animated,
  View,
  ScrollView,
  Image,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import LinearGradient from 'react-native-linear-gradient';

import {styles} from './style/Profile';

import {SvgXml} from 'react-native-svg';

import plusSvg from '../assets/home/svg/plus.svg';
import more_vertSvg from '../assets/chat/more_vert.svg';
import rightNotiSvg from '../assets/profile/right_notification.svg';
import gridSvg from '../assets/profile/grid.svg';
import vplaySvg from '../assets/profile/video-play.svg';
import vcircleSvg from '../assets/profile/video-circle.svg';
import usertagSvg from '../assets/profile/user-tag.svg';
import homeSvg from '../assets/common/home.svg';
import videoSvg from '../assets/common/video.svg';
import messageSvg from '../assets/common/message.svg';
import notificationSvg from '../assets/common/notification.svg';
import profileSvg from '../assets/common/profile.svg';
import profileOnSvg from '../assets/common/profile_on.svg';
import editPenSvg from '../assets/profile/edit_pen.svg';

import {windowWidth} from '../config/config';

const FirstRoute = () => (
  <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', marginTop: 1}}>
    <TouchableOpacity
      style={{
        width: windowWidth / 3,
        height: windowWidth / 3,
        borderWidth: 0.5,
        borderColor: 'rgba(47, 53, 66, 1)',
      }}>
      <Image
        source={require('../assets/profile/rect1.png')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: windowWidth / 3,
        height: windowWidth / 3,
        borderWidth: 0.5,
        borderColor: 'rgba(47, 53, 66, 1)',
      }}>
      <Image
        source={require('../assets/profile/rect2.png')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: windowWidth / 3,
        height: windowWidth / 3,
        borderWidth: 0.5,
        borderColor: 'rgba(47, 53, 66, 1)',
      }}>
      <Image
        source={require('../assets/profile/rect3.png')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: windowWidth / 3,
        height: windowWidth / 3,
        borderWidth: 0.5,
        borderColor: 'rgba(47, 53, 66, 1)',
      }}>
      <Image
        source={require('../assets/profile/rect4.png')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: windowWidth / 3,
        height: windowWidth / 3,
        borderWidth: 0.5,
        borderColor: 'rgba(47, 53, 66, 1)',
      }}>
      <Image
        source={require('../assets/profile/rect5.png')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: windowWidth / 3,
        height: windowWidth / 3,
        borderWidth: 0.5,
        borderColor: 'rgba(47, 53, 66, 1)',
      }}>
      <Image
        source={require('../assets/profile/rect6.png')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: windowWidth / 3,
        height: windowWidth / 3,
        borderWidth: 0.5,
        borderColor: 'rgba(47, 53, 66, 1)',
      }}>
      <Image
        source={require('../assets/profile/rect5.png')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: windowWidth / 3,
        height: windowWidth / 3,
        borderWidth: 0.5,
        borderColor: 'rgba(47, 53, 66, 1)',
      }}>
      <Image
        source={require('../assets/profile/rect5.png')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: windowWidth / 3,
        height: windowWidth / 3,
        borderWidth: 0.5,
        borderColor: 'rgba(47, 53, 66, 1)',
      }}>
      <Image
        source={require('../assets/profile/rect5.png')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: windowWidth / 3,
        height: windowWidth / 3,
        borderWidth: 0.5,
        borderColor: 'rgba(47, 53, 66, 1)',
      }}>
      <Image
        source={require('../assets/profile/rect5.png')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: windowWidth / 3,
        height: windowWidth / 3,
        borderWidth: 0.5,
        borderColor: 'rgba(47, 53, 66, 1)',
      }}>
      <Image
        source={require('../assets/profile/rect5.png')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={{
        width: windowWidth / 3,
        height: windowWidth / 3,
        borderWidth: 0.5,
        borderColor: 'rgba(47, 53, 66, 1)',
      }}>
      <Image
        source={require('../assets/profile/rect5.png')}
        style={{width: '100%', height: '100%'}}
      />
    </TouchableOpacity>
  </View>
);

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  Chats: FirstRoute,
  Groups: SecondRoute,
  Groups1: SecondRoute,
  Groups2: SecondRoute,
});

const ProfileScreen = ({route, navigation}) => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [type, setType] = useState(route.params.type);

  const [collapseType, setCollapseType] = useState(false);

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const [headerTitleOpacity, setHeaderTitleOpacity] = useState(1);
  const HEADER_EXPANDED_HEIGHT = 500;
  const HEADER_COLLAPSED_HEIGHT = 60;

  useEffect(() => {
    setHeaderTitleOpacity(
      scrollY.interpolate({
        inputRange: [200, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
        outputRange: [1, 0],
        extrapolate: 'clamp',
      }),
    );
  }, [scrollY]);

  useEffect(() => {
    if (type == 2) {
      navigation.setOptions({
        title: collapseType ? setNavTitle() : 'liviavetrovs',
      });
      navigation.setOptions({headerRight: () => showNavRight()});
    } else if (type == 1) {
      navigation.setOptions({headerShown: false});
    }
  }, [type, collapseType]);

  const setNavTitle = () => {
    return (
      <TouchableOpacity style={styles.navTitle}>
        <View style={styles.userAvatarContainer_nav}>
          <Image
            style={styles.userAvatar}
            source={require('../assets/profile/avatar.png')}></Image>
        </View>
        <Text style={styles.navUserName}>Maria Bergson</Text>
      </TouchableOpacity>
    );
  };

  const goMyProfile = () => {
    // navigation.navigate('Profile',{type:1});
    setType(1);
  };

  const goEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const showNavRight = () => {
    return (
      <View style={styles.topRightHeader}>
        <TouchableOpacity>
          <SvgXml width="24" height="24" xml={rightNotiSvg} />
        </TouchableOpacity>
        <TouchableOpacity>
          <SvgXml
            style={{marginLeft: 5}}
            width="24"
            height="24"
            xml={more_vertSvg}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const [routes] = React.useState([
    {key: 'Chats', title: 'Grid'},
    {key: 'Groups', title: 'VideoPlay'},
    {key: 'Groups1', title: 'VideoCircle'},
    {key: 'Groups2', title: 'UserTag'},
  ]);

  const renderLabel = ({route, focused}) => {
    let curTabSvg = null;
    switch (route.title) {
      case 'Grid':
        curTabSvg = gridSvg;
        break;
      case 'VideoPlay':
        curTabSvg = vplaySvg;
        break;
      case 'VideoCircle':
        curTabSvg = vcircleSvg;
        break;
      case 'UserTag':
        curTabSvg = usertagSvg;
        break;

      default:
        break;
    }
    return (
      <SvgXml
        width="24"
        height="24"
        fillOpacity={focused ? 1 : 0.5}
        xml={curTabSvg}
      />
    );
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      renderLabel={renderLabel}
      style={{
        backgroundColor: '#242A38',
        borderTopWidth: 1,
        borderColor: 'rgba(24, 30, 44, 1)',
      }}
      indicatorStyle={{backgroundColor: 'white'}}
      tabStyle={{borderRightWidth: 1, borderColor: 'rgba(24, 30, 44, 1)'}}
    />
  );

  const handleScroll = event => {
    // // console.log(event.nativeEvent.contentOffset.y);
    // if(event.nativeEvent.layoutMeasurement.height + event.nativeEvent.contentOffset.y >= event.nativeEvent.contentSize.height - 150)
    //	 setCollapseType(true);
    // else
    //	 setCollapseType(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    y: scrollY,
                  },
                },
              },
            ],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}
          contentContainerStyle={{}}>
          <Animated.View style={{opacity: headerTitleOpacity}}>
            <Image
              source={require('../assets/profile/back.png')}
              style={styles.profileBack}
            />
            <View style={styles.profileAvatarView}>
              <View style={styles.followView}>
                <Text style={styles.followNumber}>4389</Text>
                <Text style={styles.followDesc}>Followers</Text>
              </View>

              <Image
                source={require('../assets/profile/avatar.png')}
                style={styles.profileAvatar}
              />

              <View style={styles.followView}>
                <Text style={styles.followNumber}>8543</Text>
                <Text style={styles.followDesc}>Following</Text>
              </View>
            </View>
          </Animated.View>
          <Animated.View
            style={{alignItems: 'center', opacity: headerTitleOpacity}}>
            <Text style={styles.userProfileName}>Livia Vetrovs</Text>
            <Text style={styles.userJob}>UI/UX Designer at CloudES</Text>
          </Animated.View>

          {type == 2 && (
            <View
              style={{
                flexDirection: 'row',
                width: windowWidth,
                justifyContent: 'center',
                marginTop: 18,
              }}>
              <TouchableOpacity style={styles.followButton}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: 24,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  colors={['rgba(255, 81, 47, 1)', 'rgba(240, 152, 25, 1)']}>
                  <Text style={styles.buttonText}>Follow</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.messageButton}>
                <Text style={styles.buttonText}>Message</Text>
              </TouchableOpacity>
            </View>
          )}

          {type == 1 && (
            <View
              style={{
                flexDirection: 'row',
                width: windowWidth,
                justifyContent: 'center',
                marginTop: 18,
              }}>
              <TouchableOpacity
                style={styles.mymessageButton}
                onPress={() => goEditProfile()}>
                <SvgXml
                  width="16"
                  height="16"
                  style={{marginRight: 10}}
                  xml={editPenSvg}
                />
                <Text style={styles.buttonText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          )}

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.userContainer}
            contentContainerStyle={{
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={[styles.userItemContainer, {marginTop: 4}]}>
              <View style={styles.userAvatarContainer}>
                <SvgXml width="20" height="20" xml={plusSvg} />
              </View>
              <Text style={styles.userName}>Your Story</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userItemContainer}>
              <LinearGradient
                style={styles.userAvatarContainerWithBorder}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['rgba(240, 152, 25, 1)', 'rgba(255, 81, 47, 1)']}>
                <Image
                  style={styles.userAvatar}
                  source={require('../assets/home/user/p1.png')}></Image>
                <View style={styles.liveContainer}>
                  <Text style={styles.liveText}>LIVE</Text>
                </View>
              </LinearGradient>
              <Text style={styles.userName_avatar}>Edwin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userItemContainer}>
              <View style={styles.userAvatarContainerWithBorder_grey}>
                <Image
                  style={styles.userAvatar}
                  source={require('../assets/home/user/p2.png')}></Image>
                <View style={styles.notiContainer_yellow}></View>
              </View>
              <Text style={styles.userName_avatar}>Ramon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userItemContainer}>
              <LinearGradient
                style={styles.userAvatarContainerWithBorder}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['rgba(240, 152, 25, 1)', 'rgba(255, 81, 47, 1)']}>
                <Image
                  style={styles.userAvatar}
                  source={require('../assets/home/user/p3_u.png')}></Image>
                <View style={styles.notiContainer_green}></View>
              </LinearGradient>
              <Text style={styles.userName_avatar}>Ramon</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.userItemContainer}>
              <LinearGradient
                style={styles.userAvatarContainerWithBorder}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['rgba(240, 152, 25, 1)', 'rgba(255, 81, 47, 1)']}>
                <Image
                  style={styles.userAvatar}
                  source={require('../assets/home/user/p4.png')}></Image>
                <View style={styles.notiContainer_grey}></View>
              </LinearGradient>
              <Text style={styles.userName_avatar}>Ramon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userItemContainer}>
              <LinearGradient
                style={styles.userAvatarContainerWithBorder}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['rgba(240, 152, 25, 1)', 'rgba(255, 81, 47, 1)']}>
                <Image
                  style={styles.userAvatar}
                  source={require('../assets/home/user/p4.png')}></Image>
                <View style={styles.notiContainer_grey}></View>
              </LinearGradient>
              <Text style={styles.userName_avatar}>Ramon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userItemContainer}>
              <LinearGradient
                style={styles.userAvatarContainerWithBorder}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['rgba(240, 152, 25, 1)', 'rgba(255, 81, 47, 1)']}>
                <Image
                  style={styles.userAvatar}
                  source={require('../assets/home/user/p4.png')}></Image>
                <View style={styles.notiContainer_grey}></View>
              </LinearGradient>
              <Text style={styles.userName_avatar}>Ramon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.userItemContainer}>
              <LinearGradient
                style={styles.userAvatarContainerWithBorder}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1}}
                colors={['rgba(240, 152, 25, 1)', 'rgba(255, 81, 47, 1)']}>
                <Image
                  style={styles.userAvatar}
                  source={require('../assets/home/user/p4.png')}></Image>
                <View style={styles.notiContainer_grey}></View>
              </LinearGradient>
              <Text style={styles.userName_avatar}>Ramon</Text>
            </TouchableOpacity>
          </ScrollView>

          <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
            style={{height: 1.2 * windowWidth + 110}}
          />
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
          <TouchableOpacity onPress={() => goMyProfile()}>
            <SvgXml
              width="24"
              height="24"
              xml={type == 2 ? profileSvg : profileOnSvg}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
