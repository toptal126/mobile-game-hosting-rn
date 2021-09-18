import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

import {styles} from './style/EditProfile';
import LinearGradient from 'react-native-linear-gradient';

import {useHeaderHeight} from '@react-navigation/elements';
import {SvgXml} from 'react-native-svg';

import editPenSvg from '../assets/profile/edit_pen.svg';
import doneSvg from '../assets/profile/done.svg';
import {TextInput} from 'react-native-gesture-handler';

const EditProfileScreen = ({route, navigation}) => {
  const [bioText, setBioText] = useState(
    'UI/UX Designer\nCo-founder at Nolan Designs\nAvailable to work overtime',
  );

  useEffect(() => {
    navigation.setOptions({title: 'Edit Profile'});
    navigation.setOptions({headerRight: () => showNavRight()});
  }, []);

  const showNavRight = () => {
    return (
      <View style={styles.topRightHeader}>
        <TouchableOpacity>
          <SvgXml width="24" height="24" xml={doneSvg} />
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
          <View>
            <Image
              source={require('../assets/profile/back.png')}
              style={styles.profileBack}
            />
            <LinearGradient
              style={styles.bottomBack}
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}>
              <TouchableOpacity style={styles.updateButton}>
                <SvgXml width="16" height="16" xml={editPenSvg} />
                <Text style={styles.buttonText}>Update</Text>
              </TouchableOpacity>
            </LinearGradient>

            <View style={styles.profileAvatarView}>
              <Image
                source={require('../assets/profile/myavatar.png')}
                style={styles.profileAvatar}
              />
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  left: 90,
                  bottom: 0,
                  borderRadius: 50,
                  width: 30,
                  height: 30,
                  borderWidth: 4,
                  borderColor: 'rgba(47, 53, 66, 1)',
                  backgroundColor: 'rgba(255, 121, 52, 1)',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <SvgXml width="12" height="12" xml={editPenSvg} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.editItem}>
            <Text style={styles.fieldLabel}>Name</Text>
            <TextInput style={styles.fieldInput} value="Nolan Levin" />
          </View>

          <View style={styles.editItem}>
            <Text style={styles.fieldLabel}>UserName</Text>
            <TextInput style={styles.fieldInput} value="nolan_87" />
          </View>

          <View style={styles.editItem}>
            <Text style={styles.fieldLabel}>Website</Text>
            <TextInput
              style={styles.fieldInput}
              value="www.nolanportfolio.com"
            />
          </View>

          <View style={styles.editItem}>
            <Text style={styles.fieldLabel}>Bio</Text>
            <TextInput
              multiline={true}
              onChangeText={text => setBioText(text)}
              style={styles.fieldInput}
              value={bioText}
            />
          </View>

          <Text style={styles.areaLabel}>PRIVATE INFORMATION</Text>
          <View style={styles.editItem}>
            <Text style={styles.fieldLabel}>Email</Text>
            <TextInput
              style={styles.fieldInput}
              value="www.nolanportfolio.com"
            />
          </View>
          <View style={styles.editItem}>
            <Text style={styles.fieldLabel}>Phone</Text>
            <TextInput
              style={styles.fieldInput}
              value="www.nolanportfolio.com"
            />
          </View>
          <View style={styles.editItem}>
            <Text style={styles.fieldLabel}>Gender</Text>
            <TextInput style={styles.fieldInput} value="Male" />
          </View>
          <Text style={styles.areaLabel}>COMPNAY INFORMATION</Text>
          <View style={styles.editItem}>
            <Text style={styles.fieldLabel}>Company Name</Text>
            <TextInput
              style={styles.fieldInput}
              value="www.nolanportfolio.com"
            />
          </View>
          <View style={styles.editItem}>
            <Text style={styles.fieldLabel}>Website</Text>
            <TextInput
              style={styles.fieldInput}
              value="www.nolanportfolio.com"
            />
          </View>
          <View style={styles.editItem}>
            <Text style={styles.fieldLabel}>Location</Text>
            <TextInput
              style={styles.fieldInput}
              value="www.nolanportfolio.com"
            />
          </View>
          <View style={styles.editItem}>
            <Text style={styles.fieldLabel}>Contact No.</Text>
            <TextInput style={styles.fieldInput} value="Male" />
          </View>

          <View style={{height: 20}}></View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;
