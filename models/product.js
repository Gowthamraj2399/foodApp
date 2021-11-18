/* eslint-disable prettier/prettier */
class Product {
  constructor(
    id,
    categoryIds,
    title,
    description,
    imageUrl,
    rating,
    price,
    createdBy,
    isPopular,
    isBestFood,
  ) {
    this.id = id;
    this.categoryIds = categoryIds;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.rating = rating;
    this.price = price;
    this.createdBy = createdBy;
    this.isPopular = isPopular;
    this.isBestFood = isBestFood;
  }
}

export default Product;
