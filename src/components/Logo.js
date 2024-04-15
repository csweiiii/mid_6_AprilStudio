import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../img/Logo.png')} style={styles.logo} />
      <SearchBar />
    </View>
  );
};

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={24} color="black" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    marginTop:60,
    
  },
  logo: {
    width: 110,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flex: 1,
    marginRight:18,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
  },
});

export default Logo;