import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NewPostScreen from '../../screens/NewPostScreen';

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={{ color: 'white', fontSize: 25 }}>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</Text>
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
            }}
            style={styles.icons}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
            }}
            style={styles.icons}
          ></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image
            source={{
              uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png',
            }}
            style={styles.icons}
          ></Image>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 15,
  },
  unreadBadge: {
    backgroundColor: '#ff3250',
    position: 'absolute',
    left: 20,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },

  unreadBadgeText: {
    color: 'white',
    fontWeight: 600,
  },
  iconContainer: {
    flexDirection: 'row',
  },

  icons: {
    width: 30,
    height: 30,
    marginLeft: 10,
    resizeMode: 'contain',
  },

  logo: {
    width: 50, // Adjust the width as needed
    height: 50, // Adjust the height as needed
    backgroundColor: 'black',
  },
});

export default Header;
