import React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import DetailScreen from '../screens/DetailScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LoginScreen from '../screens/LoginScreen';
import MyTheme from '../theme';

import DayIntro from '../screens/DayIntro';
import OatIntro from '../screens/OatIntro';
import AutumnIntro from '../screens/AutumnIntro';
import PlaygroundIntro from '../screens/PlaygroundIntro';
import SyokudouIntro from '../screens/SyokudouIntro';

import IdeasScreen from '../screens/IdeasScreen';
import LikeScreen from '../screens/LikeScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <MyTabs />
    </NavigationContainer>
  );
}

const MyTabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: colors.light500,
        tabBarActiveTintColor: colors.primary700,
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="IdeaStack"
        component={IdeasStack}
        options={{
          headerShown: false,
          title: "Ideas",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="lightbulb" color={color} size={26} />
          ),
        }}
      />
      
      <Tab.Screen
        name="LikeStack"
        component={LikeScreen}
        options={{
          headerShown: false,
          title: "Like",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={SettingsScreen} // 修改为导航到 SettingsScreen.js
        options={{
          headerShown: false,
          title: "Account",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
      <Stack.Screen
        name="LoginScreen" // 添加 LoginScreen 到堆栈导航器
        component={LoginScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
const IdeasStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Idea"
        component={IdeasScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="DayIntro"
        component={DayIntro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="OatIntro"
        component={OatIntro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="AutumnIntro"
        component={AutumnIntro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="PlaygroundIntro"
        component={PlaygroundIntro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SyokudouIntro"
        component={SyokudouIntro}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}



export default Navigation;
