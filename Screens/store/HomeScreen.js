/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useSelector} from 'react-redux';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Category from '../../components/store/Category';
import Colors from '../../constants/Colors';
import SectionCard from '../../components/store/SectionCard';
import {Rating} from 'react-native-ratings';
import ProductItem from '../../components/store/ProductItem';

const HomeScreen = ({route, navigation}) => {
  const categories = useSelector(state => state.categories.categories);
  const popularFoods = useSelector(state => state.products.popularFoods);
  const bestFoods = useSelector(state => state.products.bestFoods);
  const firstTwo = popularFoods.slice(0, 2);
  const secondTwo = bestFoods.slice(0, 2);
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      showsVerticalScrollIndicator={false}>
      <View style={styles.screen}>
        <View>
          <Text style={styles.headTitle}>What would you like to eat?</Text>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                navigation.push('Search');
              }}>
              <View style={styles.searchBarContainer}>
                <Text style={styles.searchBar}>What are you looking for?</Text>
                <IonIcon
                  name="search-outline"
                  size={23}
                  style={styles.searchBarIcon}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.horizontalScrollContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {categories.map((val, key) => (
                <Category
                  key={val.id}
                  imageUrl={val.imageUrl}
                  name={val.title}
                  onPress={() => {
                    navigation.push('Category', {
                      name: val.title,
                      categoryId: val.id,
                    });
                  }}
                />
              ))}
            </ScrollView>
          </View>
          <SectionCard
            name={'Popular Foods'}
            seeAll
            onPress={() => {
              navigation.push('Category', {
                name: 'Popular Foods',
                popular: true,
              });
            }}>
            <View style={styles.categoryBodyContainer}>
              {firstTwo.map((val, key) => (
                <TouchableOpacity
                  key={val.id}
                  onPress={() => {
                    navigation.push('Details', {
                      name: val.title,
                      id: val.id,
                    });
                  }}>
                  <View style={styles.categoryBodyItem}>
                    <View style={styles.itemImageContainer}>
                      <Image
                        source={{uri: val.imageUrl}}
                        style={styles.itemImage}
                      />
                    </View>

                    <View style={styles.itemOverview}>
                      <View style={styles.overview}>
                        <Text style={styles.primaryText}>{val.title}</Text>
                      </View>
                      <View style={styles.overview}>
                        <Rating
                          type="star"
                          ratingCount={5}
                          imageSize={10}
                          style={styles.rating}
                        />
                        <Text style={styles.primaryText}>$ {val.price}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </SectionCard>
          <SectionCard
            name={'Best Foods'}
            seeAll
            onPress={() => {
              navigation.push('Category', {
                name: 'Best Foods',
                bestFood: true,
              });
            }}>
            {secondTwo.map((val, key) => (
              <ProductItem
                key={val.id}
                imageUrl={val.imageUrl}
                title={val.title}
                price={val.price}
                onPress={() => {
                  navigation.push('Details', {
                    name: val.title,
                    id: val.id,
                  });
                }}
              />
            ))}
          </SectionCard>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  searchBarContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    height: 45,
    width: 350,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    height: 45,
    marginTop: 25,
    marginLeft: 20,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    color: Colors.grey_text,
  },
  searchBarIcon: {
    margin: 10,
    marginRight: 15,
    color: Colors.primary_text,
  },
  headTitle: {
    fontStyle: 'italic',
    fontSize: 18,
    margin: 10,
    paddingLeft: 15,
    color: Colors.primary_text,
  },
  horizontalScrollContainer: {
    height: 70,
  },

  categoryBodyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  categoryBodyItem: {
    height: 180,
    width: 150,
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  itemImageContainer: {
    flex: 3,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  itemImage: {
    flex: 1,
    height: 70,
    width: 120,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  itemOverview: {
    flex: 1,
    margin: 8,
  },
  overview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    marginTop: 5,
  },
  primaryText: {
    color: Colors.primary_text,
  },
});

export default HomeScreen;
