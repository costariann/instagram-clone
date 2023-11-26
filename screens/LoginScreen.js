import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import LoginForm from '../component/loginScreen/LoginForm';

const instagramLogo =
  'https://cdn.mos.cms.futurecdn.net/6dDoc8GV9fYUPExgLYPqqT-1200-80.jpg';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{ uri: instagramLogo, height: 100, width: 100 }}></Image>
      </View>
      <LoginForm navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
});

export default LoginScreen;
