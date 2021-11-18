/* eslint-disable prettier/prettier */
import Category from '../models/category';
import Product from '../models/product';

export const CATEGORIES = [
  new Category(
    'c1',
    'Burger',
    'https://cdn.iconscout.com/icon/free/png-256/burger-3069113-2550746.png',
  ),
  new Category(
    'c2',
    'Sushi',
    'https://cdn.iconscout.com/icon/premium/png-256-thumb/sushi-31-166419.png',
  ),
  new Category(
    'c3',
    'Pizza',
    'https://cdn.iconscout.com/icon/premium/png-256-thumb/pizza-2777265-2322406.png',
  ),
  new Category(
    'c4',
    'Cake',
    'https://cdn.iconscout.com/icon/premium/png-256-thumb/birthday-cake-4034827-3334952.png',
  ),
  new Category(
    'c5',
    'Ice Cream',
    'https://cdn.iconscout.com/icon/premium/png-256-thumb/ice-cream-3767561-3139700.png',
  ),
];

export const PRODUCTS = [
  new Product(
    'p1',
    'c1',
    'Chicken Burger',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    'https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg',
    5,
    20,
    'Burger King',
    true,
    false,
  ),
  new Product(
    'p2',
    'c2',
    'Nigiri',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    'https://izzycooking.com/wp-content/uploads/2021/03/Nigiri-thumbnail.jpg',
    5,
    40,
    'Sushi King',
    true,
    false,
  ),
  new Product(
    'p3',
    'c3',
    'Chicken Pizza',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    'https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/pizza-recipe.jpg',
    5,
    39,
    'Pizza Hut',
    false,
    true,
  ),
  new Product(
    'p4',
    'c4',
    'chocolate Cake',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DR_xDiShk',
    5,
    5.99,
    'Cake King',
    false,
    true,
  ),
  new Product(
    'p5',
    'c5',
    'Mint Chocolate Chip',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    'https://www.simplyrecipes.com/thmb/1CQX16gdJKCAyv-uCAO_vnZfeR0=/3012x2259/smart/filters:no_upscale()/Simply-Recipes-Mint-ChocolateChip-LEAD-2-47a862e155a94154a40c4bad811d21b6.jpg',
    5,
    9.99,
    'IceCream King',
    true,
    false,
  ),
  new Product(
    'p6',
    'c1',
    'Zinger Burger',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    'https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY=',
    5,
    30.99,
    'KFC',
    true,
    false,
  ),
  new Product(
    'p7',
    'c1',
    'Veg Burger',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F07%2F13%2FUltimate-Veggie-Burgers-FT-Recipe-0821.jpg&q=85',
    5,
    25.99,
    'Burger King',
    false,
    true,
  ),
  new Product(
    'p8',
    'c2',
    'Maki Sushi',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    'https://images.japancentre.com/recipes/pics/18/main/makisushi.jpg?1557308201',
    5,
    50.99,
    'Sushi King',
    true,
    false,
  ),
  new Product(
    'p9',
    'c3',
    'Tomato, Mozzarella and Basil',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2021%2F06%2F15%2Fmozzarella-pizza-margherita-FT-RECIPE0621.jpg&q=85',
    5,
    14.99,
    'Pizza Hut',
    false,
    true,
  ),
  new Product(
    'p10',
    'c4',
    'White Forest',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    'https://www.warmoven.in/media/catalog/product/cache/4e14bcb566d25893ae7201d4dbdc22fd/image/181ec29/white-forest-cake.jpeg',
    5,
    11.99,
    'Cake King',
    false,
    true,
  ),
  new Product(
    'p11',
    'c5',
    'Nuts and Creams',
    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
    'https://www.barry-callebaut.com/sites/default/files/styles/full_screen/public/2020-06/BC%20FM%20APPLICATIONS%20ICE%20CREAM%20STICKS%20CHOCOLATE%20NUTS_0.jpg?itok=6ZzVtDFK',
    5,
    2.99,
    'Icecream King',
    true,
    true,
  ),
];
