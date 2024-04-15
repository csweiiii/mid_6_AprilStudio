import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, TouchableOpacity  } from 'react-native';
import { Card } from '@gluestack-ui/themed'; // Assuming Card is the component from @gluestack-ui/themed
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const IdeasScreen = () => {
    
  const data = [
    { key: "北歐" },
    { key: "韓系" },
    { key: "簡約" },
    { key: "木質" },
    { key: "清新" },
    { key: "復古" },
    { key: "日式" },
    { key: "度假" }
  ];
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Design by style</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListItem text={item.key} />}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <CardGroup />
      </ScrollView>
    </View>
  );
}

const ListItem = ({ text }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{text}</Text>
      <View style={styles.box} />
    </View>
  );
}

const Box = () => {
  return (
    <View style={styles.box}></View>
  );
}

const CardGroup = () => {
  return (
    <View style={styles.cardGroup}>
      <View style={styles.cardContainer}>
        <CardWithImage imageSource={require('../img/Day-Dream.jpg')} title="Day Dream" description="北歐度假風／一房"customWidth={206}/>
        <CardWithImage imageSource={require('../img/Oat-Milk-Latte.jpg')} title="Oat Milk Latte" description="日式木質風／一房" customWidth={154}/>
      </View>
      <View style={styles.cardContainer}>
        <CardWithImage imageSource={require('../img/Playground.jpg')} title="Playground" description="木質自然風／一廳" customWidth={180}/>
        <CardWithImage imageSource={require('../img/Autumn-Days.jpg')} title="Autumn Days" description="北歐輕奢風／一房一廳" customWidth={180}/>
      </View>
      <View style={styles.cardContainer}>
        <CardWithImage imageSource={require('../img/Home-Syokudou.jpg')} title="Home Syokudou" description="日系綠植風／兩房一廳"customWidth={370} />

      </View>
      <View style={[styles.cardContainer, { justifyContent: 'flex-start' }]}>
        <CardWithImage imageSource={require('../img/Morning-In-Seoul-02.jpg')} title="Morning In Seoul" description="韓系清新風／一房" customWidth={154} />
        <CardWithImage imageSource={require('../img/Spring-in-Room.jpg')} title="Spring in Room" description="北歐木質風" customWidth={206} />
      </View>
      <View style={styles.cardContainer}>
        <CardWithImage imageSource={require('../img/Le-Coin-De-Chiao.jpg')} title="Le-Coin-De-Chiao" description="歐式復古風／一房"customWidth={180} />
        <CardWithImage imageSource={require('../img/Nordic-Wooden.jpg')} title="Nordic Wooden" description="簡約木質風／一房一廳" customWidth={180}/>
      </View>
    </View>
  );
}

const CardWithImage = ({ imageSource, title, description, customWidth}) => {
  const navigation = useNavigation(); // 导入 useNavigation 钩子函数

  const handleCardPress = () => {
    if (title === 'Day Dream') { // 当卡片标题为 'Day Dream' 时执行导航到 DayIntro.js 的操作
      navigation.navigate('DayIntro'); // 使用导航器进行导航到 'DayIntro' 路由
    }
    if (title === 'Oat Milk Latte') { // 当卡片标题为 'Day Dream' 时执行导航到 DayIntro.js 的操作
      navigation.navigate('OatIntro'); // 使用导航器进行导航到 'DayIntro' 路由
    }
    if (title === 'Playground') { // 当卡片标题为 'Day Dream' 时执行导航到 DayIntro.js 的操作
      navigation.navigate('PlaygroundIntro'); // 使用导航器进行导航到 'DayIntro' 路由
    }
    if (title === 'Autumn Days') { // 当卡片标题为 'Day Dream' 时执行导航到 DayIntro.js 的操作
      navigation.navigate('AutumnIntro'); // 使用导航器进行导航到 'DayIntro' 路由
    }
    if (title === 'Home Syokudou') { // 当卡片标题为 'Day Dream' 时执行导航到 DayIntro.js 的操作
      navigation.navigate('SyokudouIntro'); // 使用导航器进行导航到 'DayIntro' 路由
    }
    
  };
  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={[styles.card, { width: customWidth ? customWidth : 180 }]}>
        <Image source={imageSource} style={styles.cardImage} />
        <Text style={styles.cardText}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
  },
  itemContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  itemText: {
    position: 'absolute',
    top: 21,
    left:30,
    zIndex: 1,
  },
  box: {
    width: 60,
    height: 30,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    margin: -8,
    marginTop: 15,
    marginLeft:15,
    marginBottom: 15,
  },
  cardGroup: {
    marginTop: 20,
    marginRight: 10,
  },
  cardContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 20, 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    width: 180, 
    height: 270,
    marginLeft:8,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
    marginTop:-5,
  },
  description: {
    fontSize: 12,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default IdeasScreen;