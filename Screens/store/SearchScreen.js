/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import {Searchbar} from 'react-native-paper';
import Colors from '../../constants/Colors';
import {useSelector} from 'react-redux';

const SearchScreen = ({navigation}) => {
  const [input, setInput] = useState('');
  const [searchData, setSearchData] = useState([]);
  const allProducts = useSelector(state => state.products.products);
  const searchProduct = text => {
    if (text) {
      const searchedData = allProducts.filter(product =>
        product.title.toLowerCase().includes(text.toLowerCase()),
      );
      setSearchData(searchedData);
    }
    if (text === '') {
      setSearchData([]);
    }
  };
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search by name..."
        onChangeText={text => {
          setInput(text);
          searchProduct(text);
        }}
        value={input}
      />
      <FlatList
        data={searchData}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Details', {
                name: item.title,
                id: item.id,
              });
            }}>
            <View style={styles.searchItemContainer}>
              <View style={styles.imageContainer}>
                <Image source={{uri: item.imageUrl}} style={styles.image} />
              </View>
              <View style={styles.itemOverview}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>By: {item.createdBy}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white_backgroud,
  },
  searchItemContainer: {
    flex: 1,
    padding: 5,
    borderColor: Colors.primary,
    borderWidth: 1,
    margin: 5,
    flexDirection: 'row',
  },
  imageContainer: {
    height: 50,
    width: 50,
  },
  image: {
    height: '100%',
    width: '100%',
  },
  itemOverview: {
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.primary_text,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: Colors.sub_text,
  },
});

export default SearchScreen;
