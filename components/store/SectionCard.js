/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';
const SectionCard = props => {
  return (
    <View style={styles.categorySection}>
      <View style={styles.categoryHeader}>
        <View style={styles.categoryTextConatiner}>
          <Text style={styles.categoryTitle}>{props.name}</Text>
          {props.seeAll && (
            <TouchableOpacity onPress={props.onPress}>
              <Text style={styles.categoryLink}>See All</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.categoryBody}>{props.children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  categorySection: {
    margin: 20,
    backgroundColor: Colors.white_backgroud,
    padding: 10,
    borderRadius: 10,
  },
  categoryHeader: {
    flex: 1,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.5,
  },
  categoryTextConatiner: {
    flex: 1,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryTitle: {fontSize: 18},
  categoryLink: {
    color: Colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
  categoryBody: {margin: 10},
});

export default SectionCard;
