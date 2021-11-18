/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Platform,
  ScrollView,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import Colors from '../../constants/Colors';
import * as ImagePicker from 'expo-image-picker';

const ProfileScreen = props => {
  const [image, setImage] = useState(
    'https://allhdwallpapers.com/wp-content/uploads/2015/05/Selena-Gomez-3.jpg',
  );
  const [profileImage, setProfileImage] = useState(
    'https://www.wallpaperuse.com/wallp/8-85136_m.jpg',
  );
  const [name, setName] = useState('Selena Gomez');
  const [email, setEmail] = useState('selena@gmail.com');
  const [password, setPassword] = useState('gomezforever');
  const [userId, setUserId] = useState('U0001');
  const [zipCode, setZipCode] = useState('610 001');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const {status} =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickProfile = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setProfileImage(result.uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <ImageBackground
          style={styles.header}
          source={{
            uri: image,
          }}>
          <TouchableOpacity onPress={pickImage}>
            <IonIcon
              name="camera-outline"
              size={24}
              color={Colors.white_backgroud}
            />
          </TouchableOpacity>
        </ImageBackground>
        <View style={styles.avatarContainer}>
          <TouchableOpacity onPress={pickProfile}>
            <Image
              style={styles.avatar}
              source={{
                uri: profileImage,
              }}
            />
          </TouchableOpacity>
          <View style={styles.usernameContainer}>
            <Text style={styles.name}>{name}</Text>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => {
                  setName(text);
                }}
                value={name}
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => {
                  setEmail(text);
                }}
                value={email}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => {
                  setPassword(text);
                }}
                value={password}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.label}>User ID</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => {
                  setUserId(text);
                }}
                value={userId}
              />
            </View>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Zip Code</Text>
              <TextInput
                style={styles.input}
                onChangeText={text => {
                  setZipCode(text);
                }}
                value={zipCode}
                keyboardType="number-pad"
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white_backgroud,
  },
  header: {
    height: 200,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    opacity: 0.7,
  },
  camera: {margin: 5},
  avatarContainer: {
    alignSelf: 'center',
    position: 'absolute',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    marginTop: 130,
  },
  usernameContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  body: {
    marginTop: 100,
  },
  bodyContent: {
    margin: 20,
  },
  formGroup: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary_text,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
  },
});

export default ProfileScreen;
