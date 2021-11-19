/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Colors from '../../constants/Colors';

const CartScreen = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/cart.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.nothingText}>Nothing in cart!</Text>
        <TouchableOpacity
          style={{...styles.button, ...styles.primaryCart}}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={styles.primaryText}>Add Item</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white_backgroud,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    height: 200,
    width: 200,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30,
  },

  primaryCart: {
    width: 150,
    backgroundColor: Colors.primary,
  },
  nothingText: {
    fontSize: 22,
    fontWeight: '700',
    padding: 20,
    color: Colors.primary_text,
  },
  primaryText: {
    color: Colors.primary_text,
  },
});

export default CartScreen;
