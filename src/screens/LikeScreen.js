import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LikeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>我的最愛中目前沒有產品</Text>
        <Icon name="heart" size={20} color="black" style={styles.icon} />
      </View>
      <Text style={styles.content}>
        只要按下，就能將喜愛的風格加入清單
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 120, // 上邊距
    marginLeft: 22, // 左邊距
  },
  headerContainer: {
    flexDirection: 'row', // 標題和愛心圖示水平排列
    alignItems: 'center', // 垂直居中對齊
  },
  header: {
    textAlign: 'left', // 調整文字對齊為左對齊
    fontSize: 20, // 字體大小
    marginRight: 6, // 文字和圖示之間的間距
  },
  icon: {
    marginLeft: 0.2, // 圖示和文字之間的間距
  },
  content: {
    textAlign: 'left', // 調整文字對齊為左對齊
    fontSize: 14, // 字體大小
    marginTop: 20, // 上邊距
  },
});

export default LikeScreen;
