import React from 'react';
import { ScrollView, Text, View, Image, StyleSheet } from 'react-native';
import { Users } from '../../data/users';

const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Users.map((story, index) => (
          <View key={index} style={{ alignItems: 'center', marginTop: 10 }}>
            <Image source={{ uri: story.image }} style={styles.story}></Image>
            <Text
              style={{ color: 'white', fontSize: 12, alignItems: 'center' }}
            >
              {story.user.length > 11
                ? story.user.slice(0, 10).toLowerCase() + '...'
                : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 10,
    borderWidth: 3,
    borderColor: '#ff8501',
  },
});
export default Stories;
