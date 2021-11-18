/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Category = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.categoryContainer}>
        <View style={styles.imageContainer}>
          <Image source={{uri: props.imageUrl}} style={styles.image} />
        </View>
        <View style={styles.titleContainer}>
          <Text>{props.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    height: 70,
    width: 70,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: '#dddddd',
    elevation: 2,
  },
  imageContainer: {
    flex: 2,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {flex: 1, width: 50, height: 50, resizeMode: 'cover'},
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

export default Category;
