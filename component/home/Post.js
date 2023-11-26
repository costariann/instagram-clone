import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import BottomTab, { bottomTabIcons } from './BottomTab';

const postFooterIcons = [
  {
    name: 'Like',
    iconComponent: <FontAwesome name="heart-o" size={24} color="white" />,
    likedIconComponent: <FontAwesome name="heart" size={24} color="white" />,
  },
  {
    name: 'Comment',
    iconComponent: <FontAwesome name="comment-o" size={24} color="white" />,
  },
  {
    name: 'Share',
    iconComponent: <FontAwesome name="paper-plane-o" size={24} color="white" />,
  },
  {
    name: 'Save',
    iconComponent: <FontAwesome name="bookmark-o" size={24} color="white" />,
  },
];

const Post = ({ post }) => {
  return (
    <View>
      <Divider width={0.2} orientation="vertical" style={{ color: 'gray' }} />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginVertical: 15 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 8,
        marginBottom: 8,
        alignItems: 'center',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <Image source={{ uri: post.profile_picture }} style={styles.story} />
        <Text style={{ color: 'white', marginLeft: 5, fontWeight: 600 }}>
          {post.user}
        </Text>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={{ color: 'white', fontWeight: 900 }}>...</Text>
        </TouchableOpacity>
      </View>
      <BottomTab icons={bottomTabIcons} />
    </View>
  );
};

const PostImage = ({ post }) => {
  return (
    <View style={{ width: '100%', height: 450 }}>
      <Image
        source={{ uri: post.imageurl }}
        style={{ height: '100%', resizeMode: 'cover' }}
      />
    </View>
  );
};

const PostIcons = () => {
  const leftIcons = postFooterIcons.slice(0, 3);

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={styles.leftFooterIcons}>
        {leftIcons.map((icon, index) => (
          <TouchableOpacity key={index}>{icon.iconComponent}</TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity>{postFooterIcons[3].iconComponent}</TouchableOpacity>
    </View>
  );
};

const Likes = ({ post }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 8 }}>
      <Text style={{ color: 'white', fontWeight: 600 }}>
        {post.likes.toLocaleString('en')} likes
      </Text>
    </View>
  );
};

const Caption = ({ post }) => {
  return (
    <View style={{ marginTop: 9 }}>
      <Text style={{ color: 'white' }}>
        <Text style={{ fontWeight: 600 }}>{post.user}</Text>
        <Text> {post.caption}</Text>
      </Text>
    </View>
  );
};

const CommentSection = ({ post }) => {
  return (
    <View style={{ marginTop: 5 }}>
      {!!post.comments.length && (
        <Text style={{ color: 'gray' }}>
          View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}{' '}
          {post.comments.length > 1 ? 'comments' : 'comment'}
        </Text>
      )}
    </View>
  );
};

const truncateComment = (comment) => {
  const maxWords = 20;
  const words = comment.split(' ');

  if (words.length > maxWords) {
    return `${words.slice(0, maxWords).join(' ')}...`;
  }

  return comment;
};
const Comments = ({ post }) => {
  const visibleComments = post.comments.slice(0, 2);

  return (
    <>
      {visibleComments.map((comment, index) => (
        <View key={index} style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: 600 }}>{comment.user}</Text>
            <Text> {truncateComment(comment.comment)}</Text>
          </Text>
        </View>
      ))}
    </>
  );
};

const PostFooter = () => {
  return <PostIcons />;
};

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: '#ff8501',
  },

  leftFooterIcons: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-between',
  },
});

export default Post;
