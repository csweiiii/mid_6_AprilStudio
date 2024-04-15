import React from "react";
import { StyleSheet, View, ScrollView } from 'react-native';
import { Box } from "@gluestack-ui/themed";
import Home from "../components/Home";
import Logo from "../components/Logo";


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1, 
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Box>
          <Logo />
          <Home />
        </Box>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
