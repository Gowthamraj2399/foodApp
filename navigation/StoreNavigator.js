/* eslint-disable prettier/prettier */
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerToggleButton,
} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IonIcon from 'react-native-vector-icons/Ionicons';

import LoginScreen from '../Screens/auth/LoginScreen';
import HomeScreen from '../Screens/store/HomeScreen';
import ProductDetailScreen from '../Screens/store/ProductDetailScreen';
import CartScreen from '../Screens/store/CartScreen';
import ProfileScreen from '../Screens/user/ProfileScreen';
import Colors from '../constants/Colors';
import {DrawerContent} from '../components/UI/DrawerContent';
import CategoryScreen from '../Screens/store/CategoryScreen';
import SearchScreen from '../Screens/store/SearchScreen';
import {useSelector} from 'react-redux';

const AuthStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const CartStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary},
        headerTintColor: Colors.primary_text,
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <DrawerToggleButton tintColor={Colors.primary_text} />
          ),
        })}
      />
      <HomeStack.Screen
        name="Category"
        component={CategoryScreen}
        options={({route}) => ({title: route.params.name})}
      />
      <HomeStack.Screen
        name="Details"
        component={ProductDetailScreen}
        options={({route}) => ({title: route.params.name})}
      />
      <HomeStack.Screen name="Search" component={SearchScreen} />
    </HomeStack.Navigator>
  );
};

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary},
        headerTintColor: Colors.primary_text,
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <DrawerToggleButton tintColor={Colors.primary_text} />
          ),
        })}
      />
    </ProfileStack.Navigator>
  );
};

const CartStackNavigator = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary},
        headerTintColor: Colors.primary_text,
      }}>
      <CartStack.Screen
        name="Cart"
        component={CartScreen}
        options={({navigation}) => ({
          headerLeft: () => (
            <DrawerToggleButton tintColor={Colors.primary_text} />
          ),
        })}
      />
    </CartStack.Navigator>
  );
};

const TabsNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'CartTab') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'ProfileTab') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <IonIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        headerShown: false,
      })}>
      <Tabs.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          title: 'Home',
          drawerIcon: <IonIcon name="md-home" size={23} />,
        }}
      />
      <Tabs.Screen
        name="CartTab"
        component={CartStackNavigator}
        options={{title: 'Cart'}}
      />
      <Tabs.Screen
        name="ProfileTab"
        component={ProfileStackNavigator}
        options={{title: 'Profile'}}
      />
    </Tabs.Navigator>
  );
};

const StoreNavigator = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn && (
        <Drawer.Navigator
          drawerContent={props => <DrawerContent {...props} />}
          screenOptions={({route}) => ({
            headerShown: false,
          })}>
          <Drawer.Screen
            name="HomeDrawer"
            component={TabsNavigator}
            options={{title: 'Home'}}
          />
        </Drawer.Navigator>
      )}
      {!isLoggedIn && (
        <AuthStack.Navigator>
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        </AuthStack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default StoreNavigator;
