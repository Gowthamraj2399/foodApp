/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/store/ProductItem';
import SectionCard from '../../components/store/SectionCard';

const CategoryScreen = ({route, navigation}) => {
  var selectedProducts;
  if (route.params.popular) {
    selectedProducts = useSelector(state => state.products.popularFoods);
  } else if (route.params.bestFood) {
    selectedProducts = useSelector(state => state.products.bestFoods);
  } else {
    const allProducts = useSelector(state => state.products.products);
    selectedProducts = allProducts.filter(
      product => product.categoryIds === route.params.categoryId,
    );
  }

  return (
    <ScrollView>
      <SectionCard name={'Available ' + route.params.name}>
        {selectedProducts.map((val, key) => (
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
    </ScrollView>
  );
};

export default CategoryScreen;
