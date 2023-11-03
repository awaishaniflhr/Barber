import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../Profile';
import {Black, White, Secondary} from '../../utilities/color';
import 'react-native-gesture-handler';
import Test from '../Drawer/Test';
import CustomeDrawer from '../../components/CustomeDrawer';

const Drawer = createDrawerNavigator();
// const homeIcon = source{require('')}

const DATA = [
  {
    id: '1',
    image: require('../../assets/haircut.png'),
    title: 'Haircut',
  },
  {
    id: '2',
    image: require('../../assets/shave.png'),
    title: 'Shaving',
  },
  {
    id: '3',
    image: require('../../assets/coloring.png'),
    title: 'Coloring',
  },
  {
    id: '4',
    image: require('../../assets/haircut.png'),
    title: 'Haircut',
  },
  {
    id: '5',
    image: require('../../assets/shave.png'),
    title: 'Shaving',
  },
];

export function MyDrawer() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomeDrawer {...props}/>} screenOptions={{headerShown: false}}>
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({color}) =>{
            
          }
        }}
      />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

const Home = ({navigation}) => {
  const Item = ({item}) => (
    <View style={styles.outerCard}>
      <TouchableOpacity style={styles.innerCard}>
        <Image
          resizeMode="contain"
          style={styles.profileImg}
          source={item.image}></Image>
      </TouchableOpacity>
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../assets/more.png')}
            style={{width: 25, height: 25, marginRight: 20}}
            resizeMode={'contain'}
          />
        </TouchableOpacity>
        <Image
          source={require('../../assets/friend.png')}
          style={{width: 50, height: 50}}
          resizeMode={'contain'}
        />
        <View style={styles.profileTitle}>
          <Text style={styles.welcomeTxt}>Welcome</Text>
          <Text style={styles.nameTxt}>Zlatan Lukakus</Text>
        </View>
        <Image
          source={require('../../assets/notification.png')}
          style={{width: 50, height: 50, position: 'absolute', right: 20}}
          resizeMode={'contain'}
        />
      </View>
      <View style={styles.searchField}>
        <Image
          source={require('../../assets/search.png')}
          style={{width: 20, height: 20}}
          resizeMode={'contain'}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Search barber"
          placeholderTextColor="#CACACC"
        />
      </View>
      <View>
        <FlatList
          data={DATA}
          horizontal={true}
          renderItem={({item}) => <Item item={item} />}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.promoBanner}>
        <ImageBackground
          resizeMode="cover"
          style={styles.promoBannerMaskbg}
          source={require('../../assets/promoBannerMask.png')}></ImageBackground>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: White,
    // padding:20,
  },
  header: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  profileTitle: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginStart: 20,
  },
  welcomeTxt: {
    color: '#A3A3A3',
    fontSize: 12,
  },
  nameTxt: {
    color: Black,
    fontSize: 16,
  },
  searchField: {
    flexDirection: 'row',
    width: '90%',
    height: 65,
    marginTop: 40,
    alignSelf: 'center',
    backgroundColor: '#F9F9FB',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputText: {
    fontSize: 16,
    color: '#CACACC',
    fontWeight: '500',
    width: '100%',
    marginStart: 10,
  },
  titleTxt: {
    color: '#000',
    fontSize: 16,
  },
  cardTitle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
  },
  innerCard: {
    backgroundColor: '#F9F9F9',
    width: 104,
    height: 104,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    // marginRight:30,
    marginHorizontal: 15,
  },
  profileImg: {
    width: 40,
    height: 40,
  },
  outerCard: {
    marginVertical: 30,
  },
  promoBanner: {
    width: '80%',
    height: '20%',
    backgroundColor: '#FEA051',
    alignSelf: 'center',
    borderRadius: 20,
  },
  promoBannerMaskbg: {
    width: '100%',
    height: '100%',
  },
});
