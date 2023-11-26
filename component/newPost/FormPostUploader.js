import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button } from 'react-native';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Divider } from 'react-native-elements';
import validUrl from 'valid-url';

const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('Image is required'),
  caption: Yup.string().max(2000, 'Caption has reached it maximum character'),
});

const placeHolderImg =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBSZrcznhm6O4FU8GKatGBcF--61HOLpsoZmla_3uj5G3vYyR1w_BGfwo0oAiltsY8LGs&usqp=CAU';

const FormPostUploader = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState(placeHolderImg);

  return (
    <Formik
      initialValues={{ caption: '', imageUrl: '' }}
      onSubmit={(values) => {
        console.log(values),
          console.log('Your post was submitted successfully');
        navigation.goBack();
      }}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
        touched,
      }) => (
        <>
          <View style={{ margin: 20, flexDirection: 'row' }}>
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? thumbnailUrl
                  : placeHolderImg,
              }}
              style={{ width: 100, height: 100 }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{ color: 'white', fontSize: 20 }}
                placeholder="Write a caption"
                placeholderTextColor="gray"
                multiline={true}
                onChangeText={handleChange('caption')}
                onBlur={handleBlur('caption')}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" color="gray" />
          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={{ color: 'white', fontSize: 18 }}
            placeholder="Enter image url"
            placeholderTextColor="gray"
            multiline={true}
            onChangeText={handleChange('imageUrl')}
            onBlur={handleBlur('imageUrl')}
            value={values.imageUrl}
          />
          {errors.imageUrl && (
            <Text style={{ color: 'red' }}>{errors.imageUrl}</Text>
          )}

          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormPostUploader;
