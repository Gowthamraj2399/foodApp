/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import Colors from '../../constants/Colors';

const ProductDetailScreen = ({route, navigation}) => {
  const allProducts = useSelector(state => state.products.products);
  const selectedProduct = allProducts.find(
    product => product.id === route.params.id,
  );

  const addToCart = () => {
    Alert.alert(
      'Sorry!',
      "Sorry this feature is not available right now. We'll add it soon.",
      [
        {
          text: 'Okay',
          style: 'cancel',
        },
      ],
    );
  };
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: selectedProduct.imageUrl}}
              style={styles.image}
            />
          </View>
          <View style={styles.detailSection}>
            <View style={styles.overview}>
              <View>
                <Text style={styles.title}>{selectedProduct.title}</Text>
                <Text style={styles.primaryText}>
                  By{': '}
                  <Text style={styles.subTitle}>
                    {selectedProduct.createdBy}
                  </Text>
                </Text>
              </View>
              <Text style={styles.price}>
                <Text style={styles.priceSymbol}>$</Text>{' '}
                {selectedProduct.price}
              </Text>
            </View>

            <View style={styles.buttonSection}>
              <TouchableOpacity
                style={{...styles.button, ...styles.secondaryCart}}>
                <Text style={styles.secondaryButtonText}> - </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.button, ...styles.primaryCart}}
                onPress={addToCart}>
                <Text style={styles.primaryText}> Add To Bag </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{...styles.button, ...styles.secondaryCart}}>
                <Text style={styles.secondaryButtonText}> + </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.productDetails}>
              <View style={styles.headingContainer}>
                <Text style={styles.heading}>Product Description:</Text>
              </View>

              <Text style={styles.productDescription}>
                {selectedProduct.description}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
  },
  imageContainer: {
    height: 280,
    width: '100%',
  },
  image: {
    flex: 1,
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  detailSection: {
    flex: 1,
  },
  overview: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primary_text,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.grey_text,
  },
  price: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primary_text,
  },
  priceSymbol: {
    fontSize: 18,
    fontWeight: '700',
    color: Colors.primary_text,
  },
  buttonSection: {
    flexDirection: 'row',
    justifyContent: 'center',
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
  secondaryCart: {
    width: 50,
  },
  secondaryButtonText: {
    fontWeight: '400',
    fontSize: 24,
    color: Colors.primary_text,
  },
  productDetails: {
    margin: 10,
  },
  headingContainer: {
    marginBottom: 10,
    borderBottomColor: Colors.borderColor,
    borderBottomWidth: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 10,
    color: Colors.primary_text,
  },
  productDescription: {
    fontSize: 16,
    color: Colors.primary_text,
  },
  primaryText: {
    color: Colors.primary_text,
  },
});

export default ProductDetailScreen;
