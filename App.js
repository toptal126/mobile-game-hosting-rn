/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import {
  View,
  ImageBackground,
  Button,
  ScrollView,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import {AppRegistry} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import ContestScreen from './src/screens/ContestScreen';
import BattleScreen from './src/screens/BattleScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotScreen from './src/screens/ForgotScreen';
import VerifyScreen from './src/screens/VerifyScreen';
import MessageScreen from './src/screens/MessageScreen';
import PersonalChatScreen from './src/screens/PersonalChatScreen';
import GroupChatScreen from './src/screens/GroupChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';
import WordPuzzleScreen from './src/screens/WordPuzzleScreen';

const Stack = createStackNavigator();

if (!window.location) {
  // App is running in simulator
  window.navigator.userAgent = 'ReactNative';
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#242A38',
            height: 65,
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerTitleStyle: {
            color: 'white',
          },
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Forgot"
          component={ForgotScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Verify"
          component={VerifyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Contest"
          component={ContestScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WordPuzzle"
          component={WordPuzzleScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Battle"
          component={BattleScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Message"
          component={MessageScreen}
          options={{
            headerShown: true,
            headerLeft: null,
            headerTitleStyle: {
              fontSize: 24,
              color: 'white',
              fontFamily: 'Inter-SemiBold',
            },
          }}
        />

        <Stack.Screen
          name="PersonalChat"
          component={PersonalChatScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="GroupChat"
          component={GroupChatScreen}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            title: '',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
