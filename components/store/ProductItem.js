/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';
import Colors from '../../constants/Colors';

const ProductItem = props => {
  return (
    <View style={styles.categoryBodyContainerLarge}>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.categoryBodyItemLarge}>
          <View style={styles.imageContainer}>
            <Image source={{uri: props.imageUrl}} style={styles.image} />
          </View>

          <View style={styles.itemOverviewLarge}>
            <View style={styles.overview}>
              <Text>{props.title}</Text>
            </View>
            <View style={styles.overview}>
              <Rating
                type="star"
                ratingCount={5}
                imageSize={10}
                style={styles.rating}
              />
              <Text>$ {props.price}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryBodyItemLarge: {
    height: 200,
  },
  categoryBodyContainerLarge: {
    flex: 1,
  },
  itemOverviewLarge: {
    borderColor: Colors.primary,
    borderWidth: 1,
    padding: 10,
    borderBottomEndRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    marginTop: 5,
  },
});

export default ProductItem;
