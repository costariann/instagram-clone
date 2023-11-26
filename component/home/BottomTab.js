import React, { useState } from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Ionic from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

export const bottomTabIcons = [
  {
    name: 'Home',
    active: <Foundation name="home" size={30} color="white" />,
    inactive: <Octicons name="home" size={30} color="white" />,
  },
  {
    name: 'Search',
    active: <FontAwesome name="search" size={30} color="white" />,
    inactive: <Feather name="search" size={30} color="white" />,
  },
  {
    name: 'Add',
    active: <Octicons name="diff-added" size={30} color="white" />,
    inactive: <Octicons name="diff-added" size={30} color="white" />,
  },
  {
    name: 'Reels',
    active: <Foundation name="social-instagram" size={30} color="white" />,
    inactive: <FontAwesome name="instagram" size={30} color="white" />,
  },
  {
    name: 'Profile',
    active: <Ionic name="person-circle-sharp" size={30} color="white" />,
    inactive: <Ionic name="person-circle-outline" size={30} color="white" />,
  },
];

const BottomTab = ({ icon }) => {
  const [active, setActive] = useState('Home');

  const handleBottomTabPress = (iconName) => {
    setActive(iconName);
  };
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation="vertical" />
      <View style={styles.bottomTabContainer}>
        {bottomTabIcons.map((icon, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleBottomTabPress(icon.name)}
          >
            {active === icon.name ? icon.active : icon.inactive}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomTabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 15,
    marginVertical: 15,
  },
  wrapper: {
    position: 'absolute ',
    width: '100%',
    zIndex: 999,
    backgroundColor: '#0000',
  },
});
export default BottomTab;
