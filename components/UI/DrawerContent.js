/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image, Text, Alert} from 'react-native';
import {useTheme, Avatar, Title, Caption, Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../constants/Colors';
import {useDispatch} from 'react-redux';
import * as authActions from '../../store/actions/auth';

export function DrawerContent(props, {navigation}) {
  const dispatch = useDispatch();
  const signoutHandler = () => {
    Alert.alert('Signout', 'Do you really want to signout?', [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          dispatch(authActions.signOut());
        },
      },
    ]);
  };
  return (
    <View style={{flex: 1, backgroundColor: Colors.primary}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.profileSection}>
              {/* <Avatar.Image
                source={{
                  uri: 'https://i.pinimg.com/originals/02/ee/2a/02ee2ad23d155e4696a01f1ec0172f18.jpg',
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>User Name</Title>
                <Caption style={styles.caption}>@user</Caption>
              </View> */}
              <View>
                <Image
                  source={require('../../assets/icon.png')}
                  style={styles.logo}
                />
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home');
              }}
              drawerSection
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="cart-outline" color={color} size={size} />
              )}
              label="Cart"
              onPress={() => {
                props.navigation.navigate('CartTab');
              }}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-outline" color={color} size={size} />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate('ProfileTab');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => {
            signoutHandler();
          }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  logo: {
    resizeMode: 'contain',
    height: 100,
    width: 200,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  profileSection: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 15,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
