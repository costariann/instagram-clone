import { Users } from './users';

export const Posts = [
  {
    imageurl:
      'https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_1280.jpg',
    user: Users[0].user,
    likes: 4600,
    caption: 'Life is short, and so am I. Let’s make it count',
    profile_picture: Users[0].image,
    comments: [
      {
        user: 'diana_maps',
        comment: 'wow!, this caption got me thinking',
      },
      { user: 'tedd_henrie', comment: 'this is so true!' },
      { user: 'dr_adubeaopare', comment: 'You look good sis!' },
      ,
    ],
  },
  {
    imageurl:
      'https://cdn.pixabay.com/photo/2020/09/20/16/27/model-5587623_640.jpg',
    user: Users[1].user,
    likes: 500,
    caption: 'Slaying the game, one day at a time. 💁‍♀️',
    profile_picture: Users[1].image,
    comments: [
      {
        user: 'tedd_henrie',
        comment: 'Pure African beauty with good vibes',
      },
      { user: 'iamvondee', comment: 'our wife, you look good' },
      { user: 'dr_adubeaopare', comment: 'my baby' },
      { user: 'coby_brown', comment: 'Can we get to know each other?' },
    ],
  },
  {
    imageurl:
      'https://cdn.pixabay.com/photo/2019/11/03/23/27/black-businessman-4599846_640.jpg',
    user: Users[2].user,
    likes: 2980,
    caption: "We're here to make a difference, not just a profit",
    profile_picture: Users[2].image,
    comments: [
      {
        user: 'diana_maps',
        comment: 'Smartest picture I have seen today. You look amazing',
      },
      { user: 'iamvondee', comment: 'Go get it!!' },
      { user: 'dr_adubeaopare', comment: 'handsome as always' },
      { user: 'coby_brown', comment: 'Can we get to know each other?' },
    ],
  },
  {
    imageurl:
      'https://cdn.pixabay.com/photo/2017/02/16/23/10/smile-2072908_1280.jpg',
    user: Users[3].user,
    likes: 860,
    caption: 'Brown skin girl like pearls',
    profile_picture: Users[3].image,
    comments: [
      {
        user: 'tedd_henrie',
        comment: 'Pure African beauty with good vibes',
      },
      { user: 'iamvondee', comment: 'shine bright like a diamond' },
      { user: 'diana_maps', comment: 'Beautiful like diamonds in the sky' },
      { user: 'coby_brown', comment: 'Can we get to know each other?' },
    ],
  },
  {
    imageurl:
      'https://cdn.pixabay.com/photo/2015/10/18/16/40/taxation-994707_640.jpg',
    user: Users[5].user,
    likes: 50,
    caption: "On gaurd, don't try me today",
    profile_picture: Users[5].image,
    comments: [],
  },
];
